'use client';

import { useMemo, useState } from 'react';

export const POSTS_PER_WINDOW = 5;

export interface Paged<T> {
  pageItems: T[];
  page: number; // 1-based
  pageCount: number;
  hasPrev: boolean;
  hasNext: boolean;
  next: () => void;
  prev: () => void;
}

/**
 * Window an in-memory array into pages of `perPage`, exposing Prev/Next.
 * Only `perPage` items are ever rendered (DOM stays small), and paging is
 * instant since the data is already loaded. Resets to page 1 when `items`
 * changes (e.g. a filter is applied).
 */
export function usePagedArray<T>(items: T[], perPage = POSTS_PER_WINDOW): Paged<T> {
  const [page, setPage] = useState(1);

  // Reset to the first page whenever the underlying set changes (render-time
  // "adjust state on prop change" pattern — avoids a setState-in-effect cascade).
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setPage(1);
  }

  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(page, pageCount);
  const start = (safePage - 1) * perPage;

  const pageItems = useMemo(
    () => items.slice(start, start + perPage),
    [items, start, perPage],
  );

  return {
    pageItems,
    page: safePage,
    pageCount,
    hasPrev: safePage > 1,
    hasNext: safePage < pageCount,
    next: () => setPage((p) => p + 1),
    prev: () => setPage((p) => Math.max(1, p - 1)),
  };
}
