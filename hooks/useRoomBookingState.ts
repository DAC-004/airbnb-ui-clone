"use client";

import { useMemo, useState } from "react";
import {
  calculateNights,
  calculateTotalPrice,
  getMinCheckOutDate,
} from "@/utils/booking";

const MIN_GUESTS = 1;

export const useRoomBookingState = (
  maxGuests: number,
  pricePerNight: number,
) => {
  const [guestCount, setGuestCount] = useState(MIN_GUESTS);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights = useMemo(
    () => calculateNights(checkIn, checkOut),
    [checkIn, checkOut],
  );

  const totalPrice = useMemo(
    () => calculateTotalPrice(nights, pricePerNight),
    [nights, pricePerNight],
  );

  const minCheckOut = useMemo(() => getMinCheckOutDate(checkIn), [checkIn]);

  const handleCheckInChange = (value: string) => {
    setCheckIn(value);

    if (checkOut && value && checkOut <= value) {
      setCheckOut("");
    }
  };

  const handleGuestDecrease = () => {
    setGuestCount((current) => Math.max(MIN_GUESTS, current - 1));
  };

  const handleGuestIncrease = () => {
    setGuestCount((current) => Math.min(maxGuests, current + 1));
  };

  return {
    guestCount,
    checkIn,
    checkOut,
    nights,
    totalPrice,
    minCheckOut,
    handleCheckInChange,
    handleGuestDecrease,
    handleGuestIncrease,
    setCheckOut,
  };
};
