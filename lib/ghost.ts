import GhostContentAPI, { type PostOrPage, type Pagination } from '@tryghost/content-api';
import { cleanTagName } from '@/consts/tags';

/** Posts shown per page on the /blogs list. */
export const POSTS_PER_PAGE = 5;

/** A Ghost post with tags + authors expanded (we always request them). */
export type GhostPost = PostOrPage;

/** Flattened shape consumed by the blog list/cards. */
export interface BlogCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  /** Pre-formatted, locale/timezone-independent date (avoids hydration mismatch). */
  dateLabel: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: { name: string; slug: string }[];
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Deterministic "3 Jun 2026" — same output on server and client. */
function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** A card plus the rendered post body — used by the inline accordion. */
export interface BlogArticle extends BlogCard {
  html: string;
}

let client: ReturnType<typeof GhostContentAPI> | null = null;

function getClient() {
  if (client) return client;

  const url = process.env.GHOST_API_URL;
  const key = process.env.GHOST_CONTENT_API_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing GHOST_API_URL or GHOST_CONTENT_API_KEY. Copy .env.example to .env.local and fill in the Content API key from Ghost Admin → Settings → Integrations.',
    );
  }

  client = new GhostContentAPI({ url, key, version: 'v5.0' });
  return client;
}

/** Map a Ghost post to the flat shape the cards/header expect. */
export function toCard(post: GhostPost): BlogCard {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title ?? 'Untitled',
    excerpt: post.excerpt ?? '',
    author: post.primary_author?.name ?? 'Share India',
    date: post.published_at ?? post.created_at ?? '',
    dateLabel: formatDate(post.published_at ?? post.created_at ?? ''),
    readTime: post.reading_time ? `${post.reading_time} min read` : '',
    category: cleanTagName(post.primary_tag?.name ?? 'Insights'),
    image: post.feature_image ?? '',
    featured: post.featured ?? false,
    // Ghost marks internal tags with a leading '#'; hide those from the public.
    tags: (post.tags ?? [])
      .filter((t) => t.slug && t.name && !t.name.startsWith('#'))
      .map((t) => ({ name: cleanTagName(t.name as string), slug: t.slug })),
  };
}

/** A card plus rendered HTML, for inline reading. */
export function toArticle(post: GhostPost): BlogArticle {
  return { ...toCard(post), html: post.html ?? '' };
}

/** Secondary "section" tags, mapped to the legacy `type` strings the UI uses. */
const TYPE_BY_TAG: Record<string, string> = {
  news: 'news',
  blog: 'blog',
  'claims-story': 'claims_story',
};

/** Retail primary tags — used to classify a post's `industry` (else "corporate"). */
const RETAIL_PRIMARIES = new Set([
  'retail-cyber',
  'retail-health',
  'home-insurance',
  'retail-life',
  'motor-insurance',
  'term-insurance',
  'retail-travel',
  'retail',
]);

/**
 * Flat row matching the legacy `list_of_blogs.json` shape, sourced from Ghost.
 * Lets the news / insights / claim-stories pages keep their filtering logic.
 */
export interface BlogRow {
  slug: string;
  title: string;
  author: string;
  date: string;
  dateLabel: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  featured: boolean;
  /** Legacy-style type: 'news' | 'blog' | 'claims_story' | '' (from a section tag). */
  type: string;
  /** 'retail' | 'corporate' (derived from the primary tag). */
  industry: string;
  /** Primary tag slug (which page). */
  topic: string;
  /** Whether the post is "breaking" — driven by Ghost's native featured flag. */
  breaking: boolean;
}

export function toRow(post: GhostPost): BlogRow {
  const tagSlugs = (post.tags ?? []).map((t) => t.slug);
  const typeTag = tagSlugs.find((s) => s in TYPE_BY_TAG);
  const topic = tagSlugs.find((s) => RETAIL_PRIMARIES.has(s)) ?? post.primary_tag?.slug ?? '';
  return {
    slug: post.slug,
    title: post.title ?? 'Untitled',
    author: post.primary_author?.name ?? 'Share India',
    date: post.published_at ?? post.created_at ?? '',
    dateLabel: formatDate(post.published_at ?? post.created_at ?? ''),
    readTime: post.reading_time ? `${post.reading_time} min read` : '',
    category: cleanTagName(post.primary_tag?.name ?? 'Insights'),
    image: post.feature_image ?? '',
    excerpt: post.excerpt ?? '',
    featured: post.featured ?? false,
    type: typeTag ? TYPE_BY_TAG[typeTag] : '',
    industry: RETAIL_PRIMARIES.has(topic) ? 'retail' : 'corporate',
    topic,
    // No dedicated breaking tag (only 3 secondary tags); featured news = breaking.
    breaking: post.featured ?? false,
  };
}

/**
 * Flexible post browse used by carousels and the news/insights/claim-stories
 * pages. Combines an optional primary tag, an OR-set of section tags, and an
 * optional `featured` flag. Defaults to newest-first.
 */
export async function getPosts(opts: {
  primary?: string;
  sections?: string[];
  featured?: boolean;
  limit?: number;
} = {}): Promise<GhostPost[]> {
  const { primary, sections = [], featured, limit = 'all' } = opts;

  const clauses: string[] = [];
  if (primary) clauses.push(`tags:${primary}`);
  const secondary = sections.filter(Boolean);
  if (secondary.length) clauses.push(`tags:[${secondary.join(',')}]`);
  if (featured) clauses.push('featured:true');

  try {
    return await getClient().posts.browse({
      ...(clauses.length ? { filter: clauses.join('+') } : {}),
      limit,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
  } catch {
    return [];
  }
}

/**
 * Featured posts for the "Recommended" strip. Pass `section` (a secondary tag,
 * e.g. 'blog') to scope a section-only page to that tag.
 */
export async function getFeaturedPosts(limit = 6, section?: string): Promise<GhostPost[]> {
  try {
    return await getClient().posts.browse({
      filter: section ? `featured:true+tags:${section}` : 'featured:true',
      limit,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
  } catch {
    return [];
  }
}

/**
 * "Latest" list — newest non-featured posts, paginated. Featured posts live in
 * the Recommended strip, so they're excluded here to avoid duplication.
 */
export async function getLatestPosts(
  page = 1,
  section?: string,
): Promise<{ posts: GhostPost[]; pagination: Pagination }> {
  try {
    const result = await getClient().posts.browse({
      filter: section ? `featured:false+tags:${section}` : 'featured:false',
      limit: POSTS_PER_PAGE,
      page,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return { posts: result, pagination: result.meta.pagination };
  } catch {
    return {
      posts: [],
      pagination: { page: 1, pages: 1, total: 0, limit: POSTS_PER_PAGE, prev: null, next: null },
    };
  }
}

// ---------------------------------------------------------------------------
// Tag-scoped helpers
// These use Ghost's internal tag convention: content is categorised by a
// tag whose slug matches the content type, e.g. "news", "claims-story",
// "insights". Adjust the tag slugs below if your Ghost setup differs.
// ---------------------------------------------------------------------------

/**
 * Featured posts scoped to a tag — used by section hero carousels.
 * e.g. getFeaturedByTag('news') for the news hero.
 */
export async function getFeaturedByTag(tagSlug: string, limit = 10): Promise<GhostPost[]> {
  try {
    return await getClient().posts.browse({
      filter: `featured:true+tags:${tagSlug}`,
      limit,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
  } catch {
    return [];
  }
}

/**
 * Paginated posts scoped to a tag — used by section listing pages.
 * e.g. getPostsByTag('news', 1) for the news listing page.
 *
 * NOTE: getPostsByTag already exists below for a simple non-paginated variant.
 * This replaces the old JSON `.filter(p => p.type === 'news')` pattern.
 */
export async function getPaginatedPostsByTag(
  tagSlug: string,
  page = 1,
  limit = POSTS_PER_PAGE,
): Promise<{ posts: GhostPost[]; pagination: Pagination }> {
  try {
    const result = await getClient().posts.browse({
      filter: `tags:${tagSlug}`,
      limit,
      page,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return { posts: result, pagination: result.meta.pagination };
  } catch {
    return {
      posts: [],
      pagination: { page: 1, pages: 1, total: 0, limit, prev: null, next: null },
    };
  }
}

/**
 * Featured + non-featured split for a tag — used by listing pages that
 * show a featured hero section and a regular grid below it.
 */
export async function getFeaturedAndLatestByTag(
  tagSlug: string,
  featuredLimit = 6,
  latestPage = 1,
  latestLimit = POSTS_PER_PAGE,
): Promise<{
  featured: GhostPost[];
  latest: GhostPost[];
  pagination: Pagination;
}> {
  try {
    const [featuredResult, latestResult] = await Promise.all([
      getClient().posts.browse({
        filter: `featured:true+tags:${tagSlug}`,
        limit: featuredLimit,
        include: ['tags', 'authors'],
        order: 'published_at DESC',
      }),
      getClient().posts.browse({
        filter: `featured:false+tags:${tagSlug}`,
        limit: latestLimit,
        page: latestPage,
        include: ['tags', 'authors'],
        order: 'published_at DESC',
      }),
    ]);
    return {
      featured: featuredResult,
      latest: latestResult,
      pagination: latestResult.meta.pagination,
    };
  } catch {
    return {
      featured: [],
      latest: [],
      pagination: { page: 1, pages: 1, total: 0, limit: latestLimit, prev: null, next: null },
    };
  }
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugifyHeading(text: string): string {
  const base = text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
  return base || 'section';
}

/**
 * Build a table of contents from h2/h3 headings and ensure each heading has a
 * stable, unique id to anchor to. Returns the (possibly id-augmented) HTML.
 */
export function extractToc(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();

  const out = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (full, lvl: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      if (!text) return full;

      const existing = attrs.match(/\sid=["']([^"']+)["']/i);
      const baseId = existing ? existing[1] : slugifyHeading(text);
      let id = baseId;
      let n = 2;
      while (used.has(id)) id = `${baseId}-${n++}`;
      used.add(id);

      toc.push({ id, text, level: Number(lvl) as 2 | 3 });
      const attrsNoId = attrs.replace(/\sid=["'][^"']+["']/i, '');
      return `<h${lvl}${attrsNoId} id="${id}">${inner}</h${lvl}>`;
    },
  );

  return { html: out, toc };
}

/** Fetch one post by slug; returns null when it doesn't exist. */
export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    return await getClient().posts.read({ slug }, { include: ['tags', 'authors'] });
  } catch {
    // Ghost SDK throws (404 / NotFoundError) when the slug isn't found.
    return null;
  }
}

/**
 * Posts for one page section: a **primary** tag (which website page) AND any of
 * the section's **secondary** tags (which in-page section). Both must match.
 *
 * Ghost NQL: `tags:<primary>+tags:[a,b]` — `+` is AND, `[a,b]` is an OR-set.
 * Passing no secondary tags falls back to the primary tag alone.
 */
export async function getPostsBySection(
  primary: string,
  sections: string[] = [],
  limit = 5,
  page = 1,
): Promise<GhostPost[]> {
  if (!primary) return [];

  const secondary = sections.filter(Boolean);
  const filter = secondary.length
    ? `tags:${primary}+tags:[${secondary.join(',')}]`
    : `tags:${primary}`;

  try {
    return await getClient().posts.browse({
      filter,
      limit,
      page,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
  } catch {
    return [];
  }
}

/** Up to 2 related posts sharing the current post's primary tag. */
export async function getRelatedPosts(post: GhostPost): Promise<GhostPost[]> {
  const primaryTagSlug = post.primary_tag?.slug;
  if (!primaryTagSlug) return [];

  try {
    const result = await getClient().posts.browse({
      filter: `tags:${primaryTagSlug}+id:-${post.id}`,
      limit: 2,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return result;
  } catch {
    return [];
  }
}

/**
 * Posts matching ALL of the provided tag slugs (AND logic).
 * e.g. getPostsByTags(['claims-story', 'textile-industry']) returns posts
 * tagged with both — used by industry claim-story carousels.
 */
export async function getPostsByTags(tagSlugs: string[], limit = 10): Promise<GhostPost[]> {
  if (tagSlugs.length === 0) return [];
  try {
    // Ghost filter syntax: tags:a+tags:b means the post must have both tags
    const filter = tagSlugs.map((s) => `tags:${s}`).join('+');
    const result = await getClient().posts.browse({
      filter,
      limit,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return result;
  } catch {
    return [];
  }
}
