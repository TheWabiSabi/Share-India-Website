// data.ts

import { Industry } from './interface';

export const industriesData: Industry[] = [
  {
    name: 'Accommodation',
    code: 'NAICS 721',
    type: 'Service',
    category: 'Preferred',
    insuranceTypes: [
      {
        name: 'Asset Insurance',
        category: 'Property Protection',
        features: [
          { name: 'Fire Insurance', rate: 0.585, unit: 'per mille', available: true },
          { name: 'MBD', rate: 0.025, unit: 'percentage', available: true },
          { name: 'EEI', rate: 0.025, unit: 'percentage', available: true },
          { name: 'Portable Equipment', rate: 0.035, unit: 'percentage', available: true },
          { name: 'Burglary', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Neon', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Plate Glass', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Money Insurance', rate: 0.01, unit: 'Per mille', available: true },
        ],
      },
      {
        name: 'Liability Insurance',
        category: 'Legal Protection',
        features: [
          {
            name: 'Director & Officers Liability',
            rate: 0.0027,
            unit: 'Depending on the Gross Assets',
            available: true,
          },
          { name: 'Professional Indemnity', rate: 0.01, unit: 'percentage', available: true },
          { name: 'Product Liability', rate: 0.0033, unit: 'percentage', available: true },
          {
            name: 'Commercial General Liability',
            rate: 0.0033,
            unit: 'percentage',
            available: true,
          },
          { name: 'Cyber Liability', rate: 0.01, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Employee Benefit',
        category: 'Employee Welfare',
        features: [
          { name: 'Group Medical Coverage', rate: 1500, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Personal Accident', rate: 40, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Term Life', rate: 1.5, unit: 'Per 1000 sum assured', available: true },
          { name: 'Gratuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Leave Encashment', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Super Annuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
        ],
      },
      {
        name: 'Marine Insurance',
        category: 'Transit Coverage',
        features: [
          { name: 'Specific Marine', rate: 0.0005, unit: 'percentage', available: true },
          { name: 'Open Marine Policy', rate: 0.0002, unit: 'percentage', available: true },
          { name: 'Sales Turnover Policy', rate: 0.0002, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Safeguards your Profits',
        category: 'Business Continuity',
        features: [
          {
            name: 'Fire Loss of Profit/Business Interruption',
            rate: 0.585,
            unit: 'percentage',
            available: true,
          },
          { name: 'Machinery Loss of Profit', rate: 2.5, unit: 'percentage', available: true },
        ],
      },
    ],
  },
  {
    name: 'Accommodation and Food Services',
    code: 'NAICS 72',
    type: 'Service',
    category: 'Preferred',
    insuranceTypes: [
      {
        name: 'Asset Insurance',
        category: 'Property Protection',
        features: [
          { name: 'Fire Insurance', rate: 0.585, unit: 'per mille', available: true },
          { name: 'MBD', rate: 0.025, unit: 'percentage', available: true },
          { name: 'EEI', rate: 0.025, unit: 'percentage', available: true },
          { name: 'Portable Equipment', rate: 0.035, unit: 'percentage', available: true },
          { name: 'Burglary', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Neon', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Plate Glass', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Money Insurance', rate: 0.01, unit: 'Per mille', available: true },
        ],
      },
      {
        name: 'Liability Insurance',
        category: 'Legal Protection',
        features: [
          {
            name: 'Director & Officers Liability',
            rate: 0.0027,
            unit: 'Depending on the Gross Assets',
            available: true,
          },
          { name: 'Professional Indemnity', rate: 0.01, unit: 'percentage', available: true },
          { name: 'Product Liability', rate: 0.0033, unit: 'percentage', available: true },
          {
            name: 'Commercial General Liability',
            rate: 0.0033,
            unit: 'percentage',
            available: true,
          },
          { name: 'Cyber Liability', rate: 0.01, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Employee Benefit',
        category: 'Employee Welfare',
        features: [
          { name: 'Group Medical Coverage', rate: 1500, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Personal Accident', rate: 40, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Term Life', rate: 1.5, unit: 'Per 1000 sum assured', available: true },
          { name: 'Gratuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Leave Encashment', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Super Annuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
        ],
      },
      {
        name: 'Marine Insurance',
        category: 'Transit Coverage',
        features: [
          { name: 'Specific Marine', rate: 0.0005, unit: 'percentage', available: true },
          { name: 'Open Marine Policy', rate: 0.0002, unit: 'percentage', available: true },
          { name: 'Sales Turnover Policy', rate: 0.0002, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Safeguards your Profits',
        category: 'Business Continuity',
        features: [
          {
            name: 'Fire Loss of Profit/Business Interruption',
            rate: 0.585,
            unit: 'percentage',
            available: true,
          },
          { name: 'Machinery Loss of Profit', rate: 2.5, unit: 'percentage', available: true },
        ],
      },
    ],
  },
  {
    name: 'Administrative and Support Services',
    code: 'NAICS 561',
    type: 'Service',
    category: 'Preferred',
    insuranceTypes: [
      {
        name: 'Asset Insurance',
        category: 'Property Protection',
        features: [
          { name: 'Fire Insurance', rate: 0, unit: 'per mille', available: false },
          { name: 'MBD', rate: 0.025, unit: 'percentage', available: true },
          { name: 'EEI', rate: 0.025, unit: 'percentage', available: true },
          { name: 'Portable Equipment', rate: 0.035, unit: 'percentage', available: true },
          { name: 'Burglary', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Neon', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Plate Glass', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Money Insurance', rate: 0.01, unit: 'Per mille', available: true },
        ],
      },
      {
        name: 'Liability Insurance',
        category: 'Legal Protection',
        features: [
          {
            name: 'Director & Officers Liability',
            rate: 0.0027,
            unit: 'Depending on the Gross Assets',
            available: true,
          },
          { name: 'Professional Indemnity', rate: 0.01, unit: 'percentage', available: true },
          { name: 'Product Liability', rate: 0.0033, unit: 'percentage', available: true },
          {
            name: 'Commercial General Liability',
            rate: 0.0033,
            unit: 'percentage',
            available: true,
          },
          { name: 'Cyber Liability', rate: 0.01, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Employee Benefit',
        category: 'Employee Welfare',
        features: [
          { name: 'Group Medical Coverage', rate: 1500, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Personal Accident', rate: 40, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Term Life', rate: 1.5, unit: 'Per 1000 sum assured', available: true },
          { name: 'Gratuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Leave Encashment', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Super Annuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
        ],
      },
      {
        name: 'Marine Insurance',
        category: 'Transit Coverage',
        features: [
          { name: 'Specific Marine', rate: 0.0005, unit: 'percentage', available: true },
          { name: 'Open Marine Policy', rate: 0.0002, unit: 'percentage', available: true },
          { name: 'Sales Turnover Policy', rate: 0.0002, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Safeguards your Profits',
        category: 'Business Continuity',
        features: [
          {
            name: 'Fire Loss of Profit/Business Interruption',
            rate: 0,
            unit: 'percentage',
            available: false,
          },
          { name: 'Machinery Loss of Profit', rate: 2.5, unit: 'percentage', available: true },
        ],
      },
    ],
  },
  {
    name: 'Agriculture, Forestry, Fishing and Hunting',
    code: 'NAICS 11',
    type: 'Manufacturing',
    category: 'Referred',
    insuranceTypes: [
      {
        name: 'Asset Insurance',
        category: 'Property Protection',
        features: [
          { name: 'Fire Insurance', rate: 1.85, unit: 'per mille', available: true },
          { name: 'MBD', rate: 0.025, unit: 'percentage', available: true },
          { name: 'EEI', rate: 0.025, unit: 'percentage', available: true },
          { name: 'Portable Equipment', rate: 0.035, unit: 'percentage', available: true },
          { name: 'Burglary', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Neon', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Plate Glass', rate: 0.01, unit: 'Per mille', available: true },
          { name: 'Money Insurance', rate: 0.01, unit: 'Per mille', available: true },
        ],
      },
      {
        name: 'Liability Insurance',
        category: 'Legal Protection',
        features: [
          {
            name: 'Director & Officers Liability',
            rate: 0.0027,
            unit: 'Depending on the Gross Assets',
            available: true,
          },
          { name: 'Professional Indemnity', rate: 0.01, unit: 'percentage', available: true },
          { name: 'Product Liability', rate: 0.0033, unit: 'percentage', available: true },
          {
            name: 'Commercial General Liability',
            rate: 0.0033,
            unit: 'percentage',
            available: true,
          },
          { name: 'Cyber Liability', rate: 0.01, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Employee Benefit',
        category: 'Employee Welfare',
        features: [
          { name: 'Group Medical Coverage', rate: 1500, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Personal Accident', rate: 40, unit: 'Per Lac Per Life', available: true },
          { name: 'Group Term Life', rate: 1.5, unit: 'Per 1000 sum assured', available: true },
          { name: 'Gratuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Leave Encashment', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
          { name: 'Super Annuity', rate: 'Minimum 5 Lac', unit: 'fixed', available: true },
        ],
      },
      {
        name: 'Marine Insurance',
        category: 'Transit Coverage',
        features: [
          { name: 'Specific Marine', rate: 0.0003, unit: 'percentage', available: true },
          { name: 'Open Marine Policy', rate: 0.00015, unit: 'percentage', available: true },
          { name: 'Sales Turnover Policy', rate: 0.00015, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Special Policies',
        category: 'Specialized Coverage',
        features: [
          { name: 'Industrial All Risk', rate: 1.85, unit: 'percentage', available: true },
        ],
      },
      {
        name: 'Safeguards your Profits',
        category: 'Business Continuity',
        features: [
          {
            name: 'Fire Loss of Profit/Business Interruption',
            rate: 1.85,
            unit: 'percentage',
            available: true,
          },
          { name: 'Machinery Loss of Profit', rate: 2.5, unit: 'percentage', available: true },
        ],
      },
    ],
  },
];
