import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-travel';

export const metadata: Metadata = {
  title: 'Travel Insurance | International & Domestic Travel Coverage | SIIB',
  description:
    'Comprehensive travel insurance for international and domestic trips. Medical emergency, trip cancellation, baggage loss, and flight delay coverage worldwide.',
  keywords:
    'travel insurance, international travel insurance, trip insurance, medical travel cover, baggage insurance, trip cancellation',
};

export default function TravelRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
