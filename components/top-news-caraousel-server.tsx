import { getPostsByTags, toCard } from '@/lib/ghost';
import TopNewsCarousel from '@/components/top-news-carousel';

interface TopNewsCarouselServerProps {
  limit?: number;
}

export default async function TopNewsCarouselServer({ limit = 10 }: TopNewsCarouselServerProps) {
  const posts = await getPostsByTags(['news'], limit);
  const cards = posts.map(toCard);
  return <TopNewsCarousel posts={cards} />;
}
