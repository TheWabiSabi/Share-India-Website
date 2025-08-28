import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaSolarPanel,
  FaSun,
  FaWind,
  FaWater,
  FaBolt,
  FaIndustry,
  FaPlug,
  FaLeaf,
  FaTruckMoving,
  FaWarehouse,
  FaUserShield,
  FaClipboardCheck,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaLaptopCode,
  FaLock,
  FaChartLine,
  FaTools,
} from 'react-icons/fa';

const SolarInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Solar Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              End-to-end insurance programs for utility-scale, C&I rooftops, ground-mount, and
              hybrid/storage solar projects—from development, EPC, and commissioning to operations.
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
              SIIB brokerage with renewable-focused placement and claims protocols across
              construction and operations.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Coverage designed for stakeholders across the solar lifecycle—bankable at every stage.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaIndustry />} title="Developers & IPPs">
              Utility-scale SPVs, C&I portfolios, open access and captive projects.
            </Tile>
            <Tile icon={<FaTools />} title="EPC & O&M">
              EPC contractors, rooftop integrators, O&M AMCs and performance-guarantee models.
            </Tile>
            <Tile icon={<FaChartLine />} title="Financiers & Lenders">
              Banks/NBFCs with lender endorsements, DSU/ALOP structuring, and step-in rights.
            </Tile>
            <Tile icon={<FaWarehouse />} title="C&I Owners & Lessors">
              Rooftop/ground-mount for plants, warehouses, malls, tech parks and institutions.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Construction-to-operations coverage with financial loss protections for downtime and
            delays.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaSolarPanel className="text-2xl text-blue-500" />}
              title="Construction All Risk (CAR/EAR)"
              body="Project-phase cover for material damage and third-party liability during civil, erection, testing, and commissioning."
              bullets={[
                'Modules, inverters, MMS/trackers, cabling, transformers',
                'Testing/commissioning and surrounding property',
                'TPL for injury/property at and around the site',
              ]}
            />
            <Card
              icon={<FaClipboardCheck className="text-2xl text-blue-500" />}
              title="Delay in Start-Up (DSU/ALOP)"
              body="Covers lost revenue/financing costs due to insured project damage causing COD delays."
              bullets={[
                'Waiting period 30–90 days typical',
                'Indemnity period aligned to rebuild timeline',
                'Sum insured basis: gross profit/earnings/debt service',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBolt className="text-2xl text-blue-500" />}
              title="Operational Property & BI"
              body="All-risk or named-perils cover for operating plants including business interruption/CMI for energy shortfalls."
              bullets={[
                'Fire, STFI, EQ, theft, vandalism, impact',
                'Electrical injury and surge protection endorsements',
                'BI: irradiance shortfall following insured damage',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Liability & Professional"
              body="General liability for site exposures, EPC/O&M professional liability, and product liability for integrators where applicable."
              bullets={[
                'Bodily injury/property damage to third parties',
                'Design/engineering errors and omissions',
                'Contractual liability carve-outs and additional insureds',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLaptopCode className="text-2xl text-blue-500" />}
              title="Cyber & SCADA/OT"
              body="Cyber for OT/IT systems: SCADA, inverters, data loggers, grid interfaces, and remote O&M platforms."
              bullets={[
                'Ransomware and dependent BI (cloud/DC outage)',
                'Device compromise, inverter firmware issues',
                'Incident response, forensics, restoration',
              ]}
            />
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental & Pollution"
              body="Sudden/gradual pollution and clean-up, especially for ground-mount sites with land and water interfaces."
              bullets={[
                'Third-party BI/PD, regulatory defense',
                'Storage and spill risks (oils/chemicals)',
                'Contractor pollution liability options',
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
            Typical hazard scenarios across rooftop and ground-mount solar assets.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaWind />} title="Wind/Hail/Storm">
              Panel/structure damage; uplift; tracker misalignment; hail impact on modules.
            </MiniCard>
            <MiniCard icon={<FaWater />} title="Flood & Ingress">
              Inundation at low-lying sites; drainage, trenching, and inverter room ingress.
            </MiniCard>
            <MiniCard icon={<FaBolt />} title="Electrical Injury">
              Surges, arcing, DC isolator faults; grounding and lightning protection gaps.
            </MiniCard>
            <MiniCard icon={<FaPlug />} title="Grid & Interconnect">
              Harmonics, tripping, protection relay failures and export curtailment post-loss.
            </MiniCard>
            <MiniCard icon={<FaTools />} title="O&M & Warranty">
              Preventive maintenance, spare strategy, warranty claims, and backlog management.
            </MiniCard>
            <MiniCard icon={<FaLock />} title="Security & Theft">
              Perimeter/CCTV, cable theft, panel theft, and tamper-evidence protocols.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Logistics & supply */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Project Logistics & Supply Chain</h2>
          <p className="mt-3 text-gray-700">
            Protect modules, inverters, and MMS across ocean, air, and inland legs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <CardPlain title="Marine Cargo & Project Transit">
              <Bullet>ICC(A) for ocean; air/road/rail legs; storage at terminals and site.</Bullet>
              <Bullet>Special packing, route survey, ODC and crane/rigging endorsements.</Bullet>
              <Bullet>Buyer’s/Seller’s Interest and stock throughput structures.</Bullet>
            </CardPlain>
            <CardPlain title="Tooling & Spares Strategy">
              <Bullet>
                Critical spares listing, expedited freight, and on-site storage limits.
              </Bullet>
              <Bullet>Spares replenishment and warranty coordination.</Bullet>
              <Bullet>Claims documentation for rapid approvals.</Bullet>
            </CardPlain>
            <CardPlain title="Performance & Surety">
              <Bullet>Bid/performance bonds, advance payment bonds for EPCs.</Bullet>
              <Bullet>Through-life performance guarantees mapped to insurance triggers.</Bullet>
              <Bullet>Lender endorsements and step-in rights alignment.</Bullet>
            </CardPlain>
          </div>
        </div>
      </section>

      {/* Program design */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">Bankable structures across build and operate phases.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Risk & Exposure Mapping"
              desc="Site surveys, wind/flood analysis, electrical protection, design review, PPA/land covenants."
              points={[
                'Seismic/flood zoning and tracker loads',
                'DC/AC protection coordination',
                'Spares/repair lead-time modeling',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="CAR/EAR + DSU for build; Property/BI + Liability + Cyber/Env for O&M with lender endorsements."
              points={[
                'Sublimits/deductibles alignment',
                'Testing and maintenance clauses',
                'Certificates for stakeholders',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel placement with agreed claims SOPs; on-account payments and adjuster protocols."
              points={[
                'Loss notification SLAs',
                'Root-cause and CAPA templates',
                'Salvage and recycling handling',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Extensions */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Typical Extensions & Add-ons</h2>
          <p className="mt-3 text-gray-700">
            Tighten wordings around weather, electrical, and revenue risks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Escalation/inflation guard',
              'Debris removal & professional fees',
              'Module mismatch/microcracks (where available)',
              'Electrical injury and surge extensions',
              'Extended testing and maintenance',
              'Flood maps and elevated plinth cover',
              'Wind/hail deductibles and sublimits',
              'Theft of cables/panels with conditions',
              'Environmental cleanup and liability',
              'Cyber dependent BI and OT breach',
              'Denial of access/public authority',
              'Performance guarantee alignment',
              'Contractor pollution liability',
              'Terrorism/sabotage (as available)',
              'Surety: bid/performance/advance bonds',
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
            Underwriting parameters that influence pricing and capacity.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardStat
              title="Site & Perils"
              body="Wind/hail/flood/seismic zones, elevation, drainage, soil/land covenants."
              icon={<FaSun className="text-blue-500" />}
            />
            <CardStat
              title="Design & Technology"
              body="Tracker loads, string/central inverter mix, surge/lightning protection."
              icon={<FaBolt className="text-blue-500" />}
            />
            <CardStat
              title="O&M & Spares"
              body="Response SLAs, spares availability, warranty terms, degradation risks."
              icon={<FaTools className="text-blue-500" />}
            />
            <CardStat
              title="Grid & PPA"
              body="Curtailment risks post-loss, PPA covenants, penalties and LDs."
              icon={<FaPlug className="text-blue-500" />}
            />
            <CardStat
              title="Security"
              body="Fencing/CCTV, patrols, access control, cable theft history."
              icon={<FaLock className="text-blue-500" />}
            />
            <CardStat
              title="Supply Chain"
              body="Transit routes, special packing, ODC handling, crane/rigging risk."
              icon={<FaTruckMoving className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            Illustrative claim scenarios across build and operate phases.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Hail Impact on Modules"
              points={[
                'Operational property policy responded with module replacement and labor.',
                'Surge protection upgraded; hail deductible and sublimits adjusted subsequently.',
                'BI claim paid for outage during replacement period.',
              ]}
            />
            <Case
              title="Inverter Room Flooding"
              points={[
                'CAR responded during construction; debris removal and professional fees covered.',
                'Drainage redesign and plinth elevation implemented as CAPA.',
                'DSU claim for delay approved after waiting period.',
              ]}
            />
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
                  Bankable Insurance for Bankable Solar
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB’s renewables desk for better wordings, disciplined placement,
                  and proactive claims support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaLaptopCode className="mr-2" />
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
              value="Renewables Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helper components (reuse pattern) */
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

export default SolarInsurancePage;
