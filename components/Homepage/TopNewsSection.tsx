import Link from 'next/link';
import TopNewsCarousel from '@/components/top-news-carousel';

export default function TopNewsSection() {
  return (
    <section id="top-news" className="relative isolate py-20 md:py-28">
      {/* Background patterns */}
      <div className="bg-pattern-grid absolute inset-0 opacity-25" />
      <div className="to-si-primary-200/40 pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <span className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
              News, Decoded
            </span>
            <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
              Not caught up? We&apos;ve got you.
            </h2>
            <p className="text-si-ink/80 mt-3 text-lg leading-relaxed">
              Our team distills complex insurance and risk headlines into punchy explainers— what
              happened, why it matters, and what you should do next.
            </p>
          </div>

          <div className="lg:mt-2">
            <div className="card-vibrant shadow-vibrant-blue hover-lift rounded-xl p-6">
              <div className="text-si-ink/60 mb-2 text-sm font-medium">What you&apos;ll find</div>
              <ul className="text-si-ink/80 grid gap-2 text-sm sm:grid-cols-2">
                <li className="flex items-center gap-2">
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
                  Impact on premiums & coverage
                </li>
                <li className="flex items-center gap-2">
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
                  Regulatory updates (IRDAI & more)
                </li>
                <li className="flex items-center gap-2">
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
                  Sector-wise implications
                </li>
                <li className="flex items-center gap-2">
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
                  Clear actionables
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <TopNewsCarousel />
        </div>

        {/* CTA strip */}
        <div className="card-vibrant hover-lift mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="accent-bar-gradient h-3 w-14" />
            <p className="text-si-ink/80 text-sm">
              Updated weekly • Editor&apos;s picks • No jargon
            </p>
          </div>
          <Link
            href="/news"
            className="bg-si-primary hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-semibold text-white"
          >
            Browse All News
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
