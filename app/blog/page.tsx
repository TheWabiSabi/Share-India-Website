import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaTag, FaUser } from 'react-icons/fa';
import { getFeaturedPosts, getLatestPosts, toArticle, toCard, type BlogCard } from '@/lib/ghost';
import LatestAccordion from '@/components/blog/latest-accordion';

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export const metadata = {
  title: 'Insurance Insights & Stories',
  description: 'The latest trends, claim stories, and expert insights from the insurance industry.',
};

function parsePage(raw: string | undefined): number {
  const n = Number.parseInt(raw ?? '1', 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const page = parsePage((await searchParams).page);

  const [featuredPosts, latest] = await Promise.all([
    page === 1 ? getFeaturedPosts() : Promise.resolve([]),
    getLatestPosts(page),
  ]);

  const recommended = featuredPosts.map(toCard);
  const articles = latest.posts.map(toArticle);
  const { pagination } = latest;

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="from-si-primary-50 to-si-lightblue bg-gradient-to-br py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Insurance Insights & Stories
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Stay informed with the latest trends, claim stories, and expert insights from the
              insurance industry. Discover how we&#39;re protecting businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended (featured) — page 1 only */}
      {recommended.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Recommended</h2>
              <p className="mt-3 text-lg text-gray-600">
                Hand-picked reads our team thinks you shouldn&#39;t miss
              </p>
            </div>
            {/* First recommended = large banner card; the rest as a grid. */}
            <FeaturedBannerCard blog={recommended[0]} />
            {recommended.length > 1 && (
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommended.slice(1).map((blog) => (
                  <BlogPostCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Latest — inline accordion */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {articles.length === 0 ? 'No Articles Found' : 'Latest Articles'}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              {articles.length === 0
                ? 'There are no published articles on this page yet.'
                : 'Expand any story to read it right here — one opens at a time'}
            </p>
          </div>

          {articles.length > 0 ? (
            <>
              <LatestAccordion articles={articles} />
              <Pager pagination={pagination} />
            </>
          ) : (
            <div className="py-12 text-center">
              <h3 className="mb-2 text-lg font-medium text-gray-900">No articles found</h3>
              <p className="mb-4 text-gray-500">
                Once posts are published in Ghost they&#39;ll appear here.
              </p>
              {page > 1 && (
                <Link
                  href="/blogs"
                  className="text-si-primary-600 hover:text-si-primary-700 font-medium"
                >
                  Back to first page
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-si-primary-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stay Updated with Insurance Insights
          </h2>
          <p className="text-si-primary-100 mt-4 text-lg">
            Get the latest articles, claim stories, and industry trends delivered to your inbox
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="focus:ring-si-primary-300 flex-1 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none"
              />
              <button className="text-si-primary-600 rounded-lg bg-white px-6 py-3 font-semibold transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function pageHref(page: number) {
  return page <= 1 ? '/blogs' : `/blogs?page=${page}`;
}

function Pager({
  pagination,
}: {
  pagination: {
    page: number;
    pages: number;
    total: number;
    prev: number | null;
    next: number | null;
  };
}) {
  const { page, pages, total, prev, next } = pagination;

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      {pages > 1 && (
        <nav className="flex items-center gap-2">
          {prev ? (
            <Link
              href={pageHref(prev)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              ← Prev
            </Link>
          ) : (
            <span className="cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400">
              ← Prev
            </span>
          )}

          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={pageHref(n)}
              aria-current={n === page ? 'page' : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                n === page
                  ? 'bg-si-primary-600 text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {n}
            </Link>
          ))}

          {next ? (
            <Link
              href={pageHref(next)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              Next →
            </Link>
          ) : (
            <span className="cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400">
              Next →
            </span>
          )}
        </nav>
      )}
      <p className="text-sm text-gray-500">
        Page {page} of {pages} · {total} {total === 1 ? 'article' : 'articles'}
      </p>
    </div>
  );
}

function FeaturedBannerCard({ blog }: { blog: BlogCard }) {
  return (
    <article className="group relative h-80 overflow-hidden rounded-2xl bg-gray-900 shadow-lg md:h-96">
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          unoptimized={blog.image.startsWith('http://localhost')}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 1280px, 100vw"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        <span className="bg-si-primary rounded-full px-3 py-1 text-xs font-semibold text-white">
          {blog.category}
        </span>
        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
          FEATURED
        </span>
      </div>

      <div className="absolute right-0 bottom-0 left-0 p-6 text-white lg:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {blog.author}
          </span>
          {blog.dateLabel && (
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {blog.dateLabel}
            </span>
          )}
          {blog.readTime && (
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" />
              {blog.readTime}
            </span>
          )}
        </div>
        <h3 className="max-w-3xl text-2xl leading-tight font-bold lg:text-3xl">
          <Link href={`/blog/${blog.slug}`} className="hover:underline">
            {blog.title}
          </Link>
        </h3>
        {blog.excerpt && (
          <p className="mt-3 line-clamp-2 max-w-2xl text-sm text-white/85">{blog.excerpt}</p>
        )}
      </div>
    </article>
  );
}

function BlogPostCard({ blog }: { blog: BlogCard }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 bg-gray-200">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            // Next's optimizer rejects http://localhost (loopback) in dev; load it directly.
            unoptimized={blog.image.startsWith('http://localhost')}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-si-primary-100 text-si-primary-800 rounded-full px-3 py-1 text-xs font-semibold">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {blog.author}
          </span>
          {blog.dateLabel && (
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {blog.dateLabel}
            </span>
          )}
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${blog.slug}`} className="hover:text-si-primary-600">
            {blog.title}
          </Link>
        </h3>

        {blog.excerpt && <p className="mb-4 line-clamp-2 text-sm text-gray-600">{blog.excerpt}</p>}

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaTag className="text-xs" />
            {blog.category}
          </span>
          {blog.readTime && (
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <FaClock className="text-xs" />
              {blog.readTime}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-si-primary-600 hover:text-si-primary-800 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Read More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
