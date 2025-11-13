'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';
import Contact from '@/app/industries/_components/Contact';
import Card from '@/app/industries/_components/Card';
import MainCaraousel from '@/components/main-caraousel';
import KnowledgeQuestionnaire from '@/app/industries/_components/KnowledgeQuestionnaire';

export interface CorporateInsuranceDetails {
  img: string;
  hero: {
    title: string;
    description: string;
  };
  explaination: {
    title: string;
    description: string;
    overview: {
      description: string;
      bullets: string[];
    };
    projectTypes: {
      types: Array<{
        icon: React.ReactNode;
        title: string;
        description: string;
      }>;
    };
  };
  coverage: {
    desciption: string;
    coverages: Array<{
      title: string;
      icon: React.ReactNode;
      body: string;
      bullets: string[];
    }>;
  };
  claim_story: {
    description: string;
    topic: string;
  };
  relevant: {
    topic: string;
  };
  knowledge: {
    industryName: string;
  };
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const CorporatePage = ({
  details,
  questions,
}: {
  details: CorporateInsuranceDetails;
  questions?: Question[];
}) => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={details.img}
            alt={`${details.hero.title} background`}
            fill
            priority
            className="object-cover"
            sizes="100vw 100vh"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                {details.hero.title}
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">{details.hero.description}</p>
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
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Specialized coverage for businesses with expert risk management and claims support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">{details.explaination.title}</h2>
          <p className="mt-[9vh] text-lg text-gray-700">{details.explaination.description}</p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                {details.explaination.overview.description}
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                {details.explaination.overview.bullets.map((bullet, index) => (
                  <li key={index} className="mb-6 flex items-start">
                    <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                {details.explaination.projectTypes.types.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="text-2xl">{type.icon}</div>
                    <div>
                      <div className="text-lg font-medium">{type.title}</div>
                      <div className="text-base text-gray-600">{type.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-14 text-lg text-gray-700">{details.coverage.desciption}</p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {details.coverage.coverages.map((coverage, index) => (
              <Card
                key={index}
                icon={coverage.icon}
                title={coverage.title}
                body={coverage.body}
                bullets={coverage.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Claim Stories */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent py-10">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[80vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Claim Stories</h2>
          <p className="mt-3 text-gray-700">{details.claim_story.description}</p>
          <div className="pt-6 lg:w-[65vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic={details.claim_story.topic}
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic={details.relevant.topic} />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire */}
      {questions && (
        <KnowledgeQuestionnaire
          questions={questions}
          industryName={details.knowledge.industryName}
        />
      )}

      {/* CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-si-white rounded-2xl border border-blue-200 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Protect Your Business. Secure Your Future.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&apos;s corporate insurance specialists for comprehensive
                  coverage, expert risk management, and dedicated support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-white md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Corporate Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;
