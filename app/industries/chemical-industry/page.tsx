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
} from 'react-icons/fa';

const ChemicalInsurancePage = () => {
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

export default ChemicalInsurancePage;
