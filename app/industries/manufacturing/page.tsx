import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/manufacturing';

const industriesServed = [
  { detail: 'Animal Production (NAICS 112)', type: 'manufacturing' },
  { detail: 'Apparel Manufacturing (NAICS 315)', type: 'manufacturing' },
  { detail: 'Beverage and Tobacco Product Manufacturing (NAICS 312)', type: 'manufacturing' },
  { detail: 'Chemical Manufacturing (NAICS 325)', type: 'manufacturing' },
  { detail: 'Computer and Electronic Product Manufacturing (NAICS 334)', type: 'manufacturing' },
  { detail: 'Crop Production (NAICS 111)', type: 'manufacturing' },
  {
    detail: 'Electrical Equipment, Appliance, and Component Manufacturing (NAICS 335)',
    type: 'manufacturing',
  },
  { detail: 'Fabricated Metal Product Manufacturing (NAICS 332)', type: 'manufacturing' },
  { detail: 'Food Manufacturing (NAICS 311)', type: 'manufacturing' },
  { detail: 'Furniture and Related Product Manufacturing (NAICS 337)', type: 'manufacturing' },
  { detail: 'Leather and Allied Product Manufacturing (NAICS 316)', type: 'manufacturing' },
  { detail: 'Machinery Manufacturing (NAICS 333)', type: 'manufacturing' },
  { detail: 'Manufacturing (NAICS 31-33)', type: 'manufacturing' },
  { detail: 'Miscellaneous Manufacturing (NAICS 339)', type: 'manufacturing' },
  { detail: 'Nonmetallic Mineral Product Manufacturing (NAICS 327)', type: 'manufacturing' },
  { detail: 'Paper Manufacturing (NAICS 322)', type: 'manufacturing' },
  { detail: 'Petroleum and Coal Products Manufacturing (NAICS 324)', type: 'manufacturing' },
  { detail: 'Plastics and Rubber Products Manufacturing (NAICS 326)', type: 'manufacturing' },
  { detail: 'Primary Metal Manufacturing (NAICS 331)', type: 'manufacturing' },
  { detail: 'Transportation Equipment Manufacturing (NAICS 336)', type: 'manufacturing' },
  { detail: 'Wood Product Manufacturing (NAICS 321)', type: 'manufacturing' },
];

export const metadata: Metadata = {
  title: 'Manufacturing Industry Insurance Solutions | SIIB',
  description:
    'Comprehensive protection for factories, production plants, and manufacturing units covering machinery, stock, workers, and liability.',
  keywords:
    'manufacturing insurance, factory insurance, machinery breakdown, product liability, industrial all risk',
};

export default function ManufacturingPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
