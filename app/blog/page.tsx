import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import BlogClient from './_components/blog-client';

export const metadata = {
  title: 'Insurance Insights & Stories',
  description: 'The latest trends, claim stories, and expert insights from the insurance industry.',
};

/**
 * Dedicated "blogs" page — follows the secondary `blog` tag only (any primary).
 * Mirrors the news / claim-stories listing pattern: a server page that splits
 * featured vs. latest by tag and hands off to a client component for the
 * search / filter / load-more UI.
 */
const BLOG_TAG = 'blog';

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);

  const { featured, latest, pagination } = await getFeaturedAndLatestByTag(
    BLOG_TAG,
    6, // up to 6 featured ("Recommended")
    page,
    8, // 8 regular per page
  );

  return (
    <BlogClient
      featuredPosts={featured.map(toCard)}
      regularPosts={latest.map(toCard)}
      pagination={pagination}
      currentPage={page}
    />
  );
}
