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

const retailTopics = ['Retail'];

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

export default function InsightsFilterBar({
  onFiltersChange,
}: {
  onFiltersChange: (filters: { industry: string; type: string; topic: string }) => void;
}) {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    let newIndustry = selectedIndustry;
    let newType = selectedType;
    let newTopic = selectedTopic;

    if (filterType === 'industry') {
      newIndustry = value;
      setSelectedIndustry(value);
      // Reset topic when industry changes
      setSelectedTopic('All Topics');
      newTopic = 'All Topics';
    } else if (filterType === 'type') {
      newType = value;
      setSelectedType(value);
    } else if (filterType === 'topic') {
      newTopic = value;
      setSelectedTopic(value);
    }

    onFiltersChange({
      industry: newIndustry,
      type: newType,
      topic: newTopic,
    });
  };

  // Get topics based on selected industry
  const getTopicOptions = () => {
    switch (selectedIndustry) {
      case 'Corporate':
        return ['All Topics', ...corporateTopics];
      case 'Retail':
        return ['All Topics', ...retailTopics];
      case 'Others':
        return ['All Topics', ...industryTopics];
      default:
        return ['All Topics', ...industryTopics, ...corporateTopics, ...retailTopics];
    }
  };

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
            label="Topic"
            selectedOption={selectedTopic}
            options={getTopicOptions()}
            onSelect={(value) => handleFilterChange('topic', value)}
          />
          <CustomDropdown
            label="Content Type"
            selectedOption={selectedType}
            options={['All Types', 'Blog', 'News', 'Claims Story']}
            onSelect={(value) => handleFilterChange('type', value)}
          />
          <CustomDropdown
            label="Industry"
            selectedOption={selectedIndustry}
            options={['All Industries', 'Retail', 'Corporate', 'Others']}
            onSelect={(value) => handleFilterChange('industry', value)}
          />
        </div>
      </div>
    </div>
  );
}

// Enhanced Dropdown with subsections
function CustomDropdown({
  label,
  selectedOption,
  options,
  onSelect,
}: {
  label: string;
  selectedOption: string;
  options: string[];
  onSelect: (option: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
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
        <div className="absolute top-full left-0 z-10 mt-1 max-h-[20vh] w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-left text-sm transition-colors first:rounded-t-md last:rounded-b-md hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                selectedOption === option ? 'bg-si-bluegreen text-white' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
