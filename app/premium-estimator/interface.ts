// interfaces.ts - Type definitions for the insurance calculator

export interface Industry {
  industryType: string;
  industryCode: string;
  type: string;
  category: string;
  insuranceRates: InsuranceRates;
}

export interface InsuranceRates {
  assetInsurance: AssetInsurance;
  marineInsurance: MarineInsurance;
  liabilityInsurance: LiabilityInsurance;
  employeeBenefits: EmployeeBenefits;
  specialPolicies: SpecialPolicies;
  profitProtection: ProfitProtection;
}

export interface AssetInsurance {
  fireInsurance?: string | number;
  mbd?: string;
  eei?: string;
  portableEquipment?: string;
  burglary?: string | number;
  neon?: string | number;
  plateGlass?: string | number;
  moneyInsurance?: string | number;
}

export interface MarineInsurance {
  hullInsurance?: string;
  cropInsurance?: string;
  cattleInsurance?: string;
  jewellerBlockInsurance?: string;
  fineArtInsurance?: string;
  specificMarine?: string;
  openMarinePolicy?: string;
}

export interface LiabilityInsurance {
  directorOfficersLiability?: string;
  professionalIndemnity?: string;
  productLiability?: string;
  commercialGeneralLiability?: string;
  stockBrokerIndemnity?: string;
  cyberLiability?: string;
  workmensCompensation?: string;
  fidelityInsurance?: string;
}

export interface EmployeeBenefits {
  groupMedicalCoverage?: string | number;
  groupPersonalAccident?: string | number;
  groupTermLife?: string | number;
  gratuity?: string;
  leaveEncashment?: string;
  superAnnuity?: string;
}

export interface SpecialPolicies {
  salesTurnoverPolicy?: string;
  stockThroughoutPolicy?: string;
  industrialAllRisk?: string | number;
  contractorsAllRisk?: string;
  contractorsPlantMachinery?: string;
  erectionAllRisk?: string;
  aviationAllRiskPolicy?: string;
  titleInsurance?: string;
  eventInsurance?: string;
  extendedWarrantyInsurance?: string;
  clinicalTrials?: string;
  suretyBondInsurance?: string;
  bodyPartInsurance?: string;
}

export interface ProfitProtection {
  fireLossOfProfitBusinessInterruption?: string | number;
  machineryLossOfProfit?: string | number;
  tradeCredit?: string;
  creditLife?: string;
}

export interface SelectedInsurance {
  category: string;
  feature: string;
  rate: string | number;
  displayName: string;
}

export interface CartItem extends SelectedInsurance {
  id: string;
}

export type InsuranceCategory =
  | 'assetInsurance'
  | 'marineInsurance'
  | 'liabilityInsurance'
  | 'employeeBenefits'
  | 'specialPolicies'
  | 'profitProtection';

export interface InsuranceCategoryInfo {
  key: InsuranceCategory;
  displayName: string;
  description: string;
}
