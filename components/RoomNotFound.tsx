import Link from "next/link";

const RoomNotFound = () => {
  return (
    <div className="py-16 text-center">
      <h1 className="text-xl font-semibold text-neutral-900 md:text-2xl">
        Room not found
      </h1>
      <p className="mt-2 text-sm text-neutral-500 md:text-base">
        We couldn&apos;t find a listing with that ID.
      </p>
      <Link
        href="/catalog"
        className="mt-6 inline-block rounded-lg bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E31C5F] md:text-base"
      >
        Back to catalog
      </Link>
    </div>
  );
};

export default RoomNotFound;
