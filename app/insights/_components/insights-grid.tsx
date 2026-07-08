'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type BlogCard } from '@/lib/ghost';

interface InsightsGridProps {
  initialPosts: BlogCard[];
}

export default function InsightsGrid({ initialPosts }: InsightsGridProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(
    () => [...new Set(initialPosts.map((p) => p.category))],
    [initialPosts],
  );

  const filteredPosts = useMemo(() => {
    let posts = initialPosts;

    if (search.trim()) {
      const q = search.toLowerCase();
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
  }, [initialPosts, search, selectedCategory]);

  return (
    <div className="to-si-primary-100 section-spot-alt relative mx-auto max-w-7xl rounded-2xl bg-gradient-to-b from-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="bg-pattern-grid absolute inset-0 rounded-2xl opacity-15" />

      {/* Filter bar */}
      <div className="relative mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <input
          type="text"
          placeholder="Search articles…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="focus:border-si-primary focus:ring-si-primary/20 flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="focus:border-si-primary focus:ring-si-primary/20 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Results counter */}
      <div className="relative mb-6">
        <div className="flex items-center gap-3">
          <div className="accent-bar-gradient h-2 w-12" />
          <p className="text-si-ink/80 text-sm font-medium">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="card-vibrant hover-lift hover-glow-blue relative overflow-hidden rounded-xl"
            >
              <div className="from-si-primary/20 via-si-primary/10 to-si-red/5 relative flex h-48 items-center justify-center bg-gradient-to-br">
                {post.image && (
                  <Image
                    fill
                    src={post.image}
                    quality={50}
                    alt={post.title}
                    className="object-cover"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="from-si-primary to-si-primary-600 rounded-full bg-gradient-to-r px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                {post.tags[0] && (
                  <div className="absolute top-4 right-4">
                    <span className="from-si-red/90 to-si-red rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white uppercase shadow-lg backdrop-blur-sm">
                      {post.tags[0].name}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="accent-bar-gradient mb-3 h-2 w-12" />
                <div className="text-si-primary mb-3 flex flex-wrap items-center gap-1 text-sm font-medium">
                  <span>{post.author}</span>
                  <span className="text-si-ink/40 mx-1">•</span>
                  <span>{post.dateLabel}</span>
                  {post.readTime && (
                    <>
                      <span className="text-si-ink/40 mx-1">•</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>
                <h2 className="text-si-ink hover:text-si-primary mb-3 line-clamp-2 text-xl font-bold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag.slug}
                      className="from-si-primary/20 to-si-primary/10 text-si-primary border-si-primary/20 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-si-primary hover:text-si-primary-600 inline-flex items-center font-semibold transition-all hover:gap-3"
                >
                  Read More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform hover:translate-x-1"
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
        <div className="relative py-12 text-center">
          <div className="card-vibrant hover-lift mx-auto max-w-md rounded-xl p-8">
            <div className="from-si-primary/20 to-si-red/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
              <svg
                className="text-si-primary h-8 w-8"
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
            </div>
            <h3 className="text-si-ink mb-2 text-lg font-semibold">No articles found</h3>
            <p className="text-si-ink/70 text-sm">
              Try adjusting your filters to see more results.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
