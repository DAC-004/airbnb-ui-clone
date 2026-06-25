"use client";

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

      {hasPhotos && totalPhotos > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstPhoto}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 md:left-4 md:h-10 md:w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 md:h-5 md:w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={isLastPhoto}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 md:right-4 md:h-10 md:w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 md:h-5 md:w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      {hasPhotos && totalPhotos > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 md:bottom-4">
          {photos.map((photo, index) => (
            <span
              key={photo}
              className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
