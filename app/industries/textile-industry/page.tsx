import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/textile';

export const metadata: Metadata = {
  title: 'Textile Industry Insurance | Manufacturing & Export Coverage | SIIB',
  description:
    'Specialized insurance for textile manufacturing, garment production, and export. Coverage for fire, machinery breakdown, stock, and marine cargo.',
  keywords:
    'textile insurance, garment industry insurance, textile manufacturing insurance, textile export insurance, fabric insurance',
};

export default function TextileIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
