'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaTshirt,
  FaCut,
  FaLeaf,
  FaFire,
  FaWater,
  FaTruckMoving,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaGlobe,
  FaRecycle,
} from 'react-icons/fa';
import ClaimStories from '../_components/ClaimStories';
import KnowledgeQuestionnaire from '../_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const TextileInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Textile Mill Fire Incident',
      description:
        'Major fire in spinning unit caused by electrical short circuit, destroying machinery and raw materials worth crores.',
      claimAmount: '₹35 Crores',
      settlementTime: '10 months',
      riskType: 'Fire & Explosion',
      outcome: 'settled' as const,
      lessons: [
        'Regular electrical maintenance prevents fires',
        'Proper fire detection systems save lives and property',
        'Business interruption coverage crucial for mill operations',
      ],
    },
    {
      id: '2',
      title: 'Export Shipment Contamination',
      description:
        'Contamination of textile shipment during transit led to rejection by international buyer and liability claims.',
      claimAmount: '₹8 Crores',
      settlementTime: '6 months',
      riskType: 'Product Liability',
      outcome: 'settled' as const,
      lessons: [
        'Quality control at every stage is essential',
        'Marine insurance covers transit risks',
        'Product liability insurance protects against rejections',
      ],
    },
    {
      id: '3',
      title: 'Machinery Breakdown in Weaving Unit',
      description:
        'Critical loom breakdown during peak production season caused significant production delays and order cancellations.',
      claimAmount: '₹12 Crores',
      settlementTime: '4 months',
      riskType: 'Equipment Breakdown',
      outcome: 'settled' as const,
      lessons: [
        'Preventive maintenance reduces breakdown risks',
        'Equipment breakdown insurance covers repair costs',
        'Business interruption protects against lost orders',
      ],
    },
    {
      id: '4',
      title: 'Environmental Pollution Claim',
      description:
        'Effluent treatment plant failure led to water contamination and regulatory penalties.',
      claimAmount: '₹5 Crores',
      settlementTime: '8 months',
      riskType: 'Environmental',
      outcome: 'settled' as const,
      lessons: [
        'Environmental compliance is mandatory',
        'Pollution liability insurance covers cleanup costs',
        'Regular ETP maintenance prevents violations',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most common cause of fire in textile mills?',
      options: [
        'Chemical reactions',
        'Electrical faults and overheating',
        'Smoking in premises',
        'External factors',
      ],
      correctAnswer: 1,
      explanation:
        'Electrical faults and overheating of machinery are the leading causes of fires in textile mills due to high power consumption and continuous operations.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which insurance is mandatory for textile exporters?',
      options: [
        'Fire insurance only',
        'Export credit insurance',
        'Marine insurance',
        'Product liability insurance',
      ],
      correctAnswer: 2,
      explanation:
        'Marine insurance is mandatory for textile exporters to cover goods in transit, though export credit insurance is also highly recommended.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does GSM stand for in textile industry?',
      options: [
        'Global Supply Management',
        'Grams per Square Meter',
        'Garment Size Measurement',
        'General Safety Manual',
      ],
      correctAnswer: 1,
      explanation:
        'GSM (Grams per Square Meter) is a standard measurement for fabric weight and density in the textile industry.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which environmental risk is highest in textile dyeing units?',
      options: ['Air pollution', 'Water contamination', 'Soil degradation', 'Noise pollution'],
      correctAnswer: 1,
      explanation:
        'Water contamination is the highest environmental risk in dyeing units due to chemical discharge and effluent treatment challenges.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical business interruption period covered for textile mills?',
      options: ['3-6 months', '6-12 months', '12-18 months', '24+ months'],
      correctAnswer: 2,
      explanation:
        '12-18 months is typical as textile mill reconstruction and machinery replacement can take considerable time after major incidents.',
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
              Textile Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for spinning, weaving, dyeing, and garment
              manufacturing—protecting your textile operations from fire, machinery breakdown, and
              export risks.
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
              Specialized coverage for cotton, synthetic, and blended textile manufacturing with
              export credit protection.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Textile Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            The textile industry is one of India&#39;s largest manufacturing sectors, employing
            millions and contributing significantly to exports. However, it faces unique risks that
            require specialized insurance solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Textile manufacturing involves complex processes from fiber to finished products,
                with significant fire risks, machinery dependencies, and export market exposures.
                The industry requires comprehensive insurance coverage to protect against
                operational risks, environmental liabilities, and international trade risks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  High fire risk due to combustible materials and electrical equipment
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Machinery-intensive operations requiring breakdown protection
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Export-oriented business needing trade credit insurance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Segments</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaTshirt className="text-blue-500" />
                  <div>
                    <div className="font-medium">Spinning & Weaving</div>
                    <div className="text-sm text-gray-600">
                      Yarn production and fabric manufacturing
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCut className="text-blue-500" />
                  <div>
                    <div className="font-medium">Dyeing & Finishing</div>
                    <div className="text-sm text-gray-600">Fabric processing and treatment</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaGlobe className="text-blue-500" />
                  <div>
                    <div className="font-medium">Garment Manufacturing</div>
                    <div className="text-sm text-gray-600">Ready-made garments and apparel</div>
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
            Tailored insurance solutions for every segment of the textile value chain.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaTshirt />} title="Spinning Mills">
              Cotton, synthetic, and blended yarn manufacturing units with high-speed machinery.
            </Tile>
            <Tile icon={<FaCut />} title="Weaving & Knitting">
              Fabric production units including power looms, shuttleless looms, and knitting
              machines.
            </Tile>
            <Tile icon={<FaRecycle />} title="Processing Units">
              Dyeing, printing, finishing, and chemical treatment facilities.
            </Tile>
            <Tile icon={<FaGlobe />} title="Garment Exporters">
              Ready-made garment manufacturers and textile exporters serving global markets.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Textile Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            textile operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaFire />}
              title="Fire & Explosion"
              description="High fire risk due to combustible materials, lint accumulation, and electrical equipment overheating."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaTools />}
              title="Machinery Breakdown"
              description="Critical equipment failure in spinning, weaving, or processing machinery affecting production."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Pollution"
              description="Water contamination from dyeing processes and chemical discharge affecting environment."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaGlobe />}
              title="Export Credit Risk"
              description="Buyer default, political risks, and currency fluctuations affecting export payments."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Product Liability"
              description="Quality issues, contamination, or defects in textile products leading to liability claims."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Floods, cyclones, and extreme weather events damaging facilities and inventory."
              severity="High"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Textile Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for textile manufacturing and export
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaFire className="text-2xl text-blue-500" />}
              title="Fire & Allied Perils"
              body="Comprehensive fire coverage for mills, machinery, raw materials, and finished goods."
              bullets={[
                'Fire, lightning, explosion, and electrical damage',
                'Riot, strike, malicious damage coverage',
                'Impact damage and aircraft damage protection',
              ]}
            />
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Machinery Breakdown & EEI"
              body="Protection against breakdown of critical textile machinery and electrical equipment."
              bullets={[
                'Spinning, weaving, and processing machinery',
                'Electrical and electronic equipment coverage',
                'Expediting expenses and temporary repairs',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Public & Product Liability"
              body="Third-party liability coverage for manufacturing operations and product defects."
              bullets={[
                'Public liability for mill operations',
                'Product liability for textile products',
                'Employer liability and workmen compensation',
              ]}
            />
            <Card
              icon={<FaTruckMoving className="text-2xl text-blue-500" />}
              title="Marine & Export Credit"
              body="Coverage for goods in transit and protection against buyer default risks."
              bullets={[
                'Marine cargo insurance for exports',
                'Export credit insurance for buyer risks',
                'Warehouse to warehouse coverage',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Textile Industry</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the textile
            industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Textile Starter Plan"
              description="Essential coverage for small textile units and processing facilities"
              price="₹3L - ₹8L"
              features={[
                'Fire & Allied Perils Coverage',
                'Machinery Breakdown (Basic)',
                'Public Liability Insurance',
                'Workmen Compensation',
                'Burglary & Theft Protection',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Textile Professional Plan"
              description="Comprehensive coverage for medium-scale textile manufacturing units"
              price="₹8L - ₹30L"
              features={[
                'All Starter Plan Benefits',
                'Business Interruption Coverage',
                'Environmental Liability',
                'Marine Cargo Insurance',
                'Product Liability Coverage',
                'Export Credit Insurance (Basic)',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Textile Enterprise Plan"
              description="Complete protection for large textile mills and export houses"
              price="₹30L+"
              features={[
                'All Professional Plan Benefits',
                'Advanced Export Credit Coverage',
                'International Liability Coverage',
                'Political Risk Insurance',
                'Directors & Officers Liability',
                'Dedicated Claims Management',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Textile Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="textile_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Textile Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Weaving Protection. Securing Textile Success.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s textile specialists for comprehensive coverage, export
                  protection, and expert claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Mill Data
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
              value="Textile Insurance Specialists"
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

export default TextileInsurancePage;
