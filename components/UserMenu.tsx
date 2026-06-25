const UserMenu = () => {
  return (
    <>
      <button
        type="button"
        className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
        aria-label="Switch to hosting"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          ⊞
        </span>
      </button>

      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-neutral-300 p-1 pl-3 hover:shadow-md"
        aria-label="Open user menu"
      >
        <span aria-hidden="true" className="text-sm text-neutral-700">
          ☰
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-500 text-sm text-white">
          ☺
        </span>
      </button>
    </>
  );
};

export default UserMenu;
