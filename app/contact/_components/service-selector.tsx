'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceOption {
  id: string;
  number: string;
  label: string;
  href: string;
  description: string;
}

const services: ServiceOption[] = [
  {
    id: 'business-insurance',
    number: '01',
    label: 'Business Insurance',
    href: '/corporate-insurance',
    description: 'Protect your business with comprehensive corporate coverage.',
  },
  {
    id: 'employee-benefits',
    number: '02',
    label: 'Employee Benefits',
    href: '/corporate-insurance/employee-benefits-insurance',
    description: 'Comprehensive group health & benefits for your team.',
  },
  {
    id: 'personal-insurance',
    number: '03',
    label: 'Personal Insurance',
    href: '/retail',
    description: 'Individual and family health, life, motor & home plans.',
  },
  {
    id: 'retirement-wealth',
    number: '04',
    label: 'Retirement & Wealth',
    href: '/retail/life',
    description: 'Plan for your future with smart life & savings solutions.',
  },
];

export default function ServicesSelector() {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        {services.map((svc) => {
          const isActive = selected === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => setSelected(svc.id)}
              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-xl border p-5 text-left transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'border-si-primary-200 bg-sky-50/40 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-sky-200'
              }`}
            >
              {/* Left indicator combining deep si-primary and light si-primary */}
              <div
                className={`absolute top-0 left-0 h-full w-1 transition-all duration-300 ${
                  isActive
                    ? 'from-si-primary-700 bg-gradient-to-b to-sky-400 opacity-100'
                    : 'bg-slate-200 opacity-0 group-hover:opacity-100'
                }`}
              />

              <div className="ml-2 flex items-center gap-6">
                <span
                  className={`font-mono text-sm tracking-widest transition-colors ${
                    isActive
                      ? 'text-si-primary-700 font-semibold'
                      : 'text-slate-300 group-hover:text-sky-400'
                  }`}
                >
                  {svc.number}
                </span>
                <div>
                  <div
                    className={`text-base font-semibold transition-colors ${
                      isActive ? 'text-si-primary-950' : 'text-slate-700'
                    }`}
                  >
                    {svc.label}
                  </div>
                  <div className="mt-1 text-sm font-light text-slate-500">{svc.description}</div>
                </div>
              </div>

              <div
                className={`text-lg font-light transition-all duration-300 ${
                  isActive
                    ? 'text-si-primary-700 translate-x-0 opacity-100'
                    : '-translate-x-2 text-sky-300 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100'
                }`}
              >
                &rarr;
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        // The slight touch of red is used here as a subtle validation indicator
        <div className="animate-in fade-in slide-in-from-top-2 border-l-si-red-300 mt-6 border-l-2 bg-gradient-to-r from-sky-50/80 to-transparent p-5 transition-all">
          <p className="text-si-primary-600 mb-1.5 text-xs font-bold tracking-widest uppercase">
            Selection Confirmed
          </p>
          <p className="text-si-primary-950 text-sm">
            Routing you to specialized support for{' '}
            <span className="font-semibold">{services.find((s) => s.id === selected)?.label}</span>.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          disabled={!selected}
          className="bg-si-primary hover:bg-si-primary-800 hover:shadow-si-primary-700/20 inline-flex flex-1 items-center justify-center gap-3 rounded-xl py-4 text-sm font-bold tracking-wider text-white uppercase transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:bg-slate-300 disabled:opacity-30"
        >
          Continue &rarr;
        </button>
        <Link
          href="tel:18002102022"
          className="hover:text-si-primary-700 inline-flex flex-1 items-center justify-center rounded-xl border-2 border-slate-200 py-4 text-sm font-bold tracking-wider text-slate-600 uppercase transition-colors hover:border-sky-200 hover:bg-sky-50"
        >
          Call Us Instead
        </Link>
      </div>
    </div>
  );
}
