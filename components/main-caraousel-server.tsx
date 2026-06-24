import { getFeaturedPosts, getPostsByTags, toCard } from '@/lib/ghost';
import MainCarousel from '@/components/main-caraousel';

interface MainCarouselServerProps {
  layout: 1 | 2 | 3;
  color: 'blue' | 'white';
  /**
   * When provided, fetches posts matching ALL of these tag slugs (AND).
   * e.g. tagSlugs={['claims-story', 'textile-industry']}
   * When omitted, falls back to featured posts.
   */
  tagSlugs?: string[];
  limit?: number;
}

export default async function MainCarouselServer({
  layout,
  color,
  tagSlugs,
  limit = 10,
}: MainCarouselServerProps) {
  const raw = tagSlugs?.length
    ? await getPostsByTags(tagSlugs, limit)
    : await getFeaturedPosts(limit);

  const cards = raw.map(toCard);
  return <MainCarousel posts={cards} layout={layout} color={color} />;
}
