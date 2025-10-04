import Link from 'next/link';
import dynamic from 'next/dynamic';
import { memo } from 'react';

// NOTE: If your carousel relies on window, disable SSR for smoother hydration
const MainCaraousel = dynamic(() => import('@/components/main-caraousel'));

const ArrowIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
));
ArrowIcon.displayName = 'ArrowIcon';

export default function FeaturedInsightsSection() {
  return (
    <section
      id="featured-insights"
      aria-labelledby="featured-insights-title"
      className="relative isolate bg-white py-10 sm:py-14 md:py-16"
    >
      {/* Background: light gradient + subtle dots, masked so content stays crisp */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="from-si-primary-200/40 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="bg-pattern-dots [mask-image:linear-gradient(to bottom,transparent,black_20%,black_80%,transparent)] absolute inset-0 opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Header */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold tracking-wide text-blue-700 uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
            Insights
          </span>
          <h2
            id="featured-insights-title"
            className="text-3xl leading-tight font-semibold text-slate-900 sm:text-4xl"
          >
            Featured{' '}
            <span className="to-si-primary-400 bg-gradient-to-r from-slate-700 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700/85 sm:mt-4 sm:text-lg">
            Expert explainers from Share India Brokers — market trends, risk solutions, and how
            policy changes affect businesses and families in India.
          </p>
        </header>

        {/* Carousel card */}
        <div
          className="rounded-2xl border bg-white p-3 shadow-sm ring-1 ring-slate-900 sm:p-4"
          role="region"
          aria-label="Featured insights carousel"
        >
          {/* Provide a fixed min-height to reduce CLS while items hydrate */}
          <div className="min-h-[280px] sm:min-h-[320px]">
            <MainCaraousel color="blue" layout={1} />
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:mt-4 sm:px-6 sm:py-4"
          aria-label="Insights call to action"
        >
          <div className="flex items-center gap-3">
            <div className="to-si-primary-400 h-2 w-16 bg-gradient-to-r from-slate-300" />
            <p className="text-sm text-slate-700/85">
              Curated weekly by our brokerage team • No jargon, just outcomes
            </p>
          </div>

          <Link
            href="/insights"
            className="bg-si-primary-400 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Explore all insights"
          >
            Explore All Insights
            <ArrowIcon />
          </Link>
        </div>

        {/* Optional: category filters (future) */}
        {false && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['All', 'Regulatory', 'Health', 'Motor', 'Property', 'Liability', 'SMB'].map(
              (t, i) => (
                <button
                  key={t}
                  type="button"
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    i === 0
                      ? 'bg-si-primary-400 hover:bg-si-primary-400 border-blue-600 text-white'
                      : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {t}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
