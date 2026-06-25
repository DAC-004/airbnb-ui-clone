"use client";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto border-b border-neutral-200">
      <div
        className="flex gap-6 px-4 pb-3 pt-1 md:mx-auto md:max-w-7xl md:px-6"
        role="tablist"
        aria-label="Listing categories"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(category)}
              className={`shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors md:text-base ${
                isActive
                  ? "border-neutral-800 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
