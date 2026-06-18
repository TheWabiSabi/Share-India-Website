import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/education-training';

const industriesServed = [
  { detail: 'Education and Health Services', type: 'Service' },
  { detail: 'Educational Services (NAICS 61)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Education & Training Institution Insurance | SIIB',
  description:
    'Insurance for schools, colleges, coaching centres, and training institutes covering students, staff, liability, and infrastructure.',
  keywords: 'education insurance, school insurance, college insurance, student accident cover, institutional liability',
};

export default function EducationTrainingPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
