'use client';

import { useEffect, useState } from 'react';
import type { BlogCard } from '@/lib/ghost';
import MainCarousel from '@/components/main-caraousel';

interface ClaimStoriesCarouselProps {
  /** Primary tag = which website page. */
  primary: string;
  /** Secondary tag(s) for the carousel (OR-ed). Defaults to ['claims-story']. */
  sections?: string[];
  layout: 1 | 2 | 3;
  color: 'blue' | 'white';
  limit?: number;
}

/**
 * Claim Stories carousel — fetches client-side via the same `/api/ghost/tag`
 * route the Insights strip (GhostTagStrip) uses. Rendering server-side baked the
 * result into the statically-cached page, so newly-tagged claim stories stayed
 * frozen until a rebuild; fetching at runtime keeps it live like News/Articles.
 */
export default function ClaimStoriesCarousel({
  primary,
  sections = ['claims-story'],
  layout,
  color,
  limit = 10,
}: ClaimStoriesCarouselProps) {
  // null = fetching, [] = no results, [...] = loaded
  const [posts, setPosts] = useState<BlogCard[] | null>(primary ? null : []);

  const sectionKey = sections.join(',');

  useEffect(() => {
    if (!primary) return;
    let cancelled = false;
    const params = new URLSearchParams({ limit: String(limit) });
    for (const s of sectionKey ? sectionKey.split(',') : []) params.append('section', s);
    (async () => {
      try {
        const r = await fetch(`/api/ghost/tag/${encodeURIComponent(primary)}?${params.toString()}`);
        const data = await r.json();
        if (!cancelled) setPosts(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setPosts([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [primary, sectionKey, limit]);

  if (posts === null) {
    return <div className="h-64 animate-pulse rounded-xl bg-gray-100 md:h-72 lg:h-80" />;
  }

  return <MainCarousel posts={posts} layout={layout} color={color} />;
}
