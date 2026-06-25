"use client";

type PhotoGalleryControlsProps = {
  photos: string[];
  currentIndex: number;
  isFirstPhoto: boolean;
  isLastPhoto: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

const navButtonClassName =
  "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg text-neutral-800 shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 md:h-10 md:w-10";

const PhotoGalleryControls = ({
  photos,
  currentIndex,
  isFirstPhoto,
  isLastPhoto,
  onPrevious,
  onNext,
}: PhotoGalleryControlsProps) => {
  if (photos.length <= 1) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPhoto}
        aria-label="Previous photo"
        className={`left-3 md:left-4 ${navButtonClassName}`}
      >
        ‹
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLastPhoto}
        aria-label="Next photo"
        className={`right-3 md:right-4 ${navButtonClassName}`}
      >
        ›
      </button>

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
    </>
  );
};

export default PhotoGalleryControls;
