import { NextResponse } from 'next/server';
import { getPosts, toRow } from '@/lib/ghost';
import { assertValidSection, TagValidationError } from '@/consts/tags';

/**
 * Flexible post feed for carousels and the news/insights/claim-stories pages.
 *   /api/ghost/posts?featured=true
 *   /api/ghost/posts?primary=infrastructure-industry&section=claims-story
 *   /api/ghost/posts?section=news            (all news, any page)
 *   /api/ghost/posts                          (latest, all)
 * Returns the flat BlogRow shape (legacy-compatible fields).
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const primary = searchParams.get('primary') ?? undefined;
  const sections = searchParams.getAll('section').filter(Boolean);
  const featured = searchParams.get('featured') === 'true';
  const limitParam = Number(searchParams.get('limit'));
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? limitParam : undefined;

  // When scoped to a page (primary + section), enforce that the section fits it.
  if (primary) {
    try {
      for (const section of sections) assertValidSection(primary, section);
    } catch (err) {
      if (err instanceof TagValidationError) {
        return NextResponse.json({ error: err.message }, { status: 400 });
      }
      throw err;
    }
  }

  try {
    const posts = await getPosts({ primary, sections, featured, limit });
    return NextResponse.json(posts.map(toRow));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
