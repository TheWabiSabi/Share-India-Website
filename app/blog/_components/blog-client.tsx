'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import { type BlogCard } from '@/lib/ghost';
import type { Pagination } from '@tryghost/content-api';

interface BlogClientProps {
  /** Featured `blog`-tagged posts — rendered in the prominent "Recommended" section. */
  featuredPosts: BlogCard[];
  /** Non-featured `blog`-tagged posts for the current page. */
  regularPosts: BlogCard[];
  pagination: Pagination;
  currentPage: number;
}

const ITEMS_PER_PAGE = 8;
const FEATURED_PER_PAGE = 4;

export default function BlogClient({
  featuredPosts,
  regularPosts,
  pagination,
  currentPage,
}: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [displayedFeaturedCount, setDisplayedFeaturedCount] = useState(FEATURED_PER_PAGE);
  const [displayedRegularCount, setDisplayedRegularCount] = useState(ITEMS_PER_PAGE);
  const [loadingFeatured, setLoadingFeatured] = useState(false);
  const [loadingRegular, setLoadingRegular] = useState(false);

  const allPosts = useMemo(
    () => [...featuredPosts, ...regularPosts],
    [featuredPosts, regularPosts],
  );

  const categories = useMemo(() => [...new Set(allPosts.map((p) => p.category))], [allPosts]);

  const filteredFeatured = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return featuredPosts.filter(
      (p) =>
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)) &&
        (!selectedCategory || p.category === selectedCategory),
    );
  }, [featuredPosts, searchTerm, selectedCategory]);

  const filteredRegular = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return regularPosts.filter(
      (p) =>
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)) &&
        (!selectedCategory || p.category === selectedCategory),
    );
  }, [regularPosts, searchTerm, selectedCategory]);

  const displayedFeatured = filteredFeatured.slice(0, displayedFeaturedCount);
  const displayedRegular = filteredRegular.slice(0, displayedRegularCount);

  const hasFeaturedMore = displayedFeaturedCount < filteredFeatured.length;
  const hasRegularMore = displayedRegularCount < filteredRegular.length;

  // Reset pagination when filters change during render
  const [prevSearch, setPrevSearch] = useState(searchTerm);
  const [prevCat, setPrevCat] = useState(selectedCategory);
  if (searchTerm !== prevSearch || selectedCategory !== prevCat) {
    setPrevSearch(searchTerm);
    setPrevCat(selectedCategory);
    setDisplayedFeaturedCount(FEATURED_PER_PAGE);
    setDisplayedRegularCount(ITEMS_PER_PAGE);
  }

  const loadMoreFeatured = useCallback(() => {
    if (loadingFeatured || !hasFeaturedMore) return;
    setLoadingFeatured(true);
    setTimeout(() => {
      setDisplayedFeaturedCount((n) => n + FEATURED_PER_PAGE);
      setLoadingFeatured(false);
    }, 400);
  }, [loadingFeatured, hasFeaturedMore]);

  const loadMoreRegular = useCallback(() => {
    if (loadingRegular || !hasRegularMore) return;
    setLoadingRegular(true);
    setTimeout(() => {
      setDisplayedRegularCount((n) => n + ITEMS_PER_PAGE);
      setLoadingRegular(false);
    }, 400);
  }, [loadingRegular, hasRegularMore]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const totalFiltered = filteredFeatured.length + filteredRegular.length;

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero */}
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

            {/* Search + Filter */}
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles, insights, and stories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="focus:border-si-primary focus:ring-si-primary-200 w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="focus:border-si-primary rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result count + active filters */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="text-sm text-gray-600">
                  Results: {totalFiltered} {totalFiltered === 1 ? 'article' : 'articles'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="bg-si-primary-100 text-si-primary-800 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium">
                      Search: &quot;{searchTerm}&quot;
                      <button
                        onClick={() => setSearchTerm('')}
                        className="hover:text-si-primary-600 ml-1"
                      >
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

      {/* Recommended (featured) section */}
      {filteredFeatured.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Recommended</h2>
              <p className="mt-3 text-lg text-gray-600">
                Hand-picked reads our team thinks you shouldn&#39;t miss
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {displayedFeatured.slice(0, 2).map((post, i) => (
                <FeaturedCard key={post.slug} post={post} isLarge={i === 0} />
              ))}
            </div>
            {displayedFeatured.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedFeatured.slice(2).map((post) => (
                  <RegularCard key={post.slug} post={post} />
                ))}
              </div>
            )}
            {hasFeaturedMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMoreFeatured}
                  disabled={loadingFeatured}
                  className="bg-si-primary-600 hover:bg-si-primary-700 rounded-lg px-8 py-3 font-semibold text-white disabled:opacity-50"
                >
                  {loadingFeatured ? 'Loading…' : 'Load More Featured'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Latest articles grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {filteredRegular.length === 0 ? 'No Articles Found' : 'Latest Articles'}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              {filteredRegular.length === 0
                ? 'Try adjusting your search terms or filters.'
                : 'The latest trends, claim stories, and expert insights'}
            </p>
          </div>

          {displayedRegular.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {displayedRegular.map((post) => (
                  <RegularCard key={post.slug} post={post} />
                ))}
              </div>
              {hasRegularMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMoreRegular}
                    disabled={loadingRegular}
                    className="bg-si-primary-600 hover:bg-si-primary-700 rounded-lg px-8 py-3 font-semibold text-white disabled:opacity-50"
                  >
                    {loadingRegular ? 'Loading…' : 'Load More'}
                  </button>
                </div>
              )}
              {/* Server pagination for deeper pages */}
              {!hasRegularMore && pagination.pages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  {pagination.prev && (
                    <Link
                      href={`/blog?page=${pagination.prev}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      ← Prev
                    </Link>
                  )}
                  {pagination.next && (
                    <Link
                      href={`/blog?page=${pagination.next}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
              {!hasRegularMore && (
                <p className="mt-6 text-center text-sm text-gray-500">
                  Page {currentPage} of {pagination.pages} · {pagination.total}{' '}
                  {pagination.total === 1 ? 'article' : 'articles'} total
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
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="text-si-primary-600 hover:text-si-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
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

// ---------------------------------------------------------------------------
// Card sub-components
// ---------------------------------------------------------------------------

function FeaturedCard({ post, isLarge = false }: { post: BlogCard; isLarge?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${isLarge ? 'lg:row-span-2' : ''}`}
    >
      <div className={`relative ${isLarge ? 'h-64 lg:h-80' : 'h-48'}`}>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            // Next's optimizer rejects http://localhost (loopback) in dev; load it directly.
            unoptimized={post.image.startsWith('http://localhost')}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-si-primary rounded-full px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
            FEATURED
          </span>
        </div>

        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {post.author}
            </span>
            {post.dateLabel && (
              <span className="flex items-center gap-1">
                <FaCalendar className="text-xs" />
                {post.dateLabel}
              </span>
            )}
            {post.readTime && (
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" />
                {post.readTime}
              </span>
            )}
          </div>
          <h3 className={`leading-tight font-bold ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  );
}

function RegularCard({ post }: { post: BlogCard }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 bg-gray-200">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized={post.image.startsWith('http://localhost')}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-si-primary-100 text-si-primary-800 rounded-full px-3 py-1 text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {post.author}
          </span>
          {post.dateLabel && (
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {post.dateLabel}
            </span>
          )}
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-si-primary-600">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && <p className="mb-4 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>}

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaTag className="text-xs" />
            {post.category}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <FaClock className="text-xs" />
              {post.readTime}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Link
            href={`/blog/${post.slug}`}
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
