import PhotoGallery from "@/components/PhotoGallery";
import RoomTitleBar from "@/components/RoomTitleBar";
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
      <RoomTitleBar title={room.title} />

      <div className="mt-4">
        <PhotoGallery
          photos={room.photos}
          title={room.title}
          currentIndex={photoIndex}
          onPrevious={onPreviousPhoto}
          onNext={onNextPhoto}
        />
      </div>

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
