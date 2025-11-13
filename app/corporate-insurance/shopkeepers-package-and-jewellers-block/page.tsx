import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/shopkeepers-jewellers';

export const metadata: Metadata = {
  title: 'Shopkeepers & Jewellers Block Insurance | Retail Insurance | SIIB',
  description:
    'Specialized insurance for shopkeepers and jewellers. Comprehensive coverage for stock, premises, and valuables with all-risk protection.',
  keywords:
    'shopkeepers insurance, jewellers block insurance, retail insurance, jewellery insurance, stock insurance',
};

export default function ShopkeepersJewellersInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
