'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const industryTopics = [
  'Infrastructure Industry',
  'Life Sciences & Pharma Industry',
  'Plastic Industry',
  'Startup Industry',
  'Real Estate Industry',
  'Chemical Industry',
  'Logistics Industry',
  'Textile Industry',
  'Solar Industry',
];

const corporateTopics = [
  'Property & Engineering Insurance',
  'Liability Insurance',
  'Marine Transit Insurance',
  'Trade Credit Insurance',
  'Media & Entertainment Insurance',
  'Employee Benefits Insurance',
  'Motor Fleet Insurance',
  'Office Package Insurance',
  'Shopkeepers Package & Jewellers Block',
  'Group Travel Insurance Plans',
];

export default function InsightsFilterBar() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Topics');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedTopic, setSelectedTopic] = useState('All Industries');

  return (
    <div className="bg-si-slate mt-5 w-full rounded-md p-6">
      <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:items-center md:gap-0">
        {/* Side Label */}
        <div className="flex min-w-[175px] flex-shrink-0 items-center justify-center pr-8 md:justify-end md:text-right">
          <span className="text-si-dark block text-left text-xl leading-tight font-bold">
            Explore
            <br />
            Insights By:
          </span>
        </div>
        {/* Filter Selectors */}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <CustomDropdown
            setSelected={setSelectedTopic}
            options={
              selectedIndustry == 'Corporate'
                ? corporateTopics
                : selectedIndustry == 'Others'
                  ? industryTopics
                  : selectedIndustry == 'Retail'
                    ? ['Retail']
                    : ['All Topics', ...industryTopics, ...corporateTopics]
            }
          />
          <CustomDropdown
            setSelected={setSelectedType}
            options={['All Types', 'News', 'Claim Story', 'Blogs - General Information']}
          />
          <CustomDropdown
            setSelected={setSelectedIndustry}
            options={['All Industries', 'Retail', 'Corporate', 'Others']}
          />
        </div>
      </div>
    </div>
  );
}

// Enhanced Dropdown with subsections
function CustomDropdown({
  options,
  setSelected,
}: {
  options: string[];
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="border-si-bluegreen/60 text-si-dark focus:border-si-bluegreen hover:border-si-bluegreen flex w-full items-center justify-between border-0 border-b-2 bg-transparent px-0 py-2 text-base font-normal transition-colors outline-none"
      >
        <span className="opacity-80">{selectedOption}</span>
        <FaChevronDown
          className={`text-si-bluegreen ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-1 max-h-[20vh] w-full overflow-scroll rounded-md border border-gray-200 bg-white shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left text-sm transition-colors first:rounded-t-md last:rounded-b-md hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
