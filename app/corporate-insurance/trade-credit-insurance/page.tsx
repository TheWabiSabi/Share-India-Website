// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaHandshake,
  FaGlobe,
  FaChartLine,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaCreditCard,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
// import ClaimStories from '@/app/industries/_components/ClaimStories';

const TradeCreditInsurancePage = () => {
  // Sample data for components - commented out as not currently used
  /*
  const claimStories = [
    {
      id: '1',
      title: 'Export Buyer Insolvency',
      description:
        'Major European buyer filed for bankruptcy, leaving Indian textile exporter with unpaid invoices worth crores.',
      claimAmount: '₹45 Crores',
      settlementTime: '8 months',
      riskType: 'Buyer Insolvency',
      outcome: 'settled' as const,
      lessons: [
        'Trade credit insurance protects against buyer default',
        'Credit monitoring helps identify risks early',
        'Diversified buyer portfolio reduces concentration risk',
      ],
    },
    {
      id: '2',
      title: 'Political Risk - Currency Restrictions',
      description:
        'Government imposed currency restrictions preventing payment from overseas buyer to Indian pharmaceutical company.',
      claimAmount: '₹25 Crores',
      settlementTime: '12 months',
      riskType: 'Political Risk',
      outcome: 'settled' as const,
      lessons: [
        'Political risk coverage essential for emerging markets',
        'Currency transfer restrictions can block payments',
        'Government intervention coverage protects exporters',
      ],
    },
    {
      id: '3',
      title: 'Domestic Buyer Default',
      description:
        'Large domestic distributor defaulted on payments to FMCG manufacturer due to cash flow crisis.',
      claimAmount: '₹18 Crores',
      settlementTime: '6 months',
      riskType: 'Commercial Risk',
      outcome: 'settled' as const,
      lessons: [
        'Domestic trade credit insurance covers local buyers',
        'Regular credit assessments prevent defaults',
        'Early warning systems help mitigate losses',
      ],
    },
    {
      id: '4',
      title: 'Supply Chain Disruption',
      description:
        'Key supplier bankruptcy disrupted production, causing delivery delays and contract penalties.',
      claimAmount: '₹12 Crores',
      settlementTime: '10 months',
      riskType: 'Supply Chain Risk',
      outcome: 'settled' as const,
      lessons: [
        'Supplier credit insurance protects supply chains',
        'Diversified supplier base reduces dependency',
        'Contract penalty coverage protects against delays',
      ],
    },
  ];
  */

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of trade credit insurance?',
      options: [
        'To provide working capital loans',
        'To protect against buyer payment default',
        'To cover shipping costs',
        'To provide currency hedging',
      ],
      correctAnswer: 1,
      explanation:
        'Trade credit insurance protects businesses against the risk of buyer payment default, insolvency, or political risks preventing payment.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which of the following is typically covered under political risk insurance?',
      options: [
        'Currency fluctuations',
        'Government expropriation and currency transfer restrictions',
        'Market competition',
        'Product quality issues',
      ],
      correctAnswer: 1,
      explanation:
        'Political risk insurance covers government actions like expropriation, currency transfer restrictions, and political violence.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "whole turnover" mean in trade credit insurance?',
      options: [
        'Covering only export sales',
        'Covering all eligible sales of the business',
        'Covering only domestic sales',
        'Covering only new customers',
      ],
      correctAnswer: 1,
      explanation:
        'Whole turnover policies cover all eligible sales of the business, providing comprehensive protection across the entire customer portfolio.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'What is the typical coverage percentage in trade credit insurance?',
      options: ['100% of the loss', '80-90% of the loss', '50% of the loss', '25% of the loss'],
      correctAnswer: 1,
      explanation:
        'Trade credit insurance typically covers 80-90% of the loss, with the insured retaining a small percentage to encourage good credit management.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'Which document is essential for trade credit insurance claims?',
      options: [
        'Shipping documents only',
        'Proof of debt and evidence of default',
        'Insurance policy only',
        'Bank statements only',
      ],
      correctAnswer: 1,
      explanation:
        'Proof of debt (invoices, contracts) and evidence of buyer default or insolvency are essential for trade credit insurance claims.',
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
            alt="Trade credit insurance background"
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
                Trade Credit Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection against buyer default and political risks—safeguarding your
                receivables and enabling confident trade expansion.
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
                Specialized coverage for exporters, importers, and businesses with significant trade
                receivables.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Understanding Trade Credit Insurance</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Trade Credit Insurance protects businesses against the risk of buyer payment default,
            insolvency, and political risks that prevent payment collection, enabling confident
            trade expansion.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Businesses engaged in trade face significant risks from buyer default, insolvency,
                and political events. Trade Credit insurance enables confident trading by protecting
                accounts receivable, providing access to better financing terms, and covering both
                commercial and political risks. This coverage is essential for exporters, domestic
                suppliers, and businesses with significant trade receivables.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against buyer payment default and insolvency
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Political risk coverage for international trade
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Enhanced access to trade financing and credit
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaGlobe className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Export Trade</div>
                    <div className="text-base text-gray-600">
                      International exporters and cross-border trade
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaHandshake className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Domestic Trade</div>
                    <div className="text-base text-gray-600">
                      Domestic suppliers and B2B trade relationships
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaChartLine className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Manufacturing</div>
                    <div className="text-base text-gray-600">
                      Manufacturers with distributor and dealer networks
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
            Comprehensive trade credit insurance solutions for businesses engaged in domestic and
            international trade.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaGlobe />} title="Exporters">
              Companies selling goods and services to international markets with payment terms.
            </Tile>
            <Tile icon={<FaHandshake />} title="Domestic Suppliers">
              Businesses providing goods and services to domestic buyers on credit terms.
            </Tile>
            <Tile icon={<FaChartLine />} title="Manufacturers">
              Production companies with significant accounts receivable from distributors and
              dealers.
            </Tile>
            <Tile icon={<FaCreditCard />} title="Service Providers">
              Professional services firms with large outstanding invoices and payment terms.
            </Tile>
          </div>
        </div>
      </section> */}

      {/* Sample Risks */}
      {/* <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Trade Credit Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key trade credit risks helps in selecting appropriate insurance coverage
            for your business operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Buyer Insolvency"
              description="Customer bankruptcy, liquidation, or financial inability to pay outstanding invoices."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaGlobe />}
              title="Political Risk"
              description="Government actions preventing payment transfer or currency convertibility issues."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaHandshake />}
              title="Commercial Default"
              description="Buyer refusal to pay due to disputes, cash flow problems, or business difficulties."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaBalanceScale />}
              title="Protracted Default"
              description="Extended payment delays beyond agreed terms without formal insolvency proceedings."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLock />}
              title="Currency Transfer Risk"
              description="Inability to convert or transfer foreign currency due to government restrictions."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaChartLine />}
              title="Economic Instability"
              description="Economic crises affecting buyer's ability to pay or country's payment systems."
              severity="High"
              frequency="Low"
            />
          </div>
        </div>
      </section> */}

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Trade Credit Insurance" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive trade credit protection designed for different business models and risk
            exposures.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaGlobe className="text-3xl text-blue-500" />}
              title="Export Credit Insurance"
              body="Protection for international trade against buyer and political risks with comprehensive coverage."
              bullets={[
                'Commercial risk coverage for buyer default',
                'Political risk protection for government actions',
                'Currency transfer and convertibility coverage',
              ]}
            />
            <CardComponent
              icon={<FaHandshake className="text-3xl text-blue-500" />}
              title="Domestic Trade Credit"
              body="Coverage for domestic sales and accounts receivable protection with monitoring services."
              bullets={[
                'Buyer insolvency and default protection',
                'Protracted default coverage',
                'Credit management and monitoring services',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaCreditCard className="text-3xl text-blue-500" />}
              title="Whole Turnover Policy"
              body="Comprehensive coverage for entire customer portfolio and sales with automatic protection."
              bullets={[
                'Coverage for all eligible customers',
                'Portfolio approach to risk management',
                'Automatic coverage for new customers',
              ]}
            />
            <CardComponent
              icon={<FaChartLine className="text-3xl text-blue-500" />}
              title="Single Buyer Coverage"
              body="Targeted protection for specific high-value customers or contracts with flexible terms."
              bullets={[
                'Focused coverage for key accounts',
                'Large contract protection',
                'Flexible terms and conditions',
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
            Stay updated with how SIIB helped trade credit clients recover from buyer defaults,
            political risks, and payment collection challenges.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="trade_credit_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Trade Credit Insurance" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Trade Credit
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="trade_credit_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Trade Credit Insurance" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">Secure Your Trade Today.</h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s trade credit specialists for comprehensive buyer
                  protection, market expansion support, and expert credit management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Trade Data
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
              value="Trade Credit Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeCreditInsurancePage;
