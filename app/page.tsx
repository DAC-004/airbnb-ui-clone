"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import ListingGrid from "@/components/ListingGrid";
import LoadingState from "@/components/LoadingState";
import { listings as mockListings } from "@/data/listings";
import { filterListings } from "@/utils/filterListings";
import type { Listing } from "@/types/listing";

const CATEGORIES = [
  "All",
  "Beach",
  "Mansions",
  "Trending",
  "Cabins",
  "City",
  "Lakefront",
];

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(
    () => filterListings(listings, searchValue, activeCategory),
    [listings, searchValue, activeCategory],
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />

      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="mx-auto max-w-screen-2xl px-4 py-6 md:px-6 md:py-8">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900 md:text-2xl">
          Popular homes
        </h2>

        {isLoading ? (
          <LoadingState message="Finding places for you..." />
        ) : (
          <ListingGrid
            listings={filteredListings}
            prioritizeImages
            layout="home"
          />
        )}
      </main>
    </div>
  );
};

export default HomePage;
