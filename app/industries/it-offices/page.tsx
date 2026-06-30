import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/it-offices';

const industriesServed = [
  { detail: 'Credit Intermediation and Related Activities (NAICS 522)', type: 'Service' },
  { detail: 'Financial Activities', type: 'Service' },
  { detail: 'Furniture and Home Furnishings Stores (NAICS 442)', type: 'Service' },
  { detail: 'Insurance Carriers and Related Activities (NAICS 524)', type: 'Service' },
  { detail: 'Monetary Authorities - Central Bank (NAICS 521)', type: 'Service' },
  { detail: 'Museums, Historical Sites, and Similar Institutions (NAICS 712)', type: 'Service' },
  { detail: 'Nursing and Residential Care Facilities (NAICS 623)', type: 'Service' },
  { detail: 'Printing and Related Support Activities (NAICS 323)', type: 'manufacturing' },
  {
    detail:
      'Securities, Commodity Contracts, and Other Financial Investments and Related Activities',
    type: 'Service',
  },
  { detail: 'Support Activities for Agriculture and Forestry (NAICS 115)', type: 'Service' },
  { detail: 'Support Activities for Mining (NAICS 213)', type: 'Service' },
  { detail: 'Support Activities for Transportation (NAICS 488)', type: 'Service' },
  { detail: 'Trade, Transportation, and Utilities', type: 'Service' },
  { detail: 'Transit and Ground Passenger Transportation (NAICS 485)', type: 'Service' },
  { detail: 'Utilities (NAICS 22)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'IT & Office Business Insurance Solutions | SIIB',
  description:
    'Tailored insurance for IT companies, software firms, BPOs, and professional offices covering cyber risk, liability, and business assets.',
  keywords:
    'IT insurance, office insurance, cyber liability, errors omissions, professional indemnity',
};

export default function ITOfficesPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
