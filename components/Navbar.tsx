import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-xl font-semibold text-[#FF385C] md:text-2xl"
        >
          <span aria-hidden="true">&#8962;</span>
          <span>airbnb</span>
        </Link>

        <nav
          className="flex items-center gap-3 md:gap-4"
          aria-label="User navigation"
        >
          <Link
            href="/catalog"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 md:inline-block"
          >
            Explore
          </Link>

          <button
            type="button"
            className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Switch to hosting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15m-7.5 0v18m-7.5-9h15"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-300 p-1 pl-3 hover:shadow-md"
            aria-label="Open user menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 text-neutral-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
