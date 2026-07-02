"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapInvalidateSize = () => {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();

    const timer = window.setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

export default MapInvalidateSize;
