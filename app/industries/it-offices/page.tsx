import { Metadata } from 'next';
import Link from 'next/link';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/it-offices';

const industriesServed = [
  { detail: 'Credit Intermediation and Related Activities (NAICS 522)', type: 'Service' },
  { detail: 'Financial Activities', type: 'Service' },
  { detail: 'Furniture and Home Furnishings Stores (NAICS 442)', type: 'Service' },
  { detail: 'Insurance Carriers and Related Activities (NAICS 524)', type: 'Service' },
  { detail: 'Monetary Authorities - Central Bank (NAICS 521)', type: 'Service' },
  { detail: 'Museums, Historical Sites, and Similar Institutions (NAICS 712)', type: 'Service' },
  { detail: 'Nursing and Residential Care Facilities (NAICS 623)', type: 'Service' },
  { detail: 'Printing and Related Support Activities (NAICS 323)', type: 'manufacturing' },
  {
    detail:
      'Securities, Commodity Contracts, and Other Financial Investments and Related Activities',
    type: 'Service',
  },
  { detail: 'Support Activities for Agriculture and Forestry (NAICS 115)', type: 'Service' },
  { detail: 'Support Activities for Mining (NAICS 213)', type: 'Service' },
  { detail: 'Support Activities for Transportation (NAICS 488)', type: 'Service' },
  { detail: 'Trade, Transportation, and Utilities', type: 'Service' },
  { detail: 'Transit and Ground Passenger Transportation (NAICS 485)', type: 'Service' },
  { detail: 'Utilities (NAICS 22)', type: 'Service' },
];

const getPremiumEstimatorHref = (industryDetail: string) =>
  `/premium-estimator?industry=${encodeURIComponent(industryDetail)}`;

export const metadata: Metadata = {
  title: 'IT & Office Business Insurance Solutions | SIIB',
  description:
    'Tailored insurance for IT companies, software firms, BPOs, and professional offices covering cyber risk, liability, and business assets.',
  keywords: 'IT insurance, office insurance, cyber liability, errors omissions, professional indemnity',
};

export default function ITOfficesPage() {
  return (
    <>
      <IndustryPage details={details} questions={quizQuestions} />
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-si-ink text-2xl font-bold md:text-3xl">Industries We Serve</h2>
          <ul className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
            {industriesServed.map((industry) => (
              <li
                key={industry.detail}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <div className="min-w-0">
                  <span className="text-si-ink block text-sm font-medium">{industry.detail}</span>
                  <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600 uppercase">
                    {industry.type}
                  </span>
                </div>
                <Link
                  href={getPremiumEstimatorHref(industry.detail)}
                  className="border-si-primary/30 text-si-primary hover:bg-si-primary/5 shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors"
                >
                  Premium Estimator
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
