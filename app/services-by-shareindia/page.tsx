'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBrain,
  FaServer,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaDatabase,
  FaCog,
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FadeUp, FadeIn, Stagger, Item } from '@/components/motion';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
      <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
      {children}
    </span>
  );
}

function Card({
  icon,
  title,
  body,
  bullets,
  linkUrl,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
  linkUrl: string;
}) {
  return (
    <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="text-si-primary bg-si-primary/8 rounded-xl p-2.5 transition-transform group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-si-ink text-lg font-bold">{title}</h3>
      </div>
      <div className="lg:min-h-[33vh]">
        <p className="text-si-ink/70 text-sm leading-relaxed">{body}</p>
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="text-si-ink/70 flex items-start gap-2 text-sm">
              <span className="text-si-primary mt-0.5 h-3 w-3 shrink-0">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <path d="M1 5l3 3L11 3" strokeWidth={2} />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={linkUrl}
        className="text-si-primary mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
      >
        Visit Service
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

function ContactInfo({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div>
        <div className="text-si-ink/40 text-xs font-bold uppercase">{label}</div>
        <div className="text-si-ink text-sm font-semibold">{value}</div>
      </div>
      <div className="text-si-primary bg-si-primary/8 rounded-lg p-2 text-lg">{icon}</div>
    </div>
  );
}

const SERVICES = [
  {
    icon: <FaBrain className="h-5 w-5" />,
    title: 'PolicyWise',
    url: 'https://policywise.shareindiainsurance.com',
    desc: 'Smart AI Insurance Analysis for modern advisors. Instantly analyze, compare, and extract critical coverage details from dense health insurance policy documents using cutting-edge AI technology.',
    bullets: [
      'AI-powered document analysis for instant policy insights',
      'Smart comparison across multiple insurance products',
      'Extract critical coverage details in seconds',
      'Modern interface designed for today&apos;s advisors',
    ],
  },
  {
    icon: <FaServer className="h-5 w-5" />,
    title: 'Cyrus',
    url: 'https://cyrus.shareindiainsurance.com',
    desc: 'Cyber Risk Underwriting System. Start your audit session with full security. Authorized access only. All data securely encrypted end-to-end for maximum confidentiality.',
    bullets: [
      'Enterprise-grade cyber risk assessment platform',
      'Real-time underwriting capabilities',
      'End-to-end encrypted data processing',
      'Authorized access with audit logging',
    ],
  },
  {
    icon: <FaShieldAlt className="h-5 w-5" />,
    title: 'InsureBot',
    url: 'https://insurebot.shareindiainsurance.com',
    desc: 'Protect what matters most, powered by AI. Join thousands of users who trust InsureBot to analyze, compare, and recommend the best term life insurance plans tailored specifically to their unique needs.',
    bullets: [
      'AI-driven personalized life insurance recommendations',
      'Comprehensive plan comparison tools',
      'Tailored to individual life circumstances',
      'Trusted by thousands of satisfied users',
    ],
  },
];

const TECH_STACK = [
  {
    icon: <FaDatabase className="h-5 w-5" />,
    label: 'Enterprise DBs',
    desc: 'Scalable infrastructure',
  },
  {
    icon: <FaCog className="h-5 w-5" />,
    label: 'AI/ML Engines',
    desc: 'Advanced algorithms',
  },
  {
    icon: <FaShieldAlt className="h-5 w-5" />,
    label: 'Compliance',
    desc: 'IRDAI certified',
  },
];

export default function ServicesByShareIndiaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[85dvh] items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="/services-by-shareindia/hero-background.jpg"
            alt="ShareIndia Digital Services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30" />
        </div>

        <div className="relative z-10 w-full pt-[15vh] pb-16 md:pt-[20vh] md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <FadeIn>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/15 px-4 py-2 backdrop-blur-sm">
                  <FaBrain className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold text-cyan-200">Powered by AI</span>
                </div>
              </FadeIn>
              <FadeUp delay={0.06}>
                <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                  Services by{' '}
                  <span className="from-si-primary bg-gradient-to-r to-cyan-300 bg-clip-text text-transparent">
                    ShareIndia
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-5 text-lg leading-relaxed text-gray-200 md:text-xl">
                  Explore our suite of intelligent digital platforms designed to transform insurance
                  underwriting, analysis, and client service. Each service combines cutting-edge AI
                  technology with enterprise-grade security to deliver exceptional results.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/services-by-shareindia"
                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
                  >
                    <FaRocket /> Explore All Services
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-ghost inline-flex items-center gap-2 rounded-xl border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
                  >
                    <FaUsers /> Get Demo Access
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Services Showcase ── */}
      <section className="border-b border-gray-100 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16 text-center">
              <SectionBadge>Digital Platforms</SectionBadge>
              <h2 className="text-si-ink text-3xl font-bold md:text-5xl">
                Our Intelligent <span className="text-gradient-primary">Service Suite</span>
              </h2>
              <p className="text-si-ink/70 mt-5 max-w-screen px-[10vw] text-lg">
                Three powerful platforms, each designed to excel in its domain while working
                together to provide comprehensive insurance solutions.
              </p>
            </div>
          </FadeUp>

          <Stagger staggerChildren={0.1}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SERVICES.map((service) => (
                <Item key={service.title}>
                  <Card
                    icon={service.icon}
                    title={service.title}
                    body={service.desc}
                    bullets={service.bullets}
                    linkUrl={service.url}
                  />
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── Platform Capabilities ── */}
      <section className="border-b border-gray-100 bg-[#f0f7ff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <SectionBadge>Platform Capabilities</SectionBadge>
              <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
                What Makes These <span className="text-gradient-primary">Platforms Special</span>
              </h2>
              <p className="text-si-ink/70 mt-4 max-w-screen px-[10vw] text-lg">
                Each service brings unique capabilities that set industry standards for intelligent
                insurance solutions.
              </p>
            </div>
          </FadeUp>

          <Stagger staggerChildren={0.08}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  icon: <FaBrain />,
                  title: 'AI-Powered Analysis',
                  desc: 'Our platforms leverage advanced machine learning algorithms to analyze complex insurance documents, identify coverage gaps, and recommend optimal solutions instantly.',
                },
                {
                  icon: <FaServer />,
                  title: 'Enterprise Security',
                  desc: 'Every interaction is protected with bank-grade encryption. Our systems comply with IRDAI standards and international security best practices.',
                },
                {
                  icon: <FaChartLine />,
                  title: 'Real-Time Insights',
                  desc: 'Get instant access to comprehensive analytics and reporting. Make informed decisions with data that updates in real-time.',
                },
                {
                  icon: <FaCog />,
                  title: 'Seamless Integration',
                  desc: 'Our platforms integrate effortlessly with existing systems. API-first architecture ensures easy connectivity with your current infrastructure.',
                },
              ].map((feature) => (
                <Item key={feature.title}>
                  <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-si-primary bg-si-primary/8 rounded-xl p-2.5 transition-transform group-hover:scale-105">
                        {feature.icon}
                      </div>
                      <h3 className="text-si-ink text-lg font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-si-ink/70 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── Platform Details ── */}
      <section className="border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
                Deep Dive Into <span className="text-gradient-primary">Each Platform</span>
              </h2>
              <p className="text-si-ink/70 mt-4 max-w-2xl text-lg">
                Discover the unique features and capabilities that make each service a leader in its
                domain.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                title: 'PolicyWise',
                subtitle: 'AI Insurance Analysis Platform',
                desc: 'PolicyWise transforms how advisors analyze and compare insurance policies. Our intelligent document processing extracts critical details from dense policy documents in seconds, not hours.',
                features: [
                  'Instant policy analysis and comparison',
                  'Coverage gap identification',
                  'Premium optimization suggestions',
                  'Automated renewal reminders',
                  'Client-friendly report generation',
                ],
                cta: 'Start Analysis',
                url: 'https://policywise.shareindiainsurance.com',
              },
              {
                title: 'Cyrus',
                subtitle: 'Cyber Risk Underwriting System',
                desc: 'Cyrus is the future of cyber risk assessment. Start your audit session with full enterprise security. Every interaction is logged and encrypted for maximum confidentiality.',
                features: [
                  'Automated cyber risk assessment',
                  'Threat landscape analysis',
                  'Compliance gap identification',
                  'Real-time security scoring',
                  'Regulatory compliance tracking',
                ],
                cta: 'Start Audit',
                url: 'https://cyrus.shareindiainsurance.com',
              },
              {
                title: 'InsureBot',
                subtitle: 'AI Life Insurance Advisor',
                desc: 'Join thousands who trust InsureBot for life insurance guidance. Our AI analyzes individual circumstances to recommend personalized protection plans tailored to unique needs.',
                features: [
                  'Personalized plan recommendations',
                  'Coverage suitability analysis',
                  'Premium affordability checks',
                  'Life stage-appropriate coverage',
                  'Policy comparison tools',
                ],
                cta: 'Get Coverage',
                url: 'https://insurebot.shareindiainsurance.com',
              },
            ].map((platform) => (
              <Item key={platform.title}>
                <div className="group hover:border-si-primary/20 hover:shadow-si-primary/5 relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-[#f8fafc] p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="accent-bar-gradient absolute top-0 left-0 h-1 w-full" />
                  <div className="relative z-10">
                    <h3 className="text-si-ink text-xl font-bold">{platform.title}</h3>
                    <p className="text-si-primary/70 text-sm font-medium">{platform.subtitle}</p>
                    <p className="text-si-ink/70 mt-4 text-sm leading-relaxed">{platform.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs">
                          <svg
                            className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-si-primary/15 bg-si-primary/5 mt-6 flex items-center gap-3 rounded-xl border px-4 py-3">
                      <span className="text-si-primary text-sm font-semibold">{platform.cta}</span>
                      <Link
                        href={platform.url}
                        className="text-si-primary hover:text-si-primary-600 inline-flex items-center gap-2 text-sm font-semibold"
                      >
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Technologies ── */}
      <section className="border-b border-gray-100 bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
                  Powered by <span className="text-gradient-primary">Cutting-Edge Technology</span>
                </h2>
                <p className="text-si-ink/70 mt-4 text-lg leading-relaxed">
                  Our platforms are built on a foundation of modern technology, ensuring
                  performance, reliability, and scalability for enterprise-grade insurance
                  operations.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Advanced NLP for document understanding',
                    'Machine learning for predictive analytics',
                    'Cloud-native architecture for scalability',
                    'Real-time data processing pipelines',
                  ].map((item) => (
                    <li key={item} className="text-si-ink/70 flex items-start gap-2">
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-si-ink mb-6 text-xl font-bold">Platform Infrastructure</h3>
                <div className="space-y-3">
                  {TECH_STACK.map((tech) => (
                    <div
                      key={tech.label}
                      className="group hover:border-si-primary/20 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="text-si-primary bg-si-primary/8 rounded-lg p-2 text-lg">
                        {tech.icon}
                      </div>
                      <div>
                        <div className="text-si-ink font-semibold">{tech.label}</div>
                        <div className="text-si-ink/60 text-sm">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="from-si-primary to-si-primary-600 border-b border-gray-100 bg-gradient-to-r py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: '1M+', label: 'Documents Analyzed' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '50M+', label: 'API Calls Daily' },
                { value: '24/7', label: 'Support' },
              ].map(({ value, label }) => (
                <Item key={label}>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                    <div className="text-3xl font-extrabold">{value}</div>
                    <div className="mt-1 text-sm text-blue-100">{label}</div>
                  </div>
                </Item>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="from-si-primary to-si-primary-600 overflow-hidden rounded-2xl border border-white/10 p-8 text-white shadow-xl md:p-12">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold">Ready to Experience Our Services?</h3>
                  <p className="mt-2 text-gray-500">
                    Get access to our AI-powered platforms and transform how you handle insurance
                    analysis and underwriting.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="text-si-ink inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold hover:bg-blue-50"
                  >
                    <FaUsers /> Request Demo
                  </Link>
                  <Link
                    href="/premium-estimator"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
                  >
                    <FaChartLine /> Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <ContactInfo label="Support" value="24/7 Assistance" icon={<FaHeadset />} />
                <ContactInfo
                  label="Email"
                  value="services@shareindia.co.in"
                  icon={<FaEnvelope />}
                />
                <ContactInfo label="Phone" value="1800 210 2022" icon={<FaPhoneAlt />} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
