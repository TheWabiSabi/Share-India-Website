<<<<<<< HEAD
import { getFeaturedAndLatestByTag, toCard } from '@/lib/ghost';
import ClaimsClient from './_components/claims-client';

export const metadata = {
  title: 'Insurance Claims Stories',
  description:
    'Real insurance claim journeys that highlight how protection works when it matters most.',
=======
'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import type { BlogRow } from '@/lib/ghost';
import Pager from '@/components/blog/pager';
import { usePagedArray } from '@/components/blog/use-paged';

const BlogsPage = () => {
  const ITEMS_PER_PAGE = 5;

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Claim-story posts from Ghost.
  const [blogPosts, setBlogPosts] = useState<BlogRow[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetch('/api/ghost/posts?section=claims-story')
      .then((r) => r.json())
      .then((data: BlogRow[]) => {
        if (!cancelled) setBlogPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Sort blogs by date (newest first)
  const sortedBlogs = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [blogPosts],
  );

  // Filter ONLY claims_story type first
  const claimsStoryBlogs = useMemo(
    () => sortedBlogs.filter((blog) => blog.type === 'claims_story'),
    [sortedBlogs],
  );

  // Apply search + category filters
  const filteredBlogs = useMemo(() => {
    let filtered = claimsStoryBlogs;

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    return filtered;
  }, [claimsStoryBlogs, searchTerm, selectedCategory]);

  const filteredFeaturedBlogs = useMemo(
    () => filteredBlogs.filter((blog) => blog.featured),
    [filteredBlogs],
  );

  const filteredRegularBlogs = useMemo(
    () => filteredBlogs.filter((blog) => !blog.featured),
    [filteredBlogs],
  );

  // Discord-style windowing: only ITEMS_PER_PAGE cards render per section at once.
  const featuredPaged = usePagedArray(filteredFeaturedBlogs, ITEMS_PER_PAGE);
  const regularPaged = usePagedArray(filteredRegularBlogs, ITEMS_PER_PAGE);
  const displayedFeaturedBlogs = featuredPaged.pageItems;
  const displayedRegularBlogs = regularPaged.pageItems;

  const categories = useMemo(
    () => [...new Set(claimsStoryBlogs.map((blog) => blog.category))],
    [claimsStoryBlogs],
  );

  //   const clearFilters = () => {
  //     setSearchTerm('');
  //     setSelectedCategory('');
  //   };

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
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

            {/* Search + Category Filter */}
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
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Results: {filteredBlogs.length} claim stories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {filteredFeaturedBlogs.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {displayedFeaturedBlogs.slice(0, 2).map((blog, index) => (
                <FeaturedBlogCard key={blog.slug} blog={blog} isLarge={index === 0} />
              ))}
            </div>

            {displayedFeaturedBlogs.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedFeaturedBlogs.slice(2).map((blog) => (
                  <RegularBlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            )}

            <Pager
              page={featuredPaged.page}
              pageCount={featuredPaged.pageCount}
              hasPrev={featuredPaged.hasPrev}
              hasNext={featuredPaged.hasNext}
              onPrev={featuredPaged.prev}
              onNext={featuredPaged.next}
              className="mt-12"
            />
          </div>
        </section>
      )}

      {/* Regular Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {displayedRegularBlogs.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {displayedRegularBlogs.map((blog) => (
                  <RegularBlogCard key={blog.slug} blog={blog} />
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
            <div className="py-12 text-center text-gray-500">No claim stories found.</div>
          )}
        </div>
      </section>
    </div>
  );
>>>>>>> ac6720d (updates)
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
<<<<<<< HEAD
  searchParams: Promise<{ page?: string }>;
}) {
  const page = Math.max(1, Number((await searchParams).page ?? 1) || 1);
=======
  blog: BlogRow;
  isLarge?: boolean;
}) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${isLarge ? 'lg:row-span-2' : ''}`}
    >
      <div className={`relative ${isLarge ? 'h-64 lg:h-80' : 'h-48'}`}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
>>>>>>> ac6720d (updates)

  const { featured, latest, pagination } = await getFeaturedAndLatestByTag(
    CLAIMS_TAG,
    6, // up to 6 featured
    page,
    8, // 8 regular per page
  );

<<<<<<< HEAD
=======
/* ============================
   Regular Blog Card Component
============================ */

const RegularBlogCard = ({ blog }: { blog: BlogRow }) => {
>>>>>>> ac6720d (updates)
  return (
    <ClaimsClient
      featuredPosts={featured.map(toCard)}
      regularPosts={latest.map(toCard)}
      pagination={pagination}
      currentPage={page}
    />
  );
}
