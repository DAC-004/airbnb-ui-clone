"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabClassName = (isActive: boolean) =>
  `relative pb-3 text-sm font-medium transition ${
    isActive
      ? "border-b-2 border-neutral-900 text-neutral-900"
      : "text-neutral-500 hover:text-neutral-800"
  }`;

const NavbarNavTabs = () => {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-6 md:flex"
      aria-label="Primary navigation"
    >
      <Link href="/" className={tabClassName(pathname === "/")}>
        Homes
      </Link>

      <Link href="/catalog" className={tabClassName(pathname === "/catalog")}>
        Explore
      </Link>

      <button
        type="button"
        className="relative pb-3 text-sm font-medium text-neutral-500 transition hover:text-neutral-800"
      >
        Experiences
        <span className="absolute -right-4 -top-1 rounded bg-neutral-900 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          NEW
        </span>
      </button>

      <button
        type="button"
        className="relative pb-3 text-sm font-medium text-neutral-500 transition hover:text-neutral-800"
      >
        Services
        <span className="absolute -right-4 -top-1 rounded bg-neutral-900 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          NEW
        </span>
      </button>
    </nav>
  );
};

export default NavbarNavTabs;
