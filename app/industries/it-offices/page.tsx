import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/it-offices';

export const metadata: Metadata = {
  title: 'IT & Office Business Insurance Solutions | SIIB',
  description:
    'Tailored insurance for IT companies, software firms, BPOs, and professional offices covering cyber risk, liability, and business assets.',
  keywords: 'IT insurance, office insurance, cyber liability, errors omissions, professional indemnity',
};

export default function ITOfficesPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
