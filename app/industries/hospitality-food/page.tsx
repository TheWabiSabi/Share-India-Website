import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/hospitality-food';

const industriesServed = [
  { detail: 'Accommodation and Food Services (NAICS 72)', type: 'Service' },
  { detail: 'Food Services and Drinking Places (NAICS 722)', type: 'Service' },
  { detail: 'Food and Beverage Stores (NAICS 445)', type: 'Service' },
  { detail: 'Leisure and Hospitality', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Hospitality & Food Business Insurance | SIIB',
  description:
    'Insurance for hotels, restaurants, cafes, cloud kitchens, and catering businesses covering property, liability, and interruption.',
  keywords:
    'hospitality insurance, restaurant insurance, hotel insurance, food liability, cloud kitchen insurance',
};

export default function HospitalityFoodPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
