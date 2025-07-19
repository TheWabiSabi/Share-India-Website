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
      <div className="space-y-3 sm:space-y-4">
        {services.map((service) => (
          <div key={service.id} className="flex w-full justify-center">
            <button
              onClick={() => handleServiceClick(service)}
              className={`focus:ring-si-bluegreen w-full max-w-[95vw] rounded-full border-2 px-5 py-3 transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none sm:max-w-md sm:px-8 sm:py-4 ${
                selectedService === service.id
                  ? 'border-si-bluegreen text-si-dark bg-si-slate/30'
                  : 'border-si-bluegreen bg-si-offwhite text-si-dark hover:bg-si-slate/30'
              }`}
            >
              <span className="text-base font-medium sm:text-lg">{service.label}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
        <button className="bg-si-bluegreen text-si-offwhite hover:bg-si-dark/90 focus:ring-si-bluegreen rounded-lg px-6 py-3 font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none sm:px-8 sm:py-3">
          Get Started
        </button>
        <Link
          href="/contact"
          className="border-si-bluegreen bg-si-slate/30 text-si-dark hover:bg-si-offwhite focus:ring-si-bluegreen rounded-lg border-2 px-6 py-3 text-center font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none sm:px-8 sm:py-3"
        >
          Contact Us
        </Link>
      </div>

      {/* Selected Service Display */}
      {selectedService && (
        <div className="border-si-slate bg-si-slate/30 mt-6 rounded-lg border p-3 sm:mt-8 sm:p-4">
          <p className="text-si-dark text-center text-sm sm:text-base">
            You selected: <strong>{services.find((s) => s.id === selectedService)?.label}</strong>
          </p>
          <p className="text-si-dark/90 mt-2 text-center text-xs sm:text-sm">
            {services.find((s) => s.id === selectedService)?.description}
          </p>
        </div>
      )}
    </>
  );
}
