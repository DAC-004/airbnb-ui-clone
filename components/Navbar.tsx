import Link from "next/link";
import AirbnbLogo from "@/components/AirbnbLogo";
import NavbarNavTabs from "@/components/NavbarNavTabs";
import NavbarActions from "@/components/NavbarActions";
import SearchBar from "@/components/SearchBar";

type NavbarProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
};

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  const showSearch =
    searchValue !== undefined && onSearchChange !== undefined;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex shrink-0 items-center gap-1">
            <AirbnbLogo />
            <span className="hidden text-xl font-semibold text-[#FF385C] md:inline">
              airbnb
            </span>
          </Link>

          <NavbarNavTabs />

          <NavbarActions />
        </div>

        {showSearch && (
          <div className="pb-4 md:pb-6">
            <SearchBar value={searchValue} onChange={onSearchChange} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
