import React from 'react';

export const TEAM_LEADERS = [
  {
    name: 'Mr. Prakash Rao Dumble',
    role: 'Head – General Insurance',
    experience: '30 years',
    description: 'Possesses 30 years of expertise in the general insurance domain.',
  },
  {
    name: 'Mr. Ram Chandra',
    role: 'Head – Life Insurance',
    experience: '25 years',
    description: 'A seasoned professional with 25 years of experience in life insurance.',
  },
  {
    name: 'Mr. Ravi Shahani',
    role: 'Head of Business Excellence',
    experience: 'Expert',
    description:
      'Drives initiatives that enhance business processes, service quality, and organizational efficiency.',
  },
];

export const OPERATIONAL_TEAM = [
  {
    name: 'Mr. Shekhar Pradhan',
    role: 'Claim Manager',
    description:
      'Leads the claims team with a focus on transparency, timely resolution, and a customer-first approach.',
  },
  {
    name: 'Mr. Manish Chavan',
    role: 'Product Manager',
    description:
      'Leads the Life and Motor Underwriting teams, focusing on product quality and risk assessment.',
  },
  {
    name: 'Ms. Vidhi Shah',
    role: 'Head Underwriter',
    description:
      'Manages underwriting across all lines of business, ensuring accuracy and risk integrity.',
  },
  {
    name: 'Mr. Rajendra Muppidwar',
    role: 'Area Manager',
    description:
      'Brings strong expertise in Life Insurance and leads the sales team with focus on quality service.',
  },
];

export const REGIONAL_TEAM = [
  {
    name: 'Mr. Raunaq Pai',
    role: 'Zonal Head – West',
    region: 'West Zone',
    description:
      'Oversees sales for the West Zone and drives growth through strategic planning, market insights, and expertise in both General and Life Insurance.',
  },
  {
    name: 'Mr. Akash Agam',
    role: 'Area Head – North',
    region: 'North Zone',
    description:
      'Strengthens the sales team in the North region with deep knowledge of General and Life Insurance, ensuring efficient operations and dependable client support.',
  },
];

export const TEAM_VALUES = [
  {
    title: 'Expertise',
    desc: 'Decades of combined experience',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Trust',
    desc: 'Building lasting relationships',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Forward-thinking solutions',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'Commitment to quality',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

export const AWARDS = [
  {
    year: '2022',
    award: 'SME Superstars — Awarded to SIIB by Chola MS',
    img: '/awards/chola-ms.jpeg',
  },
  {
    year: '2024',
    award: 'Diamond Club — Awarded to SIIB by Digit Inner Circle',
    img: '/awards/digit.jpeg',
  },
  {
    year: '2025',
    award: 'CEO of the Year to Mr. Ajay Kumar Patel — Awarded by UBS Forums',
    img: '/awards/ubs-ceo.jpeg',
  },
  {
    year: '2025',
    award: 'Best Claims Partner of the Year — Awarded to SIIB by UBS Forums',
    img: '/awards/ubs-claims.jpeg',
  },
];

export const TESTIMONIALS = [
  {
    name: 'API Holdings',
    text: "Share India Insurance Brokers' proactive approach, professionalism, and flawless execution have made managing our insurance portfolio seamless and efficient — a partnership we truly value.",
    avatar: '/testimonials/api-holding.png',
  },
  {
    name: 'Sunjewels Pvt. Ltd.',
    text: 'For three years, Team Share India — especially Mr. Raunaq Pai, Mr. Shekhar Pradhan, and Mr. Sagar Agre — have impressed us with their professionalism, reliability, and proactive service.',
    avatar: '/testimonials/sun-jewels.png',
  },
  {
    name: 'Global Ocean Logistics India Ltd',
    text: "For over four years, Share India's expertise, responsiveness, and attention to detail have ensured smooth, reliable insurance support and a partnership built on trust and excellence.",
    avatar: '/testimonials/global-ocean.png',
  },
  {
    name: 'Santu Mondal',
    text: "My experience with Raunaq Pai and Share India Insurance has been exceptional — Raunaq's professionalism, expertise, and prompt support made the entire insurance process seamless and trustworthy.",
    avatar: '/testimonials/santu-mondal.png',
  },
];
