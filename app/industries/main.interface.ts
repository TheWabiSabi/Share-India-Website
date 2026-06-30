import { ReactElement } from 'react';

interface ProjectType {
  icon: ReactElement;
  title: string;
  description: string;
}

interface Coverage {
  title: string;
  icon: ReactElement;
  body: string;
  bullets: string[];
}

interface HeroSection {
  title: string;
  description: string;
}

interface ProjectTypesSection {
  types: ProjectType[];
}

interface OverviewSection {
  description: string;
  bullets: string[];
}

interface ExplanationSection {
  title: string;
  description: string;
  overview: OverviewSection;
  projectTypes: ProjectTypesSection;
}

interface CoverageSection {
  desciption: string; // Note: This appears to be a typo for "description" in your original object
  coverages: Coverage[];
}

interface ClaimStorySection {
  description: string;
  topic: string;
}

interface RelevantSection {
  /** Ghost primary tag = which website page these posts belong to. */
  primary: string;
  /** Secondary tags for the "Industry Insights & Articles" section (OR-ed). */
  insights: string[];
  /** Secondary tags for the "Claim Stories" section (OR-ed). */
  claimStories: string[];
}

interface KnowledgeSection {
  industryName: string;
}

export interface InfrastructureInsuranceDetails {
  img: string;
  hero: HeroSection;
  explaination: ExplanationSection; // Note: This appears to be a typo for "explanation" in your original object
  coverage: CoverageSection;
  claim_story: ClaimStorySection;
  relevant: RelevantSection;
  knowledge: KnowledgeSection;
}
