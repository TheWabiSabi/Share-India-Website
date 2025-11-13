import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/office-package';

export const metadata: Metadata = {
  title: 'Office Package Insurance | Business Insurance Solutions | SIIB',
  description:
    'Comprehensive office package insurance covering building, contents, equipment, and liability. Protect your office operations with SIIB.',
  keywords:
    'office insurance, business insurance, office package policy, commercial insurance, office contents insurance',
};

export default function OfficePackageInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
