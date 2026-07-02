"use client";

import SearchBarMobile from "@/components/SearchBarMobile";
import SearchBarDesktop from "@/components/SearchBarDesktop";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <label htmlFor="search-listings" className="sr-only">
        Search listings
      </label>
      <SearchBarMobile value={value} onChange={onChange} />
      <SearchBarDesktop value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
