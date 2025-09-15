// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaRoad,
  FaBuilding,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaPlug,
  FaExclamationTriangle,
  FaHardHat,
  FaCogs,
} from 'react-icons/fa';
import Contact from '@/app/industries/_components/Contact';
import Card from '@/app/industries/_components/Card';
// import KnowledgeQuestionnaire from '@/app/industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
import KnowledgeQuestionnaire from '../_components/KnowledgeQuestionnaire';
import { quizQuestions } from '../_data/questions/infra';

const InfrastructureInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/blog/construction.jpg"
            alt="Construction infrastructure background"
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
                Infrastructure Industry Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive coverage for roads, bridges, power plants, and smart city
                projects—protecting critical infrastructure investments from construction to
                operation.
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
                Specialized coverage for PPP projects, smart cities, and critical infrastructure
                with performance guarantees.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding Infrastructure Industry Insurance
          </h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Infrastructure development is the backbone of economic growth, involving massive
            investments in roads, bridges, power plants, airports, and smart city projects. These
            projects face unique risks requiring specialized insurance solutions.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Infrastructure projects involve complex engineering, long construction periods,
                multiple stakeholders, and significant public interest. They require comprehensive
                risk management covering construction risks, performance guarantees, environmental
                liabilities, and long-term operational risks. Insurance plays a crucial role in
                project financing and risk allocation.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-year projects with complex risk profiles
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Public-private partnerships requiring specialized coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Performance guarantees essential for project completion
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Project Types</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaRoad className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Transportation Infrastructure</div>
                    <div className="text-base text-gray-600">
                      Roads, highways, bridges, and tunnels
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaPlug className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Power & Energy</div>
                    <div className="text-base text-gray-600">
                      Power plants, transmission lines, and renewable energy
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Urban Infrastructure</div>
                    <div className="text-base text-gray-600">
                      Smart cities, metro systems, and airports
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Infrastructure Industry" /> */}

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-14 text-lg text-gray-700">
            Comprehensive protection designed specifically for infrastructure projects and
            operations.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaHardHat className="text-3xl text-blue-500" />}
              title="Contractors All Risk (CAR)"
              body="Comprehensive coverage for construction phase including material damage and third-party liability."
              bullets={[
                'Material damage during construction',
                'Natural catastrophe and weather damage',
                'Third-party liability and property damage',
              ]}
            />
            <Card
              icon={<FaCogs className="text-3xl text-blue-500" />}
              title="Erection All Risk (EAR)"
              body="Specialized coverage for mechanical and electrical installation and commissioning."
              bullets={[
                'Machinery and equipment installation',
                'Testing and commissioning coverage',
                'Maintenance period protection',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-3xl text-blue-500" />}
              title="Professional Indemnity & Performance"
              body="Protection against design errors and performance guarantee requirements."
              bullets={[
                'Design and engineering errors coverage',
                'Performance guarantee insurance',
                'Advance payment guarantee protection',
              ]}
            />
            <Card
              icon={<FaExclamationTriangle className="text-3xl text-blue-500" />}
              title="Delay in Start-up & Business Interruption"
              body="Coverage for project delays and revenue loss during construction and operation."
              bullets={[
                'Delay in start-up coverage',
                'Business interruption protection',
                'Loss of revenue during delays',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Claim Stories */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Claim Stories</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with how SIIB helped infrastructure clients recover from project delays,
            construction losses, and unforeseen risks.
          </p>
          <div className="pt-6 lg:w-[65vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="infrastructure_industry"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Infrastructure Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="infrastructure_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Infrastructure Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Building Tomorrow. Protecting Today.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s infrastructure specialists for comprehensive project
                  coverage, performance guarantees, and expert risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Project Data
                </button>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Infrastructure Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureInsurancePage;
