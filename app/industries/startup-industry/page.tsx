import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/startup';

export const metadata: Metadata = {
  title: 'Startup Insurance | Tech Startup & SaaS Coverage | SIIB',
  description:
    'Flexible insurance solutions for tech startups and SaaS companies. Coverage for D&O liability, E&O, cyber risks, and key person insurance.',
  keywords:
    'startup insurance, tech startup insurance, SaaS insurance, D&O insurance, cyber liability, key person insurance',
};

export default function StartupIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
