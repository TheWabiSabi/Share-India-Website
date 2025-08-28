import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaBuilding,
  FaWarehouse,
  FaCity,
  FaHome,
  FaTools,
  FaBox,
  FaFire,
  FaWater,
  FaWind,
  FaLock,
  FaLeaf,
  FaBug,
  FaUserShield,
  FaUsers,
  FaRegClipboard,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaHandshake,
  FaChartLine,
  FaClipboardCheck,
  FaGlobe,
} from 'react-icons/fa';

const RealEstateInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Real Estate Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Integrated risk programs for developers, REITs, asset managers, and facility operators
              across residential, commercial, retail, warehousing, and mixed-use portfolios.
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
              SIIB brokerage for end-to-end placement and claims support across construction,
              operations, leasing, and asset disposition.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Coverage architectures aligned to every stage of the real estate lifecycle—from
            development to stabilized operations.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaBuilding />} title="Developers & SPVs">
              Residential townships, commercial towers, malls, hotels, co-working, mixed-use assets.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Logistics & Industrial Parks">
              Grade-A warehousing, BTS facilities, last-mile hubs, cold storage parks.
            </Tile>
            <Tile icon={<FaCity />} title="REITs & Asset Managers">
              Office portfolios, retail centers, multi-family, strata, and strata associations.
            </Tile>
            <Tile icon={<FaHome />} title="Landlords & HOAs">
              Rental assets, leasehold interests, housing societies, facility management.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Foundation policies that protect property value, income streams, and liabilities to
            occupants and the public.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBuilding className="text-2xl text-blue-500" />}
              title="Property & Loss of Income"
              body="All-risk or named-perils protection for structures, interiors, mechanical/electrical/plumbing, with loss of rent/business interruption for insured damage."
              bullets={[
                'Perils: Fire, STFI, RSMD, earthquake, burglary, impact',
                'Add-ons: Debris removal, professional fees, escalation, tenant improvements',
                'Loss of rent: Waiting period, indemnity period, alternative accommodation',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Premises & Umbrella Liability"
              body="Bodily injury and property damage to third parties at owned/managed premises, including tenant legal liability and completed operations."
              bullets={[
                'Slip, trip, falls; falling objects; glazing, facade risks',
                'Contractor protective and additional insured endorsements',
                'Jurisdiction/territory fitment for cross-border tenants',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Crime & Cyber for Real Estate"
              body="Protection against employee/computer fraud, funds transfer, ransomware, and privacy events in connected buildings."
              bullets={[
                'Social engineering and vendor fraud',
                'BMS/IoT/SCADA cyber with contingent BI',
                'Incident response, forensics, data restoration',
              ]}
            />
            <Card
              icon={<FaRegClipboard className="text-2xl text-blue-500" />}
              title="Management & Professional"
              body="D&O for REITs/SPVs, EPLI for large facilities, and PI for property managers/agents for alleged negligence."
              bullets={[
                'Defense costs, investigations, settlements',
                'Outside directorship and prospectus liability options',
                'Misrepresentation, wrongful eviction, discrimination',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental & Pollution"
              body="Sudden/gradual pollution, mold, asbestos, and clean-up liabilities for redevelopment and operations."
              bullets={[
                'On-site/off-site clean-up and third-party BI/PD',
                'Storage tanks, waste handling, contractor pollution',
                'Regulatory defense and civil fines where insurable',
              ]}
            />
            <Card
              icon={<FaBox className="text-2xl text-blue-500" />}
              title="Equipment & Breakdown"
              body="Electrical/mechanical breakdown of HVAC, elevators, pumps, DG, solar rooftops—plus engineering BI for critical outages."
              bullets={[
                'Power surge, boiler explosion, breakdown of BMS',
                'Spares, expediting, temporary rentals',
                'Extended outage endorsements for mission-critical sites',
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
            Typical hazard scenarios addressed in modern portfolios and smart buildings.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaFire />} title="Fire & Life Safety">
              Fire load, LPG/FO stores, hot works, evacuation, impairment control for sprinklers and
              hydrants.
            </MiniCard>
            <MiniCard icon={<FaWater />} title="Water & Flood">
              Water ingress, sump overflows, basement flooding; backflow and drainage controls.
            </MiniCard>
            <MiniCard icon={<FaWind />} title="Wind & Impact">
              Facade/glazing failures, signage fall, crane/vehicle impact, rooftop solar hazards.
            </MiniCard>
            <MiniCard icon={<FaBug />} title="Mold & Hygiene">
              HVAC moisture, mold proliferation, IAQ management, remediation protocols.
            </MiniCard>
            <MiniCard icon={<FaLock />} title="Security & Access">
              Access control, CCTV coverage, perimeter security, visitor/vendor management.
            </MiniCard>
            <MiniCard icon={<FaUsers />} title="Tenant & Public">
              Crowd management, events, escalator/elevator safety, childcare/eldercare premises.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Leasing, rent & supply chain */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Leasing, Rent & Supply Chain</h2>
          <p className="mt-3 text-gray-700">
            Keep income streams stable and align coverage to lease obligations and tenant
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <CardPlain title="Loss of Rent & Denial of Access">
              <Bullet>
                Waiting period, indemnity period, and dependency mapping for anchor tenants.
              </Bullet>
              <Bullet>
                Public authority closure and non-damage BI endorsements where available.
              </Bullet>
              <Bullet>
                Alternative accommodation and fit-out timelines for malls and offices.
              </Bullet>
            </CardPlain>
            <CardPlain title="Tenant Improvements & Fit-Out">
              <Bullet>
                Coverage for interiors, signage, fit-out works, and defects under liability.
              </Bullet>
              <Bullet>Waiver of subrogation and contractual liability alignment.</Bullet>
              <Bullet>Certificate issuance for tenant audit requirements.</Bullet>
            </CardPlain>
            <CardPlain title="Logistics & On-site Operations">
              <Bullet>Marine/transit for inbound materials, critical spares, and FFE.</Bullet>
              <Bullet>Contractor liability and vendor management for facility operations.</Bullet>
              <Bullet>Elevator/escalator maintenance and breakdown alignment.</Bullet>
            </CardPlain>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Portfolio-level structures with schedules, sub-limits, and deductibles tuned to risk
            appetite.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Occupancy, construction, protection (COPE), valuations, income streams, and critical utilities."
              points={[
                'Earthquake/flood zoning',
                'Aging MEP & retrofits',
                'Anchor/footfall dependencies',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Master policies with location schedules, difference-in-conditions, and lender/tenant endorsements."
              points={[
                'Sublimits and aggregates',
                'Jurisdiction and territory',
                'Named insureds/additional insureds',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Multi-insurer panels, agreed claims protocols, and SLAs from notification to settlement."
              points={[
                'On-account advances',
                'Loss adjuster engagement',
                'Evidence and repair validation',
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
            Strengthen coverage with endorsements tuned to lease, lender, and regulatory needs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Escalation & inflation guard',
              'Debris removal & professional fees',
              'Tenant improvements & betterments',
              'Denial of access & civil authority',
              'Utility services (on/off premises)',
              'Breakdown of HVAC/elevators',
              'Glass and facade extensions',
              'Flood maps and basement cover',
              'EQ add-on with sublimits by zone',
              'Crime—employee theft and EFT',
              'Cyber dependent BI for smart systems',
              'Environmental cleanup & mold',
              'Terrorism and sabotage (as available)',
              'Public liability for events/common areas',
              'Equipment rental & expediting costs',
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
            Key underwriting parameters that typically influence pricing and terms.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardStat
              title="Construction & Age"
              body="Structure type, retrofits, fireproofing, and MEP condition."
              icon={<FaTools className="text-blue-500" />}
            />
            <CardStat
              title="Occupancy & Footfall"
              body="Retail vs office vs residential mix, crowding, events."
              icon={<FaUsers className="text-blue-500" />}
            />
            <CardStat
              title="Protection & Security"
              body="Sprinklers, hydrants, alarms, access control, CCTV."
              icon={<FaLock className="text-blue-500" />}
            />
            <CardStat
              title="Cat Perils"
              body="Flood/earthquake zones, basements, roof drainage, facade risk."
              icon={<FaWater className="text-blue-500" />}
            />
            <CardStat
              title="Income Stability"
              body="Anchor tenant dependency, lease terms, alternative space."
              icon={<FaChartLine className="text-blue-500" />}
            />
            <CardStat
              title="Cyber & BMS"
              body="Smart building integrations, patching, backups, MFA, network segmentation."
              icon={<FaGlobe className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            Illustrative scenarios demonstrating policy response and claims protocols in practice.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Basement Flooding at City Mall"
              points={[
                'Property damage for electricals and flooring; debris removal and professionals fees.',
                'Loss of rent triggered; denial of access endorsement supported closures.',
                'Root-cause: storm drains; capex for improvement and revised deductibles.',
              ]}
            />
            <Case
              title="Ransomware at Smart Office Tower"
              points={[
                'Cyber policy funded forensics, restoration, and PR; dependent BI for BMS outage.',
                'Segmentation and MFA remediation requirements implemented.',
                'Incident playbook improved notification timelines and backups.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">What You Receive</h2>
          <p className="mt-3 text-gray-700">Portfolio clarity and claim readiness from day one.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              icon={<FaClipboardCheck className="text-2xl text-blue-500" />}
              title="Risk Survey & Gap Report"
              body="Fire/life safety, flood control, façade/glazing, cyber-BMS, and security improvements prioritized."
              bullets={[
                'Thermography and switchgear checks',
                'Drainage audits and FM compliance',
                'Access control and visitor management',
              ]}
            />
            <Card
              icon={<FaFileContract className="text-2xl text-blue-500" />}
              title="Coverage Blueprint"
              body="Policy schedule, sub-limits, endorsements, and certificate matrix aligned to leases and lenders."
              bullets={[
                'Waiver of subrogation/additional insureds',
                'Tenant legal liability and fit-out coverage',
                'Jurisdiction and territory language',
              ]}
            />
            <Card
              icon={<FaHandshake className="text-2xl text-blue-500" />}
              title="Claims Playbook"
              body="SOPs for notification, documentation, loss adjuster coordination, and on-account payments."
              bullets={[
                'Photographic evidence and salvage control',
                'Vendor mobilization and repair validation',
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
                  Stabilize Income. Protect Assets. Elevate Tenant Experience.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB’s real estate desk for sharper wordings, faster placement, and
                  proactive claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Asset Schedules
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Real Estate Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers (reuse from earlier pages) */
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

const CardPlain = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mt-2 space-y-2">{children}</div>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex text-sm text-gray-700">
    <FaChevronRight className="mt-1 mr-2 text-blue-400" />
    <span>{children}</span>
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

export default RealEstateInsurancePage;
