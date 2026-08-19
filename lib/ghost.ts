import GhostContentAPI, { type PostOrPage, type Pagination } from '@tryghost/content-api';
import { cleanTagName } from '@/consts/tags';
import { CURATED_BLOG_POSTS } from '@/lib/curated-blog-posts';

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

/**
 * Smooth out the most noticeable machine-written habits in legacy CMS copy.
 * This intentionally stays conservative so policy language and HTML structure
 * are not rewritten into a different meaning.
 */
export function polishEditorialCopy(value: string): string {
  return value
    .replace(/&mdash;|&#8212;/gi, ', ')
    .replace(/&ndash;|&#8211;/gi, '-')
    .replace(/\s*—\s*/g, ', ')
    .replace(/(\d)–(\d)/g, '$1-$2')
    .replace(/\s+–\s+/g, ', ')
    .replace(/\bIn today(?:'|’)s rapidly evolving\b/gi, 'In')
    .replace(/\bIn the rapidly evolving landscape of\b/gi, 'In')
    .replace(/\bnavigate the complexities of\b/gi, 'work through')
    .replace(/\bdelve into\b/gi, 'look at')
    .replace(/\bThe Final Word\b/g, 'What to remember')
    .replace(/\bIn conclusion,?\s*/gi, '')
    .replace(/,\s*,/g, ',')
    .trim();
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
    title: polishEditorialCopy(post.title ?? 'Untitled'),
    excerpt: polishEditorialCopy(post.excerpt ?? ''),
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
  return { ...toCard(post), html: polishEditorialCopy(post.html ?? '') };
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
  // The curated additions belong to the dedicated /blogs feed. Keeping them
  // out of the unscoped feed preserves the existing image-led /insights grid.
  const localPosts =
    section === 'blog'
      ? CURATED_BLOG_POSTS.filter((post) => post.tags?.some((tag) => tag.slug === section))
      : [];
  const localPages = Math.ceil(localPosts.length / POSTS_PER_PAGE);
  const remotePage = Math.max(1, page - localPages);

  try {
    const result = await getClient().posts.browse({
      filter: section ? `featured:false+tags:${section}` : 'featured:false',
      limit: POSTS_PER_PAGE,
      page: remotePage,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });

    const total = localPosts.length + result.meta.pagination.total;
    const pages = Math.max(1, localPages + result.meta.pagination.pages);
    const posts =
      page <= localPages
        ? localPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
        : result;

    return {
      posts,
      pagination: {
        page,
        pages,
        total,
        limit: POSTS_PER_PAGE,
        prev: page > 1 ? page - 1 : null,
        next: page < pages ? page + 1 : null,
      },
    };
  } catch {
    const pages = Math.max(1, localPages);
    return {
      posts:
        page <= localPages
          ? localPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
          : [],
      pagination: {
        page,
        pages,
        total: localPosts.length,
        limit: POSTS_PER_PAGE,
        prev: page > 1 && page <= pages ? page - 1 : null,
        next: page < pages ? page + 1 : null,
      },
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
  const curated = CURATED_BLOG_POSTS.find((post) => post.slug === slug);
  if (curated) return curated;

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

  const localRelated = CURATED_BLOG_POSTS.filter(
    (candidate) =>
      candidate.slug !== post.slug && candidate.tags?.some((tag) => tag.slug === primaryTagSlug),
  ).slice(0, 2);

  if (localRelated.length === 2) return localRelated;

  try {
    const result = await getClient().posts.browse({
      filter: post.id.startsWith('curated-blog-')
        ? `tags:${primaryTagSlug}`
        : `tags:${primaryTagSlug}+id:-${post.id}`,
      limit: 2 - localRelated.length,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return [...localRelated, ...result].slice(0, 2);
  } catch {
    return localRelated;
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
