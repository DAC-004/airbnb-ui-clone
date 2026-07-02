import RoomDetailHero from "@/components/RoomDetailHero";
import RoomDetailMain from "@/components/RoomDetailMain";
import RoomDetailBooking from "@/components/RoomDetailBooking";
import type { Room } from "@/types/listing";

type RoomDetailContentProps = {
  room: Room;
  photoIndex: number;
  guestCount: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  totalPrice: number | null;
  minCheckOut?: string;
  onPreviousPhoto: () => void;
  onNextPhoto: () => void;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestDecrease: () => void;
  onGuestIncrease: () => void;
};

const RoomDetailContent = ({
  room,
  photoIndex,
  guestCount,
  checkIn,
  checkOut,
  nights,
  totalPrice,
  minCheckOut,
  onPreviousPhoto,
  onNextPhoto,
  onCheckInChange,
  onCheckOutChange,
  onGuestDecrease,
  onGuestIncrease,
}: RoomDetailContentProps) => {
  return (
    <>
      <RoomDetailHero
        title={room.title}
        photos={room.photos}
        photoIndex={photoIndex}
        rating={room.rating}
        reviews={room.reviews}
        location={room.location}
        onPreviousPhoto={onPreviousPhoto}
        onNextPhoto={onNextPhoto}
      />

      <div className="mt-6 md:mt-8 md:grid md:grid-cols-3 md:items-start md:gap-10">
        <RoomDetailMain room={room} />

        <RoomDetailBooking
          pricePerNight={room.pricePerNight}
          guestCount={guestCount}
          maxGuests={room.maxGuests}
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
    </>
  );
};

export default RoomDetailContent;
