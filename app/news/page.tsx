import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import NewsClient from './_components/news-client';

export const metadata = {
  title: 'Insurance Industry News',
  description:
    'Stay ahead with breaking news, market updates, and regulatory changes shaping the insurance landscape in India and globally.',
};

/**
 * Ghost tag convention used by this section:
 *   - "news"          → all news posts
 *   - "breaking-news" → posts that appear in the breaking news strip
 *
 * Adjust the slugs if your Ghost taxonomy differs.
 */
const NEWS_TAG = 'news';
const BREAKING_TAG = 'breaking-news';

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);

  const [newsData, breakingPosts] = await Promise.all([
    getFeaturedAndLatestByTag(NEWS_TAG, 6, page, 6),
    // Breaking news is a subset — fetch by its own tag
    getFeaturedAndLatestByTag(BREAKING_TAG, 10, 1, 20).then(({ featured, latest }) =>
      [...featured, ...latest].map(toCard),
    ),
  ]);

  const featuredNews = newsData.featured.map(toCard);
  const regularNews = newsData.latest.map(toCard);
  const { pagination } = newsData;

  return (
    <NewsClient
      featuredNews={featuredNews}
      regularNews={regularNews}
      breakingNews={breakingPosts}
      pagination={pagination}
      currentPage={page}
    />
  );
}
