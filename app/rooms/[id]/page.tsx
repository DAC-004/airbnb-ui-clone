"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import BackToCatalog from "@/components/BackToCatalog";
import LoadingState from "@/components/LoadingState";
import PhotoGallery from "@/components/PhotoGallery";
import RoomHeader from "@/components/RoomHeader";
import HostInfo from "@/components/HostInfo";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import { getRoomById } from "@/data/listings";
import type { Room } from "@/types/listing";

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(MIN_GUESTS);

  useEffect(() => {
    setIsLoading(true);
    setIsNotFound(false);
    setRoom(null);
    setPhotoIndex(0);
    setGuestCount(MIN_GUESTS);

    const timer = setTimeout(() => {
      const foundRoom = getRoomById(id);

      if (foundRoom) {
        setRoom(foundRoom);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }

      setIsLoading(false);
    }, 800);

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
    setGuestCount((current) => Math.min(MAX_GUESTS, current + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <BackToCatalog />

        {isLoading && (
          <LoadingState message="Loading room details..." />
        )}

        {!isLoading && isNotFound && (
          <div className="py-16 text-center">
            <h1 className="text-xl font-semibold text-neutral-900 md:text-2xl">
              Room not found
            </h1>
            <p className="mt-2 text-sm text-neutral-500 md:text-base">
              We couldn&apos;t find a listing with that ID.
            </p>
            <Link
              href="/catalog"
              className="mt-6 inline-block rounded-lg bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E31C5F] md:text-base"
            >
              Back to catalog
            </Link>
          </div>
        )}

        {!isLoading && room && (
          <div className="mt-6 md:mt-8 md:grid md:grid-cols-3 md:items-start md:gap-10">
            <div className="flex flex-col gap-6 md:col-span-2 md:gap-8">
              <PhotoGallery
                photos={room.photos}
                currentIndex={photoIndex}
                onPrevious={handlePreviousPhoto}
                onNext={handleNextPhoto}
              />

              <RoomHeader
                title={room.title}
                rating={room.rating}
                reviews={room.reviews}
                location={room.location}
              />

              <HostInfo host={room.host} />

              <AmenitiesGrid amenities={room.amenities} />
            </div>

            <div className="mt-8 md:sticky md:top-24 md:col-span-1 md:mt-0">
              <BookingCard
                pricePerNight={room.pricePerNight}
                guestCount={guestCount}
                maxGuests={MAX_GUESTS}
                onGuestDecrease={handleGuestDecrease}
                onGuestIncrease={handleGuestIncrease}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RoomPage;
