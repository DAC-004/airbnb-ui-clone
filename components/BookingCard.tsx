"use client";

type BookingCardProps = {
  pricePerNight: number;
  guestCount: number;
  maxGuests?: number;
  onGuestDecrease: () => void;
  onGuestIncrease: () => void;
  onReserve?: () => void;
};

const BookingCard = ({
  pricePerNight,
  guestCount,
  maxGuests = 8,
  onGuestDecrease,
  onGuestIncrease,
  onReserve,
}: BookingCardProps) => {
  return (
    <aside className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
      <p className="mb-4 text-neutral-900">
        <span className="text-xl font-semibold md:text-2xl">
          ${pricePerNight}
        </span>
        <span className="text-neutral-500"> / night</span>
      </p>

      <div className="mb-4 rounded-lg border border-neutral-300">
        <div className="flex items-center justify-between border-b border-neutral-300 px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-800">
            Guests
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onGuestDecrease}
              disabled={guestCount <= 1}
              aria-label="Decrease guest count"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400 text-neutral-600 transition hover:border-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              &minus;
            </button>
            <span className="min-w-[1.5rem] text-center text-sm font-medium text-neutral-900">
              {guestCount}
            </span>
            <button
              type="button"
              onClick={onGuestIncrease}
              disabled={guestCount >= maxGuests}
              aria-label="Increase guest count"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400 text-neutral-600 transition hover:border-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>

        <div className="px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-800">
            Check-in / Check-out
          </p>
          <p className="mt-1 text-sm text-neutral-500">Add dates for availability</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onReserve}
        className="w-full rounded-lg bg-[#FF385C] py-3 text-sm font-semibold text-white transition hover:bg-[#E31C5F] md:text-base"
      >
        Reserve
      </button>

      <p className="mt-3 text-center text-xs text-neutral-500">
        You won&apos;t be charged yet
      </p>
    </aside>
  );
};

export default BookingCard;
