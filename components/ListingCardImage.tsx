import ListingImage from "@/components/ListingImage";

type ListingCardImageProps = {
  title: string;
  location: string;
  image: string;
  isGuestFavorite?: boolean;
  priority?: boolean;
  compact?: boolean;
};

const ListingCardImage = ({
  title,
  location,
  image,
  isGuestFavorite,
  priority = false,
  compact = false,
}: ListingCardImageProps) => {
  const imageSizes = compact
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
    : "(max-width: 768px) 100vw, 33vw";

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
      <ListingImage
        src={image}
        alt={`${title} in ${location}`}
        sizes={imageSizes}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={priority}
      />

      {isGuestFavorite && (
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-neutral-800 shadow-sm">
          Guest favorite
        </span>
      )}

      <button
        type="button"
        aria-label="Save listing"
        onClick={(event) => event.preventDefault()}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white drop-shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListingCardImage;
