import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/manufacturing';

export const metadata: Metadata = {
  title: 'Manufacturing Industry Insurance Solutions | SIIB',
  description:
    'Comprehensive protection for factories, production plants, and manufacturing units covering machinery, stock, workers, and liability.',
  keywords: 'manufacturing insurance, factory insurance, machinery breakdown, product liability, industrial all risk',
};

export default function ManufacturingPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
