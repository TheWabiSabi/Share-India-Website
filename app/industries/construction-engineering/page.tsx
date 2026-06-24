import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/construction-engineering';

const industriesServed = [
  { detail: 'Construction (NAICS 23)', type: 'manufacturing' },
  { detail: 'Construction of Buildings (NAICS 236)', type: 'manufacturing' },
  { detail: 'Heavy and Civil Engineering Construction (NAICS 237)', type: 'manufacturing' },
  { detail: 'Specialty Trade Contractors (NAICS 238)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Construction & Engineering Insurance Solutions | SIIB',
  description:
    'Comprehensive coverage for construction sites, civil engineering projects, and contracting businesses from groundbreaking to handover.',
  keywords:
    'construction insurance, engineering insurance, contractor all risks, erection all risks, workmen compensation',
};

export default function ConstructionEngineeringPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
