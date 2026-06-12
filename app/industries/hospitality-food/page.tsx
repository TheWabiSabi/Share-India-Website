import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/hospitality-food';

const industriesServed = [
  { detail: 'Accommodation and Food Services (NAICS 72)', type: 'Service' },
  { detail: 'Food Services and Drinking Places (NAICS 722)', type: 'Service' },
  { detail: 'Food and Beverage Stores (NAICS 445)', type: 'Service' },
  { detail: 'Leisure and Hospitality', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Hospitality & Food Business Insurance | SIIB',
  description:
    'Insurance for hotels, restaurants, cafes, cloud kitchens, and catering businesses covering property, liability, and interruption.',
  keywords: 'hospitality insurance, restaurant insurance, hotel insurance, food liability, cloud kitchen insurance',
};

export default function HospitalityFoodPage() {
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
