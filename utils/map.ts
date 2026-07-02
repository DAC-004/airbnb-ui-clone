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
    className: "listing-map-marker",
    html: `<div style="border-radius:9999px;border:1px solid #fff;background:#171717;color:#fff;padding:4px 8px;font-size:12px;font-weight:600;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.25);white-space:nowrap;">$${pricePerNight}</div>`,
    iconSize: [56, 28],
    iconAnchor: [28, 28],
  });

export const MAP_TILE_URL =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

export const MAP_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const escapeMapHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const buildListingPopupHtml = (listing: Listing) => {
  const title = escapeMapHtml(listing.title);
  const location = escapeMapHtml(listing.location);

  return `
    <div style="display:flex;flex-direction:column;gap:4px;font-size:14px;line-height:1.4;">
      <p style="margin:0;font-weight:600;color:#171717;">${title}</p>
      <p style="margin:0;color:#737373;">${location}</p>
      <p style="margin:0;font-weight:500;color:#171717;">$${listing.pricePerNight} night</p>
      <a href="/rooms/${listing.id}" style="font-weight:500;color:#FF385C;text-decoration:none;">View listing</a>
    </div>
  `;
};

export const addListingMarkersToMap = (
  target: L.Map | L.LayerGroup,
  listings: Listing[],
) => {
  listings.forEach((listing) => {
    L.marker([listing.latitude, listing.longitude], {
      icon: createPriceMarkerIcon(listing.pricePerNight),
    })
      .addTo(target)
      .bindPopup(buildListingPopupHtml(listing));
  });
};

export const syncListingMarkers = (
  layer: L.LayerGroup,
  listings: Listing[],
) => {
  layer.clearLayers();
  addListingMarkersToMap(layer, listings);
};

export const getListingIdsKey = (listings: Listing[]) =>
  listings
    .map((listing) => listing.id)
    .sort()
    .join(",");

export const MAP_WRAPPER_CLASS =
  "h-72 w-full overflow-hidden rounded-xl md:h-[calc(100vh-10rem)] md:min-h-[520px]";
