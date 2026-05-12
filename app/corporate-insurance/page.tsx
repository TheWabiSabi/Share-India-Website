'use client';

import React from 'react';
import Image from 'next/image';
import {
  FaShieldAlt,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaIndustry,
} from 'react-icons/fa';
import { IMAGE_BASE_URL } from '@/consts/variables';
import { FeatureCard } from '@/components/ui/feature-card';
import { ContactCard } from '@/components/ui/contact-card';
import { PageSection } from '@/components/ui/page-section';
import { Bullet } from '@/components/ui/bullet';
import { CORPORATE_INSURANCE, KEY_BENEFITS, INDUSTRIES } from './data';

const CorporateInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${IMAGE_BASE_URL}/corporate/office.jpg`}
            alt="Corporate insurance solutions"
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
                Corporate Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive risk management and insurance solutions tailored for businesses of all
                sizes. Protect your assets, employees, and operations with Share India Insurance
                Brokers (SIIB).
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
                Trusted by leading enterprises across manufacturing, construction, IT, healthcare,
                and more.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <PageSection className="from-si-primary-200 bg-gradient-to-b to-white">
        <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
          Why Corporate Insurance Matters
        </h2>
        <p className="text-si-ink/70 mt-6 text-lg">
          In today&apos;s dynamic business environment, protecting your organization from unforeseen
          risks is critical. Corporate insurance provides financial security, ensures regulatory
          compliance, and enables business continuity during challenging times.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-si-ink text-2xl font-semibold">Key Benefits</h3>
            <ul className="mt-8 space-y-4 text-base">
              {KEY_BENEFITS.map((benefit, index) => (
                <li key={index} className="text-si-ink/70 flex items-start gap-2">
                  <Bullet /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-si-ink text-2xl font-semibold">Industries We Serve</h3>
            <div className="mt-8 space-y-3">
              {INDUSTRIES.map((industry, index) => (
                <div
                  key={index}
                  className="card-vibrant hover-glow-blue hover-lift flex items-center gap-4 rounded-xl border border-white/50 p-4 shadow-md ring-1 ring-black/5 transition-all duration-300"
                >
                  <div className="text-si-primary bg-si-primary/8 rounded-lg p-2 transition-transform group-hover:scale-110">
                    <FaIndustry className="text-xl" />
                  </div>
                  <div className="text-si-ink font-bold">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Insurance Products Section */}
      <PageSection className="to-si-primary-200 bg-gradient-to-b from-white">
        <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
          Our Corporate Insurance Products
        </h2>
        <p className="text-si-ink/70 mt-6 text-lg">
          Comprehensive coverage options designed to protect every aspect of your business
          operations.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CORPORATE_INSURANCE.map((product, index) => (
            <FeatureCard
              key={index}
              icon={product.icon}
              title={product.name}
              description={product.description}
              listItems={product.coverage}
            />
          ))}
        </div>
      </PageSection>

      {/* Why Choose SIIB Section */}
      <PageSection className="to-si-primary-200 bg-gradient-to-t from-white">
        <div className="mb-12 text-center">
          <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
            Why Choose <span className="text-gradient-primary">SIIB</span>
          </h2>
          <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg">
            Empowering businesses with strategic risk management and unwavering support.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Expert Advisory',
              desc: 'Dedicated insurance specialists with deep industry expertise to guide your risk management strategy.',
            },
            {
              title: 'Customized Solutions',
              desc: 'Tailored insurance packages designed to meet your specific business needs and risk profile.',
            },
            {
              title: 'Claims Excellence',
              desc: 'Swift claims processing with dedicated support to minimize business disruption during critical times.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-vibrant hover-glow-blue hover-lift group rounded-2xl border border-white/50 p-8 shadow-md ring-1 ring-black/5 transition-all duration-300"
            >
              <div className="accent-bar-gradient mb-6 h-1 w-12 rounded transition-all group-hover:w-20" />
              <h3 className="text-si-ink mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-si-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection className="to-si-primary-200 bg-gradient-to-b from-white">
        <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-si-ink text-2xl font-bold">Ready to Protect Your Business?</h3>
              <p className="text-si-ink/70 mt-2">
                Partner with SIIB&apos;s corporate insurance specialists for comprehensive coverage,
                expert risk management, and seamless claims support.
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
          <ContactCard label="Advisory Desk" value="Corporate Specialists" icon={<FaHeadset />} />
        </div>
      </PageSection>
    </div>
  );
};

export default CorporateInsurancePage;
