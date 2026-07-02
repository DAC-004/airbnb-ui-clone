import type { Listing } from "@/types/listing";

export const filterListings = (
  listings: Listing[],
  searchValue: string,
  activeCategory: string,
) => {
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
};
