import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/warehousing-logistics';

export const metadata: Metadata = {
  title: 'Warehousing & Logistics Insurance Solutions | SIIB',
  description:
    'End-to-end insurance for warehouses, storage facilities, and logistics operations protecting stock, premises, and supply chains.',
  keywords: 'warehouse insurance, logistics insurance, stock insurance, burglary insurance, cold storage insurance',
};

export default function WarehousingLogisticsPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
