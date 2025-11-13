import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/life-sciences';

export const metadata: Metadata = {
  title: 'Pharma & Life Sciences Insurance | Pharmaceutical Manufacturing Coverage | SIIB',
  description:
    'Specialized insurance for pharmaceutical manufacturing, biotech, and medical devices. Product liability, clinical trials, and regulatory compliance coverage.',
  keywords:
    'pharma insurance, pharmaceutical insurance, life sciences insurance, biotech insurance, clinical trial insurance, GMP insurance',
};

export default function LifeSciencesPharmaIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
