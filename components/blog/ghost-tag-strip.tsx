'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { BlogCard } from '@/lib/ghost';
import WhiteBlogCard from '@/components/cards/white-blog-card';
import Pager from '@/components/blog/pager';

interface GhostTagStripProps {
  /** Primary tag = which website page. */
  primary: string;
  /** Secondary tags = which in-page section (OR-ed). Omit for primary-only. */
  sections?: string[];
  /** Posts per page (Discord-style windowing). */
  perPage?: number;
}

export default function GhostTagStrip({ primary, sections = [], perPage = 5 }: GhostTagStripProps) {
  const sectionKey = sections.join(',');
  const key = `${primary}|${sectionKey}`;

  // null = fetching, [] = no results, [...] = loaded
  const [posts, setPosts] = useState<BlogCard[] | null>(primary ? null : []);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  // Reset to page 1 whenever the primary/sections change (render-time pattern).
  const [renderedKey, setRenderedKey] = useState(key);
  if (key !== renderedKey) {
    setRenderedKey(key);
    setPage(1);
    setPosts(primary ? null : []);
    setHasNext(false);
  }

  // Cache pages (per key) so Next (prefetched) and Prev are instant.
  const cache = useRef<Map<string, BlogCard[]>>(new Map());

  const fetchPage = useCallback(
    async (p: number): Promise<BlogCard[]> => {
      const ck = `${key}#${p}`;
      const cached = cache.current.get(ck);
      if (cached) return cached;
      const params = new URLSearchParams({ page: String(p), limit: String(perPage) });
      for (const s of sectionKey ? sectionKey.split(',') : []) params.append('section', s);
      try {
        const r = await fetch(`/api/ghost/tag/${encodeURIComponent(primary)}?${params.toString()}`);
        const data = await r.json();
        const arr = Array.isArray(data) ? data : [];
        cache.current.set(ck, arr);
        return arr;
      } catch {
        return [];
      }
    },
    [key, primary, sectionKey, perPage],
  );

  // Fetch the current page and prefetch the next, in the background.
  useEffect(() => {
    if (!primary) return;
    let cancelled = false;
    (async () => {
      const current = await fetchPage(page);
      if (cancelled) return;
      setPosts(current);
      const next = await fetchPage(page + 1);
      if (!cancelled) setHasNext(next.length > 0);
    })();
    return () => {
      cancelled = true;
    };
  }, [primary, page, fetchPage]);

  if (posts === null) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-72 animate-pulse rounded-xl bg-gray-100" />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-8 text-center">
        <div className="card-vibrant hover-lift mx-auto max-w-md rounded-xl p-6">
          <p className="text-si-ink/70 font-medium">No articles available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <WhiteBlogCard
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.dateLabel}
            description={post.excerpt}
            category={post.category}
            imageUrl={post.image || 'https://static.ghost.org/v4.0.0/images/publication-cover.jpg'}
            slug={post.slug}
          />
        ))}
      </div>
      <Pager
        page={page}
        hasPrev={page > 1}
        hasNext={hasNext}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />
    </div>
  );
}
