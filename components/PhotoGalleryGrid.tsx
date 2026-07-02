import ListingImage from "@/components/ListingImage";

type PhotoGalleryGridProps = {
  photos: string[];
  title: string;
};

const PhotoGalleryGrid = ({ photos, title }: PhotoGalleryGridProps) => {
  const gridPhotos = photos.slice(0, 5);

  if (gridPhotos.length === 0) {
    return null;
  }

  return (
    <div className="hidden h-[480px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl md:grid">
      <div className="relative col-span-2 row-span-2 bg-neutral-100">
        <ListingImage
          src={gridPhotos[0]}
          alt={`${title} photo 1`}
          sizes="50vw"
          priority
        />
      </div>

      {gridPhotos.slice(1).map((photo, index) => (
        <div key={photo} className="relative bg-neutral-100">
          <ListingImage
            src={photo}
            alt={`${title} photo ${index + 2}`}
            sizes="25vw"
          />
          {index === gridPhotos.length - 2 && gridPhotos.length >= 5 && (
            <button
              type="button"
              className="absolute bottom-4 right-4 rounded-lg border border-neutral-900 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm"
            >
              Show all photos
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGalleryGrid;
