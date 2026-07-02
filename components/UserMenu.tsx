const UserMenu = () => {
  return (
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
        strokeWidth="2"
        className="h-4 w-4 text-neutral-700"
        aria-hidden="true"
      >
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      </svg>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
};

export default UserMenu;
