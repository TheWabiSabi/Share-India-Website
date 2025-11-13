import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-health';

export const metadata: Metadata = {
  title: 'Health Insurance Plans | Individual & Family Health Coverage | SIIB',
  description:
    'Comprehensive health insurance for individuals and families. Cashless hospitalization, critical illness cover, and preventive care benefits with no claim bonus.',
  keywords:
    'health insurance, family floater, individual health plan, medical insurance, hospitalization cover, critical illness',
};

export default function HealthRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
