import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/healthcare';

const industriesServed = [{ detail: 'Hospitals (NAICS 622)', type: 'Service' }];

export const metadata: Metadata = {
  title: 'Healthcare Industry Insurance Solutions | SIIB',
  description:
    'Specialized coverage for hospitals, clinics, diagnostic centres, and healthcare professionals protecting patients, staff, and assets.',
  keywords: 'healthcare insurance, hospital insurance, clinic insurance, medical malpractice, professional indemnity',
};

export default function HealthcarePage() {
  return (
    <>
      <IndustryPage details={details} questions={quizQuestions} />
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-si-ink text-2xl font-bold md:text-3xl">Industries We Serve</h2>
          <ul className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
            {industriesServed.map((industry) => (
              <li key={industry.detail} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-si-ink text-sm font-medium">{industry.detail}</span>
                <span className="text-si-primary text-xs font-bold uppercase">{industry.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
