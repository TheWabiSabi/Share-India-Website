import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/chemical';

export const metadata: Metadata = {
  title: 'Chemical Industry Insurance | Manufacturing & Processing Coverage | SIIB',
  description:
    'Specialized insurance for chemical manufacturing, processing, and distribution. Coverage for fire, explosion, pollution liability, and product recall.',
  keywords:
    'chemical industry insurance, chemical manufacturing insurance, pollution liability, hazardous material insurance, chemical plant insurance',
};

export default function ChemicalIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
