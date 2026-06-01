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
] as const;

export const retailTopics = [
  'Retail',
  'Retail Health',
  'Retail Cyber',
  'Retail Term',
  'Retail Life',
  'Retail Motor',
  'Retail Travel',
  'Retail Home',
] as const;

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
] as const;

export const AllTopicsArray = [...industryTopics, ...retailTopics, ...corporateTopics];
export type AllTopics = (typeof AllTopicsArray)[number];
