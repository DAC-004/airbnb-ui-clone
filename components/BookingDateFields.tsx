"use client";

type BookingDateFieldsProps = {
  checkIn: string;
  checkOut: string;
  minCheckOut?: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
};

const BookingDateFields = ({
  checkIn,
  checkOut,
  minCheckOut,
  onCheckInChange,
  onCheckOutChange,
}: BookingDateFieldsProps) => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="grid grid-cols-2 border-b border-neutral-300">
      <label className="border-r border-neutral-300 px-4 py-3">
        <span className="block text-xs font-semibold uppercase tracking-wide text-neutral-800">
          Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          min={today}
          onChange={(event) => onCheckInChange(event.target.value)}
          className="mt-1 w-full bg-transparent text-sm text-neutral-800 outline-none"
        />
      </label>

      <label className="px-4 py-3">
        <span className="block text-xs font-semibold uppercase tracking-wide text-neutral-800">
          Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          min={minCheckOut ?? today}
          disabled={!checkIn}
          onChange={(event) => onCheckOutChange(event.target.value)}
          className="mt-1 w-full bg-transparent text-sm text-neutral-800 outline-none disabled:text-neutral-400"
        />
      </label>
    </div>
  );
};

export default BookingDateFields;
