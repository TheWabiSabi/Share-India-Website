<<<<<<< HEAD
import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import NewsClient from './_components/news-client';

export const metadata = {
  title: 'Insurance Industry News',
  description:
    'Stay ahead with breaking news, market updates, and regulatory changes shaping the insurance landscape in India and globally.',
=======
'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaTag,
  FaSearch,
  FaNewspaper,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { TbTrendingUp } from 'react-icons/tb';
import type { BlogRow } from '@/lib/ghost';
import Pager from '@/components/blog/pager';
import { usePagedArray } from '@/components/blog/use-paged';

const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
// Calculate cutoff once outside the component to ensure purity during render
const RECENT_CUTOFF = typeof window !== 'undefined' ? Date.now() - WEEK_IN_MS : 0;

const NewsPage = () => {
  // Posts rendered per page (Discord-style windowing).
  const ITEMS_PER_PAGE = 5;

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('');

  // News posts from Ghost.
  const [blogPosts, setBlogPosts] = useState<BlogRow[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetch('/api/ghost/posts?section=news')
      .then((r) => r.json())
      .then((data: BlogRow[]) => {
        if (!cancelled) setBlogPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Filter for news content and sort by date (newest first)
  const allNews = useMemo(
    () =>
      blogPosts
        .filter((post) => post.type === 'news')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [blogPosts],
  );

  // Apply filters to all news
  const filteredAllNews = useMemo(() => {
    let filtered = allNews;

    // Search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((article) => article.category === selectedCategory);
    }

    // Date range filter
    if (selectedDateRange) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      filtered = filtered.filter((article) => {
        const articleDate = new Date(article.date);

        switch (selectedDateRange) {
          case 'today':
            return articleDate >= today;
          case 'week':
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            return articleDate >= weekAgo;
          case 'month':
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            return articleDate >= monthAgo;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [allNews, searchTerm, selectedCategory, selectedDateRange]);

  // Separate breaking news from regular news (breaking = featured news posts)
  const filteredBreakingNews = useMemo(
    () => filteredAllNews.filter((article) => article.breaking),
    [filteredAllNews],
  );

  const filteredRegularNews = useMemo(
    () => filteredAllNews.filter((article) => !article.breaking),
    [filteredAllNews],
  );

  const recentCutoff = RECENT_CUTOFF;

  // Discord-style windowing: only ITEMS_PER_PAGE regular-news cards render at once.
  const regularPaged = usePagedArray(filteredRegularNews, ITEMS_PER_PAGE);
  const displayedRegularNews = regularPaged.pageItems;

  // Get unique categories for filter
  const categories = useMemo(
    () => [...new Set(allNews.map((article) => article.category))],
    [allNews],
  );

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedDateRange('');
  };

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <FaNewspaper className="text-3xl text-red-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Insurance Industry News
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Stay ahead with breaking news, market updates, and regulatory changes shaping the
              insurance landscape in India and globally.
            </p>

            {/* Search and Filter Bar */}
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search news, updates, and announcements..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedDateRange}
                    onChange={(e) => setSelectedDateRange(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none"
                  >
                    <option value="">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
              </div>

              {/* Active filters and results count */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Results: {filteredAllNews.length} articles</span>
                  {filteredBreakingNews.length > 0 && (
                    <span className="text-red-600">({filteredBreakingNews.length} breaking)</span>
                  )}
                </div>

                {/* Active filter badges */}
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                      Search: &#34;{searchTerm}&#34;
                      <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-red-600">
                        ×
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-1 hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedDateRange && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Time: {selectedDateRange}
                      <button
                        onClick={() => setSelectedDateRange('')}
                        className="ml-1 hover:text-green-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {(searchTerm || selectedCategory || selectedDateRange) && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gray-500 underline hover:text-gray-700"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-red-600 py-3 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <TbTrendingUp className="text-yellow-300" />
              <span className="font-bold">BREAKING:</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {filteredBreakingNews.length > 0
                  ? filteredBreakingNews.map((news) => news.title).join(' • ')
                  : 'No breaking news matching current filters'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Section */}
      {filteredBreakingNews.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Breaking News</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Latest developments and major announcements in the insurance industry
                </p>
              </div>
              <div className="hidden md:block">
                <span className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
                  {filteredBreakingNews.length} Live Updates
                </span>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {filteredBreakingNews.slice(0, 2).map((article, index) => (
                <FeaturedNewsCard
                  key={article.slug}
                  article={article}
                  isLarge={index === 0}
                  isBreaking={true}
                />
              ))}
            </div>

            {filteredBreakingNews.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredBreakingNews.slice(2).map((article) => (
                  <RegularNewsCard
                    key={article.slug}
                    article={article}
                    isBreaking={true}
                    recentCutoff={recentCutoff}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {filteredRegularNews.length === 0 ? 'No Regular News Found' : 'Latest News'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {filteredRegularNews.length === 0
                ? 'Try adjusting your filters to see more results'
                : 'Comprehensive coverage of insurance industry developments and market trends'}
            </p>
          </div>

          {displayedRegularNews.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedRegularNews.map((article) => (
                  <RegularNewsCard
                    key={article.slug}
                    article={article}
                    recentCutoff={recentCutoff}
                  />
                ))}
              </div>

              <Pager
                page={regularPaged.page}
                pageCount={regularPaged.pageCount}
                hasPrev={regularPaged.hasPrev}
                hasNext={regularPaged.hasNext}
                onPrev={regularPaged.prev}
                onNext={regularPaged.next}
                className="mt-12"
              />
            </>
          ) : (
            /* No results message */
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <FaSearch className="text-2xl text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">No articles found</h3>
              <p className="mb-4 text-gray-500">
                Try adjusting your search terms or filters to find what you&#34;re looking for.
              </p>
              <button
                onClick={clearFilters}
                className="font-medium text-red-600 hover:text-red-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">News Categories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore news by category to find what matters most to your business
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => setSelectedCategory('')}
              className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200">
                <FaNewspaper className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Breaking News</h3>
              <p className="mt-2 text-sm text-gray-600">Latest developments and urgent updates</p>
              <div className="mt-3 text-sm font-medium text-red-600">
                {filteredBreakingNews.length} Articles
              </div>
            </button>

            {categories.slice(0, 3).map((category, index) => {
              const colors = [
                { bg: 'bg-blue-100 group-hover:bg-blue-200', text: 'text-blue-600', icon: FaTag },
                {
                  bg: 'bg-green-100 group-hover:bg-green-200',
                  text: 'text-green-600',
                  icon: TbTrendingUp,
                },
                {
                  bg: 'bg-purple-100 group-hover:bg-purple-200',
                  text: 'text-purple-600',
                  icon: FaExternalLinkAlt,
                },
              ];
              const colorSet = colors[index] || colors[0];
              const IconComponent = colorSet.icon;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg ${
                    selectedCategory === category ? 'border-red-300 shadow-lg' : ''
                  }`}
                >
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorSet.bg}`}
                  >
                    <IconComponent className={colorSet.text} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Category-specific updates and insights
                  </p>
                  <div className={`mt-3 text-sm font-medium ${colorSet.text}`}>
                    {allNews.filter((n) => n.category === category).length} Articles
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-red-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Never Miss Important News</h2>
          <p className="mt-4 text-lg text-red-100">
            Get breaking news, regulatory updates, and market insights delivered to your inbox
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-300 focus:outline-none"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-red-200">
              Join 10,000+ insurance professionals who trust our news updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> ac6720d (updates)
};

/**
 * Ghost tag convention used by this section:
 *   - "news"         → all news posts
 *   - "breaking-news" → posts that appear in the breaking news strip
 *
 * Adjust the slugs if your Ghost taxonomy differs.
 */
const NEWS_TAG = 'news';
const BREAKING_TAG = 'breaking-news';

export default async function NewsPage({
  searchParams,
}: {
<<<<<<< HEAD
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);

  const [newsData, breakingPosts] = await Promise.all([
    getFeaturedAndLatestByTag(NEWS_TAG, 6, page, 6),
    // Breaking news is a subset — fetch by its own tag
    (async () => {
      const { getFeaturedAndLatestByTag: f } = await import('@/lib/ghost');
      const { featured, latest } = await f(BREAKING_TAG, 10, 1, 20);
      return [...featured, ...latest].map(toCard);
    })(),
  ]);

  const featuredNews = newsData.featured.map(toCard);
  const regularNews = newsData.latest.map(toCard);
  const { pagination } = newsData;
=======
  article: BlogRow;
  isLarge?: boolean;
  isBreaking?: boolean;
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Breaking News':
        return 'bg-red-100 text-red-800';
      case 'Market News':
        return 'bg-green-100 text-green-800';
      case 'Regulatory News':
        return 'bg-blue-100 text-blue-800';
      case 'Industry News':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
>>>>>>> ac6720d (updates)

  return (
    <NewsClient
      featuredNews={featuredNews}
      regularNews={regularNews}
      breakingNews={breakingPosts}
      pagination={pagination}
      currentPage={page}
    />
  );
<<<<<<< HEAD
}
=======
};

// Regular News Card Component (unchanged from previous version)
const RegularNewsCard = ({
  article,
  isBreaking = false,
  recentCutoff,
}: {
  article: BlogRow;
  isBreaking?: boolean;
  recentCutoff: number;
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Breaking News':
        return 'bg-red-100 text-red-800';
      case 'Market News':
        return 'bg-green-100 text-green-800';
      case 'Regulatory News':
        return 'bg-blue-100 text-blue-800';
      case 'Industry News':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isRecent = new Date(article.date).getTime() > recentCutoff;

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {isBreaking ? (
            <span className="animate-pulse rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              BREAKING
            </span>
          ) : (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(article.category)}`}
            >
              {article.category}
            </span>
          )}
          {isRecent && !isBreaking && (
            <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-orange-900">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${article.slug}`} className="hover:text-red-600">
            {article.title}
          </Link>
        </h3>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaClock className="text-xs" />
            {article.readTime}
          </span>
        </div>

        <div className="mt-4">
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-800"
          >
            Read Full Story
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
};

export default NewsPage;
>>>>>>> ac6720d (updates)
