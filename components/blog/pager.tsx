'use client';

interface PagerProps {
  page: number; // 1-based
  pageCount?: number; // omit when unknown (server-paged with prefetch)
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

/** Discord-style Prev / Next pager. Renders nothing when there's only one page. */
export default function Pager({
  page,
  pageCount,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  className = '',
}: PagerProps) {
  if (!hasPrev && !hasNext) return null;

  return (
    <div className={`mt-8 flex items-center justify-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Previous posts"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Prev
      </button>

      <span className="text-sm font-medium text-gray-500">
        Page {page}
        {pageCount ? ` of ${pageCount}` : ''}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next posts"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
