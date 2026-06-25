"use client";

import BookingDateFields from "@/components/BookingDateFields";
import BookingGuestControls from "@/components/BookingGuestControls";
import BookingTotalSummary from "@/components/BookingTotalSummary";

type BookingCardProps = {
  pricePerNight: number;
  guestCount: number;
  maxGuests?: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: number | null;
  minCheckOut?: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestDecrease: () => void;
  onGuestIncrease: () => void;
  onReserve?: () => void;
};

const BookingCard = ({
  pricePerNight,
  guestCount,
  maxGuests = 8,
  checkIn,
  checkOut,
  nights,
  totalPrice,
  minCheckOut,
  onCheckInChange,
  onCheckOutChange,
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

      <div className="mb-4 overflow-hidden rounded-lg border border-neutral-300">
        <BookingDateFields
          checkIn={checkIn}
          checkOut={checkOut}
          minCheckOut={minCheckOut}
          onCheckInChange={onCheckInChange}
          onCheckOutChange={onCheckOutChange}
        />

        <BookingGuestControls
          guestCount={guestCount}
          maxGuests={maxGuests}
          onGuestDecrease={onGuestDecrease}
          onGuestIncrease={onGuestIncrease}
        />
      </div>

      {totalPrice !== null && nights > 0 && (
        <BookingTotalSummary
          pricePerNight={pricePerNight}
          nights={nights}
          totalPrice={totalPrice}
        />
      )}

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
