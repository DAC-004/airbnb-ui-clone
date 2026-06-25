const MapPlaceholder = () => {
  return (
    <div
      className="flex h-64 w-full flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 md:h-full md:min-h-[480px]"
      aria-label="Map placeholder"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mb-3 h-10 w-10 text-neutral-400"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
      <p className="text-sm font-medium text-neutral-500">Map area</p>
      <p className="mt-1 text-xs text-neutral-400">Interactive map coming soon</p>
    </div>
  );
};

export default MapPlaceholder;
