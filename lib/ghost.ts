import GhostContentAPI, { type PostOrPage, type Pagination } from '@tryghost/content-api';

/** Posts shown per page on the /blogs list — fixed by product requirement. */
export const POSTS_PER_PAGE = 7;

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
    category: post.primary_tag?.name ?? 'Insights',
    image: post.feature_image ?? '',
    featured: post.featured ?? false,
    // Ghost marks internal tags with a leading '#'; hide those from the public.
    tags: (post.tags ?? [])
      .filter((t) => t.slug && t.name && !t.name.startsWith('#'))
      .map((t) => ({ name: t.name as string, slug: t.slug })),
  };
}

/** A card plus rendered HTML, for inline reading. */
export function toArticle(post: GhostPost): BlogArticle {
  return { ...toCard(post), html: post.html ?? '' };
}

/** Featured posts for the "Recommended" strip (the old site's recommendation signal). */
export async function getFeaturedPosts(limit = 6): Promise<GhostPost[]> {
  try {
    return await getClient().posts.browse({
      filter: 'featured:true',
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
): Promise<{ posts: GhostPost[]; pagination: Pagination }> {
  const result = await getClient().posts.browse({
    filter: 'featured:false',
    limit: POSTS_PER_PAGE,
    page,
    include: ['tags', 'authors'],
    order: 'published_at DESC',
  });

  return { posts: result, pagination: result.meta.pagination };
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

/** Posts filtered by a specific tag slug — used by industry/product pages. */
export async function getPostsByTag(tagSlug: string, limit = 6): Promise<GhostPost[]> {
  try {
    const result = await getClient().posts.browse({
      filter: `tags:${tagSlug}`,
      limit,
      include: ['tags', 'authors'],
      order: 'published_at DESC',
    });
    return result;
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
