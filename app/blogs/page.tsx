'use client';
import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import blogPosts from '../blog/list_of_blogs.json';
import { BlogInterface } from '../blog/blog.interface';

const BlogsPage = () => {
  // Constants for pagination
  const ITEMS_PER_PAGE = 8;
  const FEATURED_ITEMS_PER_PAGE = 4;

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // State for lazy loading
  const [displayedFeaturedCount, setDisplayedFeaturedCount] = useState(FEATURED_ITEMS_PER_PAGE);
  const [displayedRegularCount, setDisplayedRegularCount] = useState(ITEMS_PER_PAGE);
  const [loadingFeatured, setLoadingFeatured] = useState(false);
  const [loadingRegular, setLoadingRegular] = useState(false);

  // Sort blogs by date (newest first)
  const sortedBlogs = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  // Apply filters to all blogs
  const filteredBlogs = useMemo(() => {
    let filtered = sortedBlogs;

    // Search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.type.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Type filter
    if (selectedType) {
      filtered = filtered.filter((blog) => blog.type === selectedType);
    }

    return filtered;
  }, [sortedBlogs, searchTerm, selectedCategory, selectedType]);

  // Separate featured from regular after filtering
  const filteredFeaturedBlogs = useMemo(
    () => filteredBlogs.filter((blog) => blog.featured),
    [filteredBlogs],
  );

  const filteredRegularBlogs = useMemo(
    () => filteredBlogs.filter((blog) => !blog.featured),
    [filteredBlogs],
  );

  // Get displayed blogs
  const displayedFeaturedBlogs = filteredFeaturedBlogs.slice(0, displayedFeaturedCount);
  const displayedRegularBlogs = filteredRegularBlogs.slice(0, displayedRegularCount);

  // Check if more items available
  const hasFeaturedMore = displayedFeaturedCount < filteredFeaturedBlogs.length;
  const hasRegularMore = displayedRegularCount < filteredRegularBlogs.length;

  // Reset pagination when filters change during render
  const [prevFilters, setPrevFilters] = useState({ searchTerm, selectedCategory, selectedType });
  if (
    searchTerm !== prevFilters.searchTerm ||
    selectedCategory !== prevFilters.selectedCategory ||
    selectedType !== prevFilters.selectedType
  ) {
    setPrevFilters({ searchTerm, selectedCategory, selectedType });
    setDisplayedFeaturedCount(FEATURED_ITEMS_PER_PAGE);
    setDisplayedRegularCount(ITEMS_PER_PAGE);
  }

  // Load more functions
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

  // Get unique categories and types for filters
  const categories = useMemo(() => [...new Set(blogPosts.map((blog) => blog.category))], []);
  const types = useMemo(() => [...new Set(blogPosts.map((blog) => blog.type))], []);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedType('');
  };

  return (
    <div className="min-h-screen bg-white pt-[8vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Insurance Insights & Stories
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 md:text-xl">
              Stay informed with the latest trends, claim stories, and expert insights from the
              insurance industry. Discover how we&#39;re protecting businesses across India.
            </p>

            {/* Search and Filter Bar */}
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
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
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
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type.replace('_', ' ').toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active filters and results count */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Results: {filteredBlogs.length} articles</span>
                  {filteredFeaturedBlogs.length > 0 && (
                    <span className="text-blue-600">({filteredFeaturedBlogs.length} featured)</span>
                  )}
                </div>

                {/* Active filter badges */}
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Search: &#34;{searchTerm}&#34;
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-1 hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-1 hover:text-green-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedType && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      Type: {selectedType.replace('_', ' ').toUpperCase()}
                      <button
                        onClick={() => setSelectedType('')}
                        className="ml-1 hover:text-purple-600"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {(searchTerm || selectedCategory || selectedType) && (
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

      {/* Featured Articles */}
      {filteredFeaturedBlogs.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Stories</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our most impactful insights and trending topics in insurance
              </p>
            </div>

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

            {/* Load More Featured Button */}
            {hasFeaturedMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMoreFeatured}
                  disabled={loadingFeatured}
                  className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loadingFeatured ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    `Load More Featured (${filteredFeaturedBlogs.length - displayedFeaturedCount} remaining)`
                  )}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {filteredRegularBlogs.length === 0 ? 'No Articles Found' : 'Latest Articles'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {filteredRegularBlogs.length === 0
                ? 'Try adjusting your filters to see more results'
                : 'Explore our complete collection of insurance insights and industry updates'}
            </p>
          </div>

          {displayedRegularBlogs.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {displayedRegularBlogs.map((blog) => (
                  <RegularBlogCard key={blog.slug} blog={blog} />
                ))}
              </div>

              {/* Load More Regular Button */}
              {hasRegularMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMoreRegular}
                    disabled={loadingRegular}
                    className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loadingRegular ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Loading...
                      </span>
                    ) : (
                      `Load More Articles (${filteredRegularBlogs.length - displayedRegularCount} remaining)`
                    )}
                  </button>
                </div>
              )}

              {/* End of results message */}
              {!hasRegularMore && displayedRegularBlogs.length > 0 && (
                <div className="mt-12 text-center">
                  <p className="text-gray-600">
                    You&#34;ve reached the end of the filtered results.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Showing all {filteredRegularBlogs.length} articles
                  </p>
                </div>
              )}
            </>
          ) : (
            /* No articles message */
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
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stay Updated with Insurance Insights
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Get the latest articles, claim stories, and industry trends delivered to your inbox
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Featured Blog Card Component (unchanged)
const FeaturedBlogCard = ({
  blog,
  isLarge = false,
}: {
  blog: BlogInterface;
  isLarge?: boolean;
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'claims_story':
        return 'bg-red-100 text-red-800';
      case 'news':
        return 'bg-green-100 text-green-800';
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getTypeColor(blog.type)}`}
          >
            {blog.type.replace('_', ' ').toUpperCase()}
          </span>
          {blog.featured && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
              FEATURED
            </span>
          )}
        </div>

        {/* Content Overlay */}
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

// Regular Blog Card Component (unchanged)
const RegularBlogCard = ({ blog }: { blog: BlogInterface }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'claims_story':
        return 'bg-red-100 text-red-800';
      case 'news':
        return 'bg-green-100 text-green-800';
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getTypeColor(blog.type)}`}
          >
            {blog.type.replace('_', ' ').toUpperCase()}
          </span>
        </div>
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

        <div className="mt-4">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
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
};

export default BlogsPage;
