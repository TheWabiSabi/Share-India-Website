import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/transport-infrastructure';

const industriesServed = [
  { detail: 'Air Transportation (NAICS 481)', type: 'Service' },
  { detail: 'Couriers and Messengers (NAICS 492)', type: 'Service' },
  { detail: 'Pipeline Transportation (NAICS 486)', type: 'Service' },
  { detail: 'Rail Transportation (NAICS 482)', type: 'Service' },
  { detail: 'Scenic and Sightseeing Transportation (NAICS 487)', type: 'Service' },
  { detail: 'Transportation and Warehousing (NAICS 48-49)', type: 'manufacturing' },
  { detail: 'Truck Transportation (NAICS 484)', type: 'Service' },
  { detail: 'Water Transportation (NAICS 483)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Transport & Infrastructure Insurance Solutions | SIIB',
  description:
    'Specialized coverage for transport operators, fleet owners, and infrastructure businesses protecting vehicles, cargo, and operations.',
  keywords:
    'transport insurance, fleet insurance, cargo insurance, carrier legal liability, infrastructure insurance',
};

export default function TransportInfrastructurePage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
