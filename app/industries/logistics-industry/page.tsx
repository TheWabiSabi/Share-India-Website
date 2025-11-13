import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/logistics';

export const metadata: Metadata = {
  title: 'Logistics Industry Insurance | Transportation & Warehouse Coverage | SIIB',
  description:
    'Comprehensive insurance for logistics, transportation, and warehousing. Coverage for cargo, fleet, warehouse liability, and goods in transit.',
  keywords:
    'logistics insurance, transportation insurance, warehouse insurance, cargo insurance, fleet insurance, goods in transit',
};

export default function LogisticsIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
