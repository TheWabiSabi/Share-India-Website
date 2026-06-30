<<<<<<< HEAD
import InsightsFilterBar from './_components/insights-filter';
import { getFeaturedPosts, getLatestPosts, toCard } from '@/lib/ghost';
import MainCarousel from '@/components/main-carousel';
import InsightsGrid from './_components/insights-grid';

export const metadata = {
  title: 'Expert Insights',
  description:
    'Expert-led articles and blogs featuring actionable insights on market trends, trading strategies, and the evolving Indian financial landscape.',
};

export default async function InsightsPage() {
  const [featuredPosts, latest] = await Promise.all([getFeaturedPosts(10), getLatestPosts(1)]);
=======
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InsightsFilterBar from './_components/insights-filter';
import type { BlogRow } from '@/lib/ghost';
import MainCaraousel from '@/components/main-caraousel';
import Pager from '@/components/blog/pager';
import { usePagedArray } from '@/components/blog/use-paged';

export default function InsightsPage() {
  const [allPosts, setAllPosts] = useState<BlogRow[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogRow[]>([]);
  const paged = usePagedArray(filteredPosts);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/ghost/posts')
      .then((r) => r.json())
      .then((data: BlogRow[]) => {
        if (!cancelled) {
          const rows = Array.isArray(data) ? data : [];
          setAllPosts(rows);
          setFilteredPosts(rows);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Handle filter changes
  const handleFiltersChange = (filters: { industry: string; type: string; topic: string }) => {
    let filtered = allPosts;
>>>>>>> ac6720d (updates)

  const carouselPosts = featuredPosts.map(toCard);
  const allPosts = [...featuredPosts, ...latest.posts].map(toCard);

  return (
    <div className="section-vibrant-blue from-si-primary-200 w-screen bg-gradient-to-b to-transparent px-2 py-5 pt-[10vh] sm:px-4 md:px-6 lg:px-8 lg:pt-[15vh]">
      <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
        {/* Heading/Intro */}
        <div className="flex flex-col items-center pt-4 lg:w-[25vw] lg:pt-10 lg:pl-4">
          <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
            Expert Insights
          </div>
          <h1 className="text-si-ink text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:w-[25vw] lg:text-left lg:text-6xl">
            Featured <span className="text-gradient-primary">Insights</span>
          </h1>
          <p className="text-si-ink/80 w-full pt-6 text-center text-base font-medium sm:text-lg lg:pt-10 lg:text-justify">
            Explore expert-led articles and blogs from Share India Brokers featuring actionable
            insights on market trends, trading strategies, and the evolving Indian financial
            landscape.
          </p>
        </div>
        <div className="mt-16 lg:w-[64vw]">
          <MainCarousel posts={carouselPosts} color="blue" layout={1} />
        </div>
      </div>

      {/* Filter Bar + Results Grid (client island) */}
      <div className="relative mt-10 mb-10">
        <InsightsFilterBar />
      </div>

      {/* Results Section */}
<<<<<<< HEAD
      <InsightsGrid initialPosts={allPosts} />
=======
      <div className="to-si-primary-100 section-spot-alt relative mx-auto max-w-7xl rounded-2xl bg-gradient-to-b from-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="bg-pattern-grid absolute inset-0 rounded-2xl opacity-15" />
        {/* Results Counter */}
        <div className="relative mb-6">
          <div className="flex items-center gap-3">
            <div className="accent-bar-gradient h-2 w-12" />
            <p className="text-si-ink/80 text-sm font-medium">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paged.pageItems.map((post) => (
              <article
                key={post.slug}
                className="card-vibrant hover-lift hover-glow-blue relative overflow-hidden rounded-xl"
              >
                <div className="from-si-primary/20 via-si-primary/10 to-si-red/5 relative flex h-48 items-center justify-center bg-gradient-to-br">
                  <Image
                    fill
                    src={post.image}
                    alt={post.title}
                    className="h-16 w-16 object-contain"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="from-si-primary to-si-primary-600 rounded-full bg-gradient-to-r px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="from-si-red/90 to-si-red rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white uppercase shadow-lg backdrop-blur-sm">
                      {post.type.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="accent-bar-gradient mb-3 h-2 w-12" />
                  <div className="text-si-primary mb-3 flex items-center text-sm font-medium">
                    <span>{post.author}</span>
                    <span className="text-si-ink/40 mx-2">•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-si-ink/40 mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-si-ink hover:text-si-primary mb-3 line-clamp-2 text-xl font-bold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="from-si-primary/20 to-si-primary/10 text-si-primary border-si-primary/20 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold">
                      {post.industry}
                    </span>
                    <span className="from-si-red/20 to-si-red/10 text-si-red border-si-red/20 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold">
                      {post.topic.replace('_', ' ')}
                    </span>
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
        ) : null}

        {filteredPosts.length > 0 ? (
          <Pager
            page={paged.page}
            pageCount={paged.pageCount}
            hasPrev={paged.hasPrev}
            hasNext={paged.hasNext}
            onPrev={paged.prev}
            onNext={paged.next}
          />
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
>>>>>>> ac6720d (updates)
    </div>
  );
}
