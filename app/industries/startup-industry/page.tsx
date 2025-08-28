import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaRocket,
  FaLaptopCode,
  FaServer,
  FaUsers,
  FaUserShield,
  FaLock,
  FaRegClipboard,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaChartLine,
  FaBoxOpen,
  FaBriefcase,
  FaBuilding,
  FaMoneyCheckAlt,
} from 'react-icons/fa';

const StartupInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Startup Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Coverage architecture tailored for early to growth-stage ventures—tech, SaaS, D2C,
              marketplaces, and deep-tech—aligned to client contracts, investors, and regulation.
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
              Modular programs for liability, property, cyber, employee benefits, and management
              risks with contract-ready certificates.
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Sector-specific structures that scale with revenue, headcount, and geographies.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaLaptopCode />} title="SaaS & Product">
              B2B/B2C SaaS, APIs, ML/AI platforms, cybersecurity, fintech, HRTech, health-tech.
            </Tile>
            <Tile icon={<FaServer />} title="Infra & DevOps">
              Cloud, managed services, MSP/MSSP, data centers, IoT/OT connectivity.
            </Tile>
            <Tile icon={<FaRocket />} title="Deep-Tech & R&D">
              Robotics, aerospace, EV, clean-tech, hardware startups with pilot deployments.
            </Tile>
            <Tile icon={<FaUsers />} title="D2C & Marketplaces">
              E-commerce, logistics-tech, ed-tech, creator platforms, gig networks.
            </Tile>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Contract-ready policies to win enterprise deals and protect the runway.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="General & Professional Liability (E&O)"
              body="Third-party BI/PD and professional liability for alleged errors/omissions in tech and services."
              bullets={[
                'Contractual liability carve-outs and additional insureds',
                'Worldwide jurisdiction/territory options',
                'Claims-made with retro dates and run-off planning',
              ]}
            />
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Cyber & Privacy"
              body="Network security, privacy liability, media, regulatory defense, and business interruption."
              bullets={[
                'Ransomware and social engineering',
                'Cloud/SaaS dependent BI and vendor failure',
                'Breach response, forensics, notification, PR',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBuilding className="text-2xl text-blue-500" />}
              title="Property & Business Interruption"
              body="Office/studio hardware, servers, fit-outs, and BI/extra expense for insured physical loss."
              bullets={[
                'Fire, STFI, EQ, theft, vandalism',
                'Debris removal, professional fees, escalation',
                'Denial of access and public authority extensions',
              ]}
            />
            <Card
              icon={<FaBriefcase className="text-2xl text-blue-500" />}
              title="Management Liability (D&O) & EPLI"
              body="Board-level protection and employment practices liability for scaling teams."
              bullets={[
                'Investor/board disputes and misrepresentation',
                'Hiring, harassment, discrimination allegations',
                'Defense costs, settlements, investigations',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBoxOpen className="text-2xl text-blue-500" />}
              title="Product & Commercial Crime"
              body="Product liability for hardware/IoT; crime for employee fraud and funds transfer loss."
              bullets={[
                'Vendor/contractor fraud and EFT',
                'Counterfeit/defect allegations (hardware)',
                'Inventory pilferage and social engineering',
              ]}
            />
            <Card
              icon={<FaMoneyCheckAlt className="text-2xl text-blue-500" />}
              title="Key Person & Group Health"
              body="Key-person life/PA and group health to attract talent and protect continuity."
              bullets={[
                'Sum insured linked to revenue or funding',
                'Flexible deductibles and wellness riders',
                'Portability as headcount scales',
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
            Typical risk drivers for early and growth-stage ventures.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MiniCard icon={<FaLock />} title="Data & Privacy">
              PII/PHI handling, vendor access, encryption/MFA, and cloud/edge risks.
            </MiniCard>
            <MiniCard icon={<FaLaptopCode />} title="Uptime & SLAs">
              Downtime penalties, dependent BI, and multi-region failover design.
            </MiniCard>
            <MiniCard icon={<FaRegClipboard />} title="Contracts">
              Indemnities, limitation of liability, additional insureds, and certificates.
            </MiniCard>
            <MiniCard icon={<FaUsers />} title="People & Culture">
              EPL, IP/assignment agreements, remote work safety, and BYOD controls.
            </MiniCard>
            <MiniCard icon={<FaBuilding />} title="Workspace">
              Fire/theft, access control, critical device backups, and vaulting.
            </MiniCard>
            <MiniCard icon={<FaChartLine />} title="Funding & Scale">
              Territory expansion, compliance, and board governance expectations.
            </MiniCard>
          </div>
        </div>
      </section>

      {/* Program design & placement */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Program Design & Placement</h2>
          <p className="mt-3 text-gray-700">Right-size today, scale tomorrow—without rework.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Step
              title="Exposure Mapping"
              desc="Contract reviews, data flows, tech stack, vendor dependencies, and people risks."
              points={[
                'Certificate and LoL alignment',
                'Cloud/dependency heat-map',
                'Local labor and benefits compliance',
              ]}
            />
            <Step
              title="Policy Architecture"
              desc="BOP-style bundles for early stage; module-by-module layering as complexity grows."
              points={[
                'Sublimits and aggregates',
                'Jurisdiction and territory',
                'Additional insureds and waivers',
              ]}
            />
            <Step
              title="Placement & Claims"
              desc="Panel quotes, SLAs, and evidence playbooks for faster settlements."
              points={[
                'On-account payments',
                'Forensics and breach counsel',
                'Root-cause and CAPA workflows',
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
            Close practical gaps and meet enterprise procurement asks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Additional insureds and primary non-contributory',
              'Waiver of subrogation',
              'Contractual liability coverage',
              'Media and IP infringement (tech E&O/cyber)',
              'Regulatory defense and PCI/PDPA add-ons',
              'Business interruption—dependent/cloud vendors',
              'Hardware warranty/defect (where available)',
              'Crime—EFT, social engineering, employee theft',
              'Portable electronics and worldwide transit',
              'Directors’ Side A-DIC (excess) options',
              'Key-person top-ups and buy–sell funding',
              'Group Health—OPD, wellness, telemedicine',
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
                  Contract-Ready Coverage for High-Velocity Startups
                </h3>
                <p className="mt-2 text-gray-700">
                  Faster certificates, stronger wordings, and proactive claims support for scaling
                  teams.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Contracts
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
              value="Startup Insurance Specialists"
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

export default StartupInsurancePage;
