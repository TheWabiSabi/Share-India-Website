import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import ClaimsClient from './_components/claims-client';

export const metadata = {
  title: 'Insurance Claims Stories',
  description:
    'Real insurance claim journeys that highlight how protection works when it matters most.',
};

/**
 * Ghost tag convention used by this section:
 *   "claims-story" → all claims story posts
 *
 * Adjust the slug if your Ghost taxonomy differs.
 */
const CLAIMS_TAG = 'claims-story';

export default async function ClaimsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);

  const { featured, latest, pagination } = await getFeaturedAndLatestByTag(
    CLAIMS_TAG,
    6, // up to 6 featured
    page,
    8, // 8 regular per page
  );

  return (
    <ClaimsClient
      featuredPosts={featured.map(toCard)}
      regularPosts={latest.map(toCard)}
      pagination={pagination}
      currentPage={page}
    />
  );
}
