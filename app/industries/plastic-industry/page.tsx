import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaIndustry,
  FaBoxes,
  FaBoxOpen,
  FaWarehouse,
  FaFire,
  FaWater,
  FaWind,
  FaSnowflake,
  FaRegClipboard,
  FaRecycle,
  FaLeaf,
  FaBug,
  FaGlobe,
  FaUsers,
  FaHandHoldingUsd,
  FaMicroscope,
  FaTools,
  FaPlug,
  FaLaptopCode,
  FaLock,
  FaExclamationTriangle,
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaChartLine,
  FaFileContract,
  FaClipboardCheck,
  FaBox,
  FaCog,
} from 'react-icons/fa';

const PlasticIndustryInsurancePage = () => {
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
              Holistic risk protection for plastic manufacturers, processors, and converters across
              injection molding, extrusion, blow molding, thermoforming, compounding, and recycling
              value chains.
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
              SIIB brokerage with manufacturing-focused placement and claims support for end-to-end
              operational resilience.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Tailored programs for diverse plastic industry segments and supply-chain stakeholders.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaIndustry />} title="Manufacturers">
              Injection, extrusion, blow molding, thermoforming, rotational molding, compounding.
            </Tile>
            <Tile icon={<FaBoxes />} title="Converters & Packers">
              Film, sheet, piping, profiles, closures, caps, bottles, packaging lines.
            </Tile>
            <Tile icon={<FaRecycle />} title="Recyclers">
              Mechanical/chemical recycling, pelletizers, sorters, MRF and wash-line operators.
            </Tile>
            <Tile icon={<FaGlobe />} title="Exporters & OEM Supply">
              Automotive, FMCG, pharma, electronics, medical components, global distribution.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core Coverages */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive policies mapped to plant, people, product, and process risks across
            operations.
          </p>

          {/* Grid 1 */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaWarehouse className="text-2xl text-blue-500" />}
              title="Property & Business Interruption"
              body="Covers buildings, machinery, molds, dies, inventory (raw, WIP, FG), utilities, with BI/CMI for loss of gross profit due to insured perils."
              bullets={[
                'Perils: Fire, flood, storm, riot/strike, burglary, impact, explosion',
                'Add-ons: Debris removal, professional fees, escalation, STFI, EQ',
                'BI: Waiting period/sum insured design, supplier/customer extension',
              ]}
            />
            <Card
              icon={<FaExclamationTriangle className="text-2xl text-blue-500" />}
              title="General & Products Liability"
              body="Third-party injury/property damage and completed operations including product liability for downstream usage."
              bullets={[
                'Contractual liability carve-outs and additional insureds',
                'Territory/jurisdiction for export exposures',
                'Vendor’s liability and component integration risks',
              ]}
            />
          </div>

          {/* Grid 2 */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBoxOpen className="text-2xl text-blue-500" />}
              title="Product Recall & Contamination"
              body="Covers recall costs, third-party financial loss, brand rehabilitation, and accidental contamination for food/pharma contact applications."
              bullets={[
                'Voluntary/mandatory recall expenses',
                'Crisis consultants and PR costs',
                'Extended coverage to global distributions',
              ]}
            />
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental & Pollution Liability"
              body="Sudden/accidental and gradual pollution, on-site and off-site clean-up, third-party bodily injury/property damage."
              bullets={[
                'Wastewater, resin spill, solvent emission events',
                'Regulatory defense and fines where insurable',
                'Transportation and non-owned disposal sites',
              ]}
            />
          </div>

          {/* Grid 3 */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLaptopCode className="text-2xl text-blue-500" />}
              title="Cyber & Technology"
              body="Cyber liability and digital asset protection for smart manufacturing, MES/SCADA/PLC integrations, and data privacy compliance."
              bullets={[
                'Ransomware, business interruption, data restoration',
                'OT/IT breach, contingent BI from service providers',
                'Social engineering and funds transfer fraud',
              ]}
            />
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Machinery Breakdown & EEI"
              body="Electrical/mechanical breakdown of critical equipment with engineering BI for extended downtimes."
              bullets={[
                'Presses, extruders, chillers, compressors, robots',
                'Microelectronics and power surge endorsements',
                'Spares and expedited repair costs',
              ]}
            />
          </div>

          {/* Grid 4 */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUsers className="text-2xl text-blue-500" />}
              title="Workmen Compensation & PA"
              body="Statutory worker compensation, employer’s liability, and personal accident for employees and contractors."
              bullets={[
                'Shift operations and night-running protections',
                'Ergonomics, manual handling, and heat stress',
                'Visitor/contractor onboarding and permit controls',
              ]}
            />
            <Card
              icon={<FaRegClipboard className="text-2xl text-blue-500" />}
              title="Management & Professional Liability"
              body="D&O for directors, EPLI, and manufacturers E&O for financial losses due to alleged errors in design or production services."
              bullets={[
                'Defense costs, settlements, investigations',
                'Global subsidiaries and outside directorships',
                'Employment practices risk (harassment/discrimination)',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process & Operations Risks */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Process & Operations Risks</h2>
          <p className="mt-3 text-gray-700">
            Coverage designed around typical plastic plant hazards and loss scenarios.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaFire />} title="Fire & Heat">
              Hot runners, heaters, dryers, silos, dust; combustion risk from resins and solvents.
            </MiniCard>
            <MiniCard icon={<FaWater />} title="Water & Flood">
              Cooling towers, chillers, leak risks; flood mapping and drainage adequacy.
            </MiniCard>
            <MiniCard icon={<FaWind />} title="Storm & Impact">
              Windstorm, impact to utilities, roof uplift; secured stacking and racking protection.
            </MiniCard>
            <MiniCard icon={<FaSnowflake />} title="Chillers & HVAC">
              Temperature controls for molds and lines; BI triggers from chilling failures.
            </MiniCard>
            <MiniCard icon={<FaBug />} title="Contamination">
              Foreign matter or chemical contamination; recall triggers in food/pharma supply.
            </MiniCard>
            <MiniCard icon={<FaPlug />} title="Power Quality">
              Harmonics, surges and outages; UPS/generator design and surge protection.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Supply Chain & Logistics */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Supply Chain & Logistics</h2>
          <p className="mt-3 text-gray-700">
            Reduce volatility with transit, storage and contingent BI solutions aligned to
            supplier/customer dependencies.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardPlain title="Marine & Inland Transit">
              <Bullet>
                Institute Cargo Clauses with project-specific add-ons for resins, masterbatch, and
                tooling.
              </Bullet>
              <Bullet>Reefer and temperature deviation endorsements where applicable.</Bullet>
              <Bullet>Seller’s/Buyer’s Interest and stock throughput structures.</Bullet>
            </CardPlain>
            <CardPlain title="Contingent BI & Denial of Access">
              <Bullet>Supplier and customer extensions for upstream/downstream outages.</Bullet>
              <Bullet>Named and unnamed location dependencies with limits and sub-limits.</Bullet>
              <Bullet>Public authority closures and civil commotion endorsements.</Bullet>
            </CardPlain>
            <CardPlain title="Tooling & Dies in Transit">
              <Bullet>High-value die/mold coverage including testing post-transit.</Bullet>
              <Bullet>Special packaging/handling clauses and route survey requirements.</Bullet>
              <Bullet>Expediting costs to reduce production downtime.</Bullet>
            </CardPlain>
          </div>
        </div>
      </section>

      {/* Quality, Compliance & Sustainability */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Quality, Compliance & Sustainability</h2>
          <p className="mt-3 text-gray-700">
            Align insurance with QA frameworks and evolving environmental expectations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              icon={<FaMicroscope className="text-2xl text-blue-500" />}
              title="QA & Traceability"
              body="ISO/TS, GMP, and traceability standards integrated with recall and financial loss coverage."
              bullets={[
                'Lot/batch trace systems and supplier audits',
                'Specification control and COA management',
                'Sampling frequencies and test protocols',
              ]}
            />
            <Card
              icon={<FaRecycle className="text-2xl text-blue-500" />}
              title="Recycling & Circularity"
              body="Processing post-consumer/industrial recycled content and material substitution risk."
              bullets={[
                'Quality variability and contaminants',
                'Additives and compatibilizers risk review',
                'Customer specs and warranty clauses',
              ]}
            />
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="ESG & Emissions"
              body="Pollution liability, carbon-related outages, and green equipment endorsements."
              bullets={[
                'Air/water permits and reporting errors',
                'Energy efficiency retrofits and grants',
                'Green build upgrades after loss',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Program Design & Placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Structured policies with optimal deductibles, sub-limits, and wording alignment to
            contracts and clients.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Plant walkthroughs, hazard mapping, utility dependency, single-point-of-failure analysis."
              points={[
                'COPE and BI bottlenecks',
                'Tooling criticality matrix',
                'Supplier/customer heat-map',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Combined property/BI, GL/Product, recall, cyber, pollution, and breakdown modules."
              points={[
                'Named perils vs. all-risks',
                'Sublimits and aggregates',
                'Territory/jurisdiction alignment',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Multi-insurer quotes, benchmarked terms, and service-levels for notification-to-settlement."
              points={['Adjustment protocols', 'On-account advances', 'Documentation playbooks']}
            />
          </div>
        </div>
      </section>

      {/* Typical Extensions */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Typical Extensions & Add-ons</h2>
          <p className="mt-3 text-gray-700">
            Strengthen coverage with targeted endorsements that reflect real operating conditions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'ESCL/Escalation clause for inflation',
              'Debris removal and professional fees',
              'Deterioration of stock (temperature)',
              'Contingent business interruption',
              'Non-damage BI (utility outage)',
              'Denial of access/public authority',
              'Customers’ and suppliers’ premises',
              'Brands and labels expenses',
              'Error & omission in processing',
              'Sue and labor/expediting costs',
              'Spare parts and tooling floaters',
              'Employee tools and personal effects',
              'Equipment rental and hire charges',
              'Cyber dependent business interruption',
              'Environmental cleanup off-site',
              'Transportation deviation/reefer cover',
            ].map((txt) => (
              <div key={txt} className="flex items-start rounded-lg border border-gray-200 p-5">
                <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                <span className="text-sm">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Drivers */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Premium Drivers</h2>
          <p className="mt-3 text-gray-700">
            Underwriting parameters that typically influence pricing and terms.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardStat
              title="Asset Profile"
              body="Machinery age, automation/robotics, tool values, redundancy and spares."
              icon={<FaCog className="text-blue-500" />}
            />
            <CardStat
              title="BI Exposure"
              body="Throughput, cycle times, buffer stocks, alternate suppliers, logistics resilience."
              icon={<FaChartLine className="text-blue-500" />}
            />
            <CardStat
              title="Fire Protection"
              body="Sprinklers/hydrants, spacing, dust management, housekeeping, electricals."
              icon={<FaFire className="text-blue-500" />}
            />
            <CardStat
              title="Quality & Recall"
              body="Traceability depth, testing rigor, supplier controls, historical recalls."
              icon={<FaBox className="text-blue-500" />}
            />
            <CardStat
              title="Environmental"
              body="Effluent treatment, emissions, solvent use, storage compliance, permits."
              icon={<FaLeaf className="text-blue-500" />}
            />
            <CardStat
              title="Cyber Hygiene"
              body="Segregated OT/IT, backups, MFA, EDR, user training, incident response."
              icon={<FaLock className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case Snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            Realistic examples showing how program design and claims protocols respond.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Injection Molding Press Breakdown"
              points={[
                'EEI trigger for spindle failure; expedited parts via air freight covered.',
                'Engineering BI supported payroll and temporary outsourcing.',
                'Root-cause analysis offsets repeat exposure; deductible optimization.',
              ]}
            />
            <Case
              title="Food-Grade Film Contamination"
              points={[
                'Product recall and contamination policy funded pull-back and destruction.',
                'Crisis consultant ran comms; brands/labels clause reduced losses.',
                'Supplier audit enhanced; revised sieve and metal-detection controls.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">What You Receive</h2>
          <p className="mt-3 text-gray-700">
            Clear deliverables and visibility from design to settlement.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
              icon={<FaClipboardCheck className="text-2xl text-blue-500" />}
              title="Risk Survey & Gap Report"
              body="Pre-placement risk engineering with practical controls to reduce loss likelihood and severity."
              bullets={[
                'Electrical thermography and MCC checks',
                'Storage/segregation and fire water audits',
                'Recall drill and traceability tests',
              ]}
            />
            <Card
              icon={<FaFileContract className="text-2xl text-blue-500" />}
              title="Coverage Blueprint"
              body="Structure, wordings, sub-limits, territories and endorsements aligned to customer contracts."
              bullets={[
                'Liability carve-outs and indemnities',
                'Jurisdiction and arbitration fitment',
                'Certificates for audits and tenders',
              ]}
            />
            <Card
              icon={<FaHandHoldingUsd className="text-2xl text-blue-500" />}
              title="Claims Playbook"
              body="Notification timelines, adjuster engagement, on-account strategies and evidence packs."
              bullets={[
                'Root-cause and CAPA templates',
                'Inventory and rework quantification',
                'Loss modeling and claim memos',
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
                  Build a Plastic Industry Insurance Program That Performs
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB’s manufacturing desk for better wordings, faster placement, and
                  proactive claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaLaptopCode className="mr-2" />
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
              value="Manufacturing Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helper Components */
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

// CardStat component definition
const CardStat = ({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col items-start rounded-xl border border-gray-200 p-6">
    <div className="mb-2">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
  </div>
);

export default PlasticIndustryInsurancePage;
