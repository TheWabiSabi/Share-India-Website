'use client';

import { useState } from 'react';
import InsightsFilterBar from './insights-filter';
import InsightsGrid from './insights-grid';
import { type BlogCard } from '@/lib/ghost';

type Filters = { industry: string; type: string; topic: string };

const TYPE_TO_SLUG: Record<string, string> = {
  Blog: 'blog',
  News: 'news',
  'Claims Story': 'claims-story',
};

function applyFilters(posts: BlogCard[], filters: Filters): BlogCard[] {
  let result = posts;

  if (filters.topic && filters.topic !== 'All Topics') {
    result = result.filter((p) => p.category === filters.topic);
  }

  if (filters.type && filters.type !== 'All Types') {
    const slug = TYPE_TO_SLUG[filters.type];
    if (slug) result = result.filter((p) => p.tags.some((t) => t.slug === slug));
  }

  return result;
}

export default function InsightsContent({ initialPosts }: { initialPosts: BlogCard[] }) {
  const [filters, setFilters] = useState<Filters>({
    industry: 'All Industries',
    type: 'All Types',
    topic: 'All Topics',
  });

  const filteredPosts = applyFilters(initialPosts, filters);

  return (
    <>
      <div className="relative mt-10 mb-10">
        <InsightsFilterBar onFiltersChange={setFilters} />
      </div>
      <InsightsGrid initialPosts={filteredPosts} />
    </>
  );
}
