type BookingTotalSummaryProps = {
  pricePerNight: number;
  nights: number;
  totalPrice: number;
};

const BookingTotalSummary = ({
  pricePerNight,
  nights,
  totalPrice,
}: BookingTotalSummaryProps) => {
  return (
    <div className="mb-4 space-y-1 text-sm text-neutral-700">
      <p>
        ${pricePerNight} × {nights} {nights === 1 ? "night" : "nights"}
      </p>
      <p className="text-base font-semibold text-neutral-900">
        Total ${totalPrice}
      </p>
    </div>
  );
};

export default BookingTotalSummary;
