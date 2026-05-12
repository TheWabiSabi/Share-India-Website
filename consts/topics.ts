export const industryTopics = [
  'Infrastructure Industry',
  'Life Sciences & Pharma Industry',
  'Plastic Industry',
  'Startup Industry',
  'Real Estate Industry',
  'Chemical Industry',
  'Logistics Industry',
  'Textile Industry',
  'Solar Industry',
];

export const retailTopics = ['Retail'];

export const corporateTopics = [
  'Property & Engineering Insurance',
  'Liability Insurance',
  'Marine Transit Insurance',
  'Trade Credit Insurance',
  'Media & Entertainment Insurance',
  'Employee Benefits Insurance',
  'Motor Fleet Insurance',
  'Office Package Insurance',
  'Shopkeepers Package & Jewellers Block',
  'Group Travel Insurance Plans',
];

export const AllTopicsArray = [...industryTopics, ...retailTopics, ...corporateTopics];
export type AllTopics = (typeof AllTopicsArray)[number];

// type IndustryTopics = (typeof industryTopics)[number];
// type RetailTopics = (typeof retailTopics)[number];
// type CorporateTopics = (typeof corporateTopics)[number];

// export type AllTopics = IndustryTopics | RetailTopics | CorporateTopics;
