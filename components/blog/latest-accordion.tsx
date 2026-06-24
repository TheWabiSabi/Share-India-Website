'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCalendar, FaChevronDown, FaClock, FaUser } from 'react-icons/fa';
import type { BlogArticle } from '@/lib/ghost';
import PostBody from './post-body';

/**
 * "Latest" reading list: an accordion where exactly one post is expanded at a
 * time (the first is open initially). Clicking a header opens that post inline
 * and collapses the rest; clicking the open one collapses it.
 */
export default function LatestAccordion({ articles }: { articles: BlogArticle[] }) {
  const [openId, setOpenId] = useState<string | null>(articles[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {articles.map((article) => {
        const open = article.id === openId;
        return (
          <article
            key={article.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : article.id)}
              className="flex w-full items-start justify-between gap-4 p-6 text-left"
            >
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="bg-si-primary-100 text-si-primary-800 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <FaUser className="text-[10px]" />
                    {article.author}
                  </span>
                  {article.dateLabel && (
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FaCalendar className="text-[10px]" />
                      {article.dateLabel}
                    </span>
                  )}
                  {article.readTime && (
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FaClock className="text-[10px]" />
                      {article.readTime}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                {!open && article.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.excerpt}</p>
                )}
              </div>
              <FaChevronDown
                className={`mt-1 shrink-0 text-gray-400 transition-transform duration-200 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>

            {open && (
              <div className="border-t border-gray-100 px-6 pt-6 pb-8">
                <PostBody html={article.html} />
                <div className="mt-8 border-t pt-6">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-si-primary-600 hover:text-si-primary-800 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Open full article
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
