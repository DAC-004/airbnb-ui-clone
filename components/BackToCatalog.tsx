import Link from "next/link";

const BackToCatalog = () => {
  return (
    <nav aria-label="Breadcrumb">
      <Link
        href="/catalog"
        className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 transition hover:text-neutral-900 md:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Back to catalog
      </Link>
    </nav>
  );
};

export default BackToCatalog;
