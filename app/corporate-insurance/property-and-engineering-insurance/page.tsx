import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/property-engineering';

export const metadata: Metadata = {
  title: 'Property & Engineering Insurance | CAR & EAR Insurance | SIIB',
  description:
    'Comprehensive property and engineering insurance including CAR, EAR, machinery breakdown, and business interruption coverage.',
  keywords:
    'property insurance, engineering insurance, CAR insurance, EAR insurance, machinery breakdown, construction insurance',
};

export default function PropertyEngineeringInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
