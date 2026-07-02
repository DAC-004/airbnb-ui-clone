import Image from "next/image";

type ListingImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

const ListingImage = ({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  className = "object-cover",
  priority = false,
}: ListingImageProps) => {
  const isLocalAsset = src.startsWith("/images/");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={isLocalAsset}
    />
  );
};

export default ListingImage;
