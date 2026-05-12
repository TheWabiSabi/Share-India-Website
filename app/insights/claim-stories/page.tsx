'use client';
import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import blogPosts from '../../blog/list_of_blogs.json';
import { BlogInterface } from '../../blog/blog.interface';

const BlogsPage = () => {
  const ITEMS_PER_PAGE = 8;
  const FEATURED_ITEMS_PER_PAGE = 4;

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Lazy loading states
  const [displayedFeaturedCount, setDisplayedFeaturedCount] = useState(FEATURED_ITEMS_PER_PAGE);
  const [displayedRegularCount, setDisplayedRegularCount] = useState(ITEMS_PER_PAGE);
  const [loadingFeatured, setLoadingFeatured] = useState(false);
  const [loadingRegular, setLoadingRegular] = useState(false);

  // Sort blogs by date (newest first)
  const sortedBlogs = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
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

  const displayedFeaturedBlogs = filteredFeaturedBlogs.slice(0, displayedFeaturedCount);
  const displayedRegularBlogs = filteredRegularBlogs.slice(0, displayedRegularCount);

  const hasFeaturedMore = displayedFeaturedCount < filteredFeaturedBlogs.length;
  const hasRegularMore = displayedRegularCount < filteredRegularBlogs.length;

  // Reset pagination when filters change during render
  const [prevFilters, setPrevFilters] = useState({ searchTerm, selectedCategory });
  if (searchTerm !== prevFilters.searchTerm || selectedCategory !== prevFilters.selectedCategory) {
    setPrevFilters({ searchTerm, selectedCategory });
    setDisplayedFeaturedCount(FEATURED_ITEMS_PER_PAGE);
    setDisplayedRegularCount(ITEMS_PER_PAGE);
  }

  const loadMoreFeatured = useCallback(() => {
    if (loadingFeatured || !hasFeaturedMore) return;

    setLoadingFeatured(true);
    setTimeout(() => {
      setDisplayedFeaturedCount((prev) => prev + FEATURED_ITEMS_PER_PAGE);
      setLoadingFeatured(false);
    }, 500);
  }, [loadingFeatured, hasFeaturedMore]);

  const loadMoreRegular = useCallback(() => {
    if (loadingRegular || !hasRegularMore) return;

    setLoadingRegular(true);
    setTimeout(() => {
      setDisplayedRegularCount((prev) => prev + ITEMS_PER_PAGE);
      setLoadingRegular(false);
    }, 500);
  }, [loadingRegular, hasRegularMore]);

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

            {hasFeaturedMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMoreFeatured}
                  disabled={loadingFeatured}
                  className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {loadingFeatured ? 'Loading...' : 'Load More Featured'}
                </button>
              </div>
            )}
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

              {hasRegularMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMoreRegular}
                    disabled={loadingRegular}
                    className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loadingRegular ? 'Loading...' : 'Load More'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-gray-500">No claim stories found.</div>
          )}
        </div>
      </section>
    </div>
  );
};

/* ============================
   Featured Blog Card Component
============================ */

const FeaturedBlogCard = ({
  blog,
  isLarge = false,
}: {
  blog: BlogInterface;
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

        <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
          <div className="mb-2 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" />
              {blog.readTime}
            </span>
          </div>

          <h3 className={`leading-tight font-bold ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
            <Link href={`/blog/${blog.slug}`} className="hover:underline">
              {blog.title}
            </Link>
          </h3>

          <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {blog.category}
          </span>
        </div>
      </div>
    </article>
  );
};

/* ============================
   Regular Blog Card Component
============================ */

const RegularBlogCard = ({ blog }: { blog: BlogInterface }) => {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900">
          <Link href={`/blog/${blog.slug}`} className="hover:text-blue-600">
            {blog.title}
          </Link>
        </h3>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaTag className="text-xs" />
            {blog.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <FaClock className="text-xs" />
            {blog.readTime}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogsPage;
