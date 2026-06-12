import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/miscellaneous-commercial';

export const metadata: Metadata = {
  title: 'Commercial Business Insurance Solutions | SIIB',
  description:
    'Flexible insurance coverage for diverse commercial establishments protecting property, people, and operations across sectors.',
  keywords: 'commercial business insurance, commercial property insurance, public liability, business interruption',
};

export default function MiscellaneousCommercialPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
