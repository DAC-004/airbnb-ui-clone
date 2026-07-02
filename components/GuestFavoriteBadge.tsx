type GuestFavoriteBadgeProps = {
  rating: number;
  reviews: number;
};

const GuestFavoriteBadge = ({ rating, reviews }: GuestFavoriteBadgeProps) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-200 py-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          &#127942;
        </span>
        <div>
          <p className="font-semibold text-neutral-900">Guest favorite</p>
          <p className="text-sm text-neutral-500">
            One of the most loved homes on Airbnb
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold text-neutral-900">
          {rating.toFixed(2)}
        </p>
        <p className="text-sm text-neutral-500">
          {reviews} {reviews === 1 ? "review" : "reviews"}
        </p>
      </div>
    </div>
  );
};

export default GuestFavoriteBadge;
