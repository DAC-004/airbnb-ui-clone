"use client";

import BookingDateFields from "@/components/BookingDateFields";
import BookingGuestControls from "@/components/BookingGuestControls";
import BookingTotalSummary from "@/components/BookingTotalSummary";
import BookingReserveButton from "@/components/BookingReserveButton";
import BookingCardPrice from "@/components/BookingCardPrice";

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
  const hasDates = totalPrice !== null && nights > 0;

  return (
    <aside className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
      <BookingCardPrice
        pricePerNight={pricePerNight}
        nights={nights}
        totalPrice={totalPrice}
      />

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

      {hasDates && (
        <BookingTotalSummary
          pricePerNight={pricePerNight}
          nights={nights}
          totalPrice={totalPrice}
        />
      )}

      <BookingReserveButton onReserve={onReserve} />
    </aside>
  );
};

export default BookingCard;
