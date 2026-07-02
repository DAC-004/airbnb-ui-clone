"use client";

import { useEffect, useState } from "react";
import { getRoomById } from "@/data/listings";
import type { Room } from "@/types/listing";

export const useRoomData = (id: string) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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

  return {
    room,
    isLoading,
    isNotFound,
    photoIndex,
    handlePreviousPhoto,
    handleNextPhoto,
  };
};
