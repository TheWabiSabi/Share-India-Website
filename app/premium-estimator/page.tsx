// page.tsx - Insurance Calculator Main Component

'use client';

import React, { useState, useEffect } from 'react';
import { Industry, CartItem, InsuranceCategory } from './interface';
import {
  INDUSTRIES_DATA,
  INSURANCE_CATEGORIES,
  getIndustryByName,
  getAvailableInsuranceFeatures,
} from './data';

const InsuranceCalculator: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Set<InsuranceCategory>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<InsuranceCategory | null>(null);
  const [sumInsured, setSumInsured] = useState<number>(1000000); // Default 10 lakhs

  // Reset selections when industry changes
  useEffect(() => {
    setSelectedCategories(new Set());
    setCartItems([]);
    setExpandedCategory(null);
  }, [selectedIndustry]);

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
      // Add item to cart
      const newItem: CartItem = {
        id: itemId,
        category: categoryKey,
        feature: featureKey,
        rate: featureValue,
        displayName: featureDisplayName,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const calculatePremium = (rate: string | number, sumInsured: number): number => {
    const rateStr = String(rate);

    // Handle percentage rates (e.g., "2.5%", "0.5%")
    if (rateStr.includes('%')) {
      const percentageValue = parseFloat(rateStr.replace('%', ''));
      return (sumInsured * percentageValue) / 100;
    }

    // Handle per thousand rates (e.g., "₹5 per 1000")
    if (rateStr.toLowerCase().includes('per') && rateStr.toLowerCase().includes('1000')) {
      const rateValue = parseFloat(rateStr.match(/[\d.]+/)?.[0] || '0');
      return (sumInsured / 1000) * rateValue;
    }

    // Handle flat rates
    const numericRate = parseFloat(rateStr.replace(/[^\d.]/g, ''));
    if (!isNaN(numericRate)) {
      return (sumInsured / 1000) * numericRate;
    }

    return 0;
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => {
      return total + calculatePremium(item.rate, sumInsured);
    }, 0);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const isFeatureSelected = (categoryKey: InsuranceCategory, featureKey: string) => {
    return cartItems.some((item) => item.id === `${categoryKey}-${featureKey}`);
  };

  const clearCart = () => {
    setCartItems([]);
    setSelectedCategories(new Set());
    setExpandedCategory(null);
  };

  const removeCartItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleSumInsuredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setSumInsured(value ? parseInt(value) : 0);
  };

  if (!selectedIndustry) {
    return (
      <div className="bg-si-primary-50 min-h-screen pt-20 pb-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-vibrant shadow-vibrant-blue rounded-2xl bg-white/95 p-6 backdrop-blur-sm sm:p-8 md:p-12">
            <div className="mb-8 text-center">
              <div className="bg-si-primary/10 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
                <svg
                  className="text-si-primary h-5 w-5"
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
                <span className="text-si-primary text-sm font-semibold">Premium Calculator</span>
              </div>

              <h1 className="text-si-ink mb-4 text-3xl font-bold md:text-4xl">
                Insurance Rate <span className="text-gradient-primary">Calculator</span>
              </h1>

              <p className="text-si-ink/70 mx-auto max-w-2xl text-lg">
                Get instant premium estimates for your business insurance needs. Select your
                industry to explore tailored coverage options.
              </p>
            </div>

            <div className="mb-8">
              <label className="text-si-ink mb-3 block text-sm font-semibold">
                Select Your Industry Type
              </label>
              <select
                className="border-si-primary/20 text-si-ink focus:border-si-primary focus:ring-si-primary/20 w-full rounded-xl border bg-white/80 px-4 py-4 backdrop-blur-sm transition-all focus:ring-2"
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
              <div className="text-si-ink/60 bg-si-primary/5 inline-flex items-center space-x-3 rounded-xl px-6 py-4">
                <svg
                  className="text-si-primary h-6 w-6"
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
                  Select your industry to view available insurance options and get instant quotes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="from-si-primary-50 to-si-red-50 min-h-screen bg-gradient-to-br via-white py-8 pt-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="card-vibrant shadow-vibrant-blue mb-8 rounded-2xl bg-white/95 p-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-si-ink text-2xl font-bold md:text-3xl">
                Insurance Rate Calculator
              </h1>
              <p className="text-si-ink/70 mt-2">
                Industry:{' '}
                <span className="text-si-primary font-semibold">
                  {selectedIndustry.industryType}
                </span>
                {selectedIndustry.industryCode && (
                  <span className="bg-si-primary/10 text-si-primary ml-2 rounded-full px-3 py-1 text-sm font-medium">
                    {selectedIndustry.industryCode}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => setSelectedIndustry(null)}
              className="border-si-primary/20 text-si-ink hover:bg-si-primary/5 hover:border-si-primary/40 rounded-xl border px-4 py-2 text-sm transition-all"
            >
              Change Industry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Insurance Categories */}
          <div className="lg:col-span-2">
            <div className="card-vibrant shadow-vibrant-blue rounded-2xl bg-white/95 p-6 backdrop-blur-sm">
              <h2 className="text-si-ink mb-6 text-xl font-bold">Select Insurance Types</h2>

              <div className="space-y-4">
                {INSURANCE_CATEGORIES.map((category) => {
                  const isSelected = selectedCategories.has(category.key);
                  const isExpanded = expandedCategory === category.key;
                  const availableFeatures = isSelected
                    ? getAvailableInsuranceFeatures(selectedIndustry, category.key)
                    : [];

                  return (
                    <div key={category.key} className="rounded-lg border border-gray-200">
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
                                className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                                  isFeatureSelected(category.key, key)
                                    ? 'border-blue-300 bg-blue-100'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                                onClick={() =>
                                  handleFeatureToggle(category.key, key, value, displayName)
                                }
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">
                                      {displayName}
                                    </p>
                                    <p className="text-xs text-gray-600">Rate: {value}</p>
                                  </div>
                                  <input
                                    type="checkbox"
                                    checked={isFeatureSelected(category.key, key)}
                                    onChange={() => {}}
                                    className="h-4 w-4 rounded text-blue-600"
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
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="card-vibrant shadow-vibrant-blue sticky top-8 rounded-2xl bg-white/95 p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-si-ink text-xl font-bold">Selected Coverage</h2>
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-si-red hover:text-si-red-600 text-sm font-medium transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Sum Insured Input */}
              <div className="mb-6">
                <label className="text-si-ink mb-2 block text-sm font-semibold">
                  Sum Insured Amount
                </label>
                <div className="relative">
                  <span className="text-si-primary absolute top-1/2 left-3 -translate-y-1/2 font-semibold">
                    ₹
                  </span>
                  <input
                    type="text"
                    value={sumInsured.toLocaleString('en-IN')}
                    onChange={handleSumInsuredChange}
                    className="border-si-primary/20 focus:border-si-primary focus:ring-si-primary/20 w-full rounded-xl border bg-white/80 py-3 pr-4 pl-8 transition-all focus:ring-2"
                    placeholder="Enter amount"
                  />
                </div>
                <p className="text-si-ink/60 mt-2 text-xs">
                  Enter the total amount you want to insure
                </p>
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
                    Choose insurance options to see them here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-96 space-y-3 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between rounded-lg border border-gray-200 p-3"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {item.displayName}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">
                            {
                              INSURANCE_CATEGORIES.find((cat) => cat.key === item.category)
                                ?.displayName
                            }
                          </p>
                          <p className="mt-1 text-xs text-gray-600">Rate: {item.rate}</p>
                          <p className="mt-1 text-sm font-semibold text-blue-600">
                            {formatCurrency(calculatePremium(item.rate, sumInsured))}
                          </p>
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

                    <button className="btn-primary hover-lift w-full rounded-xl px-4 py-3 font-semibold text-white transition-all">
                      Get Quote
                    </button>

                    <p className="mt-2 text-center text-xs text-gray-500">
                      Premium calculated based on sum insured: {formatCurrency(sumInsured)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCalculator;
