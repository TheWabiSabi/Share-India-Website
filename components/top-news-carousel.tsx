'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { type BlogCard } from '@/lib/ghost';

export default function TopNewsCarousel({ posts }: { posts: BlogCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const cardWidth = 360;
  const scrollBy = cardWidth * 2;

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 0);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener('scroll', updateButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateButtons);
  }, []);

  const handlePrev = () => trackRef.current?.scrollBy({ left: -scrollBy, behavior: 'smooth' });
  const handleNext = () => trackRef.current?.scrollBy({ left: scrollBy, behavior: 'smooth' });

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto px-1"
        aria-label="Top news carousel"
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative w-[320px] shrink-0 snap-start rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-[360px]"
          >
            {post.image && (
              <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  quality={75}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 320px, 360px"
                />
                {post.category && (
                  <span className="bg-si-primary/90 absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    {post.category}
                  </span>
                )}
              </div>
            )}
            <div className="p-5">
              <h3 className="text-si-ink line-clamp-2 text-base leading-snug font-semibold">
                {post.title}
              </h3>
              <div className="text-si-ink/60 mt-2 flex items-center gap-2 text-xs">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{post.dateLabel}</time>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-si-primary hover:text-si-primary-600 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Read explainer
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H7"
                    />
                  </svg>
                </Link>

                <button
                  type="button"
                  className="text-si-ink inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50"
                  aria-label="Save for later"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5v14l7-5 7 5V5z"
                    />
                  </svg>
                  Save
                </button>
              </div>
            </div>

            <div className="bg-si-red absolute -top-2 -right-2 rounded-md px-2 py-3 text-[10px] font-bold tracking-wider text-white uppercase shadow">
              Our Take
            </div>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute top-1/2 -right-3 -left-3 hidden -translate-y-1/2 justify-between sm:flex">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow hover:bg-slate-50 disabled:opacity-40"
          aria-label="Previous"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow hover:bg-slate-50 disabled:opacity-40"
          aria-label="Next"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
