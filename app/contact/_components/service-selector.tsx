'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceOption {
  id: string;
  label: string;
  href: string;
  description?: string;
}

const services: ServiceOption[] = [
  {
    id: 'business-insurance',
    label: 'Business Insurance',
    href: '/business-insurance',
    description: 'Protect your business with comprehensive coverage',
  },
  {
    id: 'employee-benefits',
    label: 'Employee Benefits',
    href: '/employee-benefits',
    description: 'Comprehensive benefits packages for your employees',
  },
  {
    id: 'personal-insurance',
    label: 'Personal Insurance',
    href: '/personal-insurance',
    description: 'Individual and family insurance solutions',
  },
  {
    id: 'retirement-wealth',
    label: 'Retirement and Private Wealth',
    href: '/retirement-wealth',
    description: 'Plan for your future with our wealth management services',
  },
];

export default function ServicesSelector() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceClick = (service: ServiceOption) => {
    setSelectedService(service.id);
  };

  return (
    <>
      {/* Services Selection */}
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="flex w-full justify-center">
            <button
              onClick={() => handleServiceClick(service)}
              className={`card-vibrant hover-lift focus:ring-si-primary/20 w-full max-w-2xl rounded-xl p-6 transition-all duration-300 focus:ring-4 focus:outline-none ${
                selectedService === service.id
                  ? 'hover-glow-blue from-si-primary/20 to-si-red/10 border-si-primary bg-gradient-to-r'
                  : 'hover:from-si-primary/10 hover:to-si-red/5 hover:bg-gradient-to-r'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <span className="text-si-ink block text-lg font-semibold sm:text-xl">
                    {service.label}
                  </span>
                  {service.description && (
                    <span className="text-si-ink/70 mt-2 block text-sm">{service.description}</span>
                  )}
                </div>
                <div
                  className={`ml-4 transition-transform duration-300 ${
                    selectedService === service.id ? 'rotate-90' : ''
                  }`}
                >
                  <svg
                    className={`h-6 w-6 ${
                      selectedService === service.id ? 'text-si-primary' : 'text-si-ink/40'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <button className="card-vibrant hover-lift hover-glow-blue from-si-primary to-si-primary-600 focus:ring-si-primary/30 rounded-xl bg-gradient-to-r px-8 py-4 font-semibold text-white transition-all duration-300 focus:ring-4 focus:outline-none">
          <span className="flex items-center justify-center gap-2">
            Get Started
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </span>
        </button>
        <Link
          href="/contact"
          className="card-vibrant hover-lift border-si-primary/30 from-si-primary/10 to-si-red/5 hover:from-si-primary/20 hover:to-si-red/10 text-si-ink focus:ring-si-primary/20 rounded-xl border bg-gradient-to-r px-8 py-4 text-center font-semibold transition-all duration-300 focus:ring-4 focus:outline-none"
        >
          Contact Us
        </Link>
      </div>

      {/* Selected Service Display */}
      {selectedService && (
        <div className="card-vibrant hover-lift hover-glow-blue from-si-primary/15 to-si-red/10 mt-8 rounded-xl bg-gradient-to-r p-6">
          <div className="text-center">
            <div className="accent-bar-gradient mx-auto mb-3 h-2 w-12" />
            <p className="text-si-ink mb-2 text-lg font-semibold">
              Selected Service:{' '}
              <span className="text-gradient-primary">
                {services.find((s) => s.id === selectedService)?.label}
              </span>
            </p>
            <p className="text-si-ink/80 text-sm">
              {services.find((s) => s.id === selectedService)?.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
