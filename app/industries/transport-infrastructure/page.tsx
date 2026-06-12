import { Metadata } from 'next';
import Link from 'next/link';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/transport-infrastructure';

const industriesServed = [
  { detail: 'Air Transportation (NAICS 481)', type: 'Service' },
  { detail: 'Couriers and Messengers (NAICS 492)', type: 'Service' },
  { detail: 'Pipeline Transportation (NAICS 486)', type: 'Service' },
  { detail: 'Rail Transportation (NAICS 482)', type: 'Service' },
  { detail: 'Scenic and Sightseeing Transportation (NAICS 487)', type: 'Service' },
  { detail: 'Transportation and Warehousing (NAICS 48-49)', type: 'manufacturing' },
  { detail: 'Truck Transportation (NAICS 484)', type: 'Service' },
  { detail: 'Water Transportation (NAICS 483)', type: 'Service' },
];

const getPremiumEstimatorHref = (industryDetail: string) =>
  `/premium-estimator?industry=${encodeURIComponent(industryDetail)}`;

export const metadata: Metadata = {
  title: 'Transport & Infrastructure Insurance Solutions | SIIB',
  description:
    'Specialized coverage for transport operators, fleet owners, and infrastructure businesses protecting vehicles, cargo, and operations.',
  keywords: 'transport insurance, fleet insurance, cargo insurance, carrier legal liability, infrastructure insurance',
};

export default function TransportInfrastructurePage() {
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
