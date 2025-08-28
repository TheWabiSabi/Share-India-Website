'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import blogPosts from './list_of_blogs.json';

// Generate unique categories from the blog posts data
const getCategories = () => {
  const uniqueCategories = Array.from(new Set(blogPosts.map((post) => post.category)));
  return ['All', ...uniqueCategories];
};

export default function BlogPage() {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-[8vh]">
      {/* Hero Section */}
      <div className="from-si-slate to-si-bluegreen text-si-offwhite bg-gradient-to-r py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Insurance Insights Hub</h1>
            <p className="text-si-offwhite/85 mx-auto max-w-3xl text-xl md:text-2xl">
              Stay informed with the latest insurance industry analysis, risk management strategies,
              and claims insights from our expert team at SIIB.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 transition-colors duration-200 ${
                selectedCategory === category
                  ? 'border-si-bluegreen bg-si-bluegreen text-si-offwhite'
                  : 'border-si-bluegreen bg-si-white text-si-dark hover:border-si-dark hover:bg-si-bluegreen hover:text-si-offwhite'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <p className="text-si-dark/60 text-center text-sm">
          {selectedCategory === 'All'
            ? `Showing all ${filteredPosts.length} articles`
            : `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in "${selectedCategory}"`}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-si-white relative z-10 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="from-si-bluegreen to-si-slate relative flex h-48 items-center justify-center bg-gradient-to-r">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title}
                    className="h-16 w-16 object-contain opacity-75"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-si-slate text-si-dark rounded-full px-3 py-1 text-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-si-bluegreen/20 text-si-offwhite rounded-full px-3 py-1 text-xs font-medium uppercase">
                      {post.type.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-si-bluegreen mb-3 flex items-center text-sm">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-si-dark hover:text-si-slate mb-3 line-clamp-2 text-xl font-bold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-si-slate/20 text-si-dark rounded px-2 py-1 text-xs">
                      {post.industry}
                    </span>
                    <span className="bg-si-bluegreen/20 text-si-dark rounded px-2 py-1 text-xs">
                      {post.topic.replace('_', ' ')}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-si-bluegreen hover:text-si-bluegreen/80 inline-flex items-center font-medium transition-colors"
                  >
                    Read More
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mx-auto max-w-md">
              <svg
                className="text-si-dark/40 mx-auto mb-4 h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-si-dark mb-2 text-lg font-medium">No articles found</h3>
              <p className="text-si-dark/60 text-sm">
                There are no articles in the &#34;{selectedCategory}&#34; category yet.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-si-bluegreen hover:text-si-bluegreen/80 mt-4 text-sm font-medium"
              >
                View all articles →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-si-bluegreen text-si-offwhite py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Stay Informed</h2>
          <p className="text-si-offwhite/80 mb-8 text-xl">
            Get the latest insurance insights and risk management tips delivered to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-si-slate text-si-dark placeholder:text-si-dark/60 focus:ring-si-slate flex-1 rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
            />
            <button className="bg-si-slate text-si-dark hover:bg-si-offwhite rounded-lg px-6 py-3 font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
