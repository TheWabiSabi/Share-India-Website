import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/retail-showroom';

const industriesServed = [
  { detail: 'Miscellaneous Store Retailers (NAICS 453)', type: 'Service' },
  { detail: 'Nonstore Retailers (NAICS 454)', type: 'Service' },
  { detail: 'Retail Trade (NAICS 44-45)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Retail & Showroom Insurance Solutions | SIIB',
  description:
    'Complete insurance for retail stores, showrooms, and consumer businesses covering stock, property, customers, and staff.',
  keywords:
    'retail insurance, showroom insurance, stock insurance, shop insurance, burglary insurance',
};

export default function RetailShowroomPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
