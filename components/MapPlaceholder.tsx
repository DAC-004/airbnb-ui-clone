const MapPlaceholder = () => {
  return (
    <div
      className="flex h-full min-h-72 w-full items-center justify-center rounded-xl bg-neutral-200 md:min-h-[520px]"
      aria-label="Map loading"
    >
      <p className="text-lg font-medium text-neutral-600">Loading map…</p>
    </div>
  );
};

export default MapPlaceholder;
