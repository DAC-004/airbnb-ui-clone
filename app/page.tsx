"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ListingGrid from "@/components/ListingGrid";
import LoadingState from "@/components/LoadingState";
import { listings as mockListings } from "@/data/listings";
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

  const filteredListings = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchesCategory =
        activeCategory === "All" || listing.category === activeCategory;

      const matchesSearch =
        query === "" ||
        listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query) ||
        listing.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [listings, searchValue, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </div>

      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        {isLoading ? (
          <LoadingState message="Finding places for you..." />
        ) : (
          <ListingGrid listings={filteredListings} />
        )}
      </main>
    </div>
  );
};

export default HomePage;
