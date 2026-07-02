type BookingReserveButtonProps = {
  onReserve?: () => void;
};

const BookingReserveButton = ({ onReserve }: BookingReserveButtonProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onReserve}
        className="w-full rounded-lg bg-[#FF385C] py-3 text-sm font-semibold text-white transition hover:bg-[#E31C5F] md:text-base"
      >
        Reserve
      </button>

      <p className="mt-3 text-center text-xs text-neutral-500">
        You won&apos;t be charged yet
      </p>
    </>
  );
};

export default BookingReserveButton;
