import RoomOverview from "@/components/RoomOverview";
import GuestFavoriteBadge from "@/components/GuestFavoriteBadge";
import HostInfo from "@/components/HostInfo";
import RoomDescription from "@/components/RoomDescription";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import RoomHeader from "@/components/RoomHeader";
import type { Room } from "@/types/listing";

type RoomDetailMainProps = {
  room: Room;
};

const RoomDetailMain = ({ room }: RoomDetailMainProps) => {
  return (
    <div className="flex flex-col md:col-span-2">
      <RoomOverview
        propertyType={room.propertyType}
        maxGuests={room.maxGuests}
        bedrooms={room.bedrooms}
        beds={room.beds}
        baths={room.baths}
      />

      {room.isGuestFavorite && (
        <GuestFavoriteBadge rating={room.rating} reviews={room.reviews} />
      )}

      <HostInfo host={room.host} />
      <RoomDescription description={room.description} />
      <AmenitiesGrid amenities={room.amenities} />

      <div className="border-b border-neutral-200 py-6 md:hidden">
        <RoomHeader
          rating={room.rating}
          reviews={room.reviews}
          location={room.location}
        />
      </div>
    </div>
  );
};

export default RoomDetailMain;
