import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/retail-showroom';

export const metadata: Metadata = {
  title: 'Retail & Showroom Insurance Solutions | SIIB',
  description:
    'Complete insurance for retail stores, showrooms, and consumer businesses covering stock, property, customers, and staff.',
  keywords: 'retail insurance, showroom insurance, stock insurance, shop insurance, burglary insurance',
};

export default function RetailShowroomPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
