import Link from 'next/link';
import TopNewsCarousel from '@/components/top-news-carousel';

export default function TopNewsSection() {
  return (
    <section
      id="top-news"
      aria-labelledby="top-news-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm sm:px-4 sm:py-2">
              <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
              News, Decoded
            </span>
            <h2
              id="top-news-title"
              className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900"
            >
              Not caught up? We&apos;ve got you.
            </h2>
            <p className="mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
              Our team distills complex insurance and risk headlines into punchy explainers—what
              happened, why it matters, and what you should do next.
            </p>
          </div>

          {/* What you'll find */}
          <div className="w-full max-w-md lg:w-auto lg:max-w-none">
            <div className="card-vibrant rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 sm:p-6">
              <div className="mb-2 text-sm font-medium text-slate-600">What you&apos;ll find</div>
              <ul className="grid gap-2 text-sm text-slate-700/90 sm:grid-cols-2">
                {[
                  'Impact on premiums & coverage',
                  'Regulatory updates (IRDAI & more)',
                  'Sector-wise implications',
                  'Clear actionables',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="text-si-primary h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel (stable min-height to reduce CLS while hydrating) */}
        <div className="mt-8 sm:mt-10">
          <div className="min-h-[260px] sm:min-h-[300px]">
            <TopNewsCarousel />
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm ring-1 ring-slate-900/5 sm:mt-10 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="accent-bar-gradient h-2 w-14 rounded" />
            <p className="text-sm text-slate-700/85">
              Updated weekly • Editor&apos;s picks • No jargon
            </p>
          </div>

          <Link
            href="/news"
            className="bg-si-primary hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Browse all news"
          >
            Browse All News
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
    </section>
  );
}
