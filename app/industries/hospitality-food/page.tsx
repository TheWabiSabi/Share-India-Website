import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/hospitality-food';

export const metadata: Metadata = {
  title: 'Hospitality & Food Business Insurance | SIIB',
  description:
    'Insurance for hotels, restaurants, cafes, cloud kitchens, and catering businesses covering property, liability, and interruption.',
  keywords: 'hospitality insurance, restaurant insurance, hotel insurance, food liability, cloud kitchen insurance',
};

export default function HospitalityFoodPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
