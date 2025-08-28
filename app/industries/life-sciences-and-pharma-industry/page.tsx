import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaMicroscope,
  FaPills,
  FaDna,
  FaStethoscope,
  FaIndustry,
  FaWarehouse,
  FaTruckMoving,
  FaRegClipboard,
  FaUserShield,
  FaBoxOpen,
  FaLeaf,
  FaBiohazard,
  FaSnowflake,
  FaLaptopCode,
  FaLock,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';

const LifeSciencesInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Life Sciences & Pharma Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Insurance programs for pharmaceuticals, biopharma, CRO/CDMO, medical devices,
              nutraceuticals, diagnostics, and cold-chain distribution—from R&D and trials to
              commercial scale.
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
              SIIB life-sciences desk aligns coverage to GxP, regulatory, and quality frameworks
              across global supply.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Tailored programs for high-compliance, high-consequence operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaPills />} title="Pharma & Biologics">
              Small-molecule, biologics, vaccines, sterile injectables, and API/OSD plants.
            </Tile>
            <Tile icon={<FaMicroscope />} title="CRO & CDMO">
              Clinical trials, bioanalytical labs, contract development and manufacturing.
            </Tile>
            <Tile icon={<FaStethoscope />} title="MedTech & Diagnostics">
              Medical devices, diagnostics, IVD, SAAS-enabled platforms, connected devices.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Cold Chain & Distribution">
              Temperature-controlled warehousing, reefer logistics, and wholesaling networks.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Protect assets, liability, and income across R&D, trials, and commercialization.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaIndustry className="text-2xl text-blue-500" />}
              title="Property & Business Interruption"
              body="All-risk/named perils for labs/plants, cleanrooms, HVAC, utilities, with BI/CMI for downtime due to insured damage."
              bullets={[
                'Fire, STFI, EQ, breakdown, contamination clean-up',
                'Debris removal, professional fees, escalation',
                'BI for capacity loss and dependency mapping',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="General, Products & Clinical Trials Liability"
              body="Third-party BI/PD, product liability for marketed products, and clinical trials liability for subject injury."
              bullets={[
                'Global jurisdiction and territory options',
                'Vendor’s and additional insured endorsements',
                'Defense costs, settlements, investigations',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaDna className="text-2xl text-blue-500" />}
              title="Errors & Omissions / Professional"
              body="E&O for research, testing, validation, and tech-transfer services; PI for regulated consulting and QA/QC."
              bullets={[
                'Alleged negligence/misstatement',
                'Contractual liability carve-outs',
                'Retroactive dates and run-off cover',
              ]}
            />
            <Card
              icon={<FaBoxOpen className="text-2xl text-blue-500" />}
              title="Product Recall & Contamination"
              body="Recall costs, third-party financial loss, and contamination for pharma/biologics, devices, and nutraceuticals."
              bullets={[
                'Voluntary/mandatory recall, crisis consultants',
                'Adverse event response and PR spend',
                'Global distribution and batch traceability',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLaptopCode className="text-2xl text-blue-500" />}
              title="Cyber, Data & OT"
              body="Cyber for GMP/GDP systems, MES/LIMS/SCADA/ERP, and PHI/PII privacy exposures."
              bullets={[
                'Ransomware, dependent BI, data restoration',
                'Regulatory notification and fines/penalties (where insurable)',
                'Vendor access control and segmentation',
              ]}
            />
            <Card
              icon={<FaBiohazard className="text-2xl text-blue-500" />}
              title="Environmental & Pollution"
              body="Pollution liability for solvents, waste, biohazards, and clean-up on/off-site."
              bullets={[
                'Storage tank liability, waste transit/disposal',
                'Third-party BI/PD and regulatory defense',
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
            High-consequence risks across R&D, trials, and commercial manufacturing.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaSnowflake />} title="Cold Chain Integrity">
              Temperature excursions for API/biologics; monitoring, alarms, backup power.
            </MiniCard>
            <MiniCard icon={<FaMicroscope />} title="Lab & Cleanrooms">
              Contamination, pressure differentials, HEPA failures, cross-contamination controls.
            </MiniCard>
            <MiniCard icon={<FaPills />} title="Quality & GMP/GDP">
              Deviation/CAPA, batch release errors, validation and stability failures.
            </MiniCard>
            <MiniCard icon={<FaTruckMoving />} title="Distribution & Export">
              Reefer logistics, lane risks, customs, sanctions, serialisation compliance.
            </MiniCard>
            <MiniCard icon={<FaLeaf />} title="ESG & Waste">
              Solvent emissions, effluent treatment, biohazard disposal, spill controls.
            </MiniCard>
            <MiniCard icon={<FaLock />} title="Cyber & Privacy">
              PHI/PII exposure, vendor access, MDR/UDI data, LIMS/MES ransomware.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Trials & regulatory */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Trials & Regulatory Alignment</h2>
          <p className="mt-3 text-gray-700">
            Coverage aligned to ethics approvals, informed consent, and multi-country protocols.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <CardPlain title="Clinical Trials Liability">
              <Bullet>
                Subject injury, medical expenses, and legal defense per protocol/country.
              </Bullet>
              <Bullet>Territory/jurisdiction mapping with local certificate issuance.</Bullet>
              <Bullet>Retroactive dates and run-off for long-tail claims.</Bullet>
            </CardPlain>
            <CardPlain title="Quality & Documentation">
              <Bullet>Batch record, traceability, and deviation/CAPA artifacts for claims.</Bullet>
              <Bullet>Vendor qualification and audit trails for subrogation.</Bullet>
              <Bullet>Recall-ready communication and PR playbooks.</Bullet>
            </CardPlain>
            <CardPlain title="IP & Tech Transfer">
              <Bullet>Contractual liability and indemnity mapping for CDMO/CRO roles.</Bullet>
              <Bullet>Know-how protection and confidentiality contingencies.</Bullet>
              <Bullet>Errors & omissions for tech-transfer engagements.</Bullet>
            </CardPlain>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">
            Multi-policy architectures tuned to regulatory, client, and lender expectations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Process mapping from R&D to market, utilities and single points of failure, and data/IT dependencies."
              points={[
                'Cold chain lane analysis',
                'Cleanroom and HVAC resilience',
                'Contract and indemnity review',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="Property/BI, GL/Product, Trials Liability, Recall, E&O/PI, Cyber, Environmental, and Crime modules."
              points={[
                'Sublimits and aggregates',
                'Jurisdiction and territory',
                'Certificates for audits and tenders',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel placement with agreed SOPs, on-account advances, and evidence-ready documentation workflows."
              points={[
                'Batch/lot trace and COAs',
                'Telematics/temp logs',
                'Root-cause and CAPA templates',
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
            Close practical gaps with endorsements aligned to QA and regulatory frameworks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Escalation/inflation guard',
              'Debris removal and professional fees',
              'Contamination clean-up and decontamination',
              'Deterioration of stock (temperature)',
              'Dependent business interruption (vendors/cloud)',
              'Denial of access/public authority closures',
              'Brands/labels and reconditioning costs',
              'Cyber incident response and privacy liability',
              'Environmental cleanup and transport pollution',
              'Trials certificate issuance per country',
              'Voluntary/mandatory recall costs',
              'Equipment rental and expediting charges',
              'Spare parts floaters and tooling',
              'Employee dishonesty and EFT fraud',
              'Product efficacy/guarantee (where available)',
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
            Typical underwriting parameters for life-sciences risks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardStat
              title="Regulatory Profile"
              body="GxP compliance maturity, audit history, warning letters, markets served."
              icon={<FaRegClipboard className="text-blue-500" />}
            />
            <CardStat
              title="Process Criticality"
              body="Sterility, potency, batch sizes, single-use vs cleanable systems."
              icon={<FaMicroscope className="text-blue-500" />}
            />
            <CardStat
              title="Cold Chain & Lanes"
              body="Temp bands, monitoring, alarms, backup power, export compliance."
              icon={<FaSnowflake className="text-blue-500" />}
            />
            <CardStat
              title="Quality & Recall"
              body="Traceability depth, recall drills, supplier controls, prior incidents."
              icon={<FaBoxOpen className="text-blue-500" />}
            />
            <CardStat
              title="Cyber & Data"
              body="OT/IT segmentation, backup tests, MFA, vendor access control."
              icon={<FaLaptopCode className="text-blue-500" />}
            />
            <CardStat
              title="Environmental"
              body="Solvent/waste controls, ETP capacity, biohazard handling, permits."
              icon={<FaLeaf className="text-blue-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case snapshots */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Case Snapshots</h2>
          <p className="mt-3 text-gray-700">
            Illustrative incidents showing program response and claims playbooks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Case
              title="Sterility Failure in Fill-Finish"
              points={[
                'Property/contamination endorsement responded for clean-up and validation.',
                'BI supported downtime; recall policy handled market withdrawals.',
                'Root-cause and CAPA strengthened gowning and pressure controls.',
              ]}
            />
            <Case
              title="Reefer Lane Temperature Excursion"
              points={[
                'Deterioration of stock coverage funded loss and reconditioning.',
                'Telematics and data loggers substantiated claim and SOP revisions.',
                'Contingent BI addressed downstream customer penalties.',
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
                  Compliance-Ready Coverage. Rapid Claims. Better Outcomes.
                </h3>
                <p className="mt-2 text-gray-700">
                  Work with SIIB’s life sciences desk for precise wordings, strong placement, and
                  proactive claims management across global operations.
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
              value="Life-Sciences Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helper components */
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

export default LifeSciencesInsurancePage;
