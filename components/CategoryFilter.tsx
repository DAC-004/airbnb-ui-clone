"use client";

const CATEGORY_ICONS: Record<string, string> = {
  All: "🏠",
  Beach: "🏖",
  Mansions: "🏛",
  Trending: "🔥",
  Cabins: "🌲",
  City: "🌆",
  Lakefront: "⛵",
};

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
        className="flex gap-8 px-4 pb-0 pt-2 md:mx-auto md:max-w-screen-2xl md:px-6"
        role="tablist"
        aria-label="Listing categories"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const icon = CATEGORY_ICONS[category] ?? "•";

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(category)}
              className={`flex shrink-0 flex-col items-center gap-1.5 border-b-2 pb-3 pt-1 text-xs font-medium transition-colors md:text-sm ${
                isActive
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
              }`}
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                {icon}
              </span>
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
