'use client';

import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaFileContract, FaPhoneAlt, FaEnvelope, FaHeadset } from 'react-icons/fa';
import { IMAGE_BASE_URL } from '@/consts/variables';
import { FeatureCard } from '@/components/ui/feature-card';
import { ContactCard } from '@/components/ui/contact-card';
import { PageSection } from '@/components/ui/page-section';
import { Bullet } from '@/components/ui/bullet';
import { INDUSTRIES, KEY_BENEFITS, SIIB_OFFERINGS } from './data';

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${IMAGE_BASE_URL}/industry/factory.jpg`}
            alt="Industry insurance solutions"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Industry-Specific Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Specialized insurance coverage tailored to the unique risks and challenges of your
                industry. From infrastructure to life sciences, logistics to renewable energy—we
                understand your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Trusted by leading enterprises across 9+ major industry sectors in India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Insurance Section */}
      <PageSection className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-transparent">
        <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
          Why Industry-Specific Insurance Matters
        </h2>
        <p className="text-si-ink/70 mt-6 text-lg">
          Every industry faces unique operational risks, regulatory requirements, and business
          challenges. Generic insurance policies often leave critical exposures unaddressed.
          Industry-specific insurance ensures comprehensive protection aligned with your
          sector&#39;s distinct needs.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-si-ink text-2xl font-semibold">Key Advantages</h3>
            <ul className="mt-8 space-y-4 text-base">
              {KEY_BENEFITS.map((benefit, index) => (
                <li key={index} className="text-si-ink/70 flex items-start gap-2">
                  <Bullet /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-si-ink text-2xl font-semibold">What SIIB Offers</h3>
            <div className="mt-8 space-y-5">
              {SIIB_OFFERINGS.map((offering, index) => (
                <div
                  key={index}
                  className="card-vibrant hover-glow-blue hover-lift rounded-2xl border border-white/50 p-6 shadow-md ring-1 ring-black/5 transition-all duration-300"
                >
                  <div className="text-si-ink mb-2 text-lg font-bold">{offering.title}</div>
                  <div className="text-si-ink/60 text-[15px] leading-relaxed">{offering.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Industries We Serve Section */}
      <PageSection className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-transparent">
        <h2 className="text-si-ink text-3xl font-bold md:text-4xl">Industries We Serve</h2>
        <p className="text-si-ink/70 mt-6 text-lg">
          Comprehensive insurance solutions designed for the specific operational, technical, and
          regulatory challenges of your industry.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {INDUSTRIES.map((industry, index) => (
            <FeatureCard
              key={index}
              icon={industry.icon}
              title={industry.name}
              description={industry.description}
              listItems={industry.risks}
              linkHref={`/industries/${industry.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
            />
          ))}
        </div>
      </PageSection>

      {/* Our Approach Section */}
      <PageSection className="bg-gradient-to-t from-white to-si-primary-200">
        <div className="mb-12 text-center">
          <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
            Our <span className="text-gradient-primary">Approach</span> to Industry Insurance
          </h2>
          <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
            A disciplined, data-driven process designed to identify and mitigate sector-specific risks.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Risk Assessment',
              desc: 'In-depth analysis of your industry operations, identifying sector-specific risks, compliance requirements, and potential exposures.',
            },
            {
              step: '02',
              title: 'Solution Design',
              desc: 'Customized insurance programs combining standard and specialized coverage to address your unique business needs and risk profile.',
            },
            {
              step: '03',
              title: 'Ongoing Support',
              desc: 'Continuous risk monitoring, policy reviews, claims assistance, and advisory support throughout your business lifecycle.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="card-vibrant hover-glow-blue hover-lift group rounded-2xl border border-white/50 p-8 shadow-md ring-1 ring-black/5 transition-all duration-300"
            >
              <div className="text-si-primary mb-4 text-3xl font-black opacity-40 group-hover:opacity-100 transition-opacity">
                {item.step}
              </div>
              <h3 className="text-si-ink mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-si-ink/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection className="bg-gradient-to-b from-white to-si-primary-200">
        <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-si-ink text-2xl font-bold">
                Protect Your Industry. Secure Your Future.
              </h3>
              <p className="text-si-ink/70 mt-2">
                Partner with SIIB&apos;s industry insurance specialists for tailored coverage,
                expert risk management, and dedicated support designed for your sector.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/premium-estimator"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
              >
                <FaShieldAlt /> Get Coverage Proposal
              </a>
              <a
                href="/contact"
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
              >
                <FaFileContract /> Book Risk Assessment
              </a>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactCard label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
          <ContactCard label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
          <ContactCard
            label="Advisory Desk"
            value="Industry Specialists"
            icon={<FaHeadset />}
          />
        </div>
      </PageSection>
    </div>
  );
};

export default IndustriesPage;
