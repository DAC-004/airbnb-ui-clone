type AmenitiesGridProps = {
  amenities: string[];
};

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="border-b border-neutral-200 py-6">
      <h2 className="mb-4 text-lg font-semibold text-neutral-900 md:text-xl">
        What this place offers
      </h2>

      {amenities.length === 0 ? (
        <p className="text-sm text-neutral-500">No amenities listed.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {amenities.map((amenity) => (
            <li
              key={amenity}
              className="flex items-center gap-3 text-sm text-neutral-700 md:text-base"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-600"
                aria-hidden="true"
              >
                &#10003;
              </span>
              {amenity}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AmenitiesGrid;
