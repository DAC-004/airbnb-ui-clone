"use client";

import SearchBarSegment from "@/components/SearchBarSegment";

type SearchBarDesktopProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBarDesktop = ({ value, onChange }: SearchBarDesktopProps) => {
  return (
    <div className="hidden items-center rounded-full border border-neutral-300 bg-white shadow-sm transition-shadow hover:shadow-md md:flex">
      <SearchBarSegment
        label="Where"
        placeholder="Search destinations"
        value={value}
        onChange={onChange}
        className="min-w-0 flex-1 rounded-l-full"
      />
      <div className="h-8 w-px bg-neutral-300" />
      <SearchBarSegment
        label="When"
        placeholder="Add dates"
        className="hidden min-w-[140px] lg:block"
      />
      <div className="hidden h-8 w-px bg-neutral-300 lg:block" />
      <SearchBarSegment
        label="Who"
        placeholder="Add guests"
        className="hidden min-w-[120px] lg:block"
      />
      <button
        type="button"
        aria-label="Search"
        className="m-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF385C] text-white transition hover:bg-[#E31C5F]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBarDesktop;
