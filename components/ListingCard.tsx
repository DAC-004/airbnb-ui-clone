import Link from "next/link";
import ListingCardImage from "@/components/ListingCardImage";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
  priority?: boolean;
  compact?: boolean;
};

const ListingCard = ({ listing, priority = false, compact = false }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group flex flex-col gap-2"
    >
      <ListingCardImage
        title={listing.title}
        location={listing.location}
        image={listing.image}
        isGuestFavorite={listing.isGuestFavorite}
        priority={priority}
        compact={compact}
      />

      <div className="flex flex-col gap-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-[15px] font-medium text-neutral-900">
            {listing.title}
          </h3>
          <span className="flex shrink-0 items-center gap-0.5 text-sm text-neutral-900">
            <span aria-hidden="true">&#9733;</span>
            {listing.rating.toFixed(2)}
          </span>
        </div>

        <p className="line-clamp-1 text-sm text-neutral-500">
          {listing.location}
        </p>

        <p className="text-sm text-neutral-900">
          <span className="font-semibold">${listing.pricePerNight}</span>
          <span className="text-neutral-500"> night</span>
        </p>
      </div>
    </Link>
  );
};

export default ListingCard;
