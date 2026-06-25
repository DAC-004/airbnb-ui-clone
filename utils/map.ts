import L from "leaflet";
import type { Listing } from "@/types/listing";

const DEFAULT_CENTER: [number, number] = [39.8283, -98.5795];

export const getMapCenter = (listings: Listing[]): [number, number] => {
  if (listings.length === 0) {
    return DEFAULT_CENTER;
  }

  const latitude =
    listings.reduce((sum, listing) => sum + listing.latitude, 0) /
    listings.length;
  const longitude =
    listings.reduce((sum, listing) => sum + listing.longitude, 0) /
    listings.length;

  return [latitude, longitude];
};

export const createPriceMarkerIcon = (pricePerNight: number) =>
  L.divIcon({
    className: "",
    html: `<div class="rounded-full border border-white bg-neutral-900 px-2 py-1 text-xs font-semibold text-white shadow-md">$${pricePerNight}</div>`,
    iconSize: [56, 28],
    iconAnchor: [28, 28],
  });
