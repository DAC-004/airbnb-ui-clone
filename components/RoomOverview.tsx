type RoomOverviewProps = {
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

const RoomOverview = ({
  propertyType,
  maxGuests,
  bedrooms,
  beds,
  baths,
}: RoomOverviewProps) => {
  return (
    <div className="border-b border-neutral-200 pb-6">
      <p className="text-base font-medium text-neutral-900 md:text-lg">
        {propertyType}
      </p>
      <p className="mt-1 text-sm text-neutral-600 md:text-base">
        {maxGuests} guests &middot; {bedrooms} bedrooms &middot; {beds} beds
        &middot; {baths} baths
      </p>
    </div>
  );
};

export default RoomOverview;
