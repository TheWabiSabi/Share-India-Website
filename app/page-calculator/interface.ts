// interfaces.ts

export interface InsuranceFeature {
  name: string;
  rate: number | string;
  unit: string;
  available: boolean;
}

export interface InsuranceType {
  name: string;
  category: string;
  features: InsuranceFeature[];
}

export interface Industry {
  name: string;
  code: string;
  type: string;
  category: string;
  insuranceTypes: InsuranceType[];
}

export interface CartItem {
  industryName: string;
  insuranceType: string;
  feature: string;
  rate: number | string;
  unit: string;
  sumAssured?: number;
  calculatedCost: number;
}

export interface CalculatorState {
  selectedIndustry: string | null;
  selectedInsurances: string[];
  selectedFeatures: Map<string, string[]>;
  cart: CartItem[];
  sumAssuredValues: Map<string, number>;
}
