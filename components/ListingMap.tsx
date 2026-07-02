"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Listing } from "@/types/listing";
import {
  MAP_TILE_ATTRIBUTION,
  MAP_TILE_URL,
  buildListingPopupHtml,
  createPriceMarkerIcon,
  getMapCenter,
} from "@/utils/map";
import "leaflet/dist/leaflet.css";

type ListingMapProps = {
  listings: Listing[];
};

const MAP_WRAPPER_CLASS =
  "h-72 w-full overflow-hidden rounded-xl md:h-[calc(100vh-10rem)] md:min-h-[520px]";

const ListingMap = ({ listings }: ListingMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = L.map(container, { scrollWheelZoom: false }).setView(
      getMapCenter(listings),
      4,
    );

    L.tileLayer(MAP_TILE_URL, {
      attribution: MAP_TILE_ATTRIBUTION,
      maxZoom: 20,
      subdomains: "abcd",
    }).addTo(map);

    listings.forEach((listing) => {
      L.marker([listing.latitude, listing.longitude], {
        icon: createPriceMarkerIcon(listing.pricePerNight),
      })
        .addTo(map)
        .bindPopup(buildListingPopupHtml(listing));
    });

    mapRef.current = map;

    const resizeMap = () => {
      map.invalidateSize();
    };

    resizeMap();
    const timer = window.setTimeout(resizeMap, 200);
    window.addEventListener("resize", resizeMap);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resizeMap);
      map.remove();
      mapRef.current = null;
    };
  }, [listings]);

  return (
    <div className={MAP_WRAPPER_CLASS} aria-label="Interactive listing map">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
};

export default ListingMap;
