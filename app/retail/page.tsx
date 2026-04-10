'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaHeart,
  FaCar,
  FaHome,
  FaUmbrella,
  FaMobileAlt,
  FaDesktop,
  FaUserMd,
  FaCertificate,
  FaPhoneAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaHeadset,
  FaFire,
  FaLock,
  FaEnvelope,
  FaFileContract,
} from 'react-icons/fa';
import { FadeUp, FadeIn, FlyIn, Stagger, Item } from '@/components/motion';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase">
      <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
      {children}
    </span>
  );
}

function Bullet() {
  return <FaChevronRight className="text-si-primary mt-1 h-3 w-3 shrink-0" />;
}

function Card({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="text-si-primary bg-si-primary/8 rounded-xl p-2.5 transition-transform group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-si-ink text-lg font-bold">{title}</h3>
      </div>
      <p className="text-si-ink/70 text-sm leading-relaxed">{body}</p>
      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-si-ink/70 flex items-start gap-2 text-sm">
            <Bullet /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tile({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg">
      <div className="text-si-primary bg-si-primary/8 mb-4 inline-flex rounded-xl p-2.5 transition-transform group-hover:scale-105">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-si-ink mb-2 font-bold">{title}</h3>
      <p className="text-si-ink/60 text-sm leading-relaxed">{children}</p>
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

const STATS = [
  { icon: <FaCertificate />, title: 'IRDA Registered', desc: 'Licensed insurance broker' },
  {
    icon: <FaUsers />,
    title: '30+ Years Experience',
    desc: 'Group experience in financial services',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: '100% Claims Assistance',
    desc: 'Complete support throughout claims',
  },
];

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
      <section className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      className="hover:border-si-primary/20 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="text-si-primary bg-si-primary/8 shrink-0 rounded-xl p-3 text-xl">
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
        </div>
      </section>

      {/* ── Core Coverage Suite ── */}
      <section className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              {[
                {
                  icon: <FaHeart className="h-5 w-5" />,
                  title: 'Life Insurance',
                  body: "Secure your family's financial future with comprehensive life coverage plans.",
                  bullets: [
                    'Term Life Insurance for maximum coverage',
                    'Endowment Plans with savings component',
                    'ULIP Plans for investment and protection',
                  ],
                },
                {
                  icon: <FaUserMd className="h-5 w-5" />,
                  title: 'Health Insurance',
                  body: 'Comprehensive health coverage for you and your loved ones.',
                  bullets: [
                    'Individual Health Plans tailored for you',
                    'Family Floater Plans for complete family',
                    'Critical Illness Cover for major diseases',
                  ],
                },
                {
                  icon: <FaCar className="h-5 w-5" />,
                  title: 'Motor Insurance',
                  body: 'Complete protection for your vehicles with comprehensive coverage.',
                  bullets: [
                    'Car Insurance with comprehensive coverage',
                    'Two Wheeler Insurance for bikes',
                    'Commercial Vehicle insurance for business',
                  ],
                },
                {
                  icon: <FaHome className="h-5 w-5" />,
                  title: 'Home Insurance',
                  body: 'Protect your home against fire, theft, and natural disasters.',
                  bullets: [
                    'Structure Protection against damages',
                    'Contents Coverage for belongings',
                    'Liability Protection for third-party claims',
                  ],
                },
              ].map((card) => (
                <Item key={card.title}>
                  <Card {...card} />
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── Specialized Coverage ── */}
      <section className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              {[
                {
                  icon: <FaGraduationCap />,
                  title: 'Child Education Plans',
                  body: "Secure your child's educational future with dedicated savings and insurance plans.",
                },
                {
                  icon: <FaUmbrella />,
                  title: 'Personal Accident',
                  body: 'Coverage against accidental injuries and disabilities for comprehensive protection.',
                },
                {
                  icon: <FaLock />,
                  title: 'Cyber Insurance',
                  body: "Protection against cyber risks and digital threats in today's connected world.",
                },
                {
                  icon: <FaFire />,
                  title: 'Fire Insurance',
                  body: 'Comprehensive fire damage coverage for your property and belongings.',
                },
              ].map((tile) => (
                <Item key={tile.title}>
                  <Tile icon={tile.icon} title={tile.title}>
                    {tile.body}
                  </Tile>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── Digital Platforms ── */}
      <section className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  body: 'Comprehensive web platform for policy comparison, purchase, and management.',
                  bullets: [
                    'Compare insurance plans from multiple insurers',
                    'Instant policy quotes and online purchase',
                    'Claims tracking and policy management',
                  ],
                },
                {
                  icon: <FaMobileAlt className="h-5 w-5" />,
                  title: 'Mobile App',
                  body: 'Manage your insurance policies on-the-go with our user-friendly mobile application.',
                  bullets: [
                    'Policy documents access anytime, anywhere',
                    'Premium reminders and payment options',
                    'Instant claims filing and status updates',
                  ],
                },
              ].map((card) => (
                <Item key={card.title}>
                  <Card {...card} />
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-si-primary-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <ContactInfo label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
                <ContactInfo
                  label="Email"
                  value="contact.ins@shareindia.co.in"
                  icon={<FaEnvelope />}
                />
                <ContactInfo label="Support" value="24/7 Customer Service" icon={<FaHeadset />} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
