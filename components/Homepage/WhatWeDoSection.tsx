import Link from 'next/link';
import { memo } from 'react';

/*****************************
 * 2) WHAT WE DO (contrast box)
 *****************************/

const ShieldIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
    />
    <path strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
));
ShieldIcon.displayName = 'ShieldIcon';

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

const ChevronIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
ChevronIcon.displayName = 'ChevronIcon';

const Bullet = memo(() => (
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500/70 ring-2 ring-blue-500/10" />
));
Bullet.displayName = 'Bullet';

const FEATURES = [
  'Personal Claim Support',
  'Tailored wording & endorsements',
  'Proactive Claims strategy',
  'Digital policy & renewals',
];

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative isolate scroll-mt-[var(--header-h,4rem)] bg-gradient-to-t from-white to-white py-16 sm:py-16 lg:py-20"
      aria-label="What we do at Share India"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Contrast card wrapper */}
        <div className="relative rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-sm ring-1 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60 sm:p-7 lg:p-10">
          {/* Soft top stripe */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-cyan-400/20" />

          {/* Header + Reasons */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Header copy */}
            <div className="max-w-2xl flex-1">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 uppercase backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500/70" />
                What We Do
              </span>

              <h2 className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900">
                Share India prioritises{' '}
                <span className="bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
                  outcomes
                </span>{' '}
                first
              </h2>

              <p className="mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/90">
                We advise, place, and service cover across leading Indian insurers—backed by claims
                advocacy and data-driven risk insights—so you can buy with confidence and recover
                faster.
              </p>
            </div>

            {/* Why choose us card */}
            <div className="max-w-xl">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600/80">
                    <ShieldIcon />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500">Why clients choose us</div>
                    <ul className="mt-2 grid gap-2 text-[clamp(13px,2.8vw,16px)] text-slate-800 sm:grid-cols-2">
                      {FEATURES.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Bullet /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Pillars Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Advisory & Placement',
                icon: (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                ),
                lines: [
                  'Market scans, best-fit quotes, negotiation',
                  'Property, Marine, Liability',
                  'Health & Group Benefits',
                ],
              },
              {
                title: 'Claims Advocacy',
                icon: (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                ),
                lines: [
                  'Strategy, documentation, follow-through',
                  'Dedicated claims desk',
                  'Faster TAT with liaisons',
                ],
              },
              {
                title: 'Risk Engineering',
                icon: (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h18M12 3v18"
                    />
                  </svg>
                ),
                lines: [
                  'Surveys, loss-prevention, underwriting fit',
                  'FM & statutory compliance',
                  'Catastrophe & cyber posture',
                ],
              },
              {
                title: 'Digital Tools',
                icon: (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7h16M4 12h10M4 17h7"
                    />
                  </svg>
                ),
                lines: [
                  'Requests, vault, renewal tracking, analytics',
                  'Self-serve + assisted',
                  'API-ready for enterprise',
                ],
              },
            ].map(({ title, icon, lines }) => (
              <div
                key={title}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[clamp(14px,3.2vw,18px)] font-semibold text-slate-900">
                    {title}
                  </h3>
                  <div className="text-blue-600/80">{icon}</div>
                </div>
                <ul className="space-y-2 text-[clamp(13px,2.8vw,15px)] text-slate-700/90">
                  {lines.map((l) => (
                    <li key={l} className="flex items-center gap-2">
                      <Bullet /> {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-20 bg-gradient-to-r from-slate-300 to-blue-300/50" />
              <p className="text-[clamp(13px,2.8vw,15px)] text-slate-700/90">
                Access to <strong className="text-slate-900">40+ insurers</strong> • Issue within{' '}
                <strong className="text-slate-900">24–48h</strong> • Dedicated claims support
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Get a Quote <ArrowIcon />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Read Insights <ChevronIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
