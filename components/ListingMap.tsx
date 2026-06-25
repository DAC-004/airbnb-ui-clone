"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import type { Listing } from "@/types/listing";
import ListingMapMarker from "@/components/ListingMapMarker";
import { getMapCenter } from "@/utils/map";
import "leaflet/dist/leaflet.css";

type ListingMapProps = {
  listings: Listing[];
};

const ListingMap = ({ listings }: ListingMapProps) => {
  const center = getMapCenter(listings);

  return (
    <div
      className="h-64 w-full overflow-hidden rounded-xl md:h-full md:min-h-[480px]"
      aria-label="Interactive listing map"
    >
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listings.map((listing) => (
          <ListingMapMarker key={listing.id} listing={listing} />
        ))}
      </MapContainer>
    </div>
  );
};

export default ListingMap;
