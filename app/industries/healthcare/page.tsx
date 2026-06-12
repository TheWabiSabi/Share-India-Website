import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/healthcare';

export const metadata: Metadata = {
  title: 'Healthcare Industry Insurance Solutions | SIIB',
  description:
    'Specialized coverage for hospitals, clinics, diagnostic centres, and healthcare professionals protecting patients, staff, and assets.',
  keywords: 'healthcare insurance, hospital insurance, clinic insurance, medical malpractice, professional indemnity',
};

export default function HealthcarePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
