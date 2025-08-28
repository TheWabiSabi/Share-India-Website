import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaIndustry,
  FaTshirt,
  FaCog,
  FaWarehouse,
  FaFire,
  FaWater,
  FaWind,
  FaSnowflake,
  FaTruckMoving,
  FaBoxOpen,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaLeaf,
  FaTools,
  FaPlug,
  FaLock,
} from 'react-icons/fa';

const TextileInsurancePage = () => {
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
              End-to-end coverage for spinning, weaving, knitting, dyeing/processing, garmenting,
              and home textiles—aligned to buyer audits and global supply chains.
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
              Programs spanning property/BI, liability, environment, transit, and product compliance
              for export buyers.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Coverage for fiber-to-fashion value chains and cluster ecosystems.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaIndustry />} title="Spinning & Yarn">
              Blowroom, carding, combing, ring/spinning, winding; cotton/synthetic blends.
            </Tile>
            <Tile icon={<FaCog />} title="Weaving & Knitting">
              Looms, warping, sizing, circular/flat knitting; technical textiles.
            </Tile>
            <Tile icon={<FaLeaf />} title="Dyeing & Processing">
              Continuous/batch dyeing, printing, finishing; ETP/air permits and ZDHC.
            </Tile>
            <Tile icon={<FaTshirt />} title="Garmenting & Home">
              Cutting, sewing, washing, embroidery, finishing, and export packing.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Protect assets, income, and obligations to buyers and regulators.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaWarehouse className="text-2xl text-blue-500" />}
              title="Property & Business Interruption"
              body="Plants, machinery, stores, dyes/chemicals, fabric/goods with BI/CMI for insured interruptions."
              bullets={[
                'Fire, STFI, EQ, boiler/MB; dust and lint fire controls',
                'Escalation, debris removal, professional fees',
                'Denial of access and utilities failure options',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="General & Product Liability"
              body="Third-party injury/property damage and product liability for export buyers and retailers."
              bullets={[
                'Additional insured/waiver of subrogation',
                'Jurisdiction/territory for export markets',
                'Vendor endorsements for global retailers',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLeaf className="text-2xl text-blue-500" />}
              title="Environmental & Pollution"
              body="ETP operations, dye/chemical storage, sludge handling, air/water permits and clean-up."
              bullets={[
                'Sudden/gradual pollution, on/off-site cleanup',
                'Third-party BI/PD and regulatory defense',
                'Contractor pollution liability options',
              ]}
            />
            <Card
              icon={<FaTruckMoving className="text-2xl text-blue-500" />}
              title="Marine/Transit & Warehouse Legal Liability"
              body="Raw material and FG transit; bailee’s liability for warehousing and 3PL nodes."
              bullets={[
                'Moisture/mildew, contamination, theft',
                'Container sweat and temperature deviation',
                'Brands/labels and reconditioning costs',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Machinery Breakdown & EEI"
              body="Breakdown of looms, dyeing machines, compressors, boilers, DGs; engineering BI for outages."
              bullets={[
                'Spares and expedited repairs',
                'Power surge and electronics',
                'Rental equipment coverage',
              ]}
            />
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Cyber & Compliance"
              body="Cyber for ERP/PLM/WMS and buyer portals, with dependent BI and data/privacy response."
              bullets={[
                'Ransomware and credential theft',
                'Vendor access control and audits',
                'Incident response and PR costs',
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
            High-frequency and high-severity loss scenarios addressed in design.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaFire />} title="Fire & Lint">
              Dust, lint, cotton storage, hot spots, and impairment control for sprinklers/hydrants.
            </MiniCard>
            <MiniCard icon={<FaWater />} title="Water & Effluent">
              Dye bath leaks, wastewater upsets, ETP capacity and emergency drains.
            </MiniCard>
            <MiniCard icon={<FaSnowflake />} title="Humidity & HVAC">
              Fabric dimensional stability; BI triggers from HVAC outages.
            </MiniCard>
            <MiniCard icon={<FaBoxOpen />} title="Quality & Claims">
              Shade variation, shrinkage, fastness failures; rework and buyer claims.
            </MiniCard>
            <MiniCard icon={<FaPlug />} title="Power Quality">
              Surges/harmonics; UPS and generator design for critical sections.
            </MiniCard>
            <MiniCard icon={<FaWind />} title="Storm & Impact">
              Roof uplift, signage/stack collapse, and perimeter security.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Buyer-audit and compliance-ready, with export documentation support.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Plant walkthroughs, fire/lint controls, ETP, utilities, export contracts and buyer codes."
              points={[
                'COPE and cat maps',
                'Quality and recall drill reviews',
                '3PL and export lanes assessment',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Property/BI, GL/Product, Environmental, Transit/Warehouse, MB/EEI, Cyber."
              points={[
                'Sublimits and aggregates',
                'Jurisdiction and territory',
                'Additional insureds and waivers',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel quotes, adjuster SLAs, and evidence packs for faster settlements."
              points={[
                'On-account advances',
                'Quality and rework quantification',
                'Salvage and damage mitigation',
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
            Address practical conditions across mills, process houses, and export hubs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Escalation/inflation and professional fees',
              'Deterioration of stock (humidity/temp)',
              'Brands/labels, reconditioning and repacking',
              'Contingent BI (supplier/customer)',
              'Denial of access/public authority',
              'Cyber dependent BI for ERP/WMS/PLM',
              'Marine—sweat, moisture, odour endorsements',
              'Warehouse legal liability (bailee’s)',
              'Equipment rental and expediting costs',
              'Third-party property in CCC',
              'Product recall/withdrawal (where available)',
              'Environmental cleanup and tank leakage',
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
                  Export-Ready Coverage. Factory-Floor Resilience.
                </h3>
                <p className="mt-2 text-gray-700">
                  Engage SIIB’s textiles desk for precise wordings, faster placement, and proactive
                  claims support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Buyer Requirements
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

export default TextileInsurancePage;
