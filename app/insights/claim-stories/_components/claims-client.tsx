'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import { type BlogCard } from '@/lib/ghost';
import type { Pagination } from '@tryghost/content-api';

interface ClaimsClientProps {
  featuredPosts: BlogCard[];
  regularPosts: BlogCard[];
  pagination: Pagination;
  currentPage: number;
}

const ITEMS_PER_PAGE = 8;
const FEATURED_PER_PAGE = 4;

export default function ClaimsClient({
  featuredPosts,
  regularPosts,
  pagination,
  currentPage,
}: ClaimsClientProps) {
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

  const totalFiltered = filteredFeatured.length + filteredRegular.length;

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-300 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Insurance Claims Stories
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Real insurance claim journeys that highlight how protection works when it matters
              most.
            </p>

            <div className="mx-auto mt-8 max-w-4xl">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg sm:flex-row">
                <div className="flex-1">
                  <div className="relative">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search claim stories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Results: {totalFiltered} claim {totalFiltered === 1 ? 'story' : 'stories'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured section */}
      {filteredFeatured.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {loadingFeatured ? 'Loading…' : 'Load More Featured'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Regular section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                    className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
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
                      href={`/claims-stories?page=${pagination.prev}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      ← Prev
                    </Link>
                  )}
                  {pagination.next && (
                    <Link
                      href={`/claims-stories?page=${pagination.next}`}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
              {!hasRegularMore && (
                <p className="mt-6 text-center text-sm text-gray-500">
                  Page {currentPage} of {pagination.pages} · {pagination.total} stories total
                </p>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-gray-500">No claim stories found.</div>
          )}
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
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {post.dateLabel}
            </span>
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
          <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
    </article>
  );
}

function RegularCard({ post }: { post: BlogCard }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            {post.dateLabel}
          </span>
        </div>
        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
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
      </div>
    </article>
  );
}
