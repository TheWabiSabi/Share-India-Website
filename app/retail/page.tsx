'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaShieldAlt,
  FaFileContract,
  FaDesktop,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';
import { FadeUp, FadeIn, FlyIn, Stagger, Item } from '@/components/motion';
import { SectionBadge } from '@/components/ui/section-badge';
import { Bullet } from '@/components/ui/bullet';
import { FeatureCard } from '@/components/ui/feature-card';
import { ContactCard } from '@/components/ui/contact-card';
import { PageSection } from '@/components/ui/page-section';
import { STATS, CORE_COVERAGE, SPECIALIZED_COVERAGE } from './data';

export default function RetailInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[80dvh] items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/retail/hero-background.jpg"
            alt="Retail Insurance Solutions"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-slate-900/20" />
        </div>

        <div className="relative z-10 w-full pb-14 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <FadeIn>
                <div className="border-si-primary/30 bg-si-primary/15 mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                  <FaShieldAlt className="text-si-primary text-sm" />
                  <span className="text-sm font-semibold text-blue-100">
                    IRDAI Licensed • 100% Claims Support
                  </span>
                </div>
              </FadeIn>
              <FadeUp delay={0.06}>
                <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                  Your Link to{' '}
                  <span className="from-si-primary bg-gradient-to-r to-cyan-300 bg-clip-text text-transparent">
                    Complete Protection
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-5 text-lg leading-relaxed text-gray-200">
                  Comprehensive retail insurance solutions tailored for your peace of mind.
                  Protecting what matters most to you and your family.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/premium-estimator"
                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
                  >
                    <FaShieldAlt /> Get Coverage Proposal
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-ghost inline-flex items-center gap-2 rounded-xl border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
                  >
                    <FaFileContract /> Book Risk Assessment
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Understanding Retail Insurance ── */}
      <PageSection className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FlyIn dir="right" delay={0.04}>
            <div>
              <SectionBadge>About Retail Insurance</SectionBadge>
              <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
                Understanding Retail Insurance
              </h2>
              <p className="text-si-ink/70 mt-5 text-lg leading-relaxed">
                Retail insurance provides essential protection for individuals and families,
                covering life&apos;s uncertainties and helping secure your financial future.
              </p>
              <h3 className="text-si-ink mt-8 text-xl font-bold">Why It Matters</h3>
              <p className="text-si-ink/70 mt-3 leading-relaxed">
                In today&apos;s unpredictable world, having the right insurance coverage is
                crucial for protecting your family&apos;s financial security. From health
                emergencies to vehicle accidents, the right insurance policy can make the
                difference between financial stability and hardship.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Comprehensive protection for life's uncertainties",
                  'Financial security for you and your family',
                  'Peace of mind with expert guidance and support',
                ].map((item) => (
                  <li key={item} className="text-si-ink/70 flex items-start gap-2">
                    <Bullet /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FlyIn>

          <FlyIn dir="left" delay={0.08}>
            <div>
              <h3 className="text-si-ink mb-6 text-xl font-bold">Our Key Statistics</h3>
              <div className="space-y-4">
                {STATS.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="card-vibrant hover-glow-blue hover-lift flex items-center gap-4 rounded-2xl border border-white/50 p-5 shadow-md ring-1 ring-black/5 transition-all duration-300"
                  >
                    <div className="text-si-primary bg-si-primary/8 shrink-0 rounded-xl p-3 text-xl transition-transform hover:scale-110">
                      {icon}
                    </div>
                    <div>
                      <div className="text-si-ink font-bold">{title}</div>
                      <div className="text-si-ink/60 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FlyIn>
        </div>
      </PageSection>

      {/* ── Core Coverage Suite ── */}
      <PageSection className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white">
        <FadeUp>
          <div className="mb-12 text-center">
            <SectionBadge>Core Coverage</SectionBadge>
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
            <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
              Comprehensive protection designed specifically for individuals and families.
            </p>
          </div>
        </FadeUp>

        <Stagger staggerChildren={0.08}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {CORE_COVERAGE.map((card) => (
              <Item key={card.title}>
                <FeatureCard {...card} />
              </Item>
            ))}
          </div>
        </Stagger>
      </PageSection>

      {/* ── Specialized Coverage ── */}
      <PageSection className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white">
        <FadeUp>
          <div className="mb-10 text-center">
            <SectionBadge>Specialized</SectionBadge>
            <h2 className="text-si-ink text-2xl font-bold md:text-3xl">
              Specialized Coverage Options
            </h2>
            <p className="text-si-ink/70 mx-auto mt-3 max-w-xl">
              Additional protection options to complement your core insurance portfolio.
            </p>
          </div>
        </FadeUp>

        <Stagger staggerChildren={0.07}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALIZED_COVERAGE.map((card) => (
              <Item key={card.title}>
                <FeatureCard {...card} />
              </Item>
            ))}
          </div>
        </Stagger>
      </PageSection>

      {/* ── Digital Platforms ── */}
      <PageSection className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white">
        <FadeUp>
          <div className="mb-10 text-center">
            <SectionBadge>Digital</SectionBadge>
            <h2 className="text-si-ink text-2xl font-bold md:text-3xl">Insurance Made Digital</h2>
            <p className="text-si-ink/70 mx-auto mt-3 max-w-xl">
              Easy policy management through our digital platforms with expert guidance.
            </p>
          </div>
        </FadeUp>

        <Stagger staggerChildren={0.08}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                icon: <FaDesktop className="h-5 w-5" />,
                title: 'Online Portal',
                description: 'Comprehensive web platform for policy comparison, purchase, and management.',
                listItems: [
                  'Compare insurance plans from multiple insurers',
                  'Instant policy quotes and online purchase',
                  'Claims tracking and policy management',
                ],
              },
              {
                icon: <FaMobileAlt className="h-5 w-5" />,
                title: 'Mobile App',
                description: 'Manage your insurance policies on-the-go with our user-friendly mobile application.',
                listItems: [
                  'Policy documents access anytime, anywhere',
                  'Premium reminders and payment options',
                  'Instant claims filing and status updates',
                ],
              },
            ].map((card) => (
              <Item key={card.title}>
                <FeatureCard {...card} />
              </Item>
            ))}
          </div>
        </Stagger>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection className="bg-gradient-to-b from-white to-si-primary-200">
        <FadeIn>
          <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-8 md:p-10">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-si-ink text-2xl font-bold">
                  Protect What Matters Most Today
                </h3>
                <p className="text-si-ink/70 mt-2">
                  Get personalized insurance solutions from India&apos;s trusted insurance brokers
                  with 24/7 support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/premium-estimator"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  <FaShieldAlt /> Get Coverage Proposal
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  <FaFileContract /> Book Assessment
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <ContactCard label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
              <ContactCard label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
              <ContactCard label="Support" value="24/7 Customer Service" icon={<FaHeadset />} />
            </div>
          </div>
        </FadeIn>
      </PageSection>
    </div>
  );
}
