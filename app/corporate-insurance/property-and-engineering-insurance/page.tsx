// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaCogs,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaBolt,
  FaExclamationTriangle,
  FaIndustry,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import KnowledgeQuestionnaire from '@/app/industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
import KnowledgeQuestionnaire from '@/app/industries/_components/KnowledgeQuestionnaire';
import { quizQuestions } from '@/app/industries/_data/questions/infra';

const PropertyEngineeringInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/blog/highrise.jpg"
            alt="Property and engineering background"
            fill
            priority
            className="object-cover"
            sizes="100vw 100vh"
          />
          {/* Gradient + subtle blur overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Property and Engineering Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection for industrial properties, machinery, and equipment—
                safeguarding your assets from construction through operational phases.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Specialized coverage for manufacturing plants, commercial properties, and industrial
                equipment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding Property and Engineering Insurance
          </h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Property and engineering insurance provides comprehensive protection for industrial
            assets, commercial properties, and specialized equipment. These policies safeguard
            businesses from machinery breakdowns, property damage, and operational disruptions.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Modern businesses rely heavily on sophisticated machinery, equipment, and property
                assets. Property and engineering insurance covers risks from fire, machinery
                breakdown, electronic equipment failure, and natural perils. This specialized
                coverage ensures business continuity and protects against unexpected financial
                losses during both construction and operational phases.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive asset protection from multiple perils
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Machinery breakdown and electronic equipment coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Business interruption protection for operational losses
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaIndustry className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Industrial Property</div>
                    <div className="text-base text-gray-600">
                      Manufacturing plants, warehouses, and commercial buildings
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaCogs className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Machinery & Equipment</div>
                    <div className="text-base text-gray-600">
                      Production machinery, boilers, and pressure vessels
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaBolt className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Electronic Systems</div>
                    <div className="text-base text-gray-600">
                      Computer systems, control equipment, and electronic devices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Property and Engineering" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive protection designed specifically for property assets and engineering
            operations.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaIndustry className="text-3xl text-blue-500" />}
              title="Industrial All Risk (IAR)"
              body="Complete coverage for industrial properties including fire, natural perils, and business interruption."
              bullets={[
                'Fire and special perils protection',
                'Machinery breakdown coverage',
                'Business interruption compensation',
              ]}
            />
            <CardComponent
              icon={<FaCogs className="text-3xl text-blue-500" />}
              title="Machinery Breakdown Insurance"
              body="Protection against sudden and unforeseen breakdown of machinery and equipment."
              bullets={[
                'Repair and replacement costs',
                'Loss of profit during downtime',
                'Emergency mitigation expenses',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaBolt className="text-3xl text-blue-500" />}
              title="Electronic Equipment Insurance"
              body="Specialized coverage for computers, control systems, and electronic devices."
              bullets={[
                'Hardware and software protection',
                'Data restoration coverage',
                'Temporary replacement equipment',
              ]}
            />
            <CardComponent
              icon={<FaExclamationTriangle className="text-3xl text-blue-500" />}
              title="Boiler & Pressure Plant Insurance"
              body="Coverage for boiler explosion, pressure vessel failures, and associated damages."
              bullets={[
                'Explosion and collapse coverage',
                'Third-party liability protection',
                'Inspection and maintenance benefits',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Claim Stories */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent py-10">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[80vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Claim Stories</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with how SIIB helped property and engineering clients recover from
            machinery breakdowns, property damage, and equipment failures.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="property_engineering_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Property and Engineering" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Property and
            Engineering insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="property_engineering_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Property and Engineering" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Protecting Assets. Ensuring Continuity.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s property and engineering specialists for comprehensive
                  asset protection, machinery coverage, and expert risk management solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Asset Data
                </button>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ContactComponent label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <ContactComponent
              label="Email"
              value="contact.ins@shareindia.co.in"
              icon={<FaEnvelope />}
            />
            <ContactComponent
              label="Advisory Desk"
              value="Property & Engineering Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyEngineeringInsurancePage;
