import CarouselWithFilter from '@/components/caraousel-with-filter';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaHardHat,
  FaIndustry,
  FaUniversity,
  FaCogs,
  FaTools,
  FaShip,
  FaWater,
  FaRoad,
  FaTrain,
  FaWind,
  FaSolarPanel,
  FaBuilding,
  FaMapSigns,
  FaFileContract,
  FaClipboardCheck,
  FaLock,
  FaUmbrella,
  FaFirstAid,
  FaBriefcaseMedical,
  FaPhoneAlt,
  FaLaptopCode,
  FaGavel,
  FaPlug,
  FaBolt,
  FaSnowflake,
} from 'react-icons/fa';
import { FaBridge } from 'react-icons/fa6';

const InfrastructureInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Infrastructure Insurance Solutions
            </h1>
            <p className="mt-5 text-lg text-gray-700 md:text-xl">
              End-to-end risk cover for EPC, developers, and financiers across roads, bridges,
              metros, airports, ports, power, renewables, water, and industrial projects.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Project Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Book Risk Workshop
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Specialist
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Licensed IRDA Insurance Broker under Share India Group; technology-driven placement
              and claims services.
            </div>
          </div>
        </div>
      </section>

      {/* Claim Stories Carousel */}
      <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold md:text-3xl">Claim Stories</h3>
        <p className="mt-3 mb-6 text-gray-700">
          See how we helped infrastructure clients manage complex claims and get back on track.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <CarouselWithFilter topic="infrastructure_industry" />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive broking for complex, multi-stakeholder infrastructure ecosystems.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<FaHardHat />}
              title="EPC & Contractors"
              description="Civil, mechanical, electrical, O&M contractors and subcontractors."
            />
            <ServiceCard
              icon={<FaIndustry />}
              title="Developers & SPVs"
              description="Project owners, concessionaires, InvITs and infrastructure investors."
            />
            <ServiceCard
              icon={<FaUniversity />}
              title="Financiers"
              description="Banks, NBFCs, multilaterals with lender's interest endorsements."
            />
            <ServiceCard
              icon={<FaMapSigns />}
              title="Government & PSU"
              description="Roads, rails, bridges, airports, ports and water agencies."
            />
          </div>
        </div>
      </section>

      {/* Core Project Policies */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Project Policies</h2>
          <p className="mt-3 text-gray-700">
            Modular and comprehensive covers across construction, erection, testing and operations
            phases.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
            <PolicyCard
              icon={<FaTools />}
              title="Contractors All Risk (CAR)"
              description="All-risk cover for civil works: works-in-progress, materials on site, TPL, debris removal, with optional extensions for DSU/ALOP."
              features={[
                'Section I: Material Damage (fire, flood, storm, theft, collapse, landslide).',
                'Section II: Third-Party Liability (injury, property damage, legal costs).',
                'Key exclusions: faulty design, normal wear/tear; faulty workmanship limited to affected part.',
              ]}
            />

            <PolicyCard
              icon={<FaCogs />}
              title="Erection All Risk (EAR)"
              description="Cover for installation and commissioning of plant and machinery, including testing and trial runs with TPL extensions."
              features={[
                'Material damage during erection, hot/cold testing, commissioning.',
                'TPL for injury/damage to adjacent property and public.',
              ]}
            />

            <PolicyCard
              icon={<FaClipboardCheck />}
              title="Delay in Start-Up (DSU/ALOP)"
              description="Consequential loss cover for revenue/financing costs due to insured physical damage delays on CAR/EAR master policy."
              features={[
                'Covers lost gross profit, standing charges, debt servicing for insured events.',
                "Critical for lender protection, aligns with lender's interest endorsements.",
              ]}
            />

            <PolicyCard
              icon={<FaShip />}
              title="Project Cargo & Marine"
              description="Transit cover for heavy/over-dimensional cargo from origin to site including unloading, storage and inland transit."
              features={[
                'Institute Cargo Clauses, project cargo add-ons, SDR limits alignment.',
                'Stock throughput structures for long projects with multiple consignments.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Liability and Specialty Coverage */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Liability and Specialty</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive third-party and specialty protections for large project environments.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <LiabilityCard
              icon={<FaUmbrella />}
              title="Commercial General Liability"
              description="Premises, operations, products/completed ops, contractor protective liability."
            />
            <LiabilityCard
              icon={<FaFirstAid />}
              title="Contractor's Plant & Machinery"
              description="CPM cover for excavators, cranes, tunneling machines, with earthquake/flood add-ons."
            />
            <LiabilityCard
              icon={<FaBriefcaseMedical />}
              title="Workmen Compensation"
              description="Statutory WC/EL and PA for site and yard workforce including subcontractor employees."
            />
            <LiabilityCard
              icon={<FaGavel />}
              title="Professional Indemnity"
              description="PI for architects, engineers, PMC, and design consultants with retro and run-off."
            />
            <LiabilityCard
              icon={<FaLock />}
              title="Cyber & OT Security"
              description="Cyber/OT risk for SCADA, ICS, and project data rooms during construction and operations."
            />
            <LiabilityCard
              icon={<FaBolt />}
              title="Contractor's Guarantee/Advance Loss"
              description="Advance Payment Bond, Performance Guarantee via surety solutions; ALoP tied to DSU."
            />
          </div>
        </div>
      </section>

      {/* Sector Coverage */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Sector Coverage</h2>
          <p className="mt-3 text-gray-700">
            Tailored wordings and extensions for sector-specific exposures across India.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <SectorTag icon={<FaRoad />} label="Highways" />
            <SectorTag icon={<FaBridge />} label="Bridges & Flyovers" />
            <SectorTag icon={<FaTrain />} label="Rail & Metro" />
            <SectorTag icon={<FaWater />} label="Water & Sewage" />
            <SectorTag icon={<FaWind />} label="Wind" />
            <SectorTag icon={<FaSolarPanel />} label="Solar" />
            <SectorTag icon={<FaPlug />} label="Transmission" />
            <SectorTag icon={<FaIndustry />} label="Industrial Plants" />
            <SectorTag icon={<FaBuilding />} label="Airports & Ports" />
            <SectorTag icon={<FaSnowflake />} label="Tunnels" />
            <SectorTag icon={<FaShip />} label="Harbors" />
            <SectorTag icon={<FaUniversity />} label="Urban Infra" />
          </div>
        </div>
      </section>

      {/* How SIIB Delivers */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">How SIIB Delivers</h2>
          <p className="mt-3 text-gray-700">
            Data-driven broking with rigorous risk engineering and lender alignment.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ProcessStep
              title="Risk Engineering"
              description="On-site risk surveys, loss prevention checklists, catastrophe assessment, and BOQ validation before placement."
              points={[
                'Scope & hazard mapping',
                'Method statements & JSA review',
                'Sum insured adequacy & PML',
              ]}
            />
            <ProcessStep
              title="Program Design"
              description="Policy structure, deductibles/franchises, sub-limits, testing periods, maintenance clauses, and lender endorsements."
              points={[
                'Wording alignment & exclusions',
                'DSU basis: GP/GS/DSC',
                'Multi-stakeholder coverage',
              ]}
            />
            <ProcessStep
              title="Placement & Claims"
              description="Competitive multi-insurer placement, claims protocols, and post-loss project acceleration support."
              points={[
                'Panel negotiation & slips',
                'Loss adjuster engagement',
                'Cash loss/On-account advances',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Typical Extensions & Add-ons */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Typical Extensions & Add-ons</h2>
          <p className="mt-3 text-gray-700">
            Build a robust program with project-specific endorsements and extensions.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {extensionsList.map((item) => (
              <ExtensionItem key={item} text={item} />
            ))}
          </div>
        </div>
      </section>

      {/* DSU/ALOP Structuring */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">DSU/ALOP Structuring Considerations</h2>
          <p className="mt-3 text-gray-700">
            Aligning contractual timelines with realistic indemnity and waiting periods.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
            <InfoCard
              title="Sum Insured Basis"
              content="Gross Profit, Gross Earnings, Debt Service Cost or hybrid depending on lender covenants and cash flow models."
            />
            <InfoCard
              title="Waiting Period"
              content="Typical 30–90 days based on critical path analysis and single point of failure assessment."
            />
            <InfoCard
              title="Indemnity Period"
              content="6–18 months aligned to reconstruction timelines, import lead times, and statutory approvals."
            />
          </div>
        </div>
      </section>

      {/* Premium Drivers */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Premium Drivers</h2>
          <p className="mt-3 text-gray-700">
            Underwriting parameters that influence quotes and coverage terms.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              title="Project Value & Duration"
              content="Total project cost, phase milestones, long-lead imports and schedule buffers."
            />
            <InfoCard
              title="Location & Perils"
              content="Seismic zone, flood/storm history, geotechnical risks, hydrology and proximity exposures."
            />
            <InfoCard
              title="Design & Methods"
              content="Novel construction techniques, tunneling, deep foundations, hot commissioning risk."
            />
            <InfoCard
              title="Loss History & Controls"
              content="Past claims, HSE culture, site security, QA/QC, surveillance, and supervision."
            />
            <InfoCard
              title="Supply Chain"
              content="ODC moves, route surveys, multimodal legs, cranes and jacking risks."
            />
            <InfoCard
              title="Stakeholder Matrix"
              content="Sub-contracting complexity, JV structures, and lender covenants affecting coverage."
            />
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">What You Receive</h2>
          <p className="mt-3 text-gray-700">
            Structured documentation and real-time visibility throughout the project lifecycle.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
            <InfoCard
              title="Risk Survey Report"
              content="Detailed hazard analysis, PML scenarios, COPE data and recommendations before placement."
            />
            <InfoCard
              title="Placement Slips"
              content="Multiple insurer quotes, clause-by-clause comparison, panel recommendation and binders."
            />
            <InfoCard
              title="Claims Protocols"
              content="Loss notification flow, adjuster coordination, documentation checklist, and on-account strategies."
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Carousel */}
      <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold md:text-3xl">Relevant Articles</h3>
        <p className="mt-3 mb-6 text-gray-700">
          Browse insights on infrastructure insurance trends, claims, and risk management.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <CarouselWithFilter topic="infrastructure_industry" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Start Your Infrastructure Insurance Program
                </h3>
                <p className="mt-2 text-gray-700">
                  Work with SIIB&#39;s dedicated infrastructure desk for faster placement, stronger
                  wordings, and proactive claims support.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaLaptopCode className="mr-2" />
                  Upload Project Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="text-2xl text-blue-500">{icon}</div>
    <h3 className="mt-3 font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
  </div>
);

const PolicyCard = ({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      <div className="text-2xl text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
    <ul className="mt-3 space-y-1 text-sm text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const LiabilityCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      <div className="text-blue-500">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
  </div>
);

const SectorTag = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
    <span className="text-blue-500">{icon}</span>
    <span className="text-sm">{label}</span>
  </div>
);

const ProcessStep = ({
  title,
  description,
  points,
}: {
  title: string;
  description: string;
  points: string[];
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
    <ul className="mt-4 space-y-1 text-sm text-gray-700">
      {points.map((point, index) => (
        <li key={index} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const ExtensionItem = ({ text }: { text: string }) => (
  <div className="flex items-start rounded-lg border border-gray-200 p-4">
    <FaChevronRight className="mt-1 mr-2 text-blue-400" />
    <span className="text-sm">{text}</span>
  </div>
);

const InfoCard = ({ title, content }: { title: string; content: string }) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{content}</p>
  </div>
);

// Constants
const extensionsList = [
  'Escalation clause',
  'Expediting expenses',
  'Design defect (LEG 1/2/3 equivalents)',
  'Debris removal',
  'Surrounding property',
  'Offsite storage',
  'Inland transit to site',
  'Testing & commissioning',
  'Extended maintenance',
  'Cross liability/separation of insureds',
  "Principal's existing property",
  'Architects/Surveyors fees',
  'Earthquake (Zone-wise)',
  'Flood, storm, cyclone',
  'Breakdown during testing',
  'Clearance of drains',
  'Underground services',
  'Devaluation due to delay (with DSU)',
];

export default InfrastructureInsurancePage;
