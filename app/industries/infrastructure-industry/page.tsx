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
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Infrastructure Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              End-to-end risk cover for EPC, developers, and financiers across roads, bridges,
              metros, airports, ports, power, renewables, water, and industrial
              projects[39][42][46].
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              and claims services[32][33][45].
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive broking for complex, multi-stakeholder infrastructure ecosystems[39][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-6">
              <FaHardHat className="text-2xl text-blue-500" />
              <h3 className="mt-3 font-semibold">EPC & Contractors</h3>
              <p className="mt-1 text-sm text-gray-600">
                Civil, mechanical, electrical, O&M contractors and subcontractors[43][46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <FaIndustry className="text-2xl text-blue-500" />
              <h3 className="mt-3 font-semibold">Developers & SPVs</h3>
              <p className="mt-1 text-sm text-gray-600">
                Project owners, concessionaires, InvITs and infrastructure investors[43][46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <FaUniversity className="text-2xl text-blue-500" />
              <h3 className="mt-3 font-semibold">Financiers</h3>
              <p className="mt-1 text-sm text-gray-600">
                Banks, NBFCs, multilaterals with lender’s interest endorsements[43][46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <FaMapSigns className="text-2xl text-blue-500" />
              <h3 className="mt-3 font-semibold">Government & PSU</h3>
              <p className="mt-1 text-sm text-gray-600">
                Roads, rails, bridges, airports, ports and water agencies[43][46].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Policies */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Project Policies</h2>
          <p className="mt-3 text-gray-700">
            Modular and comprehensive covers across construction, erection, testing and operations
            phases[41][42][46].
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* CAR */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaTools className="text-2xl text-blue-500" />
                <h3 className="text-lg font-semibold">Contractors All Risk (CAR)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                All-risk cover for civil works: works-in-progress, materials on site, TPL, debris
                removal, with optional extensions for DSU/ALOP[42][46].
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Section I: Material Damage (fire, flood, storm, theft, collapse, landslide)[46].
                </li>
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Section II: Third-Party Liability (injury, property damage, legal costs)[44][46].
                </li>
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Key exclusions: faulty design, normal wear/tear; faulty workmanship limited to
                  affected part[44][46].
                </li>
              </ul>
            </div>

            {/* EAR */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaCogs className="text-2xl text-blue-500" />
                <h3 className="text-lg font-semibold">Erection All Risk (EAR)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Cover for installation and commissioning of plant and machinery, including testing
                and trial runs with TPL extensions[41][46].
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Material damage during erection, hot/cold testing, commissioning[46].
                </li>
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  TPL for injury/damage to adjacent property and public[41][46].
                </li>
              </ul>
            </div>

            {/* DSU/ALOP */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaClipboardCheck className="text-2xl text-blue-500" />
                <h3 className="text-lg font-semibold">Delay in Start-Up (DSU/ALOP)</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Consequential loss cover for revenue/financing costs due to insured physical damage
                delays on CAR/EAR master policy[41][46].
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Covers lost gross profit, standing charges, debt servicing for insured
                  events[41][46].
                </li>
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Critical for lender protection, aligns with lender’s interest endorsements[46].
                </li>
              </ul>
            </div>

            {/* Project Cargo & Marine */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaShip className="text-2xl text-blue-500" />
                <h3 className="text-lg font-semibold">Project Cargo & Marine</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Transit cover for heavy/over-dimensional cargo from origin to site including
                unloading, storage and inland transit[40][46].
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Institute Cargo Clauses, project cargo add-ons, SDR limits alignment[40].
                </li>
                <li className="flex">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Stock throughput structures for long projects with multiple consignments[40].
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liability Suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Liability and Specialty</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive third-party and specialty protections for large project
            environments[41][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaUmbrella className="text-blue-500" />
                <h3 className="font-semibold">Commercial General Liability</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Premises, operations, products/completed ops, contractor protective liability[46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaFirstAid className="text-blue-500" />
                <h3 className="font-semibold">Contractor’s Plant & Machinery</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                CPM cover for excavators, cranes, tunneling machines, with earthquake/flood
                add-ons[46][47].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaBriefcaseMedical className="text-blue-500" />
                <h3 className="font-semibold">Workmen Compensation</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Statutory WC/EL and PA for site and yard workforce including subcontractor
                employees[46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaGavel className="text-blue-500" />
                <h3 className="font-semibold">Professional Indemnity</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                PI for architects, engineers, PMC, and design consultants with retro and
                run-off[46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaLock className="text-blue-500" />
                <h3 className="font-semibold">Cyber & OT Security</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Cyber/OT risk for SCADA, ICS, and project data rooms during construction and
                operations[46].
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <FaBolt className="text-blue-500" />
                <h3 className="font-semibold">Contractor’s Guarantee/Advance Loss</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Advance Payment Bond, Performance Guarantee via surety solutions; ALoP tied to
                DSU[41][46].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Focus */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Sector Coverage</h2>
          <p className="mt-3 text-gray-700">
            Tailored wordings and extensions for sector-specific exposures across India[39][46].
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <Tag icon={<FaRoad />} label="Highways" />
            <Tag icon={<FaBridge />} label="Bridges & Flyovers" />
            <Tag icon={<FaTrain />} label="Rail & Metro" />
            <Tag icon={<FaWater />} label="Water & Sewage" />
            <Tag icon={<FaWind />} label="Wind" />
            <Tag icon={<FaSolarPanel />} label="Solar" />
            <Tag icon={<FaPlug />} label="Transmission" />
            <Tag icon={<FaIndustry />} label="Industrial Plants" />
            <Tag icon={<FaBuilding />} label="Airports & Ports" />
            <Tag icon={<FaSnowflake />} label="Tunnels" />
            <Tag icon={<FaShip />} label="Harbors" />
            <Tag icon={<FaUniversity />} label="Urban Infra" />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">How SIIB Delivers</h2>
          <p className="mt-3 text-gray-700">
            Data-driven broking with rigorous risk engineering and lender alignment[32][33][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Risk Engineering"
              desc="On-site risk surveys, loss prevention checklists, catastrophe assessment, and BOQ validation before placement."
              points={[
                'Scope & hazard mapping',
                'Method statements & JSA review',
                'Sum insured adequacy & PML',
              ]}
            />
            <Step
              title="Program Design"
              desc="Policy structure, deductibles/franchises, sub-limits, testing periods, maintenance clauses, and lender endorsements."
              points={[
                'Wording alignment & exclusions',
                'DSU basis: GP/GS/DSC',
                'Multi-stakeholder coverage',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Competitive multi-insurer placement, claims protocols, and post-loss project acceleration support."
              points={[
                'Panel negotiation & slips',
                'Loss adjuster engagement',
                'Cash loss/On-account advances',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Typical Extensions */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Typical Extensions & Add-ons</h2>
          <p className="mt-3 text-gray-700">
            Build a robust program with project-specific endorsements and extensions[41][44][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
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
              'Principal’s existing property',
              'Architects/Surveyors fees',
              'Earthquake (Zone-wise)',
              'Flood, storm, cyclone',
              'Breakdown during testing',
              'Clearance of drains',
              'Underground services',
              'Devaluation due to delay (with DSU)',
            ].map((item) => (
              <div key={item} className="flex items-start rounded-lg border border-gray-200 p-5">
                <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSU Considerations */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">DSU/ALOP Structuring Considerations</h2>
          <p className="mt-3 text-gray-700">
            Aligning contractual timelines with realistic indemnity and waiting periods[41][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              title="Sum Insured Basis"
              body="Gross Profit, Gross Earnings, Debt Service Cost or hybrid depending on lender covenants and cash flow models[41][46]."
            />
            <Card
              title="Waiting Period"
              body="Typical 30–90 days based on critical path analysis and single point of failure assessment[41][46]."
            />
            <Card
              title="Indemnity Period"
              body="6–18 months aligned to reconstruction timelines, import lead times, and statutory approvals[41][46]."
            />
          </div>
        </div>
      </section>

      {/* Premium Drivers */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Premium Drivers</h2>
          <p className="mt-3 text-gray-700">
            Underwriting parameters that influence quotes and coverage terms[42][43][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Project Value & Duration"
              body="Total project cost, phase milestones, long-lead imports and schedule buffers[42][46]."
            />
            <Card
              title="Location & Perils"
              body="Seismic zone, flood/storm history, geotechnical risks, hydrology and proximity exposures[46][47]."
            />
            <Card
              title="Design & Methods"
              body="Novel construction techniques, tunneling, deep foundations, hot commissioning risk[41][46]."
            />
            <Card
              title="Loss History & Controls"
              body="Past claims, HSE culture, site security, QA/QC, surveillance, and supervision[46]."
            />
            <Card
              title="Supply Chain"
              body="ODC moves, route surveys, multimodal legs, cranes and jacking risks[40][46]."
            />
            <Card
              title="Stakeholder Matrix"
              body="Sub-contracting complexity, JV structures, and lender covenants affecting coverage[46]."
            />
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">What You Receive</h2>
          <p className="mt-3 text-gray-700">
            Structured documentation and real-time visibility throughout the project
            lifecycle[33][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              title="Risk Survey Report"
              body="Detailed hazard analysis, PML scenarios, COPE data and recommendations before placement[46]."
            />
            <Card
              title="Placement Slips"
              body="Multiple insurer quotes, clause-by-clause comparison, panel recommendation and binders[46]."
            />
            <Card
              title="Claims Protocols"
              body="Loss notification flow, adjuster coordination, documentation checklist, and on-account strategies[46]."
            />
          </div>
        </div>
      </section>

      {/* Case snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            Illustrative scenarios from typical infrastructure claims and risk controls[41][46].
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Metro Viaduct Pier Collapse"
              points={[
                'CAR Section I material damage triggered with surrounding property extension[46].',
                'TPL for public injury; rapid appointment of adjuster and contractor segregation[46].',
                'DSU impact partially mitigated via expediting expenses and alternative sourcing[41].',
              ]}
            />
            <Case
              title="Wind Farm Blade Damage in Transit"
              points={[
                'Project cargo marine claim under ICC(A) with route survey evidence[40].',
                'On-account payment to maintain erection schedule and crane mobilization[46].',
                'Subrogation against transporter per contract terms and SDR limits[40].',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Start Your Infrastructure Insurance Program
                </h3>
                <p className="mt-2 text-gray-700">
                  Work with SIIB’s dedicated infrastructure desk for faster placement, stronger
                  wordings, and proactive claims support[32][33][46].
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

          {/* Contact strip */}
          {/* <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Infra Insurance Specialists"
              icon={<FaHandshake />}
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

/* Small helper components */

const Tag = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
    <span className="text-blue-500">{icon}</span>
    <span className="text-sm">{label}</span>
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

const Card = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
  </div>
);

const Case = ({ title, points }: { title: string; points: string[] }) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="mt-3 space-y-1 text-sm text-gray-700">
      {points.map((p) => (
        <li key={p} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

export default InfrastructureInsurancePage;
