import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import IndustriesServedSection from '../_components/IndustriesServedSection';
import { details } from './data';
import { quizQuestions } from '../_data/questions/miscellaneous-commercial';

const industriesServed = [
  { detail: 'Administrative and Support Services (NAICS 561)', type: 'Service' },
  {
    detail: 'Administrative and Support and Waste Management and Remediation Services (NAICS 56)',
    type: 'Service',
  },
  { detail: 'Agriculture, Forestry, Fishing and Hunting (NAICS 11)', type: 'manufacturing' },
  { detail: 'Ambulatory Health Care Services (NAICS 621)', type: 'Service' },
  { detail: 'Amusement, Gambling, and Recreation Industries (NAICS 713)', type: 'manufacturing' },
  { detail: 'Arts, Entertainment, and Recreation (NAICS 71)', type: 'Service' },
  { detail: 'Broadcasting (except Internet) (NAICS 515)', type: 'Service' },
  {
    detail: 'Building Material and Garden Equipment and Supplies Dealers (NAICS 444)',
    type: 'Service',
  },
  { detail: 'Clothing and Clothing Accessories Stores (NAICS 448)', type: 'Service' },
  { detail: 'Data Processing, Hosting, and Related Services (NAICS 518)', type: 'Service' },
  { detail: 'Electronics and Appliance Stores (NAICS 443)', type: 'Service' },
  { detail: 'Finance and Insurance (NAICS 52)', type: 'Service' },
  { detail: 'Fishing, Hunting and Trapping (NAICS 114)', type: 'manufacturing' },
  { detail: 'Forestry and Logging (NAICS 113)', type: 'Service' },
  { detail: 'Funds, Trusts, and Other Financial Vehicles (NAICS 525)', type: 'Service' },
  { detail: 'Gasoline Stations (NAICS 447)', type: 'Service' },
  { detail: 'General Merchandise Stores (NAICS 452)', type: 'manufacturing' },
  { detail: 'Goods-Producing Industries', type: 'manufacturing' },
  { detail: 'Health Care and Social Assistance (NAICS 62)', type: 'Service' },
  { detail: 'Health and Personal Care Stores (NAICS 446)', type: 'Service' },
  { detail: 'Information (NAICS 51)', type: 'Service' },
  { detail: 'Internet Publishing and Broadcasting (NAICS 516)', type: 'Service' },
  {
    detail: 'Jeweller, gold, silver & Gems Manufacuring and Wholeseller',
    type: 'manufacturing',
  },
  {
    detail: 'Lessors of Nonfinancial Intangible Assets - except Copyrighted Works (NAICS 533)',
    type: 'Service',
  },
  { detail: 'Management of Companies and Enterprises (NAICS 55)', type: 'Service' },
  { detail: 'Merchant Wholesalers, Durable Goods (NAICS 423)', type: 'Service' },
  { detail: 'Merchant Wholesalers, Nondurable Goods (NAICS 424)', type: 'Service' },
  { detail: 'Mining - except Oil and Gas (NAICS 212)', type: 'manufacturing' },
  {
    detail: 'Mining, Quarrying, and Oil and Gas Extraction (NAICS 21)',
    type: 'manufacturing',
  },
  { detail: 'Motion Picture and Sound Recording Industries (NAICS 512)', type: 'manufacturing' },
  { detail: 'Motor Vehicle and Parts Dealers (NAICS 441)', type: 'Service' },
  { detail: 'Natural Resources and Mining', type: 'manufacturing' },
  { detail: 'Oil and Gas Extraction (NAICS 211)', type: 'manufacturing' },
  { detail: 'Other Information Services (NAICS 519)', type: 'Service' },
  { detail: 'Other Services - except Public Administration (NAICS 81)', type: 'Service' },
  {
    detail: 'Performing Arts, Spectator Sports, and Related Industries (NAICS 711)',
    type: 'manufacturing',
  },
  { detail: 'Personal and Laundry Services (NAICS 812)', type: 'Service' },
  { detail: 'Postal Service (NAICS 491)', type: 'Service' },
  { detail: 'Private Households (NAICS 814)', type: 'Service' },
  { detail: 'Professional and Business Services', type: 'Service' },
  { detail: 'Professional, Scientific, and Technical Services (NAICS 54)', type: 'Service' },
  { detail: 'Publishing Industries - except Internet (NAICS 511)', type: 'manufacturing' },
  { detail: 'Real Estate (NAICS 531)', type: 'Service' },
  { detail: 'Real Estate and Rental and Leasing (NAICS 53)', type: 'Service' },
  {
    detail: 'Religious, Grantmaking, Civic, Professional, and Similar Organizations (NAICS 813)',
    type: 'Service',
  },
  { detail: 'Rental and Leasing Services (NAICS 532)', type: 'Service' },
  { detail: 'Repair and Maintenance (NAICS 811)', type: 'Service' },
  { detail: 'Service-Providing Industries', type: 'Service' },
  { detail: 'Social Assistance (NAICS 624)', type: 'Service' },
  { detail: 'Sporting Goods, Hobby, Book, and Music Stores (NAICS 451)', type: 'Service' },
  { detail: 'Telecommunications (NAICS 517)', type: 'Service' },
  { detail: 'Textile Mills (NAICS 313)', type: 'manufacturing' },
  { detail: 'Textile Product Mills (NAICS 314)', type: 'manufacturing' },
  { detail: 'Waste Management and Remediation Services (NAICS 562)', type: 'Service' },
  {
    detail: 'Wholesale Electronic Markets and Agents and Brokers (NAICS 425)',
    type: 'Service',
  },
  { detail: 'Wholesale Trade (NAICS 42)', type: 'Service' },
];

export const metadata: Metadata = {
  title: 'Commercial Business Insurance Solutions | SIIB',
  description:
    'Flexible insurance coverage for diverse commercial establishments protecting property, people, and operations across sectors.',
  keywords:
    'commercial business insurance, commercial property insurance, public liability, business interruption',
};

export default function MiscellaneousCommercialPage() {
  return (
    <IndustryPage
      details={details}
      questions={quizQuestions}
      beforeCoverage={<IndustriesServedSection industries={industriesServed} />}
    />
  );
}
