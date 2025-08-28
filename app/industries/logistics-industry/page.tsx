import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaTruckMoving,
  FaShip,
  FaWarehouse,
  FaSnowflake,
  FaRoute,
  FaCubes,
  FaBoxOpen,
  FaLock,
  FaUserShield,
  FaHandsHelping,
  FaClipboardCheck,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaHandshake,
  FaGlobe,
  FaLaptopCode,
  FaExclamationTriangle,
} from 'react-icons/fa';

const LogisticsInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Logistics & Supply Chain Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              End-to-end risk cover for 3PL/4PL, fleet operators, freight forwarders, customs
              brokers, distributors, and e-commerce logistics across road, rail, air, and sea.
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
              SIIB logistics desk supports integrated marine, liability, fleet, warehousing, cargo,
              cyber, and financial lines for resilient supply chains.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Configurable programs for multi-modal networks and high-SKU, high-velocity operations.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaTruckMoving />} title="3PL/4PL & Fleet">
              Primary/secondary transport, linehaul, last-mile, dedicated contract carriage.
            </Tile>
            <Tile icon={<FaShip />} title="Forwarders & NVOCC">
              Sea/air consolidations, project cargo, chartering, door-to-door logistics.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Warehousing & Fulfillment">
              Dry, bonded, FTWZ, cold chain, cross-dock, sortation centers, dark stores.
            </Tile>
            <Tile icon={<FaGlobe />} title="E-commerce & Distribution">
              Multi-node networks, marketplaces, returns and reverse logistics flows.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Marine, liability, fleet, and warehouse coverages integrated to follow cargo and
            custody.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaShip className="text-2xl text-blue-500" />}
              title="Marine Cargo & Stock Throughput"
              body="Door-to-door cover across all conveyances including ocean/air/road/rail, integrated with warehouse stock values."
              bullets={[
                'Institute Cargo Clauses (A/B/C), temp deviation, SDR limits',
                'Stock Throughput: production to distribution with seasonal peaks',
                'Seller’s/Buyer’s Interest, reefer/temperature deviation',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Logistics Liability (FFL/CMR/BAF/Haulier)"
              body="Liability for loss/damage to customers’ cargo under forwarding/haulier conditions of carriage and statutory frameworks."
              bullets={[
                'Errors & omissions for forwarding documents',
                'Bailee’s liability at warehouse and cross-dock',
                'Contractual liability carve-outs and limits per conveyance',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaWarehouse className="text-2xl text-blue-500" />}
              title="Warehouse & Fulfillment"
              body="Property cover for buildings/racking/MHE, and bailee’s/customer goods liability while in care, custody, or control."
              bullets={[
                'Fire, STFI, EQ; sprinklers, hydrants, impairment controls',
                'High-pile storage, aisle spacing, and commodity classes',
                'CCTV/access control and theft prevention endorsements',
              ]}
            />
            <Card
              icon={<FaTruckMoving className="text-2xl text-blue-500" />}
              title="Fleet & Carrier Solutions"
              body="Motor fleet for tractors/trailers, carrier’s liability, and inland transit add-ons to address over-the-road exposures."
              bullets={[
                'Driver vetting, telematics, driver behavior scoring',
                'Temperature monitoring for reefers and alarms',
                'Trailer interchange and non-owned trailers',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLaptopCode className="text-2xl text-blue-500" />}
              title="Cyber & Crime for Logistics"
              body="Protection for WMS/TMS/ERP integrations, APIs with carriers/marketplaces, and payment/fraud events."
              bullets={[
                'Ransomware, dependent BI (cloud/DC outages)',
                'E-funds transfer fraud and social engineering',
                'Data breach response, notification, credit monitoring',
              ]}
            />
            <Card
              icon={<FaHandsHelping className="text-2xl text-blue-500" />}
              title="Workmen Compensation & EPLI"
              body="Statutory WC and employer’s liability for drivers, handlers, pickers/packers; EPLI for large networks."
              bullets={[
                'Manual handling and ergonomics controls',
                'Night shifts, lone working, and yard safety',
                'Incident investigation and RTW programs',
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
            Hazards spanning nodes, modes, and hand-offs along the chain.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaSnowflake />} title="Cold Chain">
              Temperature excursions, reefer breakdowns, door discipline, loading delays.
            </MiniCard>
            <MiniCard icon={<FaRoute />} title="Route & Theft">
              Hot spots, parking controls, convoying, high-value loads, geo-fencing.
            </MiniCard>
            <MiniCard icon={<FaBoxOpen />} title="Handling & Stacking">
              Damage during picking/packing, racking collapse, forklift impacts.
            </MiniCard>
            <MiniCard icon={<FaExclamationTriangle />} title="Compliance">
              Dangerous goods segregation, DG labelling, customs/FTA documentation.
            </MiniCard>
            <MiniCard icon={<FaLock />} title="Security">
              Driver ID, seals/tamper-evident locks, CCTV, access control, yard marshaling.
            </MiniCard>
            <MiniCard icon={<FaGlobe />} title="Cross-Border">
              Sanctions, embargoes, war/strike risks, political violence endorsements.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Follow-the-cargo structures with harmonized limits and deductibles across nodes and
            modes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Flow mapping by SKU and lane, peak seasonality, and custody transitions with node-level risk scoring."
              points={[
                'Mode mix and ODC/high-value loads',
                'Reefer lanes and door-open analysis',
                'Documentation and INCOTERMS alignment',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Stock throughput master, liability towers, motor fleet, and cyber/crime modules with shared claims protocols."
              points={[
                'Sublimits for hot spots and HVTs',
                'Deductibles by lane and temp bands',
                'Additional insureds and waivers',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel placement, SLAs with TPA/adjusters, and escalation paths to maintain continuity during surges."
              points={[
                'On-account and salvage protocols',
                'Telematics/temperature evidence packs',
                'Subrogation and shipper/carrier recourse',
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
            Focus endorsements for fragile, perishable, and high-value cargo with custody nuances.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Temperature deviation and reefer breakdown',
              'Brands/labels and reconditioning costs',
              'Theft from unattended vehicle (conditions)',
              'Fraudulent pickup and identity theft',
              'Concealed damage and shortage',
              'Strikes, riots, civil commotion/war risks (where available)',
              'Expediting and airfreight for rework/replacement',
              'DIC/DIL for contractual coverage gaps',
              'Errors & omissions for forwarding',
              'Demurrage, detention, fines and duties (as insurable)',
              'Extended transit and storage at terminals',
              'Contingent cargo and seller/buyer’s interest',
              'Cyber dependent BI for WMS/TMS/marketplace APIs',
              'Pollution liability for warehousing sites',
              'Non-owned/hired vehicle liability',
            ].map((txt) => (
              <div key={txt} className="flex items-start rounded-lg border border-gray-200 p-5">
                <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                <span className="text-sm">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium drivers */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Premium Drivers</h2>
          <p className="mt-3 text-gray-700">
            Underwriting parameters that drive pricing and capacity across networks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardStat
              title="Lane & Mode Mix"
              body="International vs domestic, sea/air/road/rail share, hot spots."
              icon={<FaRoute className="text-blue-500" />}
            />
            <CardStat
              title="Cargo Profile"
              body="Perishables, pharma, electronics, DG classes, security needs."
              icon={<FaCubes className="text-blue-500" />}
            />
            <CardStat
              title="Cold Chain Integrity"
              body="Reefer assets, temp logging, alarm, corrective action SLAs."
              icon={<FaSnowflake className="text-blue-500" />}
            />
            <CardStat
              title="Security & Controls"
              body="Driver vetting, geo-fencing, sealed parking, CCTV, access."
              icon={<FaLock className="text-blue-500" />}
            />
            <CardStat
              title="Warehouse Protection"
              body="Sprinklers, hydrants, high-pile spacing, impairment controls."
              icon={<FaWarehouse className="text-blue-500" />}
            />
            <CardStat
              title="Digital Resilience"
              body="WMS/TMS uptime, backups, MFA, EDR, vendor access controls."
              icon={<FaLaptopCode className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            How coverage responds across transit and warehousing incidents.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Electronics Theft in Transit"
              points={[
                'Cargo policy with theft-from-vehicle endorsement responded.',
                'Geo-fencing breach evidence and driver vetting review.',
                'Subrogation pursued; deductibles recalibrated for HVT lanes.',
              ]}
            />
            <Case
              title="Cold Store Temperature Excursion"
              points={[
                'Stock throughput and temperature deviation endorsements applied.',
                'Data logger evidence supported salvage and reconditioning.',
                'Revised alarm thresholds and door discipline SOPs.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">What You Receive</h2>
          <p className="mt-3 text-gray-700">
            Clear deliverables for visibility and faster recovery.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              icon={<FaClipboardCheck className="text-2xl text-blue-500" />}
              title="Lane & Node Risk Report"
              body="Hot spot maps, temp profiles, custody transitions, and gap analysis with prioritized controls."
              bullets={[
                'Peak season and surge plans',
                'Secure parking and seal discipline',
                'DG segregation and training matrix',
              ]}
            />
            <Card
              icon={<FaFileContract className="text-2xl text-blue-500" />}
              title="Coverage Blueprint"
              body="STP, liability, fleet, warehouse, cyber and crime modules with harmonized limits and endorsements."
              bullets={[
                'INCOTERMS and contract mapping',
                'Additional insureds and waivers',
                'Evidence packs and claim triggers',
              ]}
            />
            <Card
              icon={<FaHandshake className="text-2xl text-blue-500" />}
              title="Claims Playbook"
              body="Notification SLAs, adjuster coordination, salvage, on-account strategies, and recovery/subrogation pursuit."
              bullets={[
                'Telematics/temp data capture',
                'Photographs and chain-of-custody',
                'Loss memos and settlement tracking',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Build a Resilient Logistics Insurance Program
                </h3>
                <p className="mt-2 text-gray-700">
                  Work with SIIB’s logistics desk for coverage harmony across marine, liability,
                  fleet, warehouse, cyber, and financial lines.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Lane & Node Data
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
              value="Logistics Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers (same as above page) */
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

const CardStat = ({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      <span className="text-xl text-blue-500">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
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

export default LogisticsInsurancePage;
