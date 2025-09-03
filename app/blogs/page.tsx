import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaTag, FaSearch, FaFilter } from 'react-icons/fa';
import blogPosts from '../blog/list_of_blogs.json';

const BlogsPage = () => {
  // Sort blogs by date (newest first) and separate featured from regular
  const sortedBlogs = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const featuredBlogs = sortedBlogs.filter((blog) => blog.featured);
  const regularBlogs = sortedBlogs.filter((blog) => !blog.featured);

  // Get unique categories for filter
  const categories = [...new Set(blogPosts.map((blog) => blog.category))];
  const types = [...new Set(blogPosts.map((blog) => blog.type))];

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
              insurance industry. Discover how we're protecting businesses across India.
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
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type.replace('_', ' ').toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredBlogs.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Stories</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our most impactful insights and trending topics in insurance
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredBlogs.slice(0, 2).map((blog, index) => (
                <FeaturedBlogCard key={blog.slug} blog={blog} isLarge={index === 0} />
              ))}
            </div>

            {featuredBlogs.length > 2 && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredBlogs.slice(2).map((blog) => (
                  <RegularBlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Latest Articles</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our complete collection of insurance insights and industry updates
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularBlogs.map((blog) => (
              <RegularBlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
              Load More Articles
            </button>
          </div>
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

// Featured Blog Card Component
const FeaturedBlogCard = ({ blog, isLarge = false }: { blog: any; isLarge?: boolean }) => {
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

// Regular Blog Card Component
const RegularBlogCard = ({ blog }: { blog: any }) => {
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
