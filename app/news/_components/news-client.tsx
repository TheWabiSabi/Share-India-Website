'use client';

import React, { useState, useCallback, useMemo } from 'react';
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
import { type BlogCard } from '@/lib/ghost';
import type { Pagination } from '@tryghost/content-api';

interface NewsClientProps {
  featuredNews: BlogCard[];
  regularNews: BlogCard[];
  breakingNews: BlogCard[];
  pagination: Pagination;
  currentPage: number;
}

const ITEMS_PER_PAGE = 6;

export default function NewsClient({
  featuredNews,
  regularNews,
  breakingNews,
  pagination,
  currentPage,
}: NewsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(false);

  const allPosts = useMemo(
    () => [...featuredNews, ...regularNews, ...breakingNews],
    [featuredNews, regularNews, breakingNews],
  );

  const categories = useMemo(() => [...new Set(allPosts.map((p) => p.category))], [allPosts]);

  // Apply client-side search / category filter on top of the server-fetched page
  const filtered = useMemo(() => {
    let posts = regularNews;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    if (selectedCategory) {
      posts = posts.filter((p) => p.category === selectedCategory);
    }
    return posts;
  }, [regularNews, searchTerm, selectedCategory]);

  const filteredBreaking = useMemo(() => {
    if (!searchTerm && !selectedCategory) return breakingNews;
    const q = searchTerm.toLowerCase();
    return breakingNews.filter(
      (p) =>
        (!searchTerm ||
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)) &&
        (!selectedCategory || p.category === selectedCategory),
    );
  }, [breakingNews, searchTerm, selectedCategory]);

  const displayed = filtered.slice(0, displayedCount);
  const hasMore = displayedCount < filtered.length;

  // Reset displayed count when filters change during render
  const [prevSearch, setPrevSearch] = useState(searchTerm);
  const [prevCat, setPrevCat] = useState(selectedCategory);
  if (searchTerm !== prevSearch || selectedCategory !== prevCat) {
    setPrevSearch(searchTerm);
    setPrevCat(selectedCategory);
    setDisplayedCount(ITEMS_PER_PAGE);
  }

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setDisplayedCount((n) => n + ITEMS_PER_PAGE);
      setLoading(false);
    }, 400);
  }, [loading, hasMore]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const totalShown = filteredBreaking.length + filtered.length;

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero */}
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

            {/* Search + Filter */}
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
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:border-red-500 focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active filter badges */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="text-sm text-gray-600">
                  Results: {totalShown} articles
                  {filteredBreaking.length > 0 && (
                    <span className="ml-1 text-red-600">({filteredBreaking.length} breaking)</span>
                  )}
                </span>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                      Search: &quot;{searchTerm}&quot;
                      <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-red-600">
                        ×
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-1 hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gray-500 underline hover:text-gray-700"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking news ticker */}
      {filteredBreaking.length > 0 && (
        <section className="bg-red-600 py-3 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TbTrendingUp className="text-yellow-300" />
                <span className="font-bold">BREAKING:</span>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  {filteredBreaking.map((n) => n.title).join(' • ')}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Breaking news section */}
      {filteredBreaking.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Breaking News</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Latest developments and major announcements
                </p>
              </div>
              <span className="hidden items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 md:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                {filteredBreaking.length} Live Updates
              </span>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredBreaking.slice(0, 2).map((article, i) => (
                <FeaturedNewsCard
                  key={article.slug}
                  article={article}
                  isLarge={i === 0}
                  isBreaking
                />
              ))}
            </div>
            {filteredBreaking.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredBreaking.slice(2).map((article) => (
                  <RegularNewsCard key={article.slug} article={article} isBreaking />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured news (non-breaking) */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Featured Stories</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredNews.slice(0, 2).map((article, i) => (
                <FeaturedNewsCard key={article.slug} article={article} isLarge={i === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular news grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {filtered.length === 0 ? 'No Articles Found' : 'Latest News'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {filtered.length === 0
                ? 'Try adjusting your filters to see more results'
                : 'Comprehensive coverage of insurance industry developments'}
            </p>
          </div>

          {displayed.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayed.map((article) => (
                  <RegularNewsCard key={article.slug} article={article} />
                ))}
              </div>
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    {loading ? 'Loading…' : 'Load More News'}
                  </button>
                </div>
              )}
              {/* Server pagination for deeper pages */}
              {!hasMore && pagination.pages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  {pagination.prev && (
                    <Link
                      href={`/news?page=${pagination.prev}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      ← Prev
                    </Link>
                  )}
                  {pagination.next && (
                    <Link
                      href={`/news?page=${pagination.next}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
              {!hasMore && displayed.length > 0 && (
                <p className="mt-12 text-center text-sm text-gray-500">
                  Page {currentPage} of {pagination.pages} · {pagination.total} articles total
                </p>
              )}
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <FaSearch className="text-2xl text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">No articles found</h3>
              <p className="mb-4 text-gray-500">Try adjusting your search terms or filters.</p>
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

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">News Categories</h2>
            <p className="mt-4 text-lg text-gray-600">Explore news by category</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => setSelectedCategory('')}
              className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200">
                <FaNewspaper className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">All News</h3>
              <p className="mt-2 text-sm text-gray-600">All news and updates</p>
              <div className="mt-3 text-sm font-medium text-red-600">
                {allPosts.length} Articles
              </div>
            </button>

            {categories.slice(0, 3).map((category, index) => {
              const styles = [
                { bg: 'bg-blue-100 group-hover:bg-blue-200', text: 'text-blue-600', Icon: FaTag },
                {
                  bg: 'bg-green-100 group-hover:bg-green-200',
                  text: 'text-green-600',
                  Icon: TbTrendingUp,
                },
                {
                  bg: 'bg-purple-100 group-hover:bg-purple-200',
                  text: 'text-purple-600',
                  Icon: FaExternalLinkAlt,
                },
              ];
              const s = styles[index] ?? styles[0];

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group cursor-pointer rounded-lg border bg-white p-6 text-center transition-all hover:border-red-300 hover:shadow-lg ${
                    selectedCategory === category ? 'border-red-300 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${s.bg}`}
                  >
                    <s.Icon className={s.text} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  <p className="mt-2 text-sm text-gray-600">Category-specific updates</p>
                  <div className={`mt-3 text-sm font-medium ${s.text}`}>
                    {allPosts.filter((p) => p.category === category).length} Articles
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
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
                className="flex-1 rounded-lg px-4 py-3 focus:outline-none"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-red-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card sub-components (unchanged structure, updated to BlogCard type)
// ---------------------------------------------------------------------------

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

function FeaturedNewsCard({
  article,
  isLarge = false,
  isBreaking = false,
}: {
  article: BlogCard;
  isLarge?: boolean;
  isBreaking?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${isLarge ? 'lg:row-span-2' : ''}`}
    >
      <div className={`relative ${isLarge ? 'h-64 lg:h-80' : 'h-48'}`}>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
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
        </div>

        {isBreaking && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
            LIVE
          </div>
        )}

        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {article.dateLabel}
            </span>
            {article.readTime && (
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                {article.readTime}
              </span>
            )}
          </div>
          <h3 className={`leading-tight font-bold ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
            <Link href={`/blog/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  );
}

function RegularNewsCard({
  article,
  isBreaking = false,
}: {
  article: BlogCard;
  isBreaking?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
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
            {article.dateLabel}
          </span>
        </div>
        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${article.slug}`} className="hover:text-red-600">
            {article.title}
          </Link>
        </h3>
        <div className="flex items-center justify-between">
          {article.readTime && (
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <FaClock className="text-xs" />
              {article.readTime}
            </span>
          )}
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
}
