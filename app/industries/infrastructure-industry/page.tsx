'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaRoad,
  FaBuilding,
  FaLeaf,
  FaWater,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaPlug,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaHardHat,
  FaCogs,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const InfrastructureInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Bridge Construction Collapse',
      description:
        'Partial collapse of under-construction bridge due to design flaw, causing injuries and significant reconstruction costs.',
      claimAmount: '₹150 Crores',
      settlementTime: '18 months',
      riskType: 'Construction Risk',
      outcome: 'settled' as const,
      lessons: [
        'Design review and approval processes are critical',
        'Professional indemnity insurance protects against design errors',
        'Third-party liability coverage essential for public projects',
      ],
    },
    {
      id: '2',
      title: 'Highway Project Delay',
      description:
        'Land acquisition delays and environmental clearance issues caused significant project delays and cost overruns.',
      claimAmount: '₹85 Crores',
      settlementTime: '24 months',
      riskType: 'Delay in Start-up',
      outcome: 'settled' as const,
      lessons: [
        'Regulatory risk coverage is essential for infrastructure projects',
        'Delay in start-up insurance protects against revenue loss',
        'Proper due diligence reduces regulatory risks',
      ],
    },
    {
      id: '3',
      title: 'Power Plant Equipment Damage',
      description:
        'Turbine damage during commissioning phase caused extended delays and replacement costs.',
      claimAmount: '₹120 Crores',
      settlementTime: '12 months',
      riskType: 'Equipment Damage',
      outcome: 'settled' as const,
      lessons: [
        'Commissioning phase requires specialized coverage',
        'Equipment breakdown insurance covers replacement costs',
        'Manufacturer warranties should complement insurance',
      ],
    },
    {
      id: '4',
      title: 'Metro Rail System Cyber Attack',
      description:
        'Cyber attack on metro control systems caused service disruption and security concerns.',
      claimAmount: '₹25 Crores',
      settlementTime: '8 months',
      riskType: 'Cyber Security',
      outcome: 'settled' as const,
      lessons: [
        'Critical infrastructure needs robust cyber protection',
        'Business interruption from cyber events is significant',
        'Incident response planning reduces impact',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question:
        'What is the most critical insurance coverage for infrastructure construction projects?',
      options: [
        'Fire insurance only',
        'Contractors All Risk (CAR) insurance',
        'Motor vehicle insurance',
        'Personal accident insurance',
      ],
      correctAnswer: 1,
      explanation:
        'Contractors All Risk (CAR) insurance is essential as it covers material damage during construction, third-party liability, and various construction risks.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which phase of infrastructure projects typically has the highest insurance risk?',
      options: [
        'Planning and design phase',
        'Construction and commissioning phase',
        'Operation and maintenance phase',
        'Decommissioning phase',
      ],
      correctAnswer: 1,
      explanation:
        'Construction and commissioning phase has the highest risk due to complex operations, equipment exposure, and potential for accidents.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does FIDIC stand for in infrastructure contracts?',
      options: [
        'Federal Infrastructure Development Insurance Corporation',
        'International Federation of Consulting Engineers',
        'Financial Infrastructure Development Investment Committee',
        'Foreign Investment Development Insurance Council',
      ],
      correctAnswer: 1,
      explanation:
        'FIDIC (International Federation of Consulting Engineers) provides standard contract forms widely used in infrastructure projects globally.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which insurance is mandatory for infrastructure projects involving public funds?',
      options: [
        'Performance guarantee insurance',
        'Professional indemnity insurance',
        'Public liability insurance',
        'All of the above',
      ],
      correctAnswer: 3,
      explanation:
        'Infrastructure projects with public funds typically require all three: performance guarantees, professional indemnity, and public liability insurance.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical defects liability period for infrastructure projects?',
      options: ['6 months', '1 year', '2-5 years', '10 years'],
      correctAnswer: 2,
      explanation:
        '2-5 years is typical for infrastructure projects, during which contractors remain liable for defects and insurance coverage is maintained.',
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
              Infrastructure Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
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
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Specialist
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for PPP projects, smart cities, and critical infrastructure with
              performance guarantees.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Infrastructure Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Infrastructure development is the backbone of economic growth, involving massive
            investments in roads, bridges, power plants, airports, and smart city projects. These
            projects face unique risks requiring specialized insurance solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Infrastructure projects involve complex engineering, long construction periods,
                multiple stakeholders, and significant public interest. They require comprehensive
                risk management covering construction risks, performance guarantees, environmental
                liabilities, and long-term operational risks. Insurance plays a crucial role in
                project financing and risk allocation.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-year projects with complex risk profiles
                </li>
                <li className="flex items-start">
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
              <h3 className="text-xl font-semibold text-gray-900">Key Project Types</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRoad className="text-blue-500" />
                  <div>
                    <div className="font-medium">Transportation Infrastructure</div>
                    <div className="text-sm text-gray-600">
                      Roads, highways, bridges, and tunnels
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaPlug className="text-blue-500" />
                  <div>
                    <div className="font-medium">Power & Energy</div>
                    <div className="text-sm text-gray-600">
                      Power plants, transmission lines, and renewable energy
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <div className="font-medium">Urban Infrastructure</div>
                    <div className="text-sm text-gray-600">
                      Smart cities, metro systems, and airports
                    </div>
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
            Tailored insurance solutions for every stakeholder in infrastructure development.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaHardHat />} title="EPC Contractors">
              Engineering, procurement, and construction companies executing infrastructure
              projects.
            </Tile>
            <Tile icon={<FaBuilding />} title="Project Developers">
              Infrastructure developers and special purpose vehicles managing large-scale projects.
            </Tile>
            <Tile icon={<FaCogs />} title="Equipment Suppliers">
              Manufacturers and suppliers of heavy machinery and specialized infrastructure
              equipment.
            </Tile>
            <Tile icon={<FaUserShield />} title="Government Agencies">
              Public sector entities and authorities overseeing infrastructure development.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Common Risks in Infrastructure Industry
          </h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            infrastructure projects.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaHardHat />}
              title="Construction & Design Risks"
              description="Design errors, construction defects, and technical failures during project execution."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Delay & Performance Risks"
              description="Project delays, cost overruns, and failure to meet performance specifications."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Earthquakes, floods, cyclones affecting construction and completed infrastructure."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFileContract />}
              title="Regulatory & Political Risks"
              description="Policy changes, permit delays, and political instability affecting project viability."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLock />}
              title="Cyber & Technology Risks"
              description="Cyber attacks on smart infrastructure and technology system failures."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Liabilities"
              description="Environmental damage, pollution incidents, and ecological impact issues."
              severity="Medium"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Infrastructure Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for infrastructure projects and
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaHardHat className="text-2xl text-blue-500" />}
              title="Contractors All Risk (CAR)"
              body="Comprehensive coverage for construction phase including material damage and third-party liability."
              bullets={[
                'Material damage during construction',
                'Natural catastrophe and weather damage',
                'Third-party liability and property damage',
              ]}
            />
            <Card
              icon={<FaCogs className="text-2xl text-blue-500" />}
              title="Erection All Risk (EAR)"
              body="Specialized coverage for mechanical and electrical installation and commissioning."
              bullets={[
                'Machinery and equipment installation',
                'Testing and commissioning coverage',
                'Maintenance period protection',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Professional Indemnity & Performance"
              body="Protection against design errors and performance guarantee requirements."
              bullets={[
                'Design and engineering errors coverage',
                'Performance guarantee insurance',
                'Advance payment guarantee protection',
              ]}
            />
            <Card
              icon={<FaExclamationTriangle className="text-2xl text-blue-500" />}
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

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Insurance Plans for Infrastructure Industry
          </h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different scales of infrastructure
            projects.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Infrastructure Starter Plan"
              description="Essential coverage for small to medium infrastructure projects"
              price="₹5L - ₹15L"
              features={[
                'Contractors All Risk (CAR)',
                'Public Liability Insurance',
                'Workmen Compensation',
                'Motor Vehicle Insurance',
                'Basic Performance Guarantee',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Infrastructure Professional Plan"
              description="Comprehensive coverage for major infrastructure projects"
              price="₹15L - ₹1Cr"
              features={[
                'All Starter Plan Benefits',
                'Erection All Risk (EAR)',
                'Professional Indemnity',
                'Delay in Start-up Coverage',
                'Environmental Liability',
                'Advanced Performance Guarantees',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Infrastructure Enterprise Plan"
              description="Complete protection for mega infrastructure projects and PPPs"
              price="₹1Cr+"
              features={[
                'All Professional Plan Benefits',
                'Political Risk Insurance',
                'International Coverage',
                'Cyber Liability for Smart Infrastructure',
                'Crisis Management Services',
                'Dedicated Project Insurance Manager',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Infrastructure Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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

export default InfrastructureInsurancePage;
