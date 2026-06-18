// page.tsx - Insurance Calculator Main Component

'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Industry, CartItem, InsuranceCategory } from './interface';
import {
  INDUSTRIES_DATA,
  INSURANCE_CATEGORIES,
  getIndustryByName,
  getAvailableInsuranceFeatures,
} from './data';
import CheckoutModal from './_components/CheckOutModal';

const DEFAULT_INSURED_AMOUNT = 1000000; // 10 lakhs

// Helper function to determine rate unit and format display
const getRateUnit = (rate: string | number): string => {
  const rateStr = String(rate);

  // Percentage rates
  if (rateStr.includes('%')) {
    return '% of Sum Insured';
  }

  // Per mille rates (per 1000)
  const numericRate = parseFloat(rateStr.replace(/[^\d.]/g, ''));
  if (!isNaN(numericRate) && numericRate < 10 && !rateStr.includes('%')) {
    return '‰ (per ₹1,000)';
  }

  // Flat amount (like employee benefits)
  if (!isNaN(numericRate) && numericRate >= 10) {
    return 'per member/year';
  }

  // Minimum coverage
  if (rateStr.toLowerCase().includes('minimum') || rateStr.toLowerCase().includes('lac')) {
    return 'Minimum Coverage';
  }

  return 'of Sum Insured';
};

// Helper function to format rate display with unit
const formatRateDisplay = (rate: string | number): string => {
  const rateStr = String(rate);
  const unit = getRateUnit(rate);

  // If it's already a percentage, return as is
  if (rateStr.includes('%')) {
    return `${rateStr} ${unit}`;
  }

  // If it's a minimum coverage text
  if (rateStr.toLowerCase().includes('minimum') || rateStr.toLowerCase().includes('lac')) {
    return rateStr;
  }

  // For numeric rates
  const numericRate = parseFloat(rateStr.replace(/[^\d.]/g, ''));
  if (!isNaN(numericRate)) {
    if (numericRate < 10) {
      return `${numericRate} ${unit}`;
    }
    return `₹${numericRate.toLocaleString('en-IN')} ${unit}`;
  }

  return rateStr;
};

const normalizeIndustryName = (value: string): string => {
  return value
    .replace(/\s*\((?:NAICS|NACE)[^)]+\)\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
};

const getIndustryByParam = (industryParam: string | null): Industry | undefined => {
  if (!industryParam) return undefined;

  const normalizedParam = normalizeIndustryName(industryParam);

  return INDUSTRIES_DATA.find((industry) => {
    const industryWithCode = `${industry.industryType} (${industry.industryCode})`;

    return (
      normalizeIndustryName(industry.industryType) === normalizedParam ||
      normalizeIndustryName(industryWithCode) === normalizedParam
    );
  });
};

const InsuranceCalculatorContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialIndustry = getIndustryByParam(searchParams.get('industry'));
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(initialIndustry || null);
  const [selectedCategories, setSelectedCategories] = useState<Set<InsuranceCategory>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<InsuranceCategory | null>(null);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ name: '', email: '', phone: '', company: '' });

  // Reset selections when industry changes during render
  const [prevIndustry, setPrevIndustry] = useState<Industry | null>(null);
  if (selectedIndustry !== prevIndustry) {
    setPrevIndustry(selectedIndustry);
    setSelectedCategories(new Set());
    setCartItems([]);
    setExpandedCategory(null);
  }

  const handleIndustryChange = (industryName: string) => {
    const industry = getIndustryByName(industryName);
    setSelectedIndustry(industry || null);
  };

  const handleCategoryToggle = (categoryKey: InsuranceCategory) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(categoryKey)) {
      newCategories.delete(categoryKey);
      // Remove all features from this category from cart
      setCartItems((prev) => prev.filter((item) => item.category !== categoryKey));
      if (expandedCategory === categoryKey) {
        setExpandedCategory(null);
      }
    } else {
      newCategories.add(categoryKey);
      setExpandedCategory(categoryKey);
    }
    setSelectedCategories(newCategories);
  };

  const handleFeatureToggle = (
    categoryKey: InsuranceCategory,
    featureKey: string,
    featureValue: string | number,
    featureDisplayName: string,
  ) => {
    const itemId = `${categoryKey}-${featureKey}`;
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (existingItemIndex >= 0) {
      // Remove item from cart
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    } else {
      // Add item to cart with default insured amount
      const newItem: CartItem = {
        id: itemId,
        category: categoryKey,
        feature: featureKey,
        rate: featureValue,
        displayName: featureDisplayName,
        insuredAmount: DEFAULT_INSURED_AMOUNT,
      };
      setCartItems((prev) => [...prev, newItem]);
      // Auto-open edit mode for new item
      setEditingItemId(itemId);
    }
  };

  const updateInsuredAmount = (itemId: string, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, insuredAmount: amount } : item)),
    );
  };

  const calculatePremium = (rate: string | number, insuredAmount: number): number => {
    const rateStr = String(rate);

    // Handle minimum coverage text (not calculable)
    if (rateStr.toLowerCase().includes('minimum') || rateStr.toLowerCase().includes('lac')) {
      return 0; // These require custom quotes
    }

    // Handle percentage rates (e.g., "2.5%", "0.5%", "1%")
    if (rateStr.includes('%')) {
      const percentageValue = parseFloat(rateStr.replace('%', ''));
      return (insuredAmount * percentageValue) / 100;
    }

    // Handle numeric rates
    const numericRate = parseFloat(rateStr.replace(/[^\d.]/g, ''));

    if (!isNaN(numericRate)) {
      // Per mille rates (per ₹1,000) - typically rates < 10
      // Example: 0.585 per mille means ₹0.585 per ₹1,000 insured
      if (numericRate < 10) {
        return (insuredAmount / 1000) * numericRate;
      }

      // Flat rates (like employee benefits) - typically rates >= 10
      // Example: ₹1500 per member per year
      // For employee benefits, insuredAmount represents number of employees
      if (numericRate >= 10) {
        // Assuming insuredAmount for employee benefits represents coverage amount
        // We'll calculate based on a standard formula
        return numericRate; // Return the flat rate as base premium
      }
    }

    return 0;
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => {
      return total + calculatePremium(item.rate, item.insuredAmount);
    }, 0);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isFeatureSelected = (categoryKey: InsuranceCategory, featureKey: string) => {
    return cartItems.some((item) => item.id === `${categoryKey}-${featureKey}`);
  };

  const clearCart = () => {
    setCartItems([]);
    setSelectedCategories(new Set());
    setExpandedCategory(null);
    setEditingItemId(null);
  };

  const removeCartItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    if (editingItemId === itemId) {
      setEditingItemId(null);
    }
  };

  if (!selectedIndustry) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-blue-200 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-12">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-semibold text-blue-900">Premium Estimator</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Insurance Premium{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Estimator
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Get instant premium estimates for your business insurance. Select your industry to
                explore tailored coverage options.
              </p>
            </div>

            <div className="mb-8">
              <label className="mb-3 block text-sm font-semibold text-gray-900">
                Select Your Industry Type
              </label>
              <select
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                onChange={(e) => handleIndustryChange(e.target.value)}
                value=""
              >
                <option value="">Choose an industry...</option>
                {INDUSTRIES_DATA.map((industry) => (
                  <option key={industry.industryType} value={industry.industryType}>
                    {industry.industryType} ({industry.industryCode})
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-3 rounded-xl bg-blue-50 px-6 py-4 text-gray-700">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">
                  Select your industry to view available insurance options
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-8 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Premium Estimator</h1>
              <p className="mt-2 text-gray-600">
                Industry:{' '}
                <span className="font-semibold text-blue-600">{selectedIndustry.industryType}</span>
                {selectedIndustry.industryCode && (
                  <span className="ml-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {selectedIndustry.industryCode}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => setSelectedIndustry(null)}
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              Change Industry
            </button>
          </div>
        </div>

        {/* Rate Units Info */}
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-blue-900">Understanding Rate Units</h3>
              <div className="mt-2 grid grid-cols-1 gap-2 text-xs text-blue-800 md:grid-cols-3">
                <div>
                  <span className="font-semibold">‰ (per mille):</span> Rate per ₹1,000 of sum
                  insured
                </div>
                <div>
                  <span className="font-semibold">% (percentage):</span> Rate as % of sum insured
                </div>
                <div>
                  <span className="font-semibold">Per member/year:</span> Flat rate per employee
                  annually
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Insurance Categories */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-blue-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Select Insurance Types</h2>

              <div className="space-y-4">
                {INSURANCE_CATEGORIES.map((category) => {
                  const isSelected = selectedCategories.has(category.key);
                  const isExpanded = expandedCategory === category.key;
                  const availableFeatures = isSelected
                    ? getAvailableInsuranceFeatures(selectedIndustry, category.key)
                    : [];

                  return (
                    <div
                      key={category.key}
                      className="overflow-hidden rounded-lg border border-gray-200"
                    >
                      <div
                        className={`cursor-pointer p-4 transition-colors ${
                          isSelected ? 'border-blue-200 bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleCategoryToggle(category.key)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              className="h-4 w-4 rounded text-blue-600"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {category.displayName}
                              </h3>
                              <p className="text-sm text-gray-600">{category.description}</p>
                            </div>
                          </div>
                          {isSelected && (
                            <svg
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      {isSelected && isExpanded && availableFeatures.length > 0 && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4">
                          <h4 className="mb-3 font-medium text-gray-700">Available Options:</h4>
                          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            {availableFeatures.map(({ key, value, displayName }) => (
                              <div
                                key={key}
                                className={`cursor-pointer rounded-lg border p-3 transition-all ${
                                  isFeatureSelected(category.key, key)
                                    ? 'border-blue-400 bg-blue-100 shadow-sm'
                                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                                }`}
                                onClick={() =>
                                  handleFeatureToggle(category.key, key, value, displayName)
                                }
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      {displayName}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                      <span className="font-semibold">Rate:</span>{' '}
                                      {formatRateDisplay(value)}
                                    </p>
                                  </div>
                                  <input
                                    type="checkbox"
                                    checked={isFeatureSelected(category.key, key)}
                                    onChange={() => {}}
                                    className="ml-2 h-4 w-4 rounded text-blue-600"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {isSelected && isExpanded && availableFeatures.length === 0 && (
                        <div className="border-t border-gray-200 bg-gray-50 p-4">
                          <p className="text-sm text-gray-500 italic">
                            No options available for this industry in this category.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-6 rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-white/20 p-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Get Better Rates!</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Contact Share India now to get the same or lower rates with personalized service
                    and expert guidance.
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                  >
                    Contact Us Now
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 rounded-lg bg-gray-100 p-4">
              <p className="text-xs text-gray-600">
                <strong>Disclaimer:</strong> Rates shown are indicative and for estimation purposes
                only. Final premiums are subject to underwriting approval, risk assessment, and
                policy terms. Actual rates may vary based on specific risk factors and coverage
                requirements.
              </p>
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border border-blue-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Your Quote</h2>
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm font-medium text-red-600 transition-colors hover:text-red-700"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="py-8 text-center">
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-gray-500">No coverage selected</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Choose insurance options to build your quote
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-[500px] space-y-3 overflow-y-auto pr-2">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900">
                              {item.displayName}
                            </p>
                            <p className="text-xs text-gray-500">
                              {
                                INSURANCE_CATEGORIES.find((cat) => cat.key === item.category)
                                  ?.displayName
                              }
                            </p>
                            <div className="mt-1 rounded bg-gray-100 px-2 py-1">
                              <p className="text-xs text-gray-700">
                                <span className="font-semibold">Rate:</span>{' '}
                                {formatRateDisplay(item.rate)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeCartItem(item.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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

                        {/* Insured Amount Input */}
                        <div className="mb-2">
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Insured Amount
                          </label>
                          <div className="relative">
                            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm font-semibold text-gray-600">
                              ₹
                            </span>
                            <input
                              type="text"
                              value={item.insuredAmount.toLocaleString('en-IN')}
                              onChange={(e) => {
                                const value = e.target.value.replace(/[^\d]/g, '');
                                updateInsuredAmount(item.id, value ? parseInt(value) : 0);
                              }}
                              onFocus={() => setEditingItemId(item.id)}
                              onBlur={() => setEditingItemId(null)}
                              className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-3 pl-7 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                          </div>
                        </div>

                        {/* Premium Display */}
                        <div className="rounded-lg bg-blue-50 px-3 py-2">
                          {String(item.rate).toLowerCase().includes('minimum') ||
                          String(item.rate).toLowerCase().includes('lac') ? (
                            <div className="text-center">
                              <p className="text-xs font-medium text-gray-700">
                                Custom Quote Required
                              </p>
                              <p className="text-xs text-gray-600">{item.rate}</p>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-700">Premium:</span>
                              <span className="text-sm font-bold text-blue-600">
                                {formatCurrency(calculatePremium(item.rate, item.insuredAmount))}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Items:</span>
                      <span className="font-medium text-gray-900">{cartItems.length}</span>
                    </div>

                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total Premium:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {formatCurrency(calculateTotal())}
                      </span>
                    </div>

                    <button
                      onClick={() => setShowCheckout(true)}
                      className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-center font-semibold text-white transition-all hover:shadow-lg"
                    >
                      Proceed to Checkout
                    </button>

                    <p className="mt-3 text-center text-xs text-gray-500">
                      Click to connect with our experts for personalized rates
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          // Visibility States
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
          // Form & Submission States
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          checkoutData={checkoutData}
          setCheckoutData={setCheckoutData}
          // Data States
          cartItems={cartItems}
          selectedIndustry={selectedIndustry}
          // Logic Functions
          calculatePremium={calculatePremium} // Assuming you have this logic in parent
          calculateTotal={calculateTotal} // Assuming you have this logic in parent
          clearCart={() => setCartItems([])} // Direct setter usage
          // Constants
          INSURANCE_CATEGORIES={INSURANCE_CATEGORIES}
        />
      )}
    </div>
  );
};

const InsuranceCalculator: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-12" />
      }
    >
      <InsuranceCalculatorContent />
    </Suspense>
  );
};

export default InsuranceCalculator;
