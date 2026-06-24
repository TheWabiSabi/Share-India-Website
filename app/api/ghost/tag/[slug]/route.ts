import { NextResponse } from 'next/server';
import { getPostsByTag, toCard } from '@/lib/ghost';

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const posts = await getPostsByTag(slug, 6);
    return NextResponse.json(posts.map(toCard));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
