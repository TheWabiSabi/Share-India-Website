import Link from 'next/link';
import Image from 'next/image';
import HorizontalCarousal from './about/_components/horizontalCarousal';
import FeaturedCarousel from './insights/_components/featured-section/featured-caraousel';
import TopNewsCarousel from '@/components/top-news-carousel';

import { FadeUp, Stagger, Item } from '@/components/motion';
import './style.css';

export default function HomePage() {
  return (
    <main className="text-si-dark bg-white font-sans">
      {/* Hero – Insurance Broker focused */}
      <section className="bg-si-bg section-spot section-divider-bottom relative isolate">
        <div className="hero-grid absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/0" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="grid min-h-[86vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
            {/* Left */}
            <FadeUp>
              <div className="max-w-2xl">
                <div className="bg-si-primary/10 text-si-primary float-slow mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                  <span className="bg-si-primary h-2 w-2 rounded-full" />
                  IRDAI-licensed Insurance Brokers
                </div>

                <h1 className="text-si-ink text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                  Insurance, Simplified.
                </h1>

                <p className="text-si-ink/80 mt-5 max-w-xl text-lg leading-relaxed">
                  Share India Brokers compares policies across leading insurers, negotiates better
                  terms, and stands with you at claims—so businesses and families can focus on what
                  matters.
                </p>

                <Stagger>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Motor', 'Health', 'Property', 'Marine', 'Liability', 'Cyber', 'Travel'].map(
                      (t) => (
                        <Item key={t}>
                          <span className="badge-chip">{t}</span>
                        </Item>
                      ),
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Item>
                      <Link href="/contact?type=quote" className="btn-primary">
                        Get a Quote
                        <svg
                          className="h-5 w-5"
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
                      </Link>
                    </Item>
                    <Item>
                      <Link href="#what-we-do" className="btn-ghost">
                        Explore Solutions
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </Item>
                  </div>
                </Stagger>

                <Stagger>
                  <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
                    {[
                      { k: '1,500+', v: 'Claims handled' },
                      { k: '40+', v: 'Insurer partners' },
                      { k: '24–48h', v: 'Policy issuance' },
                    ].map((x) => (
                      <Item key={x.v}>
                        <div>
                          <div className="bg-si-red mb-1 h-1 w-10" />
                          <div className="text-si-ink text-2xl font-semibold">{x.k}</div>
                          <div className="text-si-ink/70 text-sm">{x.v}</div>
                        </div>
                      </Item>
                    ))}
                  </div>
                </Stagger>
              </div>
            </FadeUp>

            {/* Right visual */}
            <FadeUp delay={0.1}>
              <div className="relative">
                <div className="bg-si-primary/10 absolute -inset-6 rounded-3xl blur-2xl" />
                <div className="shadow-elevate relative rounded-2xl border border-slate-200 bg-white p-6">
                  <Image
                    src="/about-img/meeting.png"
                    alt="Advisors comparing policies and negotiating better terms"
                    width={960}
                    height={720}
                    className="h-auto w-full rounded-xl object-cover"
                    priority
                  />
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg border border-slate-200 bg-white p-3">
                      <div className="text-si-ink/60 text-xs">Avg. savings (SMB)</div>
                      <div className="text-si-ink text-lg font-semibold">12–18%</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3">
                      <div className="text-si-ink/60 text-xs">Claims NPS</div>
                      <div className="text-si-ink text-lg font-semibold">+62</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        id="what-we-do"
        className="bg-si-bg section-divider-top section-divider-bottom relative isolate overflow-hidden py-20 md:py-28"
      >
        <div className="from-si-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

        <HorizontalCarousal />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            <div className="max-w-xl flex-1">
              <span className="bg-si-primary/10 text-si-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
                What We Do
              </span>
              <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
                Insurance brokerage that puts <span className="text-si-primary">outcomes</span>{' '}
                first
              </h2>
              <p className="text-si-ink/80 mt-4 text-lg leading-relaxed">
                We advise, place, and service cover across leading Indian insurers—backed by claims
                advocacy and data-driven risk insights—so you can buy with confidence and recover
                faster.
              </p>
            </div>

            {/* Why choose us */}
            <div className="max-w-2xl lg:mt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  {/* shield icon */}
                  <svg
                    className="text-si-primary mt-1 h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
                    />
                    <path
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <div>
                    <div className="text-si-ink/60 text-sm font-medium">Why clients choose us</div>
                    <ul className="text-si-ink/80 mt-2 grid gap-2 text-sm sm:grid-cols-2">
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
                        40+ insurer panel
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
                        Tailored wording & endorsements
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
                        Proactive claims strategy
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
                        Digital policy & renewals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Advisory & Placement */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-si-ink text-lg font-semibold">Advisory &amp; Placement</h3>
                <svg
                  className="text-si-primary h-5 w-5"
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
              </div>
              <p className="text-si-ink/75 text-sm">
                Market scans, competitive quotes, and negotiation for best-fit cover.
              </p>
              <ul className="text-si-ink/80 mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Property, Marine,
                  Liability
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Health &amp; Group
                  Benefits
                </li>
              </ul>
            </div>

            {/* Claims Advocacy */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-si-ink text-lg font-semibold">Claims Advocacy</h3>
                <svg
                  className="text-si-primary h-5 w-5"
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
              </div>
              <p className="text-si-ink/75 text-sm">
                Strategy, documentation, and follow-through until your claim is settled.
              </p>
              <ul className="text-si-ink/80 mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Dedicated claims desk
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Faster TAT with
                  insurer liaisons
                </li>
              </ul>
            </div>

            {/* Risk Engineering */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-si-ink text-lg font-semibold">Risk Engineering</h3>
                <svg
                  className="text-si-primary h-5 w-5"
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
              </div>
              <p className="text-si-ink/75 text-sm">
                Site surveys, loss-prevention plans, and underwriting-friendly improvements.
              </p>
              <ul className="text-si-ink/80 mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> FM &amp; statutory
                  compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Catastrophe &amp;
                  cyber posture
                </li>
              </ul>
            </div>

            {/* Digital Tools */}
            <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-si-ink text-lg font-semibold">Digital Tools</h3>
                <svg
                  className="text-si-primary h-5 w-5"
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
              </div>
              <p className="text-si-ink/75 text-sm">
                Quote requests, policy vault, renewal tracking, and analytics dashboards.
              </p>
              <ul className="text-si-ink/80 mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> Self-serve + assisted
                  workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-si-red h-1.5 w-1.5 rounded-full"></span> API-ready for
                  enterprise
                </li>
              </ul>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-si-red h-2 w-12" />
              <p className="text-si-ink/80 text-sm">
                Compare policies across 40+ insurers • Issue within <strong>24–48h</strong> •
                Dedicated claims support
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact?type=quote" className="btn-primary">
                Get a Quote
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="/insights" className="btn-ghost">
                Read Insights
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Insights */}
      <section
        id="featured-insights"
        className="bg-si-lightblue section-spot-alt section-divider-bottom relative isolate py-20 md:py-28"
      >
        {/* soft brand wash */}
        <div className="from-si-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <span className="bg-si-primary/10 text-si-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              Insights
            </span>
            <h3 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
              Featured <span className="text-si-primary">Insights</span>
            </h3>
            <p className="text-si-ink/80 mt-4 text-base leading-relaxed sm:text-lg">
              Expert explainers from Share India Brokers—market trends, risk solutions, and how
              policy changes affect businesses and families in India.
            </p>
          </div>

          {/* Quick filters (non-functional placeholders—hook to your state if needed) */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {['All', 'Regulatory', 'Health', 'Motor', 'Property', 'Liability', 'SMB'].map(
              (t, i) => (
                <button
                  key={t}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    i === 0
                      ? 'border-si-primary bg-si-primary hover:bg-si-primary-600 text-white'
                      : 'text-si-ink border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                  type="button"
                >
                  {t}
                </button>
              ),
            )}
            <div className="ml-auto flex items-center gap-2 text-sm">
              <span className="text-si-ink/60">Sort by</span>
              <button
                type="button"
                className="text-si-ink inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50"
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
          </div>

          {/* Carousel */}
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <FeaturedCarousel />
          </div>

          {/* CTA strip */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-si-red h-2 w-12" />
              <p className="text-si-ink/80 text-sm">
                Curated weekly by our brokerage team • No jargon, just outcomes
              </p>
            </div>
            <Link
              href="/insights"
              className="bg-si-primary hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-semibold text-white"
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

      {/* Top News – crisp explainers */}
      <section
        id="top-news"
        className="bg-si-muted section-divider-top relative isolate py-20 md:py-28"
      >
        {/* soft brand wash */}
        <div className="from-si-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <span className="bg-si-primary/10 text-si-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
                News, Decoded
              </span>
              <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
                Not caught up? We’ve got you.
              </h2>
              <p className="text-si-ink/80 mt-3 text-lg leading-relaxed">
                Our team distills complex insurance and risk headlines into punchy explainers— what
                happened, why it matters, and what you should do next.
              </p>
            </div>

            <div className="lg:mt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-si-ink/60 mb-2 text-sm font-medium">What you’ll find</div>
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
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-si-red h-2 w-12" />
              <p className="text-si-ink/80 text-sm">Updated weekly • Editor’s picks • No jargon</p>
            </div>
            <Link
              href="/insights/news"
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

      {/* Awards & Testimonials */}
      <section
        id="awards-testimonials"
        className="bg-si-muted section-divider-top section-divider-bottom relative isolate py-20 md:py-28"
      >
        {/* soft brand wash */}
        <div className="from-si-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="bg-si-primary/10 text-si-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              Recognition & Trust
            </span>
            <h2 className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl">
              Awards & Testimonials
            </h2>
            <p className="text-si-ink/80 mx-auto mt-4 max-w-2xl text-base leading-relaxed">
              Celebrated for excellence, trusted by clients. Here’s what the industry and our
              partners say about us.
            </p>
          </div>

          {/* ===== Awards ===== */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: '2023',
                award: 'Best Insurance Broker – IRDAI Recognition',
                img: '/awards/trophy-1.svg',
              },
              {
                year: '2022',
                award: 'Excellence in Client Service – Insurance Today',
                img: '/awards/trophy-2.svg',
              },
              {
                year: '2021',
                award: 'Top 10 Brokerage Firms – Business India',
                img: '/awards/trophy-3.svg',
              },
              {
                year: '2020',
                award: 'Innovation in Claims Advocacy – FinServ Awards',
                img: '/awards/trophy-4.svg',
              },
            ].map((a) => (
              <div
                key={a.award}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* trophy placeholder you can replace */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={`${a.year} award`}
                    className="h-12 w-12 object-contain opacity-90"
                  />
                </div>

                <div className="bg-si-red mb-2 h-1 w-10" />
                <h3 className="text-si-ink text-xl font-semibold">{a.year}</h3>
                <p className="text-si-ink/70 mt-1 text-sm">{a.award}</p>
              </div>
            ))}
          </div>

          {/* ===== Testimonials ===== */}
          <div className="mt-10">
            <div className="mb-8 text-center">
              <h3 className="text-si-ink text-2xl font-semibold sm:text-3xl">
                What Our Clients Say
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Priya Menon',
                  role: 'CFO, TechNova Pvt Ltd',
                  text: 'Share India Brokers made our policy renewal seamless and negotiated significant savings without compromising coverage.',
                  avatar: '/placeholders/clients/priya.jpg',
                },
                {
                  name: 'Arjun Verma',
                  role: 'HR Head, Zenith Industries',
                  text: 'Their claims advocacy was exceptional—we felt supported throughout the entire process.',
                  avatar: '/placeholders/clients/arjun.jpg',
                },
                {
                  name: 'Kavita Iyer',
                  role: 'Founder, GreenEdge Retail',
                  text: 'We value their transparency and ability to simplify complex insurance products for growing businesses.',
                  avatar: '/placeholders/clients/kavita.jpg',
                },
              ].map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <blockquote className="text-si-ink/80 text-sm leading-relaxed">
                    “{t.text}”
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    {/* circular avatar */}
                    <div className="relative h-12 w-12 overflow-hidden rounded-full shadow ring-2 ring-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={`${t.name} photo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-si-ink font-semibold">{t.name}</div>
                      <div className="text-si-ink/60 text-xs">{t.role}</div>
                    </div>
                  </figcaption>

                  {/* red accent underline */}
                  <div className="bg-si-red mt-5 h-1 w-8" />
                </figure>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="bg-si-primary hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-black"
            >
              Become Our Next Success Story
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="section-divider-top bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 md:px-12">
          <h3 className="text-3xl font-semibold sm:text-4xl">Let’s Connect</h3>
          <p className="text-si-dark/80 mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Ready to take the next step? Our team of experts is here to help you navigate your
            journey with confidence.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Schedule a Call</h4>
              <p className="text-si-dark/70 mt-1 text-sm">Book a consultation with our advisors</p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Send a Message</h4>
              <p className="text-si-dark/70 mt-1 text-sm">
                Get in touch with questions or inquiries
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="bg-si-bluegreen/10 mx-auto mb-3 h-12 w-12 rounded-full" />
              <h4 className="text-lg font-semibold">Visit Our Office</h4>
              <p className="text-si-dark/70 mt-1 text-sm">
                Meet our team at our convenient locations
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              Connect With Our Team
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
    </main>
  );
}
