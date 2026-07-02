import PhotoGallery from "@/components/PhotoGallery";
import RoomTitleBar from "@/components/RoomTitleBar";
import RoomHeader from "@/components/RoomHeader";

type RoomDetailHeroProps = {
  title: string;
  photos: string[];
  photoIndex: number;
  rating: number;
  reviews: number;
  location: string;
  onPreviousPhoto: () => void;
  onNextPhoto: () => void;
};

const RoomDetailHero = ({
  title,
  photos,
  photoIndex,
  rating,
  reviews,
  location,
  onPreviousPhoto,
  onNextPhoto,
}: RoomDetailHeroProps) => {
  return (
    <>
      <RoomTitleBar title={title} />

      <div className="mt-4">
        <PhotoGallery
          photos={photos}
          title={title}
          currentIndex={photoIndex}
          onPrevious={onPreviousPhoto}
          onNext={onNextPhoto}
        />
      </div>

      <div className="mt-6">
        <RoomHeader
          title={title}
          rating={rating}
          reviews={reviews}
          location={location}
        />
      </div>
    </>
  );
};

export default RoomDetailHero;
