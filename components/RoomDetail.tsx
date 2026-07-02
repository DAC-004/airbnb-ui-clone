"use client";

import LoadingState from "@/components/LoadingState";
import RoomNotFound from "@/components/RoomNotFound";
import RoomDetailContent from "@/components/RoomDetailContent";
import { useRoomDetailState } from "@/hooks/useRoomDetailState";

type RoomDetailProps = {
  id: string;
};

const RoomDetail = ({ id }: RoomDetailProps) => {
  const state = useRoomDetailState(id);

  if (state.isLoading) {
    return <LoadingState message="Loading room details..." />;
  }

  if (state.isNotFound) {
    return <RoomNotFound />;
  }

  if (!state.room) {
    return null;
  }

  return (
    <RoomDetailContent
      room={state.room}
      photoIndex={state.photoIndex}
      guestCount={state.guestCount}
      checkIn={state.checkIn}
      checkOut={state.checkOut}
      nights={state.nights}
      totalPrice={state.totalPrice}
      minCheckOut={state.minCheckOut}
      onPreviousPhoto={state.handlePreviousPhoto}
      onNextPhoto={state.handleNextPhoto}
      onCheckInChange={state.handleCheckInChange}
      onCheckOutChange={state.setCheckOut}
      onGuestDecrease={state.handleGuestDecrease}
      onGuestIncrease={state.handleGuestIncrease}
    />
  );
};

export default RoomDetail;
