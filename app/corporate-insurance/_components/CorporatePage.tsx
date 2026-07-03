import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaShieldAlt,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';
import Contact from '@/app/industries/_components/Contact';
import Card from '@/app/industries/_components/Card';
import MainCarouselServer from '@/components/main-caraousel-server';
import GhostTagStrip from '@/components/blog/ghost-tag-strip';
import KnowledgeQuestionnaire from '@/app/industries/_components/KnowledgeQuestionnaire';
import { AllTopics } from '@/consts/topics';
import { isPrimaryTag } from '@/consts/tags';

export interface CorporateInsuranceDetails {
  img: string;
  hero: { title: string; description: string };
  explaination: {
    title: string;
    description: string;
    overview: { description: string; bullets: string[] };
    projectTypes: { types: Array<{ icon: React.ReactNode; title: string; description: string }> };
  };
  coverage: {
    desciption: string;
    coverages: Array<{ title: string; icon: React.ReactNode; body: string; bullets: string[] }>;
  };
  claim_story: { description: string; topic: string };
  relevant: { primary: string; insights: string[]; claimStories?: string[] };
  knowledge: { industryName: string };
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

function CarouselSkeleton() {
  return (
    <div className="flex h-64 animate-pulse items-center gap-4 overflow-hidden rounded-xl">
      {[0, 1].map((i) => (
        <div key={i} className="h-full w-full shrink-0 rounded-xl bg-gray-100" />
      ))}
    </div>
  );
}

const CorporatePage = ({
  details,
  questions,
}: {
  details: CorporateInsuranceDetails;
  questions?: Question[];
}) => {
  // Runs once per page during static generation (these pages prerender) — flags
  // a page whose relevant.primary isn't a real Ghost primary tag, so a typo'd
  // or stale tag surfaces as a build-log warning instead of a silently empty
  // Insights strip / Claim Stories carousel.
  if (!isPrimaryTag(details.relevant.primary)) {
    console.warn(
      `[ghost-tags] relevant.primary "${details.relevant.primary}" is not a known PRIMARY_TAG (consts/tags.ts). Insights and Claim Stories will return no posts for this page.`,
    );
  }

  // Sourced from `relevant` — the same field the Insights strip uses — so the
  // two blocks can never drift onto different page tags.
  const claimStoryTagSlugs = [
    ...(details.relevant.claimStories ?? ['claims-story']),
    details.relevant.primary,
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[80dvh] items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src={details.img}
            alt={details.hero.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-slate-900/20" />
        </div>
        <div className="relative z-10 w-full pb-14 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <div className="border-si-primary/30 bg-si-primary/15 mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                <FaShieldAlt className="text-si-primary text-sm" />
                <span className="text-sm font-semibold text-blue-100">
                  Corporate Insurance Specialists • IRDAI Licensed
                </span>
              </div>
              <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
                {details.hero.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-200">
                {details.hero.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/premium-estimator"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  <FaShieldAlt /> Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="btn-ghost inline-flex items-center gap-2 rounded-xl border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
                >
                  <FaFileContract /> Book Risk Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explanation ── */}
      <section className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">
              {details.explaination.title}
            </h2>
            <p className="text-si-ink/70 mt-4 max-w-3xl text-lg leading-relaxed">
              {details.explaination.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-si-ink mb-5 text-xl font-bold">Overview</h3>
              <p className="text-si-ink/70 mb-5 leading-relaxed">
                {details.explaination.overview.description}
              </p>
              <ul className="space-y-3">
                {details.explaination.overview.bullets.map((b, i) => (
                  <li key={i} className="text-si-ink/70 flex items-start gap-2">
                    <FaChevronRight className="text-si-primary mt-1 h-3 w-3 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-si-ink mb-5 text-xl font-bold">Key Coverage Areas</h3>
              <div className="space-y-4">
                {details.explaination.projectTypes.types.map((type, i) => (
                  <div
                    key={i}
                    className="card-vibrant hover-glow-blue hover-lift group flex items-start gap-4 rounded-2xl border border-white/50 p-4 shadow-md ring-1 ring-black/5 transition-all duration-300"
                  >
                    <div className="text-si-primary bg-si-primary/8 shrink-0 rounded-xl p-2.5 text-xl transition-transform group-hover:scale-110">
                      {type.icon}
                    </div>
                    <div>
                      <div className="text-si-ink font-bold">{type.title}</div>
                      <div className="text-si-ink/60 mt-0.5 text-sm leading-relaxed">
                        {type.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Coverage ── */}
      <section className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-si-ink text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
            <p className="text-si-ink/70 mt-4 max-w-3xl text-lg">{details.coverage.desciption}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {details.coverage.coverages.map((c, i) => (
              <Card key={i} icon={c.icon} title={c.title} body={c.body} bullets={c.bullets} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Claim Stories ── */}
      <section className="from-si-primary-200 border-b border-gray-100 bg-gradient-to-b to-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-si-ink mb-3 text-2xl font-bold md:text-3xl">Claim Stories</h2>
          <p className="text-si-ink/70 mb-8">{details.claim_story.description}</p>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <Suspense fallback={<CarouselSkeleton />}>
              <MainCarouselServer color="blue" layout={1} tagSlugs={claimStoryTagSlugs} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── Industry Insights ── */}
      <section className="to-si-primary-200 border-b border-gray-100 bg-gradient-to-b from-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-si-ink mb-3 text-2xl font-bold md:text-3xl">
            Industry Insights & Articles
          </h2>
          <p className="text-si-ink/70 mb-8">
            Stay updated with the latest trends, regulations, and best practices
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <GhostTagStrip
              primary={details.relevant.primary}
              sections={details.relevant.insights}
            />
          </div>
        </div>
      </section>

      {/* ── Knowledge Quiz ── */}
      {questions && (
        <KnowledgeQuestionnaire
          questions={questions}
          industryName={details.knowledge.industryName}
        />
      )}

      {/* ── CTA ── */}
      <section className="to-si-primary-200 bg-gradient-to-b from-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-si-primary/10 from-si-primary/5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-8 md:p-10">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-si-ink text-2xl font-bold">
                  Protect Your Business. Secure Your Future.
                </h3>
                <p className="text-si-ink/70 mt-2">
                  Partner with SIIB&apos;s corporate insurance specialists for comprehensive
                  coverage, expert risk management, and dedicated support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/premium-estimator"
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  <FaShieldAlt /> Get Coverage Proposal
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                >
                  <FaFileContract /> Book Assessment
                </Link>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
              <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
              <Contact
                label="Advisory Desk"
                value="Corporate Insurance Specialists"
                icon={<FaHeadset />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;
