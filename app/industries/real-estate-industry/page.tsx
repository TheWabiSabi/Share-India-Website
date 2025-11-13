import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/real-estate';

export const metadata: Metadata = {
  title: 'Real Estate Insurance | Construction & Property Development Coverage | SIIB',
  description:
    'Comprehensive insurance for real estate developers and construction projects. CAR insurance, professional indemnity, and RERA compliance support.',
  keywords:
    'real estate insurance, construction insurance, CAR insurance, property development insurance, builders risk, RERA insurance',
};

export default function RealEstateIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
