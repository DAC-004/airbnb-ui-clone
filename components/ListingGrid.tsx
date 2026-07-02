import type { Listing } from "@/types/listing";
import ListingCard from "@/components/ListingCard";

type ListingGridProps = {
  listings: Listing[];
  prioritizeImages?: boolean;
  layout?: "default" | "home";
};

const GRID_LAYOUTS = {
  default:
    "grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  home: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
} as const;

const ListingGrid = ({
  listings,
  prioritizeImages = false,
  layout = "default",
}: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-neutral-500 md:text-base">
        No listings match your search.
      </p>
    );
  }

  const priorityCount = layout === "home" ? 6 : 4;
  const compactCards = layout === "home";

  return (
    <div className={GRID_LAYOUTS[layout]}>
      {listings.map((listing, index) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          priority={prioritizeImages && index < priorityCount}
          compact={compactCards}
        />
      ))}
    </div>
  );
};

export default ListingGrid;
