import Link from "next/link";
import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-200">
        <div
          className="flex h-full w-full items-end justify-start bg-gradient-to-br from-neutral-300 to-neutral-200 p-3 transition-transform duration-300 group-hover:scale-105"
          aria-label={listing.title}
        >
          <span className="rounded-md bg-white/80 px-2 py-1 text-xs font-medium text-neutral-600">
            {listing.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900 md:text-base">
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
