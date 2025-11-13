import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/solar';

export const metadata: Metadata = {
  title: 'Solar Industry Insurance | Solar Power Plant Coverage | SIIB',
  description:
    'Comprehensive insurance for solar power projects, panel manufacturing, and O&M operations. Coverage for equipment, performance warranty, and business interruption.',
  keywords:
    'solar insurance, solar power plant insurance, solar panel insurance, renewable energy insurance, solar project insurance',
};

export default function SolarIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
