import { formatStayPrice } from "@/utils/imagePlaceholders";

type BookingCardPriceProps = {
  pricePerNight: number;
  nights: number;
  totalPrice: number | null;
};

const BookingCardPrice = ({
  pricePerNight,
  nights,
  totalPrice,
}: BookingCardPriceProps) => {
  const hasDates = totalPrice !== null && nights > 0;

  if (hasDates) {
    return (
      <p className="mb-4 text-neutral-900">
        <span className="text-xl font-semibold md:text-2xl">
          ${totalPrice.toLocaleString()}
        </span>
        <span className="text-neutral-900">
          {" "}
          for {nights} {nights === 1 ? "night" : "nights"}
        </span>
      </p>
    );
  }

  return (
    <p className="mb-4 text-neutral-900">
      <span className="text-xl font-semibold md:text-2xl">${pricePerNight}</span>
      <span className="text-neutral-500"> / night</span>
      <span className="mt-1 block text-sm text-neutral-500">
        {formatStayPrice(pricePerNight)}
      </span>
    </p>
  );
};

export default BookingCardPrice;
