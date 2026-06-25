"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search destinations",
}: SearchBarProps) => {
  return (
    <div className="w-full">
      <label htmlFor="search-listings" className="sr-only">
        Search listings
      </label>
      <div className="flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md md:px-6 md:py-3.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 shrink-0 text-neutral-500 md:h-5 md:w-5"
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
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-500 md:text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;
