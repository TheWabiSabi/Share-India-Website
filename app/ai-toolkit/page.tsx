'use client';

import React from 'react';
import Link from 'next/link';
import { FadeUp, FadeIn, FlyIn } from '@/components/motion';
import { PageSection } from '@/components/ui/page-section';

// ─── Tools ────────────────────────────────────────────────────────────────────

const TOOLS = [
  {
    id: 'policywise',
    name: 'PolicyWise',
    tag: 'AI Policy Analysis',
    tagline: 'Understand any policy in seconds.',
    description:
      'PolicyWise uses AI to instantly analyze and compare health insurance policies. Upload any document and get a plain-language breakdown of coverage, exclusions, and critical gaps — no jargon, no guesswork.',
    url: 'https://policywise.shareindiainsurance.com',
    cta: 'Open PolicyWise',
    features: [
      'Instant document analysis',
      'Side-by-side plan comparison',
      'Coverage gap detection',
      'Client-ready reports',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 'cyrus',
    name: 'Cyrus',
    tag: 'Cyber Risk Underwriting',
    tagline: 'Audit cyber risk with confidence.',
    description:
      "Cyrus is an enterprise-grade cyber risk underwriting system. It runs encrypted audit sessions to assess an organization's cyber exposure, compliance posture, and risk score — all in a secure, logged environment.",
    url: 'https://cyrus.shareindiainsurance.com',
    cta: 'Open Cyrus',
    features: [
      'Automated cyber risk assessment',
      'End-to-end encrypted sessions',
      'Compliance gap detection',
      'Real-time security scoring',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 'insurebot',
    name: 'InsureBot',
    tag: 'AI Life Insurance Advisor',
    tagline: 'The right life cover, recommended by AI.',
    description:
      'InsureBot analyzes your life stage, income, and goals to recommend personalized term life insurance plans. It compares options across insurers and explains each recommendation in simple terms.',
    url: 'https://insurebot.shareindiainsurance.com',
    cta: 'Open InsureBot',
    features: [
      'Personalized plan recommendations',
      'Multi-insurer comparison',
      'Premium affordability check',
      'Life stage-based guidance',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 'riskgo',
    name: 'RiskGo',
    tag: 'Commercial Risk Assessment',
    tagline: 'Commercial inspections, scored in one place.',
    description:
      'RiskGo powers commercial risk assessment inspections. Sign in, enter your company details, and the platform runs a structured risk assessment — producing a clear risk score you can act on.',
    url: 'https://riskgo.shareindiainsurance.com',
    cta: 'Open RiskGo',
    features: [
      'Secure login and company onboarding',
      'Commercial risk inspection workflow',
      'Automated risk assessment',
      'Generated risk score reports',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

// ─── Alternating section backgrounds ──────────────────────────────────────────
// bg-si-primary-50 (#eff9ff) ↔ white

export default function AIToolkitPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Header ── */}
      <section className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-si-primary border-si-primary/20 bg-si-primary/8 mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              Share India
            </span>
          </FadeIn>
          <FadeUp delay={0.06}>
            <h1 className="text-si-ink text-4xl font-extrabold tracking-tight md:text-6xl">
              AI Toolkit
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-si-ink/60 mx-auto mt-4 max-w-xl text-lg leading-relaxed">
              Four intelligent tools built to simplify insurance — for advisors, businesses, and
              individuals alike.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Tools — alternating bg ── */}
      {TOOLS.map((tool, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven
          ? 'bg-gradient-to-b from-white to-si-primary-200'
          : 'bg-gradient-to-b from-si-primary-200 to-white';

        return (
          <PageSection key={tool.id} id={tool.id} className={`${bg} border-b border-gray-100`}>
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}
            >
              {/* Text */}
              <FlyIn dir={isEven ? 'right' : 'left'} delay={0.04}>
                <div>
                  <span className="text-si-primary border-si-primary/20 bg-si-primary/8 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
                    <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
                    {tool.tag}
                  </span>

                  <h2 className="text-si-ink mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">
                    {tool.name}
                  </h2>
                  <p className="text-si-primary mt-1 text-base font-semibold">{tool.tagline}</p>

                  <p className="text-si-ink/65 mt-5 text-base leading-relaxed">
                    {tool.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {tool.features.map((f) => (
                      <li key={f} className="text-si-ink/70 flex items-start gap-2.5 text-sm">
                        <svg
                          className="text-si-primary mt-0.5 h-4 w-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary hover-lift inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
                    >
                      {tool.cta}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </FlyIn>

              {/* Visual card */}
              <FlyIn dir={isEven ? 'left' : 'right'} delay={0.08}>
                <div className="border-si-primary/10 hover-lift flex flex-col gap-4 rounded-2xl border bg-white p-6 transition-all hover:shadow-md lg:p-8">
                  {/* Icon header */}
                  <div className="flex items-center gap-4">
                    <div className="text-si-primary bg-si-primary/8 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform hover:scale-105">
                      {tool.icon}
                    </div>
                    <div>
                      <div className="text-si-ink text-lg font-bold">{tool.name}</div>
                      <div className="text-si-ink/45 text-xs">{tool.tag}</div>
                    </div>
                  </div>

                  {/* Feature pills */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tool.features.map((f) => (
                      <span
                        key={f}
                        className="border-si-primary/15 bg-si-primary/5 text-si-ink/70 rounded-full border px-3 py-1 text-xs font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA strip */}
                  <div className="border-si-primary/10 bg-si-primary-50 mt-2 flex items-center justify-between rounded-xl border px-4 py-3">
                    <span className="text-si-ink/55 text-xs">shareindiainsurance.com</span>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-si-primary inline-flex items-center gap-1 text-xs font-bold hover:underline"
                    >
                      Launch
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </FlyIn>
            </div>
          </PageSection>
        );
      })}

      {/* ── Footer CTA ── */}
      <section className="bg-si-primary-200 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-si-ink text-2xl font-bold md:text-3xl">
              Questions? Talk to our team.
            </h2>
            <p className="text-si-ink/60 mx-auto mt-3 max-w-sm text-base">
              We can walk you through each tool and help you pick the right one for your needs.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
              >
                Learn about us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
