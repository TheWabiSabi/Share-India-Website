'use client';

import React, { useState, useMemo } from 'react';
import { CartItem } from './interface';
import { industriesData } from './data';

export default function InsuranceCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedInsurances, setSelectedInsurances] = useState<Set<string>>(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState<Map<string, Set<string>>>(new Map());
  const [sumAssuredValues, setSumAssuredValues] = useState<Map<string, number>>(new Map());
  const [cart, setCart] = useState<CartItem[]>([]);

  const currentIndustry = useMemo(() => {
    return industriesData.find((ind) => ind.name === selectedIndustry);
  }, [selectedIndustry]);

  const handleIndustryChange = (industryName: string) => {
    setSelectedIndustry(industryName);
    setSelectedInsurances(new Set());
    setSelectedFeatures(new Map());
    setCart([]);
    setSumAssuredValues(new Map());
  };

  const handleInsuranceToggle = (insuranceName: string) => {
    const newSelected = new Set(selectedInsurances);
    if (newSelected.has(insuranceName)) {
      newSelected.delete(insuranceName);
      // Remove features for this insurance
      const newFeatures = new Map(selectedFeatures);
      newFeatures.delete(insuranceName);
      setSelectedFeatures(newFeatures);
      // Remove from cart
      setCart(cart.filter((item) => item.insuranceType !== insuranceName));
    } else {
      newSelected.add(insuranceName);
    }
    setSelectedInsurances(newSelected);
  };

  const handleFeatureToggle = (
    insuranceName: string,
    featureName: string,
    rate: number | string,
    unit: string,
  ) => {
    const newFeatures = new Map(selectedFeatures);
    const insuranceFeatures = newFeatures.get(insuranceName) || new Set();

    if (insuranceFeatures.has(featureName)) {
      insuranceFeatures.delete(featureName);
      // Remove from cart
      setCart(
        cart.filter(
          (item) => !(item.insuranceType === insuranceName && item.feature === featureName),
        ),
      );
    } else {
      insuranceFeatures.add(featureName);
      // Add to cart
      const newCartItem: CartItem = {
        industryName: selectedIndustry,
        insuranceType: insuranceName,
        feature: featureName,
        rate: rate,
        unit: unit,
        calculatedCost: 0,
      };
      setCart([...cart, newCartItem]);
    }

    newFeatures.set(insuranceName, insuranceFeatures);
    setSelectedFeatures(newFeatures);
  };

  const handleSumAssuredChange = (key: string, value: number) => {
    const newValues = new Map(sumAssuredValues);
    newValues.set(key, value);
    setSumAssuredValues(newValues);

    // Update cart calculations
    updateCartCalculations(newValues);
  };

  const updateCartCalculations = (values: Map<string, number>) => {
    const updatedCart = cart.map((item) => {
      const key = `${item.insuranceType}-${item.feature}`;
      const sumAssured = values.get(key) || 0;
      let calculatedCost = 0;

      if (typeof item.rate === 'number' && sumAssured > 0) {
        if (item.unit.includes('mille')) {
          calculatedCost = (sumAssured * item.rate) / 1000;
        } else if (item.unit === 'percentage') {
          calculatedCost = (sumAssured * item.rate) / 100;
        } else if (item.unit.includes('Per Lac')) {
          calculatedCost = (sumAssured / 100000) * item.rate;
        } else if (item.unit.includes('1000 sum assured')) {
          calculatedCost = (sumAssured / 1000) * item.rate;
        } else {
          calculatedCost = item.rate;
        }
      }

      return { ...item, sumAssured, calculatedCost };
    });

    setCart(updatedCart);
  };

  const totalCost = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.calculatedCost || 0), 0);
  }, [cart]);

  const removeFromCart = (index: number) => {
    const item = cart[index];
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);

    // Update selectedFeatures
    const newFeatures = new Map(selectedFeatures);
    const insuranceFeatures = newFeatures.get(item.insuranceType);
    if (insuranceFeatures) {
      insuranceFeatures.delete(item.feature);
      if (insuranceFeatures.size === 0) {
        newFeatures.delete(item.insuranceType);
      } else {
        newFeatures.set(item.insuranceType, insuranceFeatures);
      }
    }
    setSelectedFeatures(newFeatures);
  };

  return (
    <div className="mt-16 min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Insurance Premium Calculator</h1>
          <p className="text-lg text-gray-600">
            Select your industry and customize your insurance coverage
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Panel - Industry & Insurance Selection */}
          <div className="space-y-6 lg:col-span-2">
            {/* Industry Selection */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Select Your Industry</h2>
              <select
                value={selectedIndustry}
                onChange={(e) => handleIndustryChange(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Choose an industry...</option>
                {industriesData.map((industry) => (
                  <option key={industry.name} value={industry.name}>
                    {industry.name} ({industry.code})
                  </option>
                ))}
              </select>

              {currentIndustry && (
                <div className="mt-4 flex gap-4 text-sm">
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
                    {currentIndustry.type}
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-800">
                    {currentIndustry.category}
                  </span>
                </div>
              )}
            </div>

            {/* Insurance Types Selection */}
            {currentIndustry && (
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  Select Insurance Types
                </h2>
                <div className="space-y-4">
                  {currentIndustry.insuranceTypes.map((insurance) => (
                    <div key={insurance.name} className="rounded-lg border border-gray-200 p-4">
                      <label className="flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={selectedInsurances.has(insurance.name)}
                          onChange={() => handleInsuranceToggle(insurance.name)}
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div className="ml-3">
                          <span className="text-lg font-medium text-gray-900">
                            {insurance.name}
                          </span>
                          <p className="text-sm text-gray-500">{insurance.category}</p>
                        </div>
                      </label>

                      {/* Features for selected insurance */}
                      {selectedInsurances.has(insurance.name) && (
                        <div className="mt-4 ml-8 space-y-3 border-l-2 border-indigo-200 pl-4">
                          {insurance.features.map(
                            (feature) =>
                              feature.available && (
                                <div key={feature.name} className="space-y-2">
                                  <label className="flex cursor-pointer items-start">
                                    <input
                                      type="checkbox"
                                      checked={
                                        selectedFeatures.get(insurance.name)?.has(feature.name) ||
                                        false
                                      }
                                      onChange={() =>
                                        handleFeatureToggle(
                                          insurance.name,
                                          feature.name,
                                          feature.rate,
                                          feature.unit,
                                        )
                                      }
                                      className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <div className="ml-3 flex-1">
                                      <span className="text-base font-medium text-gray-800">
                                        {feature.name}
                                      </span>
                                      <div className="text-sm text-gray-600">
                                        Rate:{' '}
                                        {typeof feature.rate === 'number'
                                          ? feature.rate
                                          : feature.rate}{' '}
                                        {feature.unit}
                                      </div>
                                    </div>
                                  </label>

                                  {/* Sum Assured Input */}
                                  {selectedFeatures.get(insurance.name)?.has(feature.name) &&
                                    typeof feature.rate === 'number' && (
                                      <div className="ml-7">
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                          Sum Assured (₹)
                                        </label>
                                        <input
                                          type="number"
                                          placeholder="Enter amount"
                                          value={
                                            sumAssuredValues.get(
                                              `${insurance.name}-${feature.name}`,
                                            ) || ''
                                          }
                                          onChange={(e) =>
                                            handleSumAssuredChange(
                                              `${insurance.name}-${feature.name}`,
                                              parseFloat(e.target.value) || 0,
                                            )
                                          }
                                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-indigo-500"
                                        />
                                      </div>
                                    )}
                                </div>
                              ),
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Your Coverage</h2>

              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="mt-4 text-gray-500">No coverage selected yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 p-4 transition hover:shadow-md"
                    >
                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-900">{item.feature}</h3>
                          <p className="text-xs text-gray-500">{item.insuranceType}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {item.sumAssured && (
                        <div className="mb-1 text-xs text-gray-600">
                          Sum Assured: ₹{item.sumAssured.toLocaleString()}
                        </div>
                      )}

                      <div className="text-sm font-bold text-indigo-600">
                        Premium: ₹
                        {item.calculatedCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 border-t-2 border-gray-300 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">Total Premium</span>
                      <span className="text-2xl font-bold text-indigo-600">
                        ₹{totalCost.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
