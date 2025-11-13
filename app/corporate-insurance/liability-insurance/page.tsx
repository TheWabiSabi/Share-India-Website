import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/liability';

export const metadata: Metadata = {
  title: 'Liability Insurance | Public & Professional Liability Coverage | SIIB',
  description:
    'Comprehensive liability insurance including public liability, product liability, professional indemnity, and cyber liability coverage.',
  keywords:
    'liability insurance, public liability, professional indemnity, product liability, cyber liability, D&O insurance',
};

export default function LiabilityInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
