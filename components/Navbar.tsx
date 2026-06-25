import Link from "next/link";
import UserMenu from "@/components/UserMenu";

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

          <UserMenu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
