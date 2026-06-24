'use client';

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// Common languages (Prism core already bundles markup, css, clike, javascript).
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-java';

const PROSE_CLASSES =
  "prose prose-lg prose-gray prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-8 prose-h1:mt-0 prose-h1:font-extrabold prose-h1:text-gray-900 prose-h2:text-2xl prose-h2:leading-snug prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-gray-900 prose-h2:font-bold prose-h2:relative prose-h2:pl-8 prose-h2:before:content-['📋'] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:text-si-primary prose-h2:before:text-xl prose-h2:before:leading-none prose-h2:before:mr-2 prose-h3:text-xl prose-h3:leading-snug prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-800 prose-h3:font-semibold prose-h4:text-lg prose-h4:leading-snug prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-gray-700 prose-h4:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:font-normal prose-lead:text-xl prose-lead:text-gray-800 prose-lead:font-normal prose-lead:leading-relaxed prose-lead:mb-8 prose-a:text-si-primary prose-a:font-medium prose-a:no-underline prose-a:transition-all prose-a:duration-200 hover:prose-a:text-si-primary/80 prose-a:border-b prose-a:border-si-primary/30 hover:prose-a:border-si-primary prose-strong:text-gray-900 prose-strong:font-semibold prose-em:text-gray-700 prose-em:italic prose-em:font-normal prose-code:text-si-primary prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-medium prose-code:border-0 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-sm prose-pre:border-0 prose-ul:space-y-2 prose-ul:mb-6 prose-ol:space-y-2 prose-ol:mb-6 prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-1 prose-li:marker:text-si-primary prose-li:marker:font-normal prose-blockquote:border-si-primary prose-blockquote:bg-gray-50 prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r prose-blockquote:text-gray-700 prose-blockquote:italic prose-blockquote:font-normal prose-blockquote:text-lg prose-blockquote:leading-relaxed prose-blockquote:border-0 prose-blockquote:border-l-4 prose-blockquote:border-si-primary prose-table:w-full prose-table:border-collapse prose-table:bg-white prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm prose-table:border prose-table:border-gray-200 prose-thead:bg-gray-50 prose-th:text-gray-900 prose-th:font-semibold prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:text-sm prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-700 prose-tr:transition-colors hover:prose-tr:bg-gray-50 prose-img:rounded-lg prose-img:shadow-sm prose-img:border-0 prose-img:my-8 prose-figure:my-8 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:mt-3 prose-figcaption:italic prose-hr:border-0 prose-hr:h-px prose-hr:bg-gray-200 prose-hr:my-12 prose-video:rounded-lg prose-video:shadow-sm prose-video:my-8 selection:bg-si-primary/10 max-w-none leading-relaxed text-gray-700";

/**
 * Renders Ghost's server-rendered post HTML, then (client-side) syntax-highlights
 * code blocks and adds a copy-to-clipboard button to each. Scoped to its own
 * container so it works for multiple instances (e.g. the Latest accordion).
 */
export default function PostBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    Prism.highlightAllUnder(el);

    el.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.code-copy-btn')) return;
      pre.classList.add('code-block');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.addEventListener('click', () => {
        const code = pre.querySelector('code')?.textContent ?? pre.textContent ?? '';
        navigator.clipboard
          ?.writeText(code)
          .then(() => {
            btn.textContent = 'Copied!';
            window.setTimeout(() => {
              btn.textContent = 'Copy';
            }, 1500);
          })
          .catch(() => {});
      });
      pre.appendChild(btn);
    });
  }, [html]);

  return <div ref={ref} className={PROSE_CLASSES} dangerouslySetInnerHTML={{ __html: html }} />;
}
