'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaIndustry,
  FaFlask,
  FaBiohazard,
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
} from 'react-icons/fa';
import ClaimStories from '../_components/ClaimStories';

import KnowledgeQuestionnaire from '../_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const ChemicalInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Chemical Plant Fire & Explosion',
      description:
        'A major petrochemical facility experienced a catastrophic fire due to equipment failure, resulting in significant property damage and business interruption.',
      claimAmount: '₹45 Crores',
      settlementTime: '8 months',
      riskType: 'Fire & Explosion',
      outcome: 'settled' as const,
      lessons: [
        'Regular equipment maintenance is crucial',
        'Emergency response protocols saved lives',
        'Business interruption coverage was essential',
      ],
    },
    {
      id: '2',
      title: 'Environmental Contamination',
      description:
        'Chemical spill contaminated groundwater requiring extensive cleanup and third-party compensation.',
      claimAmount: '₹12 Crores',
      settlementTime: '14 months',
      riskType: 'Environmental',
      outcome: 'settled' as const,
      lessons: [
        'Environmental liability coverage is mandatory',
        'Quick response minimizes damage',
        'Regulatory compliance reduces penalties',
      ],
    },
    {
      id: '3',
      title: 'Product Liability Claim',
      description:
        'Defective chemical batch caused damage to customer manufacturing process, leading to liability claims.',
      claimAmount: '₹8 Crores',
      settlementTime: '6 months',
      riskType: 'Product Liability',
      outcome: 'settled' as const,
      lessons: [
        'Quality control processes are vital',
        'Product liability insurance protects reputation',
        'Documentation helps in claim settlement',
      ],
    },
    {
      id: '4',
      title: 'Cyber Attack on Control Systems',
      description:
        'Ransomware attack on industrial control systems caused production shutdown and data breach.',
      claimAmount: '₹5 Crores',
      settlementTime: '4 months',
      riskType: 'Cyber Security',
      outcome: 'settled' as const,
      lessons: [
        'OT/ICS systems need cyber protection',
        'Backup systems are essential',
        'Cyber insurance covers business interruption',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most critical factor in chemical plant fire prevention?',
      options: [
        'Having fire extinguishers',
        'Regular equipment maintenance and inspection',
        'Training employees only',
        'Installing alarms',
      ],
      correctAnswer: 1,
      explanation:
        'Regular equipment maintenance and inspection is crucial as most chemical plant fires are caused by equipment failure, leaks, or malfunctions.',
      difficulty: 'medium' as const,
    },
    {
      id: '2',
      question:
        'Which insurance coverage is mandatory for chemical manufacturers handling hazardous substances?',
      options: [
        'Product liability only',
        'Environmental liability insurance',
        'Fire insurance only',
        'Marine insurance',
      ],
      correctAnswer: 1,
      explanation:
        'Environmental liability insurance is mandatory for chemical manufacturers as they handle hazardous substances that can cause environmental damage.',
      difficulty: 'easy' as const,
    },
    {
      id: '3',
      question: 'What does HAZOP stand for in chemical industry risk assessment?',
      options: [
        'Hazard and Operability Study',
        'Hazardous Operations Protocol',
        'Health and Safety Operations',
        'Hazard Analysis and Prevention',
      ],
      correctAnswer: 0,
      explanation:
        'HAZOP (Hazard and Operability Study) is a systematic examination technique used to identify potential hazards and operational problems.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects chemical industry insurance premiums?',
      options: [
        'Company size',
        'Location only',
        'Risk management practices and safety record',
        'Number of employees',
      ],
      correctAnswer: 2,
      explanation:
        'Risk management practices and safety record are the most significant factors as they directly indicate the likelihood of claims.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question:
        'What is the typical coverage limit recommended for chemical plant business interruption insurance?',
      options: [
        '6 months of revenue',
        '12-18 months of revenue',
        '3 months of revenue',
        '24 months of revenue',
      ],
      correctAnswer: 1,
      explanation:
        '12-18 months of revenue is typically recommended as chemical plant repairs and restart can take considerable time after major incidents.',
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
              Chemical Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for bulk/intermediates, specialties, agrochemicals, and
              petrochemicals—across process safety, environment, logistics, and product stewardship.
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
              Process safety-led placement and claims protocols for Seveso/MH rules, HAZOP findings,
              and insurer engineering standards.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Risk programs tuned to batch and continuous plants with multi-hazard profiles.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaIndustry />} title="Bulk & Intermediates">
              Acids, solvents, polymers, resins, textile chemicals, adhesives.
            </Tile>
            <Tile icon={<FaFlask />} title="Specialties & Pharma Intermediates">
              High-purity, custom syntheses, catalysts, and tolling operations.
            </Tile>
            <Tile icon={<FaBiohazard />} title="Agro & Hazardous">
              Crop protection, toxic/to flammable inventories, DG warehouses.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Storage & Terminals">
              Tank farms, bonded warehouses, ISO tanks, and filling operations.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Property, liability, environment, and logistics—engineered for high-hazard operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaFire className="text-2xl text-blue-500" />}
              title="Property & Business Interruption"
              body="All-risk/named-perils for plants, utilities, tanks, reactors, with BI/CMI for insured shutdowns."
              bullets={[
                'Fire, explosion, STFI, EQ, machinery breakdown',
                'Escalation, debris removal, professional fees',
                'Denial of access and utilities failure endorsements',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="General & Products Liability"
              body="Third-party injury/property damage and completed operations, including product liability."
              bullets={[
                'Contractor protective and vendor endorsements',
                'Global jurisdiction/territory options',
                'Product stewardship and downstream risks',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental & Pollution Liability"
              body="Sudden/gradual pollution, on/off-site clean-up, and regulatory defense for spills and emissions."
              bullets={[
                'Storage tank, effluent, waste transit/disposal',
                'Third-party BI/PD and civil fines where insurable',
                'Contractor pollution liability options',
              ]}
            />
            <Card
              icon={<FaTruckMoving className="text-2xl text-blue-500" />}
              title="Marine/Transit & Warehouse Legal Liability"
              body="Cargo and DG transit; bailee’s liability for DG storage and cross-dock handling."
              bullets={[
                'DG segregation, MSDS/SDS compliance, labeling',
                'Temperature control and contamination add-ons',
                'Route survey and hot-spot endorsements',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Machinery Breakdown & EEI"
              body="Breakdown of critical equipment: compressors, chillers, reactors, control systems."
              bullets={[
                'Spares and expediting costs',
                'Power surge and instrumentation coverage',
                'Engineering BI for extended outages',
              ]}
            />
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Cyber & OT/ICS"
              body="Cyber for DCS/PLC/SCADA, lab LIMS, and ERP with dependent BI for vendors and cloud."
              bullets={[
                'Ransomware and business interruption',
                'OT breach and safety system compromise',
                'Incident response and forensics',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Operational risks */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Operational Risks</h2>
          <p className="mt-3 text-gray-700">
            Process-safety and high-severity scenarios addressed in program design.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaExclamationTriangle />} title="Process Safety">
              HAZOP/Lopa findings, overpressure, runaway reactions, and relief systems.
            </MiniCard>
            <MiniCard icon={<FaBiohazard />} title="Hazardous Inventories">
              Flammable/toxic storage, tank farms, incompatible chemicals, segregation.
            </MiniCard>
            <MiniCard icon={<FaWater />} title="Effluent & Spills">
              ETP capacity, bunding, spill kits, emergency drains, groundwater risks.
            </MiniCard>
            <MiniCard icon={<FaWind />} title="Explosion & Overpressure">
              VCE, BLEVE, deflagration, venting, and blast-resistant design.
            </MiniCard>
            <MiniCard icon={<FaPlug />} title="Utilities & Power">
              Steam, chilled water, nitrogen/inert gas; electrical quality and backup.
            </MiniCard>
            <MiniCard icon={<FaWarehouse />} title="DG Warehousing">
              Racking, aisle spacing, foam/water systems, impairment control, ATEX.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Engineering-led structuring aligned to insurer risk standards.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="P&IDs, hazardous area classification, MSDS/SDS, ETP, and emergency response."
              points={[
                'Relief systems and interlocks',
                'Ignition source control',
                'Spill and storm response plans',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Property/BI, GL/Product, Environmental, Transit/Warehouse, MB/EEI, Cyber/OT."
              points={[
                'Sublimits and deductibles',
                'Jurisdiction and territory',
                'Certificates and lender terms',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel quotes with agreed SOPs, adjuster engagement, and on-account arrangements."
              points={[
                'Evidence and sampling',
                'Root-cause and CAPA',
                'Salvage and cleanup coordination',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Extensions & add-ons */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Typical Extensions & Add-ons</h2>
          <p className="mt-3 text-gray-700">
            Close gaps for high-hazard, compliance-heavy operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Escalation/inflation and professional fees',
              'Explosion and collapse extensions',
              'Utilities failure and denial of access',
              'Contamination/cleanup endorsements',
              'Transit of DG, reefer temperature deviation',
              'Warehouse legal liability (bailee’s)',
              'Cyber dependent BI and OT breach',
              'Contractor pollution liability',
              'Product withdrawal/recall (where available)',
              'Spare parts, expediting, rental equipment',
              'Tank leakage and bunding failure',
              'Glass breakage and fragile goods',
              'Third-party property in CCC',
              'Sabotage/terrorism (as available)',
            ].map((txt) => (
              <div key={txt} className="flex items-start rounded-lg border border-gray-200 p-5">
                <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                <span className="text-sm">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Chemical Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            chemical operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaFire />}
              title="Fire & Explosion"
              description="Chemical reactions, equipment failure, and flammable material handling pose significant fire and explosion risks."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Contamination"
              description="Chemical spills, emissions, and waste disposal can cause environmental damage and regulatory penalties."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaBiohazard />}
              title="Product Liability"
              description="Defective chemical products can cause damage to customers and end-users, leading to liability claims."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Equipment Breakdown"
              description="Critical equipment failure in reactors, distillation columns, and control systems can halt production."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaLock />}
              title="Cyber Security"
              description="Cyber attacks on industrial control systems can disrupt operations and compromise safety systems."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaTruckMoving />}
              title="Transportation Risks"
              description="Hazardous material transportation poses risks of accidents, spills, and regulatory violations."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Chemical Industry" />

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Chemical Industry</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the chemical
            industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Chemical Starter Plan"
              description="Essential coverage for small chemical manufacturers and distributors"
              price="₹2.5L - ₹5L"
              features={[
                'Fire & Allied Perils Coverage',
                'Public Liability Insurance',
                'Product Liability (Basic)',
                'Workmen Compensation',
                'Marine Transit Insurance',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Chemical Professional Plan"
              description="Comprehensive coverage for medium-scale chemical operations"
              price="₹5L - ₹25L"
              features={[
                'All Starter Plan Benefits',
                'Environmental Liability',
                'Equipment Breakdown',
                'Business Interruption',
                'Cyber Liability (Basic)',
                'Directors & Officers Liability',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Chemical Enterprise Plan"
              description="Complete protection for large chemical manufacturing complexes"
              price="₹25L+"
              features={[
                'All Professional Plan Benefits',
                'Advanced Cyber & OT Protection',
                'International Coverage',
                'Crisis Management',
                'Recall Insurance',
                'Dedicated Claims Manager',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Chemical Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="chemical_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Chemical Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Process-Safe Coverage. Faster Claims. Lower Volatility.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB’s chemical desk for engineered wordings, disciplined placement,
                  and robust claims playbooks.
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
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Chemical Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers (same pattern) */
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

const MiniCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      <span className="text-xl text-blue-500">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{children}</p>
  </div>
);

const Step = ({ title, desc, points }: { title: string; desc: string; points: string[] }) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{desc}</p>
    <ul className="mt-4 space-y-1 text-sm text-gray-700">
      {points.map((p) => (
        <li key={p} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {p}
        </li>
      ))}
    </ul>
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

// Additional Helper Components
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

export default ChemicalInsurancePage;
