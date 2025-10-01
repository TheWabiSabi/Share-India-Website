// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaVideo,
  FaMusic,
  FaTheaterMasks,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaCamera,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
// import ClaimStories from '@/app/industries/_components/ClaimStories';

const MediaEntertainmentInsurancePage = () => {
  // Sample data for components
  // const claimStories = [
  //   {
  //     id: '1',
  //     title: 'Film Production Equipment Damage',
  //     description:
  //       'Expensive camera equipment worth crores damaged during outdoor film shoot due to unexpected weather conditions.',
  //     claimAmount: '₹35 Crores',
  //     settlementTime: '6 months',
  //     riskType: 'Equipment Damage',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Equipment insurance essential for high-value film gear',
  //       'Weather protection and backup equipment reduce risks',
  //       'Proper handling and storage protocols prevent damage',
  //     ],
  //   },
  //   {
  //     id: '2',
  //     title: 'Celebrity Injury During Shoot',
  //     description:
  //       'Lead actor injured during action sequence, causing production delays and additional costs for film completion.',
  //     claimAmount: '₹50 Crores',
  //     settlementTime: '10 months',
  //     riskType: 'Cast Insurance',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Cast insurance protects against production delays',
  //       'Safety protocols and stunt coordination prevent injuries',
  //       'Completion guarantee insurance ensures project delivery',
  //     ],
  //   },
  //   {
  //     id: '3',
  //     title: 'Concert Cancellation Due to Artist Illness',
  //     description:
  //       'Major music concert cancelled due to headline artist illness, resulting in refunds and venue costs.',
  //     claimAmount: '₹15 Crores',
  //     settlementTime: '4 months',
  //     riskType: 'Event Cancellation',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Event cancellation insurance covers unforeseen circumstances',
  //       'Artist health monitoring and backup plans reduce risks',
  //       'Advance ticket sales increase financial exposure',
  //     ],
  //   },
  //   {
  //     id: '4',
  //     title: 'Copyright Infringement Lawsuit',
  //     description:
  //       'Film production company faced copyright infringement claim over music usage, leading to legal costs and settlement.',
  //     claimAmount: '₹8 Crores',
  //     settlementTime: '14 months',
  //     riskType: 'Intellectual Property',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Errors and omissions insurance covers IP claims',
  //       'Proper rights clearance prevents infringement issues',
  //       'Legal review of content reduces liability exposure',
  //     ],
  //   },
  // ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of cast insurance in film production?',
      options: [
        'To cover actor salaries',
        'To protect against production delays due to cast illness or injury',
        'To provide health insurance for actors',
        'To cover marketing costs',
      ],
      correctAnswer: 1,
      explanation:
        'Cast insurance protects film productions against financial losses due to delays caused by illness, injury, or death of key cast members.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which insurance covers legal claims related to copyright infringement in media?',
      options: [
        'General liability insurance',
        'Errors and omissions (E&O) insurance',
        'Property insurance',
        'Workers compensation',
      ],
      correctAnswer: 1,
      explanation:
        'Errors and omissions (E&O) insurance covers legal claims related to copyright infringement, defamation, and other content-related issues.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "completion guarantee" insurance provide?',
      options: [
        'Equipment replacement guarantee',
        'Guarantee that the production will be completed and delivered',
        'Actor performance guarantee',
        'Box office success guarantee',
      ],
      correctAnswer: 1,
      explanation:
        'Completion guarantee insurance ensures that a film or production will be completed and delivered according to the agreed specifications and budget.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects entertainment insurance premiums?',
      options: [
        'Studio location only',
        'Production budget and risk assessment',
        'Number of crew members only',
        'Film genre only',
      ],
      correctAnswer: 1,
      explanation:
        'Production budget, risk assessment including stunts, locations, and cast involvement are primary factors affecting entertainment insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is typically covered under equipment insurance for media productions?',
      options: [
        'Only cameras',
        'All production equipment including cameras, lighting, and sound equipment',
        'Only editing equipment',
        'Only vehicles',
      ],
      correctAnswer: 1,
      explanation:
        'Equipment insurance covers all production equipment including cameras, lighting, sound equipment, and other technical gear used in production.',
      difficulty: 'easy' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/blog/highrise.jpg"
            alt="Media and entertainment background"
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
                Media and Entertainment Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection for film productions, events, and entertainment
                businesses—covering equipment, talent, and production risks.
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
                Specialized coverage for film productions, events, and entertainment industry
                professionals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding Media and Entertainment Insurance
          </h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Media and Entertainment Insurance provides specialized protection for the unique risks
            faced by the entertainment industry, from production delays to equipment damage and
            talent-related issues.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                The entertainment industry involves complex productions with high-value equipment,
                talent, and creative assets. Media and Entertainment insurance covers risks from
                equipment damage, cast injuries, production delays, and intellectual property
                issues. This specialized coverage ensures productions can continue and protects
                against unexpected financial losses during filming, events, and content creation.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive production and equipment protection
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Cast and crew coverage for talent-related risks
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Event cancellation and intellectual property protection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaVideo className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Film & TV Productions</div>
                    <div className="text-base text-gray-600">
                      Movie studios, TV networks, and production companies
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaMusic className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Live Events & Concerts</div>
                    <div className="text-base text-gray-600">
                      Music concerts, festivals, and live entertainment venues
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaCamera className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Digital Content Creation</div>
                    <div className="text-base text-gray-600">
                      Online media companies and digital content producers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Media and Entertainment" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive protection designed specifically for media and entertainment operations.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaVideo className="text-3xl text-blue-500" />}
              title="Film & TV Production Insurance"
              body="Complete coverage for film and television production including cast, crew, and equipment protection."
              bullets={[
                'Cast insurance and key person coverage',
                'Equipment and props protection',
                'Completion guarantee and delivery bond',
              ]}
            />
            <CardComponent
              icon={<FaMusic className="text-3xl text-blue-500" />}
              title="Event & Concert Insurance"
              body="Protection for live events, concerts, and entertainment venues against cancellation and liability."
              bullets={[
                'Event cancellation and postponement',
                'Public liability and crowd control',
                'Artist and performer coverage',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaCamera className="text-3xl text-blue-500" />}
              title="Equipment & Technology Coverage"
              body="Specialized coverage for production equipment, cameras, and technical systems."
              bullets={[
                'Cameras, lighting, and sound equipment',
                'Post-production and editing facilities',
                'Mobile equipment and location coverage',
              ]}
            />
            <CardComponent
              icon={<FaTheaterMasks className="text-3xl text-blue-500" />}
              title="Errors & Omissions Insurance"
              body="Coverage for intellectual property claims, defamation, and content-related legal issues."
              bullets={[
                'Copyright and trademark infringement',
                'Defamation and privacy violations',
                'Content liability and clearance issues',
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
            Stay updated with how SIIB helped media and entertainment clients recover from
            production delays, equipment damage, and talent-related issues.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="media_entertainment_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Media and Entertainment" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Media and
            Entertainment insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="media_entertainment_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Media and Entertainment" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Creating Stories. Protecting Dreams.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s entertainment specialists for comprehensive production
                  coverage, talent protection, and expert risk management solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Production Data
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
              value="Entertainment Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainmentInsurancePage;
