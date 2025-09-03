'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaPills,
  FaFlask,
  FaMicroscope,
  FaTruckMoving,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaLock,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaVial,
  FaHeartbeat,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const PharmaInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Drug Recall Due to Contamination',
      description:
        'Contamination in manufacturing facility led to nationwide drug recall, affecting millions of patients and causing significant financial losses.',
      claimAmount: '₹200 Crores',
      settlementTime: '15 months',
      riskType: 'Product Recall',
      outcome: 'settled' as const,
      lessons: [
        'Quality control systems must be robust and validated',
        'Product recall insurance is essential for pharmaceutical companies',
        'Rapid response protocols minimize damage and protect patients',
      ],
    },
    {
      id: '2',
      title: 'Clinical Trial Adverse Event',
      description:
        'Serious adverse events during Phase III clinical trial led to trial suspension and liability claims from participants.',
      claimAmount: '₹75 Crores',
      settlementTime: '20 months',
      riskType: 'Clinical Trial Liability',
      outcome: 'settled' as const,
      lessons: [
        'Clinical trial insurance protects against participant injury claims',
        'Proper informed consent procedures are critical',
        'Independent safety monitoring boards help identify risks early',
      ],
    },
    {
      id: '3',
      title: 'Manufacturing Equipment Breakdown',
      description:
        'Critical bioreactor failure during vaccine production caused significant batch losses and supply chain disruption.',
      claimAmount: '₹45 Crores',
      settlementTime: '8 months',
      riskType: 'Equipment Breakdown',
      outcome: 'settled' as const,
      lessons: [
        'Specialized equipment requires comprehensive breakdown coverage',
        'Business interruption insurance covers lost production',
        'Backup systems and redundancy reduce risk exposure',
      ],
    },
    {
      id: '4',
      title: 'Regulatory Compliance Violation',
      description:
        'FDA inspection findings led to manufacturing suspension and significant remediation costs.',
      claimAmount: '₹30 Crores',
      settlementTime: '12 months',
      riskType: 'Regulatory Risk',
      outcome: 'settled' as const,
      lessons: [
        'Regulatory compliance insurance covers remediation costs',
        'Continuous compliance monitoring prevents violations',
        'Professional liability coverage protects against regulatory actions',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Pharmaceutical Insurance Trends 2024: Biosimilars and Personalized Medicine',
      excerpt:
        'How emerging therapies and personalized medicine are changing risk profiles in pharmaceutical insurance.',
      author: 'Dr. Priya Nair',
      publishDate: 'Apr 2, 2024',
      readTime: '10 min read',
      category: 'Innovation',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Clinical Trial Insurance: Managing Participant Safety and Liability',
      excerpt:
        'Best practices for clinical trial insurance coverage and participant protection strategies.',
      author: 'Rajesh Khanna',
      publishDate: 'Mar 22, 2024',
      readTime: '8 min read',
      category: 'Clinical Trials',
      url: '#',
    },
    {
      id: '3',
      title: 'Supply Chain Resilience in Pharmaceutical Manufacturing',
      excerpt:
        'How to protect pharmaceutical supply chains against disruptions and ensure business continuity.',
      author: 'Dr. Sunita Sharma',
      publishDate: 'Mar 15, 2024',
      readTime: '7 min read',
      category: 'Supply Chain',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most critical insurance coverage for pharmaceutical manufacturers?',
      options: [
        'Fire insurance only',
        'Product liability and recall insurance',
        'Motor vehicle insurance',
        'Building insurance only',
      ],
      correctAnswer: 1,
      explanation:
        'Product liability and recall insurance is critical as pharmaceutical products directly affect human health and safety.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which regulatory body oversees pharmaceutical manufacturing in India?',
      options: [
        'FSSAI',
        'Central Drugs Standard Control Organization (CDSCO)',
        'Bureau of Indian Standards (BIS)',
        'Pollution Control Board',
      ],
      correctAnswer: 1,
      explanation:
        'CDSCO is the national regulatory body for pharmaceuticals and medical devices in India under the Ministry of Health.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does GMP stand for in pharmaceutical manufacturing?',
      options: [
        'Good Manufacturing Practice',
        'General Medical Procedures',
        'Global Manufacturing Protocol',
        'Guaranteed Medical Products',
      ],
      correctAnswer: 0,
      explanation:
        'Good Manufacturing Practice (GMP) is a system ensuring products are consistently produced according to quality standards.',
      difficulty: 'easy' as const,
    },
    {
      id: '4',
      question: 'Which phase of clinical trials typically has the highest insurance risk?',
      options: [
        'Phase I (Safety)',
        'Phase II (Efficacy)',
        'Phase III (Large-scale testing)',
        'Phase IV (Post-market surveillance)',
      ],
      correctAnswer: 2,
      explanation:
        'Phase III involves large numbers of participants and has the highest exposure to adverse events and liability claims.',
      difficulty: 'hard' as const,
    },
    {
      id: '5',
      question:
        'What is the typical shelf life consideration for pharmaceutical product liability?',
      options: ['1-2 years', '3-5 years', '5-10 years or longer', '6 months'],
      correctAnswer: 2,
      explanation:
        'Pharmaceutical products can have long shelf lives and liability claims can arise years after manufacturing, requiring extended coverage.',
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
              Life Sciences & Pharma Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for pharmaceutical manufacturing, biotechnology, medical
              devices, and clinical research—protecting innovation in healthcare.
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
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Specialist
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for GMP facilities, clinical trials, and regulatory compliance
              with product recall protection.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Life Sciences & Pharma Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            The life sciences and pharmaceutical industry is highly regulated and involves
            significant risks related to product safety, clinical research, and regulatory
            compliance. Insurance plays a critical role in protecting companies and patients.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Life sciences companies develop and manufacture products that directly impact human
                health, from pharmaceuticals and biologics to medical devices and diagnostics. This
                industry faces unique risks including product liability, clinical trial risks,
                regulatory compliance challenges, and supply chain vulnerabilities. Comprehensive
                insurance coverage is essential for business continuity and patient safety.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Highly regulated environment with strict compliance requirements
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Product liability risks affecting patient safety and company reputation
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Clinical research involving human participants requires specialized coverage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Segments</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaPills className="text-blue-500" />
                  <div>
                    <div className="font-medium">Pharmaceutical Manufacturing</div>
                    <div className="text-sm text-gray-600">Generic and branded drug production</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaVial className="text-blue-500" />
                  <div>
                    <div className="font-medium">Biotechnology</div>
                    <div className="text-sm text-gray-600">
                      Biologics, vaccines, and gene therapy
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaHeartbeat className="text-blue-500" />
                  <div>
                    <div className="font-medium">Medical Devices</div>
                    <div className="text-sm text-gray-600">Diagnostic and therapeutic devices</div>
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
            Tailored insurance solutions for every segment of the life sciences ecosystem.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaPills />} title="Pharmaceutical Companies">
              Generic and branded drug manufacturers, API producers, and formulation companies.
            </Tile>
            <Tile icon={<FaMicroscope />} title="Biotech Companies">
              Biotechnology firms developing biologics, vaccines, and innovative therapies.
            </Tile>
            <Tile icon={<FaHeartbeat />} title="Medical Device Manufacturers">
              Companies producing diagnostic equipment, surgical instruments, and therapeutic
              devices.
            </Tile>
            <Tile icon={<FaFlask />} title="Research Organizations">
              CROs, clinical research sites, and academic research institutions.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Life Sciences & Pharma</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your life
            sciences operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaPills />}
              title="Product Liability & Recall"
              description="Adverse drug reactions, contamination, and product defects leading to patient harm and recalls."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFlask />}
              title="Clinical Trial Risks"
              description="Participant injury, trial failures, and regulatory compliance issues during clinical research."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFileContract />}
              title="Regulatory Compliance"
              description="FDA/CDSCO violations, manufacturing suspensions, and regulatory enforcement actions."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaTools />}
              title="Manufacturing Equipment"
              description="Specialized equipment breakdown affecting production and product quality."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaLock />}
              title="Intellectual Property"
              description="Patent infringement claims and trade secret theft affecting competitive advantage."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTruckMoving />}
              title="Supply Chain Disruption"
              description="Raw material shortages, cold chain failures, and distribution network disruptions."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Life Sciences & Pharma" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for life sciences and pharmaceutical
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaPills className="text-2xl text-blue-500" />}
              title="Product Liability & Recall"
              body="Comprehensive coverage for product-related claims and recall expenses."
              bullets={[
                'Adverse drug reaction and side effect claims',
                'Product contamination and defect coverage',
                'Recall expenses and crisis management',
              ]}
            />
            <Card
              icon={<FaFlask className="text-2xl text-blue-500" />}
              title="Clinical Trial Insurance"
              body="Protection for clinical research activities and participant safety."
              bullets={[
                'Participant injury and adverse event coverage',
                'Investigator and site liability protection',
                'Trial cancellation and delay coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Professional & Regulatory Liability"
              body="Coverage for professional errors and regulatory compliance issues."
              bullets={[
                'Professional indemnity for healthcare professionals',
                'Regulatory defense and compliance costs',
                'Directors and officers liability coverage',
              ]}
            />
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Manufacturing & Equipment"
              body="Protection for specialized manufacturing equipment and facilities."
              bullets={[
                'GMP facility and clean room coverage',
                'Specialized equipment breakdown protection',
                'Business interruption and contamination coverage',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Insurance Plans for Life Sciences & Pharma
          </h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the life sciences
            industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Pharma Starter Plan"
              description="Essential coverage for small pharmaceutical and biotech companies"
              price="₹8L - ₹20L"
              features={[
                'Product Liability Coverage',
                'Professional Indemnity',
                'Fire & Allied Perils',
                'Public Liability Insurance',
                'Workmen Compensation',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Pharma Professional Plan"
              description="Comprehensive coverage for established pharmaceutical manufacturers"
              price="₹20L - ₹1Cr"
              features={[
                'All Starter Plan Benefits',
                'Product Recall Insurance',
                'Clinical Trial Coverage',
                'Regulatory Liability',
                'Equipment Breakdown',
                'Business Interruption',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Pharma Enterprise Plan"
              description="Complete protection for large pharmaceutical and biotech companies"
              price="₹1Cr+"
              features={[
                'All Professional Plan Benefits',
                'International Product Liability',
                'Intellectual Property Coverage',
                'Crisis Management Services',
                'Supply Chain Protection',
                'Dedicated Risk Management Team',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Life Sciences & Pharma" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Life Sciences & Pharma" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Advancing Healthcare. Protecting Innovation.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s life sciences specialists for comprehensive coverage,
                  regulatory protection, and expert risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Company Data
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
              value="Life Sciences Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers */
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

export default PharmaInsurancePage;
