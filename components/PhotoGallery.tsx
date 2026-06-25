"use client";

import PhotoGalleryControls from "@/components/PhotoGalleryControls";

type PhotoGalleryProps = {
  photos: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
};

const PhotoGallery = ({
  photos,
  currentIndex,
  onPrevious,
  onNext,
}: PhotoGalleryProps) => {
  const totalPhotos = photos.length;
  const hasPhotos = totalPhotos > 0;
  const isFirstPhoto = currentIndex <= 0;
  const isLastPhoto = currentIndex >= totalPhotos - 1;
  const currentPhoto = hasPhotos ? photos[currentIndex] : "";

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-neutral-200">
      <div
        className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-200 md:aspect-[16/9]"
        aria-label={currentPhoto || "Room photo"}
      >
        {hasPhotos ? (
          <span className="rounded-md bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-600 md:text-sm">
            Photo {currentIndex + 1} of {totalPhotos}
          </span>
        ) : (
          <span className="text-sm text-neutral-500">No photos available</span>
        )}
      </div>

      {hasPhotos && (
        <PhotoGalleryControls
          photos={photos}
          currentIndex={currentIndex}
          isFirstPhoto={isFirstPhoto}
          isLastPhoto={isLastPhoto}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
