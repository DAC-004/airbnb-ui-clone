import type { Listing } from "@/types/listing";
import ListingCard from "@/components/ListingCard";

type ListingGridProps = {
  listings: Listing[];
};

const ListingGrid = ({ listings }: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-neutral-500 md:text-base">
        No listings match your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
