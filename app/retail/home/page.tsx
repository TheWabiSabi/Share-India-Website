import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-home';

export const metadata: Metadata = {
  title: 'Home Insurance | House & Contents Insurance | SIIB',
  description:
    'Comprehensive home insurance covering building structure, contents, and liability. Protection against fire, theft, natural disasters, and third-party claims.',
  keywords:
    'home insurance, house insurance, property insurance, contents insurance, fire insurance, home protection',
};

export default function HomeRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
