"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import CatalogHeader, { type SortOrder } from "@/components/CatalogHeader";
import ListingGrid from "@/components/ListingGrid";
import MapPlaceholder from "@/components/MapPlaceholder";
import { listings as mockListings } from "@/data/listings";

const ListingMap = dynamic(() => import("@/components/ListingMap"), {
  ssr: false,
  loading: () => <MapPlaceholder />,
});

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(() => {
    return [...mockListings].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.pricePerNight - b.pricePerNight;
      }

      return b.pricePerNight - a.pricePerNight;
    });
  }, [sortOrder]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <CatalogHeader
          resultCount={sortedListings.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-start md:gap-8">
          <section className="w-full md:flex-1">
            <ListingGrid listings={sortedListings} />
          </section>

          <aside className="w-full md:sticky md:top-24 md:w-[42%] md:shrink-0 lg:w-[38%]">
            <ListingMap listings={mockListings} />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CatalogPage;
