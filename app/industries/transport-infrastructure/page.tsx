import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/transport-infrastructure';

export const metadata: Metadata = {
  title: 'Transport & Infrastructure Insurance Solutions | SIIB',
  description:
    'Specialized coverage for transport operators, fleet owners, and infrastructure businesses protecting vehicles, cargo, and operations.',
  keywords: 'transport insurance, fleet insurance, cargo insurance, carrier legal liability, infrastructure insurance',
};

export default function TransportInfrastructurePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
