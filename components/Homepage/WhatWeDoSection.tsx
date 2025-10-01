import Link from 'next/link';
import { memo } from 'react';

/*****************************
 * 2) WHAT WE DO (Keep this LOWER on the page — after Solutions grid)
 *****************************/

const ShieldIcon = memo(() => (
  <svg
    className="h-[1.8vw] min-h-[18px] w-[1.8vw] min-w-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
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

const FEATURES = [
  'Personal Claim Support', // avoid \"compare\" phrasing
  'Tailored wording & endorsements',
  'Proactive Claims strategy',
  'Digital policy & renewals',
];

const ArrowIcon = memo(() => (
  <svg
    className="h-[1.6vw] min-h-[18px] w-[1.6vw] min-w-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
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
  <svg
    className="h-[1.6vw] min-h-[18px] w-[1.6vw] min-w-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
ChevronIcon.displayName = 'ChevronIcon';

const Bullet = memo(() => (
  <span className="inline-block h-[0.6vw] min-h-[6px] w-[0.6vw] min-w-[6px] rounded-full bg-blue-500/60" />
));
Bullet.displayName = 'Bullet';

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="to-si-primary-200 relative overflow-hidden bg-gradient-to-t from-white py-[8vh]"
    >
      <div className="relative mx-auto max-w-[min(92vw,1400px)] px-[4vw]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-[3vw] lg:flex-row">
          <div className="max-w-[48ch] flex-1">
            <span className="mb-[1.2vh] inline-flex items-center gap-[0.7vw] rounded-full border border-slate-200 bg-white/70 px-[1.2vw] py-[0.6vw] text-[clamp(10px,0.95vw,14px)] font-semibold tracking-wider text-slate-700 uppercase backdrop-blur-sm">
              <span className="h-[0.7vw] min-h-[8px] w-[0.7vw] min-w-[8px] rounded-full bg-blue-500/60" />
              What We Do
            </span>
            <h2 className="text-[clamp(22px,3.6vw,52px)] leading-[1.1] font-semibold text-slate-900">
              Share India prioritises{' '}
              <span className="bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
                outcomes
              </span>{' '}
              first
            </h2>
            <p className="mt-[1.6vh] text-[clamp(13px,1.25vw,18px)] leading-[clamp(20px,2.1vw,32px)] text-slate-700/85">
              We advise, place, and service cover across leading Indian insurers—backed by claims
              advocacy and data‑driven risk insights—so you can buy with confidence and recover
              faster.
            </p>
          </div>

          {/* Why choose us */}
          <div className="max-w-[52ch] lg:mt-[0.6vh]">
            <div className="rounded-[1.2vw] border border-slate-200 bg-white p-[1.6vw] shadow-sm">
              <div className="flex items-start gap-[1.2vw]">
                <ShieldIcon />
                <div>
                  <div className="text-[clamp(11px,1.0vw,16px)] font-medium text-slate-500">
                    Why clients choose us
                  </div>
                  <ul className="mt-[0.8vh] grid gap-[0.6vh] text-[clamp(11px,1.0vw,16px)] text-slate-700/90 sm:grid-cols-2">
                    {FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-[0.6vw]">
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
        <div className="mt-[4.5vh] grid grid-cols-1 gap-[1.6vw] sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Advisory & Placement',
              icon: (
                <svg
                  className="h-[1.4vw] min-h-[16px] w-[1.4vw] min-w-[16px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                'Market scans, best‑fit quotes, negotiation',
                'Property, Marine, Liability',
                'Health & Group Benefits',
              ],
            },
            {
              title: 'Claims Advocacy',
              icon: (
                <svg
                  className="h-[1.4vw] min-h-[16px] w-[1.4vw] min-w-[16px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                'Strategy, documentation, follow‑through',
                'Dedicated claims desk',
                'Faster TAT with liaisons',
              ],
            },
            {
              title: 'Risk Engineering',
              icon: (
                <svg
                  className="h-[1.4vw] min-h-[16px] w-[1.4vw] min-w-[16px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                'Surveys, loss‑prevention, underwriting fit',
                'FM & statutory compliance',
                'Catastrophe & cyber posture',
              ],
            },
            {
              title: 'Digital Tools',
              icon: (
                <svg
                  className="h-[1.4vw] min-h-[16px] w-[1.4vw] min-w-[16px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
                'Self‑serve + assisted',
                'API‑ready for enterprise',
              ],
            },
          ].map(({ title, icon, lines }) => (
            <div
              key={title}
              className="rounded-[1.2vw] border border-slate-200 bg-white p-[1.6vw] shadow-sm"
            >
              <div className="mb-[1.2vh] flex items-center justify-between">
                <h3 className="text-[clamp(14px,1.3vw,20px)] font-semibold text-slate-900">
                  {title}
                </h3>
                <div className="text-blue-600/80">{icon}</div>
              </div>
              <ul className="space-y-[0.6vh] text-[clamp(11px,1.05vw,16px)] text-slate-700/80">
                {lines.map((l) => (
                  <li key={l} className="flex items-center gap-[0.6vw]">
                    <Bullet /> {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-[4.5vh] flex flex-wrap items-center justify-between gap-[1vw] rounded-[1.2vw] border border-slate-200 bg-white px-[1.6vw] py-[1.2vw] shadow-sm">
          <div className="flex items-center gap-[0.9vw]">
            <div className="h-[0.6vw] min-h-[6px] w-[8vw] bg-gradient-to-r from-slate-300 to-blue-300/50" />
            <p className="text-[clamp(11px,1.05vw,16px)] text-slate-700/85">
              Access to <strong className="text-slate-900">40+ insurers</strong> • Issue within{' '}
              <strong className="text-slate-900">24–48h</strong> • Dedicated claims support
            </p>
          </div>
          <div className="flex gap-[0.8vw]">
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-[0.6vw] rounded-[0.9vw] bg-slate-900 px-[1.3vw] py-[0.8vw] text-[clamp(11px,1.0vw,16px)] font-medium text-white hover:bg-slate-800"
            >
              Get a Quote <ArrowIcon />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-[0.6vw] rounded-[0.9vw] border border-slate-300 bg-white px-[1.2vw] py-[0.8vw] text-[clamp(11px,1.0vw,16px)] font-medium text-slate-800 hover:bg-slate-50"
            >
              Read Insights <ChevronIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
