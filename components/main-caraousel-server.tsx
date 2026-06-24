import { getFeaturedPosts, toCard } from '@/lib/ghost';
import MainCarousel from '@/components/main-caraousel';

interface MainCarouselServerProps {
  layout: 1 | 2 | 3;
  color: 'blue' | 'white';
  limit?: number;
}

export default async function MainCarouselServer({
  layout,
  color,
  limit = 10,
}: MainCarouselServerProps) {
  const posts = await getFeaturedPosts(limit);
  const cards = posts.map(toCard);
  return <MainCarousel posts={cards} layout={layout} color={color} />;
}
