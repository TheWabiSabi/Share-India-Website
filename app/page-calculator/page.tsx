'use client';

import { useState, useMemo } from 'react';

// https://docs.google.com/spreadsheets/d/1CFHW2KT02Uzz6Hg1qG-lbe9SRXyU0OsS/edit?usp=sharing&ouid=113708194289880486728&rtpof=true&sd=true

// Insurance data structure
const insuranceData = [
  {
    industryType: 'Accommodation',
    industryCode: 'NAICS 721',
    type: 'Service',
    category: 'Preferred',
    rates: {
      fireInsurance: 0.585,
      mbd: 2.5,
      eei: 2.5,
      portableEquipment: 3.5,
      burglary: 0.01,
      neon: 0.01,
      plateGlass: 0.01,
      moneyInsurance: 0.01,
      hullInsurance: null,
      cropInsurance: null,
      cattleInsurance: null,
      jewellerBlock: null,
      fineArt: null,
      directorsOfficers: 0.27,
      professionalIndemnity: 1,
      productLiability: 0.33,
      commercialGeneral: 0.33,
      stockBroker: null,
      cyberLiability: 1,
      workmenCompensation: null,
      fidelityInsurance: 1,
      groupMedical: 1500,
      groupPersonalAccident: 40,
      groupTermLife: 1.5,
      gratuity: 'Minimum 5 Lac',
      leaveEncashment: 'Minimum 5 Lac',
      supperAnnuity: 'Minimum 5 Lac',
      specificMarine: 0.05,
      openMarine: 0.02,
      salesTurnover: 0.02,
      stockThroughout: null,
      industrialAllRisk: null,
      contractorsAllRisk: null,
      contractorsPlant: null,
      erectionAllRisk: null,
      aviationAllRisk: null,
      titleInsurance: null,
      eventInsurance: null,
      extendedWarranty: null,
      clinicalTrials: null,
      suretyBond: null,
      bodyPart: null,
      fireLossOfProfit: 0.585,
      machineryLossOfProfit: 2.5,
      tradeCredit: null,
      creditLife: null,
    },
    units: {
      fireInsurance: 'per mille',
      mbd: '%',
      eei: '%',
      portableEquipment: '%',
      burglary: 'per mille',
      neon: 'per mille',
      plateGlass: 'per mille',
      moneyInsurance: 'per mille',
      directorsOfficers: '%',
      professionalIndemnity: '%',
      productLiability: '%',
      commercialGeneral: '%',
      cyberLiability: '%',
      fidelityInsurance: '%',
      groupMedical: 'Per Lac',
      groupPersonalAccident: 'Per Life',
      groupTermLife: 'Per Lac',
      specificMarine: '%',
      openMarine: '%',
      salesTurnover: '%',
      fireLossOfProfit: 'per mille',
      machineryLossOfProfit: 'rate per life per 1000 of sum assured',
      tradeCredit: '%',
    },
  },
  {
    industryType: 'Accommodation and Food Services',
    industryCode: 'NAICS 72',
    type: 'Service',
    category: 'Preferred',
    rates: {
      fireInsurance: 0.585,
      mbd: 2.5,
      eei: 2.5,
      portableEquipment: 3.5,
      burglary: 0.01,
      neon: 0.01,
      plateGlass: 0.01,
      moneyInsurance: 0.01,
      hullInsurance: null,
      cropInsurance: null,
      cattleInsurance: null,
      jewellerBlock: null,
      fineArt: null,
      directorsOfficers: 0.27,
      professionalIndemnity: 1,
      productLiability: 0.33,
      commercialGeneral: 0.33,
      stockBroker: null,
      cyberLiability: 1,
      workmenCompensation: null,
      fidelityInsurance: 1,
      groupMedical: 1500,
      groupPersonalAccident: 40,
      groupTermLife: 1.5,
      gratuity: 'Minimum 5 Lac',
      leaveEncashment: 'Minimum 5 Lac',
      supperAnnuity: 'Minimum 5 Lac',
      specificMarine: 0.05,
      openMarine: 0.02,
      salesTurnover: 0.02,
      stockThroughout: null,
      industrialAllRisk: null,
      contractorsAllRisk: null,
      contractorsPlant: null,
      erectionAllRisk: null,
      aviationAllRisk: null,
      titleInsurance: null,
      eventInsurance: null,
      extendedWarranty: null,
      clinicalTrials: null,
      suretyBond: null,
      bodyPart: null,
      fireLossOfProfit: 0.585,
      machineryLossOfProfit: 2.5,
      tradeCredit: null,
      creditLife: null,
    },
    units: {
      fireInsurance: 'per mille',
      mbd: '%',
      eei: '%',
      portableEquipment: '%',
      burglary: 'per mille',
      neon: 'per mille',
      plateGlass: 'per mille',
      moneyInsurance: 'per mille',
      directorsOfficers: '%',
      professionalIndemnity: '%',
      productLiability: '%',
      commercialGeneral: '%',
      cyberLiability: '%',
      fidelityInsurance: '%',
      groupMedical: 'Per Lac',
      groupPersonalAccident: 'Per Life',
      groupTermLife: 'Per Lac',
      specificMarine: '%',
      openMarine: '%',
      salesTurnover: '%',
      fireLossOfProfit: 'per mille',
      machineryLossOfProfit: 'rate per life per 1000 of sum assured',
      tradeCredit: '%',
    },
  },
  {
    industryType: 'Administrative and Support Services',
    industryCode: 'NAICS 561',
    type: 'Service',
    category: 'Preferred',
    rates: {
      fireInsurance: null,
      mbd: 2.5,
      eei: 2.5,
      portableEquipment: 3.5,
      burglary: 0.01,
      neon: 0.01,
      plateGlass: 0.01,
      moneyInsurance: 0.01,
      hullInsurance: null,
      cropInsurance: null,
      cattleInsurance: null,
      jewellerBlock: null,
      fineArt: null,
      directorsOfficers: 0.27,
      professionalIndemnity: 1,
      productLiability: 0.33,
      commercialGeneral: 0.33,
      stockBroker: null,
      cyberLiability: 1,
      workmenCompensation: null,
      fidelityInsurance: 1,
      groupMedical: 1500,
      groupPersonalAccident: 40,
      groupTermLife: 1.5,
      gratuity: 'Minimum 5 Lac',
      leaveEncashment: 'Minimum 5 Lac',
      supperAnnuity: 'Minimum 5 Lac',
      specificMarine: 0.05,
      openMarine: 0.02,
      salesTurnover: 0.02,
      stockThroughout: null,
      industrialAllRisk: null,
      contractorsAllRisk: null,
      contractorsPlant: null,
      erectionAllRisk: null,
      aviationAllRisk: null,
      titleInsurance: null,
      eventInsurance: null,
      extendedWarranty: null,
      clinicalTrials: null,
      suretyBond: null,
      bodyPart: null,
      fireLossOfProfit: null,
      machineryLossOfProfit: 2.5,
      tradeCredit: null,
      creditLife: null,
    },
    units: {
      mbd: '%',
      eei: '%',
      portableEquipment: '%',
      burglary: 'per mille',
      neon: 'per mille',
      plateGlass: 'per mille',
      moneyInsurance: 'per mille',
      directorsOfficers: '%',
      professionalIndemnity: '%',
      productLiability: '%',
      commercialGeneral: '%',
      cyberLiability: '%',
      fidelityInsurance: '%',
      groupMedical: 'Per Lac',
      groupPersonalAccident: 'Per Life',
      groupTermLife: 'Per Lac',
      specificMarine: '%',
      openMarine: '%',
      salesTurnover: '%',
      machineryLossOfProfit: 'rate per life per 1000 of sum assured',
      tradeCredit: '%',
    },
  },
  // Add more industries following the same pattern...
];

// Insurance categories and their coverages
const insuranceCategories = {
  'Asset Insurance': [
    { key: 'fireInsurance', label: 'Fire Insurance' },
    { key: 'mbd', label: 'MBD' },
    { key: 'eei', label: 'EEI' },
    { key: 'portableEquipment', label: 'Portable Equipment' },
    { key: 'burglary', label: 'Burglary' },
    { key: 'neon', label: 'Neon' },
    { key: 'plateGlass', label: 'Plate Glass' },
    { key: 'moneyInsurance', label: 'Money Insurance' },
    { key: 'hullInsurance', label: 'Hull Insurance' },
    { key: 'cropInsurance', label: 'Crop Insurance' },
    { key: 'cattleInsurance', label: 'Cattle Insurance' },
    { key: 'jewellerBlock', label: 'Jeweller Block Insurance' },
    { key: 'fineArt', label: 'Fine Art Insurance' },
  ],
  'Liability Insurance': [
    { key: 'directorsOfficers', label: 'Director & Officers Liability' },
    { key: 'professionalIndemnity', label: 'Professional Indemnity' },
    { key: 'productLiability', label: 'Product Liability' },
    { key: 'commercialGeneral', label: 'Commercial General Liability' },
    { key: 'stockBroker', label: 'Stock Broker Indemnity' },
    { key: 'cyberLiability', label: 'Cyber Liability' },
    { key: 'workmenCompensation', label: 'Workmen Compensation' },
    { key: 'fidelityInsurance', label: 'Fidelity Insurance' },
  ],
  'Employee Benefit': [
    { key: 'groupMedical', label: 'Group Medical Coverage' },
    { key: 'groupPersonalAccident', label: 'Group Personal Accident' },
    { key: 'groupTermLife', label: 'Group Term Life' },
    { key: 'gratuity', label: 'Gratuity' },
    { key: 'leaveEncashment', label: 'Leave Encashment' },
    { key: 'supperAnnuity', label: 'Supper Annuity' },
  ],
  'Marine Insurance': [
    { key: 'specificMarine', label: 'Specific Marine' },
    { key: 'openMarine', label: 'Open Marine Policy' },
  ],
  'Special Policies': [
    { key: 'salesTurnover', label: 'Sales Turnover Policy' },
    { key: 'stockThroughout', label: 'Stock Throughout Policy' },
    { key: 'industrialAllRisk', label: 'Industrial All Risk' },
    { key: 'contractorsAllRisk', label: 'Contractors All Risk' },
    { key: 'contractorsPlant', label: 'Contractors Plant and Machinery' },
    { key: 'erectionAllRisk', label: 'Erection All Risk' },
    { key: 'aviationAllRisk', label: 'Aviation All Risk Policy' },
    { key: 'titleInsurance', label: 'Title Insurance' },
    { key: 'eventInsurance', label: 'Event Insurance' },
    { key: 'extendedWarranty', label: 'Extended Warranty Insurance' },
    { key: 'clinicalTrials', label: 'Clinical Trials' },
    { key: 'suretyBond', label: 'Surety Bond Insurance' },
    { key: 'bodyPart', label: 'Body Part Insurance' },
  ],
  'Safeguards your Profits': [
    { key: 'fireLossOfProfit', label: 'Fire Loss of Profit/Business Interruption' },
    { key: 'machineryLossOfProfit', label: 'Machinery Loss of Profit' },
    { key: 'tradeCredit', label: 'Trade Credit' },
    { key: 'creditLife', label: 'Credit Life' },
  ],
};

export default function InsuranceCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [coverageAmount, setCoverageAmount] = useState(10000000); // Default 1 Crore
  const [selectedCoverages, setSelectedCoverages] = useState<Record<string, boolean>>({});

  // Get current industry data
  const currentIndustryData = useMemo(() => {
    return insuranceData.find((ind) => ind.industryType === selectedIndustry);
  }, [selectedIndustry]);

  // Calculate premium
  const calculatePremium = useMemo(() => {
    if (!currentIndustryData) return 0;

    let totalPremium = 0;
    const coverageInLacs = coverageAmount / 100000; // Convert to Lacs
    // const coverageInCrores = coverageAmount / 10000000; // Convert to Crores

    Object.entries(selectedCoverages).forEach(([key, isSelected]) => {
      if (isSelected && currentIndustryData.rates[key as keyof typeof currentIndustryData.rates]) {
        const rate = currentIndustryData.rates[key as keyof typeof currentIndustryData.rates];

        if (typeof rate === 'number') {
          const unit = currentIndustryData.units?.[key as keyof typeof currentIndustryData.units];

          if (unit === 'per mille') {
            // Per mille = per thousand
            totalPremium += (coverageAmount / 1000) * rate;
          } else if (unit === '%') {
            // Percentage
            totalPremium += coverageAmount * (rate / 100);
          } else if (unit === 'Per Lac') {
            // Per Lac
            totalPremium += coverageInLacs * rate;
          } else if (unit === 'Per Life') {
            // Assuming 10 employees as default
            totalPremium += 10 * rate;
          } else {
            // Default to percentage
            totalPremium += coverageAmount * (rate / 100);
          }
        }
      }
    });

    return totalPremium;
  }, [selectedCoverages, coverageAmount, currentIndustryData]);

  const handleCoverageToggle = (coverageKey: string) => {
    setSelectedCoverages((prev) => ({
      ...prev,
      [coverageKey]: !prev[coverageKey],
    }));
  };

  const resetForm = () => {
    setSelectedIndustry('');
    setSelectedCoverages({});
    setCoverageAmount(10000000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Insurance Premium Calculator</h1>
            <p className="mt-2 text-blue-100">Select your industry and desired coverage options</p>
          </div>

          <div className="p-8">
            {/* Industry Selection */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Select Your Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  setSelectedCoverages({});
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose Industry --</option>
                {insuranceData.map((industry) => (
                  <option key={industry.industryCode} value={industry.industryType}>
                    {industry.industryType} ({industry.industryCode})
                  </option>
                ))}
              </select>
            </div>

            {/* Coverage Amount */}
            {selectedIndustry && (
              <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Desired Coverage Amount (₹)
                </label>
                <input
                  type="number"
                  value={coverageAmount}
                  onChange={(e) => setCoverageAmount(Number(e.target.value))}
                  min="100000"
                  step="100000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-sm text-gray-500">
                  ₹ {(coverageAmount / 10000000).toFixed(2)} Crore
                </p>
              </div>
            )}

            {/* Insurance Categories */}
            {selectedIndustry && currentIndustryData && (
              <div className="space-y-6">
                {Object.entries(insuranceCategories).map(([category, coverages]) => (
                  <div
                    key={category}
                    className="rounded-lg border border-gray-200 p-6 transition hover:border-blue-300"
                  >
                    <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-800">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {coverages.map((coverage) => {
                        const isAvailable =
                          currentIndustryData.rates[
                            coverage.key as keyof typeof currentIndustryData.rates
                          ] !== null;
                        const rate =
                          currentIndustryData.rates[
                            coverage.key as keyof typeof currentIndustryData.rates
                          ];
                        const unit =
                          currentIndustryData.units?.[
                            coverage.key as keyof typeof currentIndustryData.units
                          ];

                        return (
                          <div
                            key={coverage.key}
                            className={`flex items-start space-x-3 rounded-lg p-3 ${
                              isAvailable ? 'bg-gray-50 hover:bg-blue-50' : 'bg-gray-100 opacity-50'
                            } transition`}
                          >
                            <input
                              type="checkbox"
                              id={coverage.key}
                              checked={selectedCoverages[coverage.key] || false}
                              onChange={() => handleCoverageToggle(coverage.key)}
                              disabled={!isAvailable}
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <label
                              htmlFor={coverage.key}
                              className={`flex-1 text-sm ${
                                isAvailable
                                  ? 'cursor-pointer text-gray-700'
                                  : 'cursor-not-allowed text-gray-400'
                              }`}
                            >
                              <div className="font-medium">{coverage.label}</div>
                              {isAvailable && rate && (
                                <div className="mt-1 text-xs text-gray-500">
                                  Rate: {typeof rate === 'number' ? rate : rate} {unit || ''}
                                </div>
                              )}
                              {!isAvailable && (
                                <div className="mt-1 text-xs text-red-400">Not Available</div>
                              )}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Premium Display */}
            {selectedIndustry &&
              Object.keys(selectedCoverages).some((key) => selectedCoverages[key]) && (
                <div className="mt-8 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-800">
                        Estimated Annual Premium
                      </h3>
                      <p className="text-sm text-gray-600">
                        Based on {Object.values(selectedCoverages).filter(Boolean).length} selected
                        coverage(s)
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">
                        ₹ {calculatePremium.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">per year</div>
                    </div>
                  </div>
                </div>
              )}

            {/* Action Buttons */}
            {selectedIndustry && (
              <div className="mt-8 flex gap-4">
                <button
                  onClick={resetForm}
                  className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-300"
                >
                  Reset Calculator
                </button>
                <button className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                  Get Detailed Quote
                </button>
              </div>
            )}

            {/* Empty State */}
            {!selectedIndustry && (
              <div className="py-12 text-center">
                <div className="mb-4 text-gray-400">
                  <svg
                    className="mx-auto h-24 w-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-500">
                  Select an industry to begin calculating your insurance premium
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            This calculator provides estimated premiums. Final rates may vary based on detailed risk
            assessment.
          </p>
        </div>
      </div>
    </div>
  );
}
