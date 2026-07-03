import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import NewsClient from './_components/news-client';

export const metadata = {
  title: 'Insurance Industry News',
  description:
    'Stay ahead with breaking news, market updates, and regulatory changes shaping the insurance landscape in India and globally.',
};

/**
 * Ghost tag convention used by this section:
 *   - "news" → all news posts
 *
 * "Breaking" is not a separate tag: a news post is "breaking" when it's marked
 * "Feature this post" in Ghost (the native `featured` flag). The `breaking-news`
 * tag was removed in the 3-tag consolidation — see notes.md §13. So the featured
 * split from `getFeaturedAndLatestByTag('news', …)` feeds the Breaking section
 * directly; no second query and no deleted tag.
 */
const NEWS_TAG = 'news';

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);

  const newsData = await getFeaturedAndLatestByTag(NEWS_TAG, 6, page, 6);

  const breakingNews = newsData.featured.map(toCard); // featured news = "breaking"
  const regularNews = newsData.latest.map(toCard);
  const { pagination } = newsData;

  return (
    <NewsClient
      regularNews={regularNews}
      breakingNews={breakingNews}
      pagination={pagination}
      currentPage={page}
    />
  );
}
