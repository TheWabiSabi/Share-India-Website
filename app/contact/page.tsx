"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Types for better type safety
interface ServiceOption {
  id: string;
  label: string;
  href: string;
  description?: string;
}

interface ServicesPageProps {
  title?: string;
  subtitle?: string;
  privacyText?: string;
  onServiceSelect?: (serviceId: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({
  title = "What services are you interested in?",
  subtitle = "",
  privacyText = "We take your privacy seriously, and we don't sell lists, phone numbers, or email addresses.",
  onServiceSelect
}) => {
  // State for selected service
  const [selectedService, setSelectedService] = useState<string>('');

  // Services data - easily configurable
  const services: ServiceOption[] = [
    {
      id: 'business-insurance',
      label: 'Business Insurance',
      href: '/business-insurance',
      description: 'Protect your business with comprehensive coverage'
    },
    {
      id: 'employee-benefits',
      label: 'Employee Benefits',
      href: '/employee-benefits',
      description: 'Comprehensive benefits packages for your employees'
    },
    {
      id: 'personal-insurance',
      label: 'Personal Insurance',
      href: '/personal-insurance',
      description: 'Individual and family insurance solutions'
    },
    {
      id: 'retirement-wealth',
      label: 'Retirement and Private Wealth',
      href: '/retirement-wealth',
      description: 'Plan for your future with our wealth management services'
    }
  ];

  // Handle service selection
  const handleServiceClick = (service: ServiceOption) => {
    setSelectedService(service.id);
    if (onServiceSelect) {
      onServiceSelect(service.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-8">
                {subtitle}
              </p>
            )}
          </div>

          {/* Services Selection */}
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="w-full">
                <button
                  onClick={() => handleServiceClick(service)}
                  className={`w-full max-w-md mx-auto block px-8 py-4 rounded-full border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    selectedService === service.id
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'bg-white border-blue-400 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-lg font-medium">
                    {service.label}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Selected Service Display */}
          {selectedService && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-center">
                You selected: <strong>{services.find(s => s.id === selectedService)?.label}</strong>
              </p>
              <p className="text-blue-600 text-center text-sm mt-2">
                {services.find(s => s.id === selectedService)?.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Statement */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-gray-600 text-center text-sm leading-relaxed">
            {privacyText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
