'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FeaturedCarousel from './_components/featured-section/featured-caraousel';
import InsightsFilterBar from './_components/insights-filter';
import blogPosts from '@/app/blog/list_of_blogs.json';

export default function InsightsPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Handle filter changes
  const handleFiltersChange = (filters: { industry: string; type: string; topic: string }) => {
    let filtered = blogPosts;

    // Filter by industry
    if (filters.industry !== 'All Industries') {
      filtered = filtered.filter((post) => {
        if (filters.industry === 'Corporate') {
          return post.industry === 'corporate';
        } else if (filters.industry === 'Retail') {
          return post.industry === 'retail';
        } else if (filters.industry === 'Others') {
          // For "Others", include non-corporate and non-retail industries
          return post.industry !== 'corporate' && post.industry !== 'retail';
        }
        return true;
      });
    }

    // Filter by type
    if (filters.type !== 'All Types') {
      filtered = filtered.filter((post) => {
        const typeMap: { [key: string]: string } = {
          Blog: 'blog',
          News: 'news',
          'Claims Story': 'claims_story',
        };
        return post.type === typeMap[filters.type];
      });
    }

    // Filter by topic
    if (filters.topic !== 'All Topics') {
      filtered = filtered.filter((post) => {
        return (
          post.topic.replace('_', ' ').toLowerCase().includes(filters.topic.toLowerCase()) ||
          post.title.toLowerCase().includes(filters.topic.toLowerCase())
        );
      });
    }

    setFilteredPosts(filtered);
  };

  return (
    <div className="w-screen px-2 py-5 pt-[10vh] sm:px-4 md:px-6 lg:px-8 lg:pt-[15vh]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
        {/* Heading/Intro */}
        <div className="flex flex-col items-center pt-4 lg:w-[25vw] lg:pt-10 lg:pl-4">
          <h1 className="text-si-dark text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:w-[25vw] lg:text-left lg:text-6xl">
            Featured Insights
          </h1>
          <p className="text-si-dark/70 w-full pt-6 text-center text-base font-medium sm:text-lg lg:pt-10 lg:text-justify">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        <div className="pr-5 lg:w-[64vw]">
          <FeaturedCarousel />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-10 mb-10">
        <InsightsFilterBar onFiltersChange={handleFiltersChange} />
      </div>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-si-dark/60 text-sm">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-si-white relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="from-si-bluegreen to-si-slate relative flex h-48 items-center justify-center bg-gradient-to-r">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title}
                    className="h-16 w-16 object-contain opacity-50"
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
                Try adjusting your filters to see more results.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
