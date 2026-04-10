'use client';

import React from 'react';
import Link from 'next/link';
import { FadeUp, FadeIn, Stagger, Item } from '@/components/motion';

const JOB_OPENINGS = [
  {
    id: 1,
    title: 'Senior Insurance Underwriter',
    department: 'Underwriting',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5–8 years',
    salary: '₹12–18 LPA',
    description:
      'Lead underwriting decisions for commercial insurance products and mentor junior underwriters.',
    skills: ['Commercial Insurance', 'Risk Assessment', 'Financial Analysis', 'Team Leadership'],
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Claims Manager – Infrastructure',
    department: 'Claims',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '6–10 years',
    salary: '₹15–22 LPA',
    description:
      'Manage complex infrastructure insurance claims and coordinate with engineering teams.',
    skills: [
      'Claims Management',
      'Infrastructure Insurance',
      'Engineering Knowledge',
      'Negotiation',
    ],
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '2–4 years',
    salary: '₹6–10 LPA',
    description:
      'Drive new business acquisition and maintain relationships with corporate clients.',
    skills: ['Sales', 'Client Relationship', 'Insurance Products', 'Communication'],
    posted: '3 days ago',
  },
  {
    id: 4,
    title: 'Risk Assessment Analyst',
    department: 'Risk Management',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '3–5 years',
    salary: '₹8–12 LPA',
    description:
      'Analyse and assess risks for various industry sectors and develop risk mitigation strategies.',
    skills: ['Risk Analysis', 'Data Analytics', 'Industry Knowledge', 'Report Writing'],
    posted: '5 days ago',
  },
  {
    id: 5,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '2–4 years',
    salary: '₹5–8 LPA',
    description:
      'Develop and execute digital marketing campaigns to enhance brand presence and lead generation.',
    skills: ['Digital Marketing', 'SEO/SEM', 'Content Marketing', 'Analytics'],
    posted: '1 week ago',
  },
  {
    id: 6,
    title: 'Actuarial Analyst',
    department: 'Actuarial',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    experience: '1–3 years',
    salary: '₹6–9 LPA',
    description:
      'Support pricing and product development through statistical analysis and modeling.',
    skills: ['Statistics', 'Actuarial Science', 'Excel/R/Python', 'Insurance Mathematics'],
    posted: '4 days ago',
  },
];

const DEPT_COLORS: Record<string, string> = {
  Underwriting: 'bg-blue-50 text-blue-700 border-blue-200',
  Claims: 'bg-red-50 text-red-700 border-red-200',
  Sales: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Risk Management': 'bg-violet-50 text-violet-700 border-violet-200',
  Marketing: 'bg-amber-50 text-amber-700 border-amber-200',
  Actuarial: 'bg-cyan-50 text-cyan-700 border-cyan-200',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero banner ── */}
      <div className="from-si-primary/8 border-b border-gray-100 bg-gradient-to-br to-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              Careers
            </span>
            <h1 className="text-si-ink text-4xl font-extrabold md:text-5xl">
              Build Your Career <span className="text-gradient-primary">with SIIB</span>
            </h1>
            <p className="text-si-ink/70 mt-4 max-w-2xl text-lg leading-relaxed">
              Join India&apos;s trusted insurance brokerage and be part of a team that&apos;s
              transforming how businesses and families protect their futures.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { value: '6', label: 'Open Positions' },
                { value: '5', label: 'Office Locations' },
                { value: '25+', label: 'Avg Team Experience' },
                { value: '100%', label: 'Growth Focus' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="border-si-primary/10 rounded-2xl border bg-white px-5 py-3"
                >
                  <div className="text-si-primary text-xl font-extrabold">{value}</div>
                  <div className="text-si-ink/60 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Job Listings ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-si-ink text-2xl font-bold">Current Openings</h2>
              <p className="text-si-ink/60 mt-1 text-sm">
                Find your next opportunity and join our growing team
              </p>
            </div>
          </FadeUp>

          <Stagger staggerChildren={0.07}>
            <div className="space-y-4">
              {JOB_OPENINGS.map((job) => (
                <Item key={job.id}>
                  <article className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${DEPT_COLORS[job.department] ?? 'border-gray-200 bg-gray-50 text-gray-600'}`}
                          >
                            {job.department}
                          </span>
                          <span className="text-si-ink/40 text-xs">{job.posted}</span>
                        </div>

                        <h3 className="text-si-ink group-hover:text-si-primary text-lg font-bold transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-si-ink/60 mt-2 text-sm leading-relaxed">
                          {job.description}
                        </p>

                        <div className="text-si-ink/50 mt-3 flex flex-wrap gap-3 text-xs">
                          <span className="flex items-center gap-1">📍 {job.location}</span>
                          <span className="flex items-center gap-1">🕐 {job.type}</span>
                          <span className="flex items-center gap-1">🎓 {job.experience}</span>
                          <span className="flex items-center gap-1">💰 {job.salary}</span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-si-ink/60 rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium ring-1 ring-black/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-2 lg:flex-col xl:flex-row">
                        <button className="btn-ghost rounded-xl px-4 py-2 text-sm font-semibold">
                          View Details
                        </button>
                        <button className="btn-primary inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold">
                          Apply Now
                          <svg
                            className="h-3.5 w-3.5"
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
                        </button>
                      </div>
                    </div>
                  </article>
                </Item>
              ))}
            </div>
          </Stagger>

          <FadeUp delay={0.15}>
            <div className="mt-10 text-center">
              <button className="btn-ghost rounded-xl px-8 py-3 font-semibold">
                Load More Positions
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Why SIIB ── */}
      <FadeIn>
        <section className="border-t border-gray-100 bg-si-primary-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-si-ink text-2xl font-bold">Why Join SIIB?</h2>
            </div>
            <Stagger staggerChildren={0.07}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    emoji: '🚀',
                    title: 'Growth Opportunities',
                    desc: 'Fast-track your career with mentorship programs and leadership development.',
                  },
                  {
                    emoji: '🤝',
                    title: 'Collaborative Culture',
                    desc: 'Work with passionate professionals in a supportive and inclusive environment.',
                  },
                  {
                    emoji: '💡',
                    title: 'Innovation Focus',
                    desc: 'Be part of digital transformation and innovative insurance solutions.',
                  },
                  {
                    emoji: '⚖️',
                    title: 'Work–Life Balance',
                    desc: 'Flexible arrangements and comprehensive benefits for your well-being.',
                  },
                ].map(({ emoji, title, desc }) => (
                  <Item key={title}>
                    <div className="hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                      <div className="mb-3 text-3xl">{emoji}</div>
                      <h3 className="text-si-ink font-bold">{title}</h3>
                      <p className="text-si-ink/60 mt-2 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </Item>
                ))}
              </div>
            </Stagger>

            <FadeUp delay={0.15}>
              <div className="from-si-primary to-si-primary-600 mt-12 overflow-hidden rounded-2xl bg-gradient-to-r p-8 text-white md:p-10">
                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold">Don&apos;t see the right role?</h3>
                    <p className="mt-2 text-blue-100">
                      Send us your resume and we&apos;ll keep you in mind for future opportunities.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="btn-ghost text-si-ink inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold"
                    >
                      Contact HR
                    </Link>
                    <button className="inline-flex items-center justify-center rounded-xl bg-white/20 px-6 py-3 font-semibold text-white transition-all hover:bg-white/30">
                      Submit Resume
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
