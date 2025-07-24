import { FaChevronDown } from 'react-icons/fa';

export default function InsightsFilterBar() {
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
          <CustomDropdown label="Topic" />
          <CustomDropdown label="Your Role" />
          <CustomDropdown label="Industry" />
        </div>
      </div>
    </div>
  );
}

// Dropdown Button (presentational, no open/close logic)
function CustomDropdown({ label }: { label: string }) {
  return (
    <div className="relative w-full max-w-xs">
      <button
        type="button"
        className="border-si-bluegreen/60 text-si-dark focus:border-si-bluegreen hover:border-si-bluegreen flex w-full items-center justify-between border-0 border-b-2 bg-transparent px-0 py-2 text-base font-normal transition-colors outline-none"
      >
        <span className="opacity-80">{label}</span>
        <FaChevronDown className="ml-2 text-si-bluegreen" />
      </button>
    </div>
  );
}
