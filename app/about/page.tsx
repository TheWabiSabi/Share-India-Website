'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeUp, FadeIn, FlyIn, Stagger, Item } from '@/components/motion';
import { PageSection } from '@/components/ui/page-section';
import { SectionBadge } from '@/components/ui/section-badge';
import { ContactCard } from '@/components/ui/contact-card';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  TEAM_LEADERS,
  OPERATIONAL_TEAM,
  REGIONAL_TEAM,
  TEAM_VALUES,
  AWARDS,
  TESTIMONIALS,
} from './data';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTeamSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/^(mr\.|ms\.|mrs\.)\s+/i, '')
    .replace(/\s+/g, '-');
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[85dvh] items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/hero-background.webp"
            alt="Share India Insurance Brokers — Professional team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="via-si-ink/70 absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-900/85" />
          <div className="from-si-primary/10 absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-14 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <FadeIn>
                <div className="border-si-primary/30 bg-si-primary/15 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                  <svg
                    className="text-si-primary h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-blue-100">
                    IRDAI Licensed Insurance Brokers
                  </span>
                </div>
              </FadeIn>

              <FadeUp delay={0.06}>
                <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                  About{' '}
                  <span className="from-si-primary bg-gradient-to-r to-cyan-300 bg-clip-text text-transparent">
                    Share India
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.12}>
                <p className="mt-5 text-lg leading-relaxed text-gray-200 md:text-xl">
                  Protecting dreams, securing futures. We are passionate about creating exceptional
                  insurance experiences that inspire confidence and connect people with the right
                  protection for their unique needs.
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#our-story" className="btn-primary rounded-xl px-6 py-3 font-semibold">
                    Our Story
                  </a>
                  <a href="#our-team" className="btn-ghost rounded-xl px-6 py-3 font-semibold">
                    Meet Our Team
                  </a>
                </div>
              </FadeUp>

              <Stagger delay={0.22} staggerChildren={0.1}>
                <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
                  {[
                    { value: '25+', label: 'Years Experience' },
                    { value: '10+', label: 'Expert Members' },
                    { value: '21,000+', label: 'Retail Clients' },
                    { value: '24/7', label: 'Support' },
                  ].map(({ value, label }) => (
                    <Item key={label}>
                      <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm">
                        <div className="text-si-primary text-2xl font-extrabold md:text-3xl">
                          {value}
                        </div>
                        <div className="mt-1 text-xs text-gray-300">{label}</div>
                      </div>
                    </Item>
                  ))}
                </div>
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <PageSection
        id="our-story"
        className="from-si-primary-200 scroll-mt-20 border-b border-gray-100 bg-gradient-to-b to-white"
      >
        <FadeUp>
          <div className="mb-14 text-center">
            <SectionBadge>Our Story</SectionBadge>
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
              Building <span className="text-gradient-primary">Trust Since Day One</span>
            </h2>
            <p className="text-si-ink/70 mx-auto mt-4 max-w-3xl text-lg">
              At Share India Insurance Brokers, we exist to shape decisions for the better — to
              protect and enrich the lives of people across India.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FlyIn dir="right" delay={0.06}>
            <div className="border-si-primary/10 h-full rounded-2xl border bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
              <div className="border-si-primary/20 bg-si-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <svg
                  className="text-si-primary h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-si-primary text-sm font-semibold">Our Journey</span>
              </div>
              <h3 className="text-si-ink text-xl font-bold">A decade-plus of impact</h3>
              <p className="text-si-ink/70 mt-4 leading-relaxed">
                Our world has become more volatile — economically, socially and geopolitically —
                than ever before. In an interconnected world, organizations and individuals face
                complex decisions, sometimes without all the necessary facts, and almost always at
                speed.
              </p>
              <p className="text-si-ink/70 mt-4 leading-relaxed">
                At Share India, we&apos;ve been on a decade-plus journey to connect industry
                expertise with client need — through insurance brokerage, risk management, and
                claims advocacy — so our clients are better protected across their business
                strategies.
              </p>
            </div>
          </FlyIn>

          <FlyIn dir="left" delay={0.08}>
            <div className="space-y-4">
              {[
                {
                  title: 'Protection First',
                  desc: 'Comprehensive coverage for every risk, ensuring peace of mind for individuals and businesses.',
                  color: 'text-si-primary bg-si-primary/8 border-si-primary/15',
                },
                {
                  title: 'Trust & Transparency',
                  desc: 'Building lasting relationships through honesty, integrity, and clear communication.',
                  color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
                },
                {
                  title: 'Innovation & Excellence',
                  desc: 'Cutting-edge solutions and forward-thinking approaches for modern challenges.',
                  color: 'text-violet-600 bg-violet-50 border-violet-200',
                },
              ].map(({ title, desc, color }) => (
                <div
                  key={title}
                  className={`group flex items-start gap-4 rounded-xl border p-5 transition-all hover:shadow-md ${color}`}
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
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
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="mt-1 text-sm opacity-80">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FlyIn>
        </div>
      </PageSection>

      {/* ── Leadership ── */}
      <PageSection
        id="leadership"
        className="to-si-primary-200 scroll-mt-20 border-b border-gray-100 bg-gradient-to-b from-white"
      >
        <FadeUp>
          <div className="mb-14 text-center">
            <SectionBadge>Leadership</SectionBadge>
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
              Visionary <span className="text-gradient-primary">Leadership</span>
            </h2>
            <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
              Meet the leaders driving Share India Insurance Brokers towards excellence.
            </p>
          </div>
        </FadeUp>

        {/* CEO */}
        <FadeIn delay={0.08}>
          <div className="card-vibrant hover-glow-blue hover-lift overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
            <div className="border-si-primary/8 from-si-primary/5 h-1 w-full bg-gradient-to-r to-cyan-500/5" />
            <div className="accent-bar-gradient h-1 w-full" />
            <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-5 lg:p-12">
              <div className="flex justify-center lg:col-span-2 lg:justify-start">
                <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-4 border-white sm:max-w-sm">
                  <Image
                    src="/leadership/ajay-kumar.webp"
                    alt="Mr. Ajay Kumar Patel — CEO & Principal Officer"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:col-span-3">
                <div className="border-si-primary/20 bg-si-primary/5 mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2">
                  <svg className="text-si-primary h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-si-primary text-sm font-bold">25 Years of Excellence</span>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-si-ink text-2xl font-bold">
                    Leading with Vision & Expertise
                  </h3>
                  <a
                    href="https://linkedin.com/company/share-india-insurance-brokers-private-limited/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition-colors hover:text-blue-600"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="text-si-ink/70 mt-5 space-y-4 text-[15px] leading-relaxed">
                  <p>
                    Mr. Ajay Patel has 25 years of progressive experience in Manufacturing and
                    Insurance. Previously, he provided services to{' '}
                    <strong className="text-si-ink">Bajaj Auto, ICICI Prudential, IIFL</strong> and
                    others. He is a Mechanical Engineering graduate and holds an MBA in Operations.
                  </p>
                  <p>
                    Ajay brings excellence in Business Development, Strategy Implementation, and
                    exceptional team management. He has been associated with Share India Insurance
                    Brokers since its inception, driving growth and innovation at every step.
                  </p>
                </div>
                <div className="mt-7">
                  <div className="text-si-ink/40 mb-3 text-xs font-bold tracking-wider uppercase">
                    Core Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Business Development',
                      'Strategy Implementation',
                      'Team Management',
                      'Operations Excellence',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="border-si-primary/15 bg-si-primary/5 text-si-primary rounded-xl border px-3 py-1.5 text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </PageSection>

      {/* ── Our Team ── */}
      <PageSection
        id="our-team"
        className="from-si-primary-200 scroll-mt-20 border-b border-gray-100 bg-gradient-to-b to-white"
      >
        <FadeUp>
          <div className="mb-14 text-center">
            <SectionBadge>Our Team</SectionBadge>
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h2>
            <p className="text-si-ink/70 mx-auto mt-4 max-w-3xl text-lg">
              Our leadership team brings together decades of insurance expertise, combining deep
              industry knowledge with a commitment to exceptional client service.
            </p>
          </div>
        </FadeUp>

        {/* President */}
        <FadeIn delay={0.06}>
          <div className="card-vibrant hover-glow-blue hover-lift mx-auto mb-14 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all">
            <div className="accent-bar-gradient h-1 w-full" />
            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:p-10">
              <div className="flex justify-center md:col-span-1">
                <div className="relative aspect-square w-56 overflow-hidden rounded-xl border-4 border-white">
                  <Image
                    src="/team/sonam-gupta.png"
                    alt="Ms. Sonam Gupta — President"
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center md:col-span-2">
                <div className="btn-primary mb-3 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold">
                  President
                </div>
                <div className="flex items-center justify-between lg:justify-start lg:gap-4">
                  <h3 className="text-si-ink text-2xl font-bold">Ms. Sonam Gupta</h3>
                  <a
                    href="https://linkedin.com/company/share-india-insurance-brokers-private-limited/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition-colors hover:text-blue-600"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <p className="text-si-ink/70 mt-4 leading-relaxed">
                  Leads a team of insurance professionals with a strong focus on service quality,
                  operational excellence, and client-centric solutions. Under her leadership, Share
                  India Insurance Brokers continues to set new standards in the industry.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Leadership Excellence', 'Service Quality', 'Client-Centric'].map((tag) => (
                    <span
                      key={tag}
                      className="border-si-primary/15 bg-si-primary/5 text-si-primary rounded-lg border px-3 py-1 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Senior leaders */}
        <div className="mb-14">
          <FadeUp>
            <h3 className="text-si-ink mb-7 text-center text-xl font-bold">
              Senior Leadership Team
            </h3>
          </FadeUp>
          <Stagger staggerChildren={0.08}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM_LEADERS.map((m) => (
                <Item key={m.name}>
                  <div className="group card-vibrant hover-glow-blue hover-lift overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300">
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <Image
                        src={`/team/${getTeamSlug(m.name)}.png`}
                        alt={`${m.name} — ${m.role}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute right-0 bottom-0 left-0 p-4">
                        <span className="text-si-primary bg-si-primary/10 border-si-primary/20 rounded-full border px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                          {m.experience}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-si-ink text-lg font-bold">{m.name}</h4>
                      <p className="text-si-primary mt-0.5 text-sm font-semibold">{m.role}</p>
                      <p className="text-si-ink/60 mt-3 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>

        {/* Operational */}
        <div className="mb-14">
          <FadeUp>
            <h3 className="text-si-ink mb-7 text-center text-xl font-bold">
              Operational Leadership
            </h3>
          </FadeUp>
          <Stagger staggerChildren={0.07}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {OPERATIONAL_TEAM.map((m) => (
                <Item key={m.name}>
                  <div className="group card-vibrant hover-glow-blue hover-lift overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300">
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <Image
                        src={`/team/${getTeamSlug(m.name)}.png`}
                        alt={`${m.name} — ${m.role}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="300px"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-si-ink text-[15px] font-bold">{m.name}</h4>
                      <p className="text-si-primary mt-0.5 text-xs font-semibold">{m.role}</p>
                      <p className="text-si-ink/60 mt-2 text-xs leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>

        {/* Regional */}
        <div className="mb-14">
          <FadeUp>
            <h3 className="text-si-ink mb-7 text-center text-xl font-bold">Regional Leadership</h3>
          </FadeUp>
          <Stagger staggerChildren={0.08}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {REGIONAL_TEAM.map((m) => (
                <Item key={m.name}>
                  <div className="group card-vibrant hover-glow-blue hover-lift overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300">
                    <div className="grid grid-cols-3 gap-0">
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <Image
                          src={`/team/${getTeamSlug(m.name)}.png`}
                          alt={`${m.name} — ${m.role}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="192px"
                        />
                      </div>
                      <div className="col-span-2 flex flex-col justify-center p-5">
                        <span className="text-si-primary border-si-primary/15 bg-si-primary/5 mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold">
                          📍 {m.region}
                        </span>
                        <h4 className="text-si-ink text-lg font-bold">{m.name}</h4>
                        <p className="text-si-primary mt-0.5 text-sm font-semibold">{m.role}</p>
                        <p className="text-si-ink/60 mt-2 text-xs leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>

        {/* Team Values banner */}
        <FadeIn delay={0.1}>
          <div className="from-si-primary to-si-primary-600 overflow-hidden rounded-2xl bg-gradient-to-r p-8 text-white md:p-12">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold">Our Team Values</h3>
              <p className="mt-2 text-blue-100">
                United by a shared commitment to excellence, integrity, and client success
              </p>
            </div>
            <Stagger staggerChildren={0.08}>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {TEAM_VALUES.map(({ title, desc, icon }) => (
                  <Item key={title}>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                        {icon}
                      </div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="mt-1 text-xs text-blue-100">{desc}</p>
                    </div>
                  </Item>
                ))}
              </div>
            </Stagger>
          </div>
        </FadeIn>
      </PageSection>

      {/* ── Awards & Testimonials ── */}
      <PageSection
        id="awards-recognition"
        className="to-si-primary-200 scroll-mt-20 border-b border-gray-100 bg-gradient-to-b from-white"
      >
        <FadeUp>
          <div className="mb-12 text-center">
            <SectionBadge>Recognition & Trust</SectionBadge>
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
              <span className="text-gradient-primary">Awards & Testimonials</span>
            </h2>
            <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
              Celebrated for excellence, trusted by clients. Here&apos;s what the industry and our
              partners say about us.
            </p>
          </div>
        </FadeUp>

        <Stagger staggerChildren={0.08}>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((a) => (
              <Item key={a.award}>
                <article className="group card-vibrant hover-glow-blue hover-lift flex h-full flex-col rounded-xl bg-white p-5 shadow-md ring-1 ring-black/5 transition-all duration-300">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                      <Image
                        src={a.img}
                        alt={`${a.year} award`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="accent-bar-gradient mb-1 h-1 w-8 rounded" />
                      <h3 className="text-si-ink text-lg font-bold">{a.year}</h3>
                    </div>
                  </div>
                  <p className="text-si-ink/70 text-sm">{a.award}</p>
                </article>
              </Item>
            ))}
          </div>
        </Stagger>

        <div id="testimonials" className="scroll-mt-24" />
        <FadeUp>
          <h3 className="text-si-ink mb-7 text-center text-2xl font-bold">
            <span className="text-gradient-primary">What Our Clients Say</span>
          </h3>
        </FadeUp>

        <Stagger staggerChildren={0.09}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Item key={t.name}>
                <figure className="card-vibrant hover-glow-blue hover-lift flex h-full flex-col justify-between rounded-xl bg-white p-5 shadow-md ring-1 ring-black/5 transition-all duration-300 sm:p-6">
                  <blockquote className="text-si-ink/80 text-[14.5px] leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="ring-si-primary/20 relative h-11 w-11 overflow-hidden rounded-full shadow ring-2">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} logo`}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-si-ink font-semibold">{t.name}</div>
                  </figcaption>
                  <div className="accent-bar-gradient mt-5 h-1 w-10 rounded" />
                </figure>
              </Item>
            ))}
          </div>
        </Stagger>
      </PageSection>

      {/* ── Contact CTA ── */}
      <PageSection className="to-si-primary-200 bg-gradient-to-b from-white">
        <FadeIn>
          <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-si-ink text-2xl font-bold">Ready to Protect Your Future?</h3>
                <p className="text-si-ink/70 mt-2">
                  Connect with our insurance experts and discover how we can safeguard what matters
                  most to you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/retail"
                  className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <ContactCard label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
              <ContactCard
                label="Email"
                value="contact.ins@shareindia.co.in"
                icon={<FaEnvelope />}
              />
              <ContactCard label="Location" value="Mumbai, India" icon={<FaMapMarkerAlt />} />
            </div>
          </div>
        </FadeIn>
      </PageSection>
    </div>
  );
}
