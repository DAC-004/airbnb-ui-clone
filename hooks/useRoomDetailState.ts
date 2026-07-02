"use client";

import { useRoomData } from "@/hooks/useRoomData";
import { useRoomBookingState } from "@/hooks/useRoomBookingState";

export const useRoomDetailState = (id: string) => {
  const {
    room,
    isLoading,
    isNotFound,
    photoIndex,
    handlePreviousPhoto,
    handleNextPhoto,
  } = useRoomData(id);

  const booking = useRoomBookingState(
    room?.maxGuests ?? 8,
    room?.pricePerNight ?? 0,
  );

  return {
    room,
    isLoading,
    isNotFound,
    photoIndex,
    handlePreviousPhoto,
    handleNextPhoto,
    ...booking,
  };
};
