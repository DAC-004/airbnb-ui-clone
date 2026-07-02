"use client";

import { useEffect, useId, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import type { Listing } from "@/types/listing";
import ListingMapMarker from "@/components/ListingMapMarker";
import MapInvalidateSize from "@/components/MapInvalidateSize";
import MapPlaceholder from "@/components/MapPlaceholder";
import { getMapCenter } from "@/utils/map";

type ListingMapProps = {
  listings: Listing[];
};

const MAP_WRAPPER_CLASS =
  "h-72 w-full overflow-hidden rounded-xl md:h-[calc(100vh-10rem)] md:min-h-[520px]";

const ListingMap = ({ listings }: ListingMapProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const mapKey = useId();
  const center = getMapCenter(listings);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className={MAP_WRAPPER_CLASS}>
        <MapPlaceholder />
      </div>
    );
  }

  return (
    <div className={MAP_WRAPPER_CLASS} aria-label="Interactive listing map">
      <MapContainer
        key={mapKey}
        center={center}
        zoom={4}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapInvalidateSize />
        {listings.map((listing) => (
          <ListingMapMarker key={listing.id} listing={listing} />
        ))}
      </MapContainer>
    </div>
  );
};

export default ListingMap;
