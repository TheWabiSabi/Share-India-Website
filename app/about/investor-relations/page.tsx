'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeUp, FadeIn } from '@/components/motion';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Document {
  title: string;
  subtitle?: string;
  filename: string;
  label: string;
  size?: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tabs: Tab[];
}

interface Tab {
  id: string;
  label: string;
  documents: Document[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    id: 'annual-return',
    title: 'Annual Return',
    description:
      'Statutory annual returns filed with the Registrar of Companies as required under the Companies Act, 2013.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    tabs: [
      {
        id: 'fy2024-25',
        label: 'F.Y. 2024–25',
        documents: [
          {
            title: 'Annual Return for the Financial Year 2024–25',
            subtitle: 'Form MGT-7 — Duly Signed',
            filename: 'annual-return-mgt7-fy2024-25.pdf',
            label: 'Download MGT-7',
            size: '1.71 MB',
          },
        ],
      },
    ],
  },
  {
    id: 'notices',
    title: 'Notices',
    description:
      'Official notices issued to shareholders and stakeholders for General Meetings and other statutory communications.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    tabs: [
      {
        id: 'fy2025-26',
        label: 'F.Y. 2025–26',
        documents: [
          {
            title: 'Notice of the 7th Annual General Meeting',
            subtitle: 'F.Y. 2025–26',
            filename: 'notice-7th-agm-fy2025-26.pdf',
            label: 'Download Notice',
            size: '2.24 MB',
          },
          {
            title: 'Notice of the 1st Extra-Ordinary General Meeting',
            subtitle: 'F.Y. 2025–26',
            filename: 'notice-1st-eogm-fy2025-26.pdf',
            label: 'Download Notice',
            size: '1.81 MB',
          },
        ],
      },
    ],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function DocumentCard({ doc }: { doc: Document }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      {/* Icon + text */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
          {/* PDF icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 13h6m-6 3h4"
            />
          </svg>
        </div>
        <div>
          <p className="text-si-ink leading-snug font-semibold">{doc.title}</p>
          {doc.subtitle && <p className="text-si-ink/55 mt-0.5 text-sm">{doc.subtitle}</p>}
          {doc.size && (
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
              PDF · {doc.size}
            </span>
          )}
        </div>
      </div>

      {/* Download CTA */}
      <a
        href={`/pdfs/${doc.filename}`}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="bg-si-primary hover:bg-si-primary-600 inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:shadow-md"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        {doc.label}
      </a>
    </div>
  );
}

function SectionPanel({ section }: { section: Section }) {
  const [activeTab, setActiveTab] = useState(section.tabs[0].id);
  const currentTab = section.tabs.find((t) => t.id === activeTab)!;

  return (
    <div id={section.id} className="scroll-mt-24">
      {/* Section header */}
      <div className="mb-6 flex items-start gap-4">
        <div className="text-si-primary bg-si-primary/8 border-si-primary/15 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
          {section.icon}
        </div>
        <div>
          <h2 className="text-si-ink text-xl font-bold">{section.title}</h2>
          <p className="text-si-ink/60 mt-1 text-sm leading-relaxed">{section.description}</p>
        </div>
      </div>

      {/* Tabs (only shown if more than one) */}
      {section.tabs.length > 1 && (
        <div className="mb-5 flex gap-2 border-b border-gray-100 pb-px">
          {section.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'rounded-t-lg px-4 py-2 text-sm font-semibold transition-all',
                activeTab === tab.id
                  ? 'text-si-primary border-si-primary border-b-2 bg-white'
                  : 'text-si-ink/60 hover:text-si-ink',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Show fy label as a sub-badge if only one tab */}
      {section.tabs.length === 1 && (
        <div className="mb-4">
          <span className="text-si-primary border-si-primary/20 bg-si-primary/5 inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase">
            {section.tabs[0].label}
          </span>
        </div>
      )}

      {/* Documents */}
      <div className="space-y-4">
        {currentTab.documents.map((doc) => (
          <DocumentCard key={doc.filename} doc={doc} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestorRelationsPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="from-si-primary-50 relative border-b border-gray-100 bg-gradient-to-br to-white pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-si-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/about" className="hover:text-si-primary transition-colors">
                About
              </Link>
              <span>/</span>
              <span className="text-si-ink font-medium">Investor Relations</span>
            </nav>

            <div className="flex items-center gap-4">
              <div className="text-si-primary bg-si-primary/8 border-si-primary/15 hidden h-14 w-14 items-center justify-center rounded-xl border sm:flex">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-si-ink text-3xl font-extrabold tracking-tight md:text-4xl">
                  Investor Relations
                </h1>
                <p className="text-si-ink/60 mt-2 text-lg">
                  Share India Insurance Brokers Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-si-ink/70 mt-6 max-w-2xl text-[15px] leading-relaxed">
              Access our statutory filings, annual returns, and general meeting notices. We are
              committed to transparency and compliance in all our corporate disclosures.
            </p>

            {/* Compliance badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-green-700">
                All documents are statutory filings per the Companies Act, 2013
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
            {/* ── Sidebar nav ── */}
            <aside className="lg:col-span-1">
              <FadeIn>
                <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <p className="text-si-ink/40 mb-3 px-2 text-[11px] font-bold tracking-wider uppercase">
                    Sections
                  </p>
                  <nav className="space-y-1">
                    {SECTIONS.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(s.id);
                          document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={[
                          'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all',
                          activeSection === s.id
                            ? 'text-si-primary bg-si-primary/8'
                            : 'text-si-ink/70 hover:text-si-ink hover:bg-gray-50',
                        ].join(' ')}
                      >
                        <span
                          className={activeSection === s.id ? 'text-si-primary' : 'text-si-ink/40'}
                        >
                          {s.icon}
                        </span>
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </FadeIn>
            </aside>

            {/* ── Content ── */}
            <main className="lg:col-span-3">
              <div className="space-y-12">
                {SECTIONS.map((section, i) => (
                  <FadeIn key={section.id} delay={i * 0.06}>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 md:p-8">
                      <SectionPanel section={section} />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
