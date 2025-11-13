import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/employee-benefits';

export const metadata: Metadata = {
  title: 'Employee Benefits Insurance | Group Health & Life Insurance | SIIB',
  description:
    'Comprehensive employee benefits insurance including group health, life, and accident coverage. Attract and retain talent with competitive benefits.',
  keywords:
    'employee benefits, group health insurance, group life insurance, employee insurance, corporate benefits',
};

export default function EmployeeBenefitsInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
