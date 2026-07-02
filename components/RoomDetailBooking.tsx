import BookingCard from "@/components/BookingCard";

type RoomDetailBookingProps = {
  pricePerNight: number;
  guestCount: number;
  maxGuests: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: number | null;
  minCheckOut?: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestDecrease: () => void;
  onGuestIncrease: () => void;
};

const RoomDetailBooking = ({
  pricePerNight,
  guestCount,
  maxGuests,
  checkIn,
  checkOut,
  nights,
  totalPrice,
  minCheckOut,
  onCheckInChange,
  onCheckOutChange,
  onGuestDecrease,
  onGuestIncrease,
}: RoomDetailBookingProps) => {
  return (
    <div className="mt-8 md:sticky md:top-24 md:col-span-1 md:mt-0">
      <BookingCard
        pricePerNight={pricePerNight}
        guestCount={guestCount}
        maxGuests={maxGuests}
        checkIn={checkIn}
        checkOut={checkOut}
        nights={nights}
        totalPrice={totalPrice}
        minCheckOut={minCheckOut}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
        onGuestDecrease={onGuestDecrease}
        onGuestIncrease={onGuestIncrease}
      />
    </div>
  );
};

export default RoomDetailBooking;
