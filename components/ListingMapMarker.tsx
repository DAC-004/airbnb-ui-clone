"use client";

import { Marker, Popup } from "react-leaflet";
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { createPriceMarkerIcon } from "@/utils/map";

type ListingMapMarkerProps = {
  listing: Listing;
};

const ListingMapMarker = ({ listing }: ListingMapMarkerProps) => {
  return (
    <Marker
      position={[listing.latitude, listing.longitude]}
      icon={createPriceMarkerIcon(listing.pricePerNight)}
    >
      <Popup>
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-semibold text-neutral-900">{listing.title}</p>
          <p className="text-neutral-600">{listing.location}</p>
          <p className="font-medium text-neutral-900">
            ${listing.pricePerNight} night
          </p>
          <Link
            href={`/rooms/${listing.id}`}
            className="font-medium text-[#FF385C] hover:underline"
          >
            View listing
          </Link>
        </div>
      </Popup>
    </Marker>
  );
};

export default ListingMapMarker;
