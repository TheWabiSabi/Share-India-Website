'use client';

import { useEffect, useState } from 'react';
import type { BlogCard } from '@/lib/ghost';
import WhiteBlogCard from '@/components/cards/white-blog-card';

interface GhostTagStripProps {
  tagSlug: string;
  limit?: number;
}

export default function GhostTagStrip({ tagSlug, limit = 6 }: GhostTagStripProps) {
  // null = fetching, [] = no results, [...] = loaded
  const [posts, setPosts] = useState<BlogCard[] | null>(tagSlug ? null : []);

  useEffect(() => {
    if (!tagSlug) return;
    let cancelled = false;
    fetch(`/api/ghost/tag/${encodeURIComponent(tagSlug)}?limit=${limit}`)
      .then((r) => r.json())
      .then((data: BlogCard[]) => {
        if (!cancelled) setPosts(data);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, [tagSlug, limit]);

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
  );
}
