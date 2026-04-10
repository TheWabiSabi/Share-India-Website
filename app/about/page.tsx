'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeUp, FadeIn, FlyIn, Stagger, Item } from '@/components/motion';

// ─── Static data ──────────────────────────────────────────────────────────────

const TEAM_LEADERS = [
  {
    name: 'Mr. Prakash Rao Dumble',
    role: 'Head – General Insurance',
    experience: '30 years',
    description: 'Possesses 30 years of expertise in the general insurance domain.',
  },
  {
    name: 'Mr. Ram Chandra',
    role: 'Head – Life Insurance',
    experience: '25 years',
    description: 'A seasoned professional with 25 years of experience in life insurance.',
  },
  {
    name: 'Mr. Ravi Shahani',
    role: 'Head of Business Excellence',
    experience: 'Expert',
    description: 'Drives initiatives that enhance business processes, service quality, and organizational efficiency.',
  },
];

const OPERATIONAL_TEAM = [
  {
    name: 'Mr. Shekhar Pradhan',
    role: 'Claim Manager',
    description: 'Leads the claims team with a focus on transparency, timely resolution, and a customer-first approach.',
  },
  {
    name: 'Mr. Manish Chavan',
    role: 'Product Manager',
    description: 'Leads the Life and Motor Underwriting teams, focusing on product quality and risk assessment.',
  },
  {
    name: 'Ms. Vidhi Shah',
    role: 'Head Underwriter',
    description: 'Manages underwriting across all lines of business, ensuring accuracy and risk integrity.',
  },
  {
    name: 'Mr. Rajendra Muppidwar',
    role: 'Area Manager',
    description: 'Brings strong expertise in Life Insurance and leads the sales team with focus on quality service.',
  },
];

const REGIONAL_TEAM = [
  {
    name: 'Mr. Raunaq Pai',
    role: 'Zonal Head – West',
    region: 'West Zone',
    description: 'Oversees sales for the West Zone and drives growth through strategic planning, market insights, and expertise in both General and Life Insurance.',
  },
  {
    name: 'Mr. Akash Agam',
    role: 'Area Head – North',
    region: 'North Zone',
    description: 'Strengthens the sales team in the North region with deep knowledge of General and Life Insurance, ensuring efficient operations and dependable client support.',
  },
];

const TEAM_VALUES = [
  {
    title: 'Expertise',
    desc: 'Decades of combined experience',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    desc: 'Building lasting relationships',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Forward-thinking solutions',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'Commitment to quality',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const AWARDS = [
  { year: '2022', award: 'SME Superstars — Awarded to SIIB by Chola MS', img: '/awards/chola-ms.jpeg' },
  { year: '2024', award: 'Diamond Club — Awarded to SIIB by Digit Inner Circle', img: '/awards/digit.jpeg' },
  { year: '2025', award: "CEO of the Year to Mr. Ajay Kumar Patel — Awarded by UBS Forums", img: '/awards/ubs-ceo.jpeg' },
  { year: '2025', award: 'Best Claims Partner of the Year — Awarded to SIIB by UBS Forums', img: '/awards/ubs-claims.jpeg' },
];

const TESTIMONIALS = [
  { name: 'API Holdings', text: "Share India Insurance Brokers' proactive approach, professionalism, and flawless execution have made managing our insurance portfolio seamless and efficient — a partnership we truly value.", avatar: '/testimonials/api-holding.png' },
  { name: 'Sunjewels Pvt. Ltd.', text: 'For three years, Team Share India — especially Mr. Raunaq Pai, Mr. Shekhar Pradhan, and Mr. Sagar Agre — have impressed us with their professionalism, reliability, and proactive service.', avatar: '/testimonials/sun-jewels.png' },
  { name: 'Global Ocean Logistics India Ltd', text: "For over four years, Share India's expertise, responsiveness, and attention to detail have ensured smooth, reliable insurance support and a partnership built on trust and excellence.", avatar: '/testimonials/global-ocean.png' },
  { name: 'Santu Mondal', text: "My experience with Raunaq Pai and Share India Insurance has been exceptional — Raunaq's professionalism, expertise, and prompt support made the entire insurance process seamless and trustworthy.", avatar: '/testimonials/santu-mondal.png' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTeamSlug(name: string) {
  return name.toLowerCase().replace(/^(mr\.|ms\.|mrs\.)\s+/i, '').replace(/\s+/g, '-');
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
      <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
      {children}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[85dvh] items-end overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/hero-background.jpg"
            alt="Share India Insurance Brokers — Professional team"
            fill priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-si-ink/70 to-slate-900/85" />
          <div className="from-si-primary/10 absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-16 pt-[15vh] md:pb-24 md:pt-[20vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <FadeIn>
                <div className="border-si-primary/30 bg-si-primary/15 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                  <svg className="text-si-primary h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-semibold text-blue-100">IRDAI Licensed Insurance Brokers</span>
                </div>
              </FadeIn>

              <FadeUp delay={0.06}>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  About{' '}
                  <span className="bg-gradient-to-r from-si-primary to-cyan-300 bg-clip-text text-transparent">
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
                        <div className="text-si-primary text-2xl font-extrabold md:text-3xl">{value}</div>
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
      <section id="our-story" className="scroll-mt-20 border-b border-gray-100 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div className="h-full rounded-2xl border border-si-primary/10 bg-white p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                <div className="border-si-primary/20 bg-si-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                  <svg className="text-si-primary h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-si-primary text-sm font-semibold">Our Journey</span>
                </div>
                <h3 className="text-si-ink text-xl font-bold">A decade-plus of impact</h3>
                <p className="text-si-ink/70 mt-4 leading-relaxed">
                  Our world has become more volatile — economically, socially and geopolitically — than
                  ever before. In an interconnected world, organizations and individuals face complex
                  decisions, sometimes without all the necessary facts, and almost always at speed.
                </p>
                <p className="text-si-ink/70 mt-4 leading-relaxed">
                  At Share India, we&apos;ve been on a decade-plus journey to connect industry expertise
                  with client need — through insurance brokerage, risk management, and claims advocacy —
                  so our clients are better protected across their business strategies.
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
                  <div key={title} className={`group flex items-start gap-4 rounded-xl border p-5 transition-all hover:shadow-md ${color}`}>
                    <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
        </div>
      </section>

      {/* ── Leadership ── */}
      <section id="leadership" className="scroll-mt-20 border-b border-gray-100 bg-[#f0f7ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <SectionBadge>Leadership</SectionBadge>
              <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
                Visionary{' '}
                <span className="text-gradient-primary">Leadership</span>
              </h2>
              <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
                Meet the leaders driving Share India Insurance Brokers towards excellence.
              </p>
            </div>
          </FadeUp>

          {/* CEO */}
          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-si-primary/10 bg-white shadow-xl">
              <div className="border-si-primary/8 from-si-primary/5 h-1 w-full bg-gradient-to-r to-cyan-500/5" />
              <div className="accent-bar-gradient h-1 w-full" />
              <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-5 lg:p-12">
                <div className="flex justify-center lg:col-span-2 lg:justify-start">
                  <div className="relative aspect-square w-72 overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-1 ring-si-primary/10">
                    <Image
                      src="/leadership/ajay-kumar.png"
                      alt="Mr. Ajay Kumar Patel — CEO & Principal Officer"
                      fill className="object-cover"
                      sizes="288px"
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
                  <h3 className="text-si-ink text-2xl font-bold">Leading with Vision & Expertise</h3>
                  <div className="text-si-ink/70 mt-5 space-y-4 text-[15px] leading-relaxed">
                    <p>
                      Mr. Ajay Patel has 25 years of progressive experience in Manufacturing and Insurance.
                      Previously, he provided services to <strong className="text-si-ink">Bajaj Auto, ICICI Prudential, IIFL</strong> and others.
                      He is a Mechanical Engineering graduate and holds an MBA in Operations.
                    </p>
                    <p>
                      Ajay brings excellence in Business Development, Strategy Implementation, and exceptional
                      team management. He has been associated with Share India Insurance Brokers since its
                      inception, driving growth and innovation at every step.
                    </p>
                  </div>
                  <div className="mt-7">
                    <div className="text-si-ink/40 mb-3 text-xs font-bold tracking-wider uppercase">Core Expertise</div>
                    <div className="flex flex-wrap gap-2">
                      {['Business Development', 'Strategy Implementation', 'Team Management', 'Operations Excellence'].map((skill) => (
                        <span key={skill} className="border-si-primary/15 bg-si-primary/5 text-si-primary rounded-xl border px-3 py-1.5 text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section id="our-team" className="scroll-mt-20 border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="mx-auto mb-14 max-w-4xl overflow-hidden rounded-2xl border border-si-primary/10 bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="accent-bar-gradient h-1 w-full" />
              <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:p-10">
                <div className="flex justify-center md:col-span-1">
                  <div className="relative aspect-square w-56 overflow-hidden rounded-xl border-4 border-white shadow-lg ring-1 ring-si-primary/10">
                    <Image src="/team/sonam-gupta.png" alt="Ms. Sonam Gupta — President" fill className="object-cover" sizes="224px" />
                  </div>
                </div>
                <div className="flex flex-col justify-center md:col-span-2">
                  <div className="btn-primary mb-3 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold">
                    President
                  </div>
                  <h3 className="text-si-ink text-2xl font-bold">Ms. Sonam Gupta</h3>
                  <p className="text-si-ink/70 mt-4 leading-relaxed">
                    Leads a team of insurance professionals with a strong focus on service quality, operational
                    excellence, and client-centric solutions. Under her leadership, Share India Insurance
                    Brokers continues to set new standards in the industry.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Leadership Excellence', 'Service Quality', 'Client-Centric'].map((tag) => (
                      <span key={tag} className="border-si-primary/15 bg-si-primary/5 text-si-primary rounded-lg border px-3 py-1 text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Senior leaders */}
          <div className="mb-14">
            <FadeUp>
              <h3 className="text-si-ink mb-7 text-center text-xl font-bold">Senior Leadership Team</h3>
            </FadeUp>
            <Stagger staggerChildren={0.08}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TEAM_LEADERS.map((m) => (
                  <Item key={m.name}>
                    <div className="group overflow-hidden rounded-2xl border border-si-primary/10 bg-white shadow-sm transition-all hover:border-si-primary/25 hover:shadow-lg">
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <Image
                          src={`/team/${getTeamSlug(m.name)}.png`}
                          alt={`${m.name} — ${m.role}`}
                          fill className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
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
              <h3 className="text-si-ink mb-7 text-center text-xl font-bold">Operational Leadership</h3>
            </FadeUp>
            <Stagger staggerChildren={0.07}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {OPERATIONAL_TEAM.map((m) => (
                  <Item key={m.name}>
                    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:border-si-primary/20 hover:shadow-md">
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <Image
                          src={`/team/${getTeamSlug(m.name)}.png`}
                          alt={`${m.name} — ${m.role}`}
                          fill className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <div className="group overflow-hidden rounded-2xl border border-si-primary/10 bg-white shadow-sm transition-all hover:shadow-lg">
                      <div className="grid grid-cols-3 gap-0">
                        <div className="relative aspect-square overflow-hidden bg-gray-50">
                          <Image
                            src={`/team/${getTeamSlug(m.name)}.png`}
                            alt={`${m.name} — ${m.role}`}
                            fill className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="192px"
                          />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center p-5">
                          <span className="text-si-primary border-si-primary/15 mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border bg-si-primary/5 px-2.5 py-1 text-[11px] font-bold">
                            📍 {m.region}
                          </span>
                          <h4 className="text-si-ink text-lg font-bold">{m.name}</h4>
                          <p className="text-si-primary mt-0.5 text-sm font-semibold">{m.role}</p>
                          <p className="text-si-ink/60 mt-2 text-xs leading-relaxed">{m.description}</p>
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
            <div className="from-si-primary to-si-primary-600 overflow-hidden rounded-2xl bg-gradient-to-r p-8 text-white shadow-xl md:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold">Our Team Values</h3>
                <p className="mt-2 text-blue-100">United by a shared commitment to excellence, integrity, and client success</p>
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
        </div>
      </section>

      {/* ── Awards & Testimonials ── */}
      <section id="awards-testimonials" className="scroll-mt-20 border-b border-gray-100 bg-[#f0f7ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <article className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-si-primary/20 hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                        <Image src={a.img} alt={`${a.year} award`} fill className="object-cover" />
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

          <FadeUp>
            <h3 className="text-si-ink mb-7 text-center text-2xl font-bold">
              <span className="text-gradient-primary">What Our Clients Say</span>
            </h3>
          </FadeUp>

          <Stagger staggerChildren={0.09}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <Item key={t.name}>
                  <figure className="flex h-full flex-col justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md sm:p-6">
                    <blockquote className="text-si-ink/80 text-[14.5px] leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <div className="ring-si-primary/20 relative h-11 w-11 overflow-hidden rounded-full shadow ring-2">
                        <Image src={t.avatar} alt={`${t.name} logo`} fill className="object-cover" />
                      </div>
                      <div className="text-si-ink font-semibold">{t.name}</div>
                    </figcaption>
                    <div className="accent-bar-gradient mt-5 h-1 w-10 rounded" />
                  </figure>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-8 shadow-sm md:p-12">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="text-si-ink text-2xl font-bold">Ready to Protect Your Future?</h3>
                  <p className="text-si-ink/70 mt-2">
                    Connect with our insurance experts and discover how we can safeguard what matters most to you.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold">
                    Contact Us
                  </Link>
                  <Link href="/retail" className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold">
                    Get Quote
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { label: 'Call', value: '1800 210 2022' },
                  { label: 'Email', value: 'contact.ins@shareindia.co.in' },
                  { label: 'Location', value: 'Mumbai, India' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div>
                      <div className="text-si-ink/40 text-xs font-bold uppercase">{label}</div>
                      <div className="text-si-ink text-sm font-semibold">{value}</div>
                    </div>
                    <div className="text-si-primary bg-si-primary/8 rounded-lg p-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
