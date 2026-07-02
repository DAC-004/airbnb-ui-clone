"use client";

type SearchBarSegmentProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const SearchBarSegment = ({
  label,
  placeholder,
  value,
  onChange,
  className = "",
}: SearchBarSegmentProps) => {
  return (
    <div className={`px-4 py-3 md:px-6 md:py-3.5 ${className}`}>
      <p className="text-xs font-semibold text-neutral-900">{label}</p>
      {onChange ? (
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="mt-0.5 w-full bg-transparent text-sm text-neutral-600 outline-none placeholder:text-neutral-400"
        />
      ) : (
        <p className="mt-0.5 text-sm text-neutral-400">{placeholder}</p>
      )}
    </div>
  );
};

export default SearchBarSegment;
