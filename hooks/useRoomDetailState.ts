"use client";

import { useEffect, useMemo, useState } from "react";
import { getRoomById } from "@/data/listings";
import type { Room } from "@/types/listing";
import {
  calculateNights,
  calculateTotalPrice,
  getMinCheckOutDate,
} from "@/utils/booking";

const MIN_GUESTS = 1;

export const useRoomDetailState = (id: string) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(MIN_GUESTS);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const maxGuests = room?.maxGuests ?? 8;

  const nights = useMemo(
    () => calculateNights(checkIn, checkOut),
    [checkIn, checkOut],
  );

  const totalPrice = useMemo(
    () => calculateTotalPrice(nights, room?.pricePerNight ?? 0),
    [nights, room?.pricePerNight],
  );

  const minCheckOut = useMemo(() => getMinCheckOutDate(checkIn), [checkIn]);

  const handleCheckInChange = (value: string) => {
    setCheckIn(value);

    if (checkOut && value && checkOut <= value) {
      setCheckOut("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundRoom = getRoomById(id);

      if (foundRoom) {
        setRoom(foundRoom);
        setIsNotFound(false);
      } else {
        setRoom(null);
        setIsNotFound(true);
      }

      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handlePreviousPhoto = () => {
    setPhotoIndex((current) => Math.max(0, current - 1));
  };

  const handleNextPhoto = () => {
    if (!room) {
      return;
    }

    setPhotoIndex((current) =>
      Math.min(room.photos.length - 1, current + 1),
    );
  };

  const handleGuestDecrease = () => {
    setGuestCount((current) => Math.max(MIN_GUESTS, current - 1));
  };

  const handleGuestIncrease = () => {
    setGuestCount((current) => Math.min(maxGuests, current + 1));
  };

  return {
    room,
    isLoading,
    isNotFound,
    photoIndex,
    guestCount,
    checkIn,
    checkOut,
    nights,
    totalPrice,
    minCheckOut,
    handleCheckInChange,
    handlePreviousPhoto,
    handleNextPhoto,
    handleGuestDecrease,
    handleGuestIncrease,
    setCheckOut,
  };
};
