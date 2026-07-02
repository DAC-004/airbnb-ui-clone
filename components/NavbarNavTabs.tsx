const NAV_TABS = [
  { label: "Homes", isActive: true },
  { label: "Experiences", badge: "NEW" },
  { label: "Services", badge: "NEW" },
] as const;

const NavbarNavTabs = () => {
  return (
    <nav
      className="hidden items-center gap-6 md:flex"
      aria-label="Primary navigation"
    >
      {NAV_TABS.map((tab) => (
        <button
          key={tab.label}
          type="button"
          className={`relative pb-3 text-sm font-medium transition ${
            "isActive" in tab && tab.isActive
              ? "border-b-2 border-neutral-900 text-neutral-900"
              : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          {tab.label}
          {"badge" in tab && (
            <span className="absolute -right-4 -top-1 rounded bg-neutral-900 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default NavbarNavTabs;
