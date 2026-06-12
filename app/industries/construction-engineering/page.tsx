import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/construction-engineering';

const industriesServed = [
  { detail: 'Construction (NAICS 23)', type: 'manufacturing' },
  { detail: 'Construction of Buildings (NAICS 236)', type: 'manufacturing' },
  { detail: 'Heavy and Civil Engineering Construction (NAICS 237)', type: 'manufacturing' },
  { detail: 'Specialty Trade Contractors (NAICS 238)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Construction & Engineering Insurance Solutions | SIIB',
  description:
    'Comprehensive coverage for construction sites, civil engineering projects, and contracting businesses from groundbreaking to handover.',
  keywords:
    'construction insurance, engineering insurance, contractor all risks, erection all risks, workmen compensation',
};

export default function ConstructionEngineeringPage() {
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
