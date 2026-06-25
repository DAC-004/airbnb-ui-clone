"use client";

export type SortOrder = "asc" | "desc";

type CatalogHeaderProps = {
  resultCount: number;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
};

const CatalogHeader = ({
  resultCount,
  sortOrder,
  onSortChange,
}: CatalogHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 border-b border-neutral-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-neutral-600 md:text-base">
        <span className="font-semibold text-neutral-900">{resultCount}</span>{" "}
        {resultCount === 1 ? "stay" : "stays"} available
      </p>

      <div className="flex items-center gap-2">
        <label
          htmlFor="sort-order"
          className="text-sm font-medium text-neutral-700"
        >
          Sort by price
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(event) =>
            onSortChange(event.target.value as SortOrder)
          }
          className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-neutral-800"
        >
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogHeader;
