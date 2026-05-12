export const industries = ['corporate', 'retail'] as const;

export type AllIndustries = (typeof industries)[number];
