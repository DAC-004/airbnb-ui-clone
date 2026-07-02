"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Listing } from "@/types/listing";
import {
  MAP_TILE_ATTRIBUTION,
  MAP_TILE_URL,
  MAP_WRAPPER_CLASS,
  addListingMarkersToMap,
  getMapCenter,
} from "@/utils/map";
import "leaflet/dist/leaflet.css";

type ListingMapProps = {
  listings: Listing[];
};

const ListingMap = ({ listings }: ListingMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    mapRef.current?.remove();
    mapRef.current = null;

    const map = L.map(container, { scrollWheelZoom: false }).setView(
      getMapCenter(listings),
      4,
    );

    L.tileLayer(MAP_TILE_URL, {
      attribution: MAP_TILE_ATTRIBUTION,
      maxZoom: 20,
      subdomains: "abcd",
    }).addTo(map);

    addListingMarkersToMap(map, listings);
    mapRef.current = map;

    const resizeMap = () => map.invalidateSize();
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
