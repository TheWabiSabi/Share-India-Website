'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaCube,
  FaRecycle,
  FaIndustry,
  FaLeaf,
  FaFire,
  FaWater,
  FaWind,
  FaWarehouse,
  FaTruckMoving,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaPlug,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaFlask,
  FaThermometerHalf,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const PlasticInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Injection Molding Machine Fire',
      description:
        'Electrical fault in injection molding machine caused fire, damaging equipment and disrupting production for automotive components.',
      claimAmount: '₹18 Crores',
      settlementTime: '7 months',
      riskType: 'Equipment Fire',
      outcome: 'settled' as const,
      lessons: [
        'Regular electrical maintenance prevents equipment fires',
        'Fire suppression systems in production areas are essential',
        'Business interruption coverage protects against production losses',
      ],
    },
    {
      id: '2',
      title: 'Product Liability - Defective Packaging',
      description:
        'Defective plastic packaging caused food contamination, leading to consumer health issues and liability claims.',
      claimAmount: '₹22 Crores',
      settlementTime: '14 months',
      riskType: 'Product Liability',
      outcome: 'settled' as const,
      lessons: [
        'Quality control in food-grade plastics is critical',
        'Product liability insurance protects against consumer claims',
        'Traceability systems help identify defective batches quickly',
      ],
    },
    {
      id: '3',
      title: 'Environmental Pollution Incident',
      description:
        'Plastic waste discharge into water body led to environmental contamination and regulatory penalties.',
      claimAmount: '₹8 Crores',
      settlementTime: '10 months',
      riskType: 'Environmental',
      outcome: 'settled' as const,
      lessons: [
        'Waste management systems must comply with regulations',
        'Environmental liability insurance covers cleanup costs',
        'Sustainable practices reduce environmental risks',
      ],
    },
    {
      id: '4',
      title: 'Raw Material Contamination',
      description:
        'Contaminated polymer resin caused entire production batch to be rejected, resulting in significant losses.',
      claimAmount: '₹5 Crores',
      settlementTime: '4 months',
      riskType: 'Quality Control',
      outcome: 'settled' as const,
      lessons: [
        'Incoming material inspection prevents contamination',
        'Product recall insurance covers batch rejection costs',
        'Supplier quality agreements reduce risks',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Sustainable Plastics Manufacturing: Insurance Implications 2024',
      excerpt:
        'How the shift towards sustainable and biodegradable plastics is changing industry risk profiles.',
      author: 'Dr. Ramesh Gupta',
      publishDate: 'Apr 8, 2024',
      readTime: '9 min read',
      category: 'Sustainability',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Fire Safety in Plastic Manufacturing: Prevention and Protection',
      excerpt:
        'Comprehensive guide to fire prevention strategies and insurance coverage for plastic manufacturing facilities.',
      author: 'Sanjay Patel',
      publishDate: 'Mar 25, 2024',
      readTime: '7 min read',
      category: 'Safety',
      url: '#',
    },
    {
      id: '3',
      title: 'Product Liability Trends in Plastic Packaging Industry',
      excerpt:
        'Analysis of recent product liability claims and emerging risks in plastic packaging applications.',
      author: 'Neha Sharma',
      publishDate: 'Mar 18, 2024',
      readTime: '6 min read',
      category: 'Product Liability',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most common cause of fire in plastic manufacturing facilities?',
      options: [
        'Chemical reactions',
        'Electrical faults in machinery',
        'Static electricity',
        'Hot work operations',
      ],
      correctAnswer: 1,
      explanation:
        'Electrical faults in injection molding machines, extruders, and other equipment are the leading cause of fires in plastic manufacturing.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question:
        'Which environmental regulation is most relevant for plastic manufacturers in India?',
      options: [
        'Water Act only',
        'Air Act only',
        'Plastic Waste Management Rules',
        'Noise Pollution Rules',
      ],
      correctAnswer: 2,
      explanation:
        'Plastic Waste Management Rules 2016 (amended 2018) specifically regulate plastic manufacturing, use, and disposal in India.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "FDA approved" mean for plastic packaging materials?',
      options: [
        'Fire Department Approved',
        'Food and Drug Administration approved for food contact',
        'Factory Design Approved',
        'Fully Degradable Approved',
      ],
      correctAnswer: 1,
      explanation:
        'FDA approval means the plastic material is safe for food contact and meets regulatory standards for food packaging.',
      difficulty: 'medium' as const,
    },
    {
      id: '4',
      question: 'Which type of plastic manufacturing has the highest fire risk?',
      options: [
        'Injection molding',
        'Blow molding',
        'Thermoforming',
        'Extrusion with high-temperature processing',
      ],
      correctAnswer: 3,
      explanation:
        'Extrusion processes involving high temperatures and flammable materials pose the highest fire risk in plastic manufacturing.',
      difficulty: 'hard' as const,
    },
    {
      id: '5',
      question:
        'What is the typical business interruption period for plastic manufacturing equipment replacement?',
      options: ['1-3 months', '3-6 months', '6-12 months', '12+ months'],
      correctAnswer: 2,
      explanation:
        '6-12 months is typical for specialized plastic manufacturing equipment replacement, including delivery and installation time.',
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
              Plastic Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for plastic manufacturing, processing, and recycling—protecting
              operations from fire, environmental, and product liability risks.
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
              Specialized coverage for injection molding, extrusion, and recycling operations with
              environmental liability protection.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Plastic Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            The plastic industry is a vital manufacturing sector producing diverse products from
            packaging to automotive components. This industry faces unique risks related to fire
            hazards, environmental compliance, and product liability.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Plastic manufacturing involves high-temperature processes, flammable materials, and
                complex machinery. The industry serves diverse sectors including packaging,
                automotive, construction, and consumer goods. With increasing environmental
                regulations and sustainability concerns, plastic manufacturers face evolving risks
                requiring comprehensive insurance coverage for operational, environmental, and
                product liability exposures.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  High fire risk due to flammable materials and hot processes
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Environmental liability from waste and emissions
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Product liability risks in food-contact and consumer applications
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Manufacturing Processes</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCube className="text-blue-500" />
                  <div>
                    <div className="font-medium">Injection Molding</div>
                    <div className="text-sm text-gray-600">
                      Automotive, consumer goods, and packaging
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaIndustry className="text-blue-500" />
                  <div>
                    <div className="font-medium">Extrusion & Film</div>
                    <div className="text-sm text-gray-600">
                      Pipes, profiles, and flexible packaging
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRecycle className="text-blue-500" />
                  <div>
                    <div className="font-medium">Recycling & Processing</div>
                    <div className="text-sm text-gray-600">
                      Waste plastic processing and reprocessing
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
            Tailored insurance solutions for every segment of the plastic manufacturing ecosystem.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaCube />} title="Injection Molding Units">
              Automotive components, consumer products, and precision molding operations.
            </Tile>
            <Tile icon={<FaIndustry />} title="Extrusion Companies">
              Pipe manufacturers, film producers, and profile extrusion facilities.
            </Tile>
            <Tile icon={<FaRecycle />} title="Recycling Plants">
              Plastic waste processing, reprocessing, and sustainable manufacturing units.
            </Tile>
            <Tile icon={<FaFlask />} title="Compounding Units">
              Polymer compounding, masterbatch production, and specialty plastic manufacturers.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Plastic Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            plastic manufacturing operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaFire />}
              title="Fire & Explosion"
              description="High fire risk from flammable materials, hot processes, and electrical equipment in manufacturing."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Pollution"
              description="Plastic waste, emissions, and chemical discharge affecting environment and regulatory compliance."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Product Liability"
              description="Defective products, contamination, and safety issues in food-contact and consumer applications."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Machinery Breakdown"
              description="Failure of injection molding machines, extruders, and specialized manufacturing equipment."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaThermometerHalf />}
              title="Process Control Risks"
              description="Temperature variations, pressure failures, and quality control issues affecting production."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Raw Material Quality"
              description="Contaminated or substandard raw materials affecting product quality and safety."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Plastic Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for plastic manufacturing and processing
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaFire className="text-2xl text-blue-500" />}
              title="Fire & Allied Perils"
              body="Comprehensive fire coverage for manufacturing equipment, raw materials, and finished products."
              bullets={[
                'Fire, lightning, explosion, and electrical damage',
                'Machinery and equipment protection',
                'Raw material and finished goods coverage',
              ]}
            />
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Machinery Breakdown & EEI"
              body="Protection against breakdown of specialized plastic manufacturing equipment."
              bullets={[
                'Injection molding and extrusion machinery',
                'Heating, cooling, and control systems',
                'Expediting expenses and temporary repairs',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Product & Public Liability"
              body="Coverage for product defects and third-party liability in manufacturing operations."
              bullets={[
                'Product liability for defective plastic products',
                'Public liability for manufacturing operations',
                'Food-grade and medical device liability coverage',
              ]}
            />
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental Liability"
              body="Protection against environmental damage and regulatory compliance costs."
              bullets={[
                'Pollution liability and cleanup costs',
                'Waste management and disposal coverage',
                'Regulatory defense and compliance costs',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Plastic Industry</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the plastic
            manufacturing industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Plastic Starter Plan"
              description="Essential coverage for small plastic manufacturing and processing units"
              price="₹4L - ₹12L"
              features={[
                'Fire & Allied Perils Coverage',
                'Machinery Breakdown (Basic)',
                'Public Liability Insurance',
                'Workmen Compensation',
                'Product Liability (Basic)',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Plastic Professional Plan"
              description="Comprehensive coverage for established plastic manufacturers"
              price="₹12L - ₹50L"
              features={[
                'All Starter Plan Benefits',
                'Environmental Liability',
                'Enhanced Product Liability',
                'Business Interruption',
                'Equipment Breakdown (Advanced)',
                'Marine Transit Insurance',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Plastic Enterprise Plan"
              description="Complete protection for large plastic manufacturing complexes"
              price="₹50L+"
              features={[
                'All Professional Plan Benefits',
                'International Product Liability',
                'Crisis Management Services',
                'Supply Chain Protection',
                'Directors & Officers Liability',
                'Dedicated Risk Management Support',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Plastic Industry" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Plastic Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Shaping the Future. Protecting Every Process.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB's plastic industry specialists for comprehensive coverage,
                  environmental protection, and expert risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Plant Data
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
              value="Plastic Industry Insurance Specialists"
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
      <div className="font-semibeld">{value}</div>
    </div>
    <div className="text-xl text-blue-600">{icon}</div>
  </div>
);

export default PlasticInsurancePage;
