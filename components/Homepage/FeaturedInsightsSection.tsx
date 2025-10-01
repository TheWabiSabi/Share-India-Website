import Link from 'next/link';
import MainCaraousel from '@/components/main-caraousel';

export default function FeaturedInsightsSection() {
  return (
    <section
      id="featured-insights"
      className="from-si-primary-200 relative bg-gradient-to-t to-transparent py-10 md:py-16"
    >
      {/* Background patterns */}
      <div className="bg-pattern-dots absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
            Insights
          </span>
          <h3 className="text-3xl leading-tight font-semibold text-slate-900 sm:text-4xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-700/80 sm:text-lg">
            Expert explainers from Share India Brokers—market trends, risk solutions, and how policy
            changes affect businesses and families in India.
          </p>
        </div>

        {/* Quick filters */}
        {/* <div className="mb-6 flex flex-wrap items-center gap-2 py-8">
          {['All', 'Regulatory', 'Health', 'Motor', 'Property', 'Liability', 'SMB'].map((t, i) => (
            <button
              key={t}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                i === 0
                  ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                  : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
              }`}
              type="button"
            >
              {t}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span className="text-slate-600">Sort by</span>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-50"
            >
              Latest
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div> */}

        {/* Carousel */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <MainCaraousel color="blue" layout={1} />
        </div>

        {/* CTA strip */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-3 w-14 bg-gradient-to-r from-slate-300 to-blue-300/60" />
            <p className="text-sm text-slate-700/80">
              Curated weekly by our brokerage team • No jargon, just outcomes
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
          >
            Explore All Insights
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
