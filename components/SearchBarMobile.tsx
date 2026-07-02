"use client";

type SearchBarMobileProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBarMobile = ({ value, onChange }: SearchBarMobileProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-4 py-3 shadow-sm md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 shrink-0 text-neutral-500"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        id="search-listings"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search destinations"
        className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-500"
      />
    </div>
  );
};

export default SearchBarMobile;
