type RoomHeaderProps = {
  rating: number;
  reviews: number;
  location: string;
};

const RoomHeader = ({ rating, reviews, location }: RoomHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-600 md:text-base">
      <span className="flex items-center gap-1 font-medium text-neutral-900">
        <span aria-hidden="true">&#9733;</span>
        {rating.toFixed(2)}
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        {reviews} {reviews === 1 ? "review" : "reviews"}
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>{location}</span>
    </div>
  );
};

export default RoomHeader;
