import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/construction-engineering';

export const metadata: Metadata = {
  title: 'Construction & Engineering Insurance Solutions | SIIB',
  description:
    'Comprehensive coverage for construction sites, civil engineering projects, and contracting businesses from groundbreaking to handover.',
  keywords:
    'construction insurance, engineering insurance, contractor all risks, erection all risks, workmen compensation',
};

export default function ConstructionEngineeringPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
