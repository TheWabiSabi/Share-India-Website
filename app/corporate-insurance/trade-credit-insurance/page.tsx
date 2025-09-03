'use client';
import React from 'react';
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
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaCreditCard,
  FaBalanceScale,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const TradeCreditInsurancePage = () => {
  // Sample data for components
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

  const articles = [
    {
      id: '1',
      title: 'Trade Credit Insurance Trends 2024: Digital Credit Assessment and AI',
      excerpt:
        'How artificial intelligence and digital platforms are transforming trade credit risk assessment.',
      author: 'Trade Credit Team',
      publishDate: 'Apr 25, 2024',
      readTime: '9 min read',
      category: 'Trade Finance',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Export Credit Insurance: Navigating Global Market Uncertainties',
      excerpt: 'Strategies for managing export credit risks in volatile international markets.',
      author: 'Export Finance Specialists',
      publishDate: 'Apr 18, 2024',
      readTime: '8 min read',
      category: 'Export Finance',
      url: '#',
    },
    {
      id: '3',
      title: 'Supply Chain Finance: Credit Insurance for Supplier Networks',
      excerpt: 'Protecting supply chains through comprehensive supplier credit insurance programs.',
      author: 'Supply Chain Risk Team',
      publishDate: 'Apr 12, 2024',
      readTime: '7 min read',
      category: 'Supply Chain',
      url: '#',
    },
  ];

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
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Trade Credit Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection against buyer payment default and political risks—enabling
              confident trade expansion and secure cash flow management.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Credit Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for exporters, importers, and businesses with significant trade
              receivables.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Trade Credit Insurance</h2>
          <p className="mt-3 text-gray-700">
            Trade Credit Insurance protects businesses against the risk of buyer payment default,
            insolvency, and political risks that prevent payment collection.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                This insurance enables businesses to trade confidently by protecting against buyer
                default, insolvency, and political risks. It covers both domestic and international
                trade, providing protection for accounts receivable and enabling access to better
                financing terms. The coverage includes commercial risks (buyer insolvency) and
                political risks (government actions preventing payment).
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against buyer payment default and insolvency
                </li>
                <li className="flex items-start">
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
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCreditCard className="text-blue-500" />
                  <div>
                    <div className="font-medium">Cash Flow Protection</div>
                    <div className="text-sm text-gray-600">
                      Secure predictable cash flow from sales
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaChartLine className="text-blue-500" />
                  <div>
                    <div className="font-medium">Business Growth</div>
                    <div className="text-sm text-gray-600">
                      Confident expansion into new markets
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBalanceScale className="text-blue-500" />
                  <div>
                    <div className="font-medium">Better Financing</div>
                    <div className="text-sm text-gray-600">Improved access to trade finance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
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
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
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
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Trade Credit Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive trade credit protection designed for different business models and risk
            exposures.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaGlobe className="text-2xl text-blue-500" />}
              title="Export Credit Insurance"
              body="Protection for international trade against buyer and political risks."
              bullets={[
                'Commercial risk coverage for buyer default',
                'Political risk protection for government actions',
                'Currency transfer and convertibility coverage',
              ]}
            />
            <Card
              icon={<FaHandshake className="text-2xl text-blue-500" />}
              title="Domestic Trade Credit"
              body="Coverage for domestic sales and accounts receivable protection."
              bullets={[
                'Buyer insolvency and default protection',
                'Protracted default coverage',
                'Credit management and monitoring services',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaCreditCard className="text-2xl text-blue-500" />}
              title="Whole Turnover Policy"
              body="Comprehensive coverage for entire customer portfolio and sales."
              bullets={[
                'Coverage for all eligible customers',
                'Portfolio approach to risk management',
                'Automatic coverage for new customers',
              ]}
            />
            <Card
              icon={<FaChartLine className="text-2xl text-blue-500" />}
              title="Single Buyer Coverage"
              body="Targeted protection for specific high-value customers or contracts."
              bullets={[
                'Focused coverage for key accounts',
                'Large contract protection',
                'Flexible terms and conditions',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Trade Credit Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible trade credit insurance solutions designed for different business sizes and
            trade volumes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="SME Trade Plan"
              description="Essential coverage for small and medium enterprises with trade receivables"
              price="₹75K - ₹5L"
              features={[
                'Domestic Trade Credit Coverage',
                'Basic Export Credit Protection',
                'Credit Management Support',
                'Standard Coverage Limits',
                'Annual Policy Terms',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Export Business Plan"
              description="Comprehensive coverage for established exporters and international traders"
              price="₹5L - ₹50L"
              features={[
                'All SME Plan Benefits',
                'Enhanced Export Credit Coverage',
                'Political Risk Protection',
                'Multi-Country Coverage',
                'Credit Information Services',
                'Dedicated Account Support',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Enterprise Trade Plan"
              description="Advanced protection for large corporations with significant trade volumes"
              price="₹50L+"
              features={[
                'All Export Business Benefits',
                'Whole Turnover Coverage',
                'Customized Policy Terms',
                'Global Coverage Network',
                'Advanced Credit Analytics',
                'Priority Claims Processing',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Trade Credit Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Trade Credit Insurance" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Enabling Trade. Securing Payments.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs trade credit specialists for comprehensive buyer protection,
                  market expansion support, and expert credit management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Credit Assessment
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
              value="Trade Credit Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers - Same as previous pages */
const Tile = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="text-2xl text-blue-500">{icon}</div>
    <h3 className="mt-3 font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{children}</p>
  </div>
);

const Card = ({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
    <ul className="mt-3 space-y-1 text-sm text-gray-700">
      {bullets.map((b) => (
        <li key={b} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const RiskCard = ({
  icon,
  title,
  description,
  severity,
  frequency,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  severity: string;
  frequency: string;
}) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <span className="text-2xl text-red-500">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-gray-700">{description}</p>
    <div className="mt-4 flex gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Severity:</span>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            severity === 'High'
              ? 'bg-red-100 text-red-800'
              : severity === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
          }`}
        >
          {severity}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Frequency:</span>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            frequency === 'High'
              ? 'bg-red-100 text-red-800'
              : frequency === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
          }`}
        >
          {frequency}
        </span>
      </div>
    </div>
  </div>
);

const InsurancePlan = ({
  name,
  description,
  price,
  features,
  recommended,
}: {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended: boolean;
}) => (
  <div
    className={`rounded-xl border p-6 ${
      recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
    }`}
  >
    {recommended && (
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          <FaCertificate className="mr-1" />
          Recommended
        </span>
      </div>
    )}
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
    <div className="mt-4 flex items-center gap-2">
      <FaRupeeSign className="text-blue-500" />
      <span className="text-2xl font-bold text-blue-600">{price}</span>
      <span className="text-sm text-gray-500">per year</span>
    </div>
    <ul className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <FaCheckCircle className="mt-1 text-green-500" />
          <span className="text-sm text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`mt-6 w-full rounded-lg px-4 py-3 font-semibold ${
        recommended
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border border-blue-200 text-blue-700 hover:bg-blue-50'
      }`}
    >
      Get Quote
    </button>
  </div>
);

const Contact = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
    <div className="text-xl text-blue-600">{icon}</div>
  </div>
);

export default TradeCreditInsurancePage;
