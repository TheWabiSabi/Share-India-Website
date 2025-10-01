// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaUserShield,
  FaGavel,
  FaHandshake,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaUsers,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
// import ClaimStories from '@/app/industries/_components/ClaimStories';

const LiabilityInsurancePage = () => {
  // Sample data for components
  // const claimStories = [
  //   {
  //     id: '1',
  //     title: 'Product Liability Claim - Food Contamination',
  //     description:
  //       'Food manufacturer faced liability claims after contaminated products caused food poisoning in multiple customers.',
  //     claimAmount: '₹15 Crores',
  //     settlementTime: '14 months',
  //     riskType: 'Product Liability',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Product liability insurance essential for manufacturers',
  //       'Quality control processes prevent contamination',
  //       'Recall insurance covers withdrawal costs',
  //     ],
  //   },
  //   {
  //     id: '2',
  //     title: 'Public Liability - Shopping Mall Accident',
  //     description:
  //       'Customer injured due to wet floor in shopping mall, leading to compensation claim for medical expenses and damages.',
  //     claimAmount: '₹8 Crores',
  //     settlementTime: '10 months',
  //     riskType: 'Public Liability',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Public liability coverage protects against third-party claims',
  //       'Proper safety measures reduce accident risks',
  //       'Quick response and documentation help claim settlement',
  //     ],
  //   },
  //   {
  //     id: '3',
  //     title: 'Professional Indemnity - Consultant Error',
  //     description:
  //       "Engineering consultant faced claim for design error that caused structural problems in client's building project.",
  //     claimAmount: '₹25 Crores',
  //     settlementTime: '18 months',
  //     riskType: 'Professional Indemnity',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Professional indemnity essential for service providers',
  //       'Proper documentation and quality checks prevent errors',
  //       'Coverage includes legal defense costs',
  //     ],
  //   },
  //   {
  //     id: '4',
  //     title: 'Employment Practices Liability',
  //     description:
  //       'Company faced discrimination lawsuit from former employee, claiming wrongful termination and harassment.',
  //     claimAmount: '₹5 Crores',
  //     settlementTime: '12 months',
  //     riskType: 'Employment Practices',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Employment practices liability protects against HR claims',
  //       'Proper HR policies and training prevent issues',
  //       'Documentation of employment decisions is crucial',
  //     ],
  //   },
  // ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of public liability insurance?',
      options: [
        'To cover employee injuries',
        'To protect against third-party injury and property damage claims',
        'To cover business property damage',
        'To provide legal advice',
      ],
      correctAnswer: 1,
      explanation:
        'Public liability insurance protects businesses against claims from third parties for bodily injury or property damage caused by business operations.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which professionals typically need professional indemnity insurance?',
      options: [
        'Factory workers only',
        'Consultants, advisors, and service providers',
        'Retail shop owners only',
        'Security guards only',
      ],
      correctAnswer: 1,
      explanation:
        'Professional indemnity insurance is essential for consultants, advisors, and service providers who give professional advice or services.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "retroactive date" mean in professional indemnity insurance?',
      options: [
        'The policy start date',
        'The earliest date from which claims can be covered',
        'The policy expiry date',
        'The premium payment date',
      ],
      correctAnswer: 1,
      explanation:
        'Retroactive date is the earliest date from which professional acts are covered, typically set when first obtaining professional indemnity insurance.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which of the following is typically covered under product liability insurance?',
      options: [
        'Manufacturing defects only',
        'Design defects, manufacturing defects, and inadequate warnings',
        'Shipping costs only',
        'Marketing expenses only',
      ],
      correctAnswer: 1,
      explanation:
        'Product liability insurance covers design defects, manufacturing defects, and failure to provide adequate warnings or instructions.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical coverage limit recommended for public liability insurance?',
      options: ['₹1 Lakh', '₹10 Lakhs', '₹1-5 Crores', '₹100 Crores'],
      correctAnswer: 2,
      explanation:
        '₹1-5 Crores is typically recommended for public liability insurance, depending on business size and risk exposure.',
      difficulty: 'medium' as const,
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
            alt="Liability insurance background"
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
                Liability Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection against third-party claims, professional negligence, and
                legal liabilities—safeguarding your business reputation and financial stability.
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
                Specialized coverage for public liability, product liability, and professional
                indemnity risks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Understanding Liability Insurance</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Liability insurance protects businesses against financial losses arising from legal
            claims made by third parties for injury, damage, or professional negligence.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Businesses face increasing liability risks from third-party claims, professional
                negligence, and legal disputes. Liability insurance provides essential protection
                against financial losses from lawsuits, covering legal costs, compensation payments,
                and defense expenses. This coverage is crucial for maintaining business operations
                and protecting company assets.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against third-party injury and property damage claims
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Coverage for professional errors and omissions
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Legal defense costs and settlement payments
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaUserShield className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Public Liability</div>
                    <div className="text-base text-gray-600">
                      Third-party injury and property damage claims
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaGavel className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Professional Indemnity</div>
                    <div className="text-base text-gray-600">
                      Professional negligence and errors & omissions coverage
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaHandshake className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Product Liability</div>
                    <div className="text-base text-gray-600">
                      Manufacturing defects and product-related claims
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      {/* <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive liability insurance solutions for businesses across all sectors and
            professional services.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaBuilding />} title="Businesses & Retailers">
              Shops, restaurants, offices, and commercial establishments serving the public.
            </Tile>
            <Tile icon={<FaUsers />} title="Professional Services">
              Consultants, advisors, architects, engineers, and service providers.
            </Tile>
            <Tile icon={<FaHandshake />} title="Manufacturers">
              Product manufacturers and suppliers with product liability exposure.
            </Tile>
            <Tile icon={<FaUserShield />} title="Employers">
              Companies with employees requiring employment practices liability coverage.
            </Tile>
          </div>
        </div>
      </section> */}

      {/* Sample Risks */}
      {/* <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Liability Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key liability risks helps in selecting appropriate insurance coverage for
            your business operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaUserShield />}
              title="Public Liability"
              description="Third-party injury or property damage caused by business operations or premises."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaHandshake />}
              title="Product Liability"
              description="Defective products causing injury or damage to consumers or users."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaGavel />}
              title="Professional Negligence"
              description="Errors, omissions, or negligent acts in professional services or advice."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUsers />}
              title="Employment Practices"
              description="Discrimination, harassment, or wrongful termination claims from employees."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Contractual Liability"
              description="Liability assumed under contracts and agreements with third parties."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Liability"
              description="Pollution or environmental damage caused by business operations."
              severity="High"
              frequency="Low"
            />
          </div>
        </div>
      </section> */}

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Liability Insurance" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive liability protection designed for different types of business risks and
            professional exposures.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaUserShield className="text-3xl text-blue-500" />}
              title="Public Liability Insurance"
              body="Protection against third-party injury and property damage claims with comprehensive coverage."
              bullets={[
                'Bodily injury to third parties',
                'Property damage to third-party assets',
                'Legal defense and settlement costs',
              ]}
            />
            <CardComponent
              icon={<FaHandshake className="text-3xl text-blue-500" />}
              title="Product Liability Insurance"
              body="Coverage for defective products causing injury or damage to users with recall protection."
              bullets={[
                'Design and manufacturing defects',
                'Inadequate warnings or instructions',
                'Product recall expenses',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaGavel className="text-3xl text-blue-500" />}
              title="Professional Indemnity"
              body="Protection against claims arising from professional errors and negligence with comprehensive coverage."
              bullets={[
                'Errors and omissions in professional services',
                'Breach of professional duty',
                'Loss of documents and data',
              ]}
            />
            <CardComponent
              icon={<FaUsers className="text-3xl text-blue-500" />}
              title="Employment Practices Liability"
              body="Coverage for employment-related claims and HR issues with legal defense support."
              bullets={[
                'Discrimination and harassment claims',
                'Wrongful termination lawsuits',
                'Wage and hour disputes',
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
            Stay updated with how SIIB helped liability insurance clients with legal claims,
            professional negligence cases, and third-party liability issues.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="liability_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Liability Insurance" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Liability
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="liability_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Liability Insurance" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">Defend Your Business Today.</h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s liability specialists for comprehensive protection, expert
                  legal support, and professional claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Risk Data
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
              value="Liability Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiabilityInsurancePage;
