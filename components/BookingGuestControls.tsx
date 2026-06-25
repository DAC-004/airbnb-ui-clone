type BookingGuestControlsProps = {
  guestCount: number;
  maxGuests: number;
  onGuestDecrease: () => void;
  onGuestIncrease: () => void;
};

const BookingGuestControls = ({
  guestCount,
  maxGuests,
  onGuestDecrease,
  onGuestIncrease,
}: BookingGuestControlsProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
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
  );
};

export default BookingGuestControls;
