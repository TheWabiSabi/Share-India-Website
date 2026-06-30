import { NextResponse } from 'next/server';
import { getPostsBySection, toCard } from '@/lib/ghost';
import { assertValidSection, TagValidationError } from '@/consts/tags';

/**
 * Posts for a page section.
 *   /api/ghost/tag/<primary>?section=blog&section=news&page=1&limit=5
 * `slug` is the primary tag (which page); `section` (repeatable) are the
 * secondary tags (which in-page section). A post must carry the primary AND
 * at least one of the sections. Returns 400 if a section doesn't fit the primary.
 */
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { searchParams } = new URL(req.url);
  const sections = searchParams.getAll('section').filter(Boolean);
  const limitParam = Number(searchParams.get('limit'));
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? limitParam : 5;
  const pageParam = Number(searchParams.get('page'));
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

  // Validate the primary/secondary combination before querying Ghost.
  try {
    for (const section of sections) assertValidSection(slug, section);
  } catch (err) {
    if (err instanceof TagValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    throw err;
  }

  try {
    const posts = await getPostsBySection(slug, sections, limit, page);
    return NextResponse.json(posts.map(toCard));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
