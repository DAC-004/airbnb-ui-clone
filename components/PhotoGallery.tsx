"use client";

import PhotoGalleryControls from "@/components/PhotoGalleryControls";
import PhotoGalleryGrid from "@/components/PhotoGalleryGrid";
import ListingImage from "@/components/ListingImage";

type PhotoGalleryProps = {
  photos: string[];
  title: string;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
};

const PhotoGallery = ({
  photos,
  title,
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
    <>
      <PhotoGalleryGrid photos={photos} title={title} />

      <div className="relative w-full overflow-hidden rounded-3xl bg-neutral-100 md:hidden">
        {hasPhotos ? (
          <div className="relative aspect-[4/3] w-full">
            <ListingImage
              src={currentPhoto}
              alt={`${title} photo ${currentIndex + 1}`}
              sizes="100vw"
              priority={currentIndex === 0}
            />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-600">
              Photo {currentIndex + 1} of {totalPhotos}
            </span>
          </div>
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center">
            <span className="text-sm text-neutral-500">No photos available</span>
          </div>
        )}

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
    </>
  );
};

export default PhotoGallery;
