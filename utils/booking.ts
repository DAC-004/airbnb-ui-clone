export const calculateNights = (checkIn: string, checkOut: string): number => {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
    return 0;
  }

  const millisecondsPerNight = 1000 * 60 * 60 * 24;

  return Math.round((end.getTime() - start.getTime()) / millisecondsPerNight);
};

export const calculateTotalPrice = (
  nights: number,
  pricePerNight: number,
): number | null => {
  if (nights <= 0) {
    return null;
  }

  return nights * pricePerNight;
};

export const getMinCheckOutDate = (checkIn: string): string | undefined => {
  if (!checkIn) {
    return undefined;
  }

  const start = new Date(`${checkIn}T00:00:00`);

  if (Number.isNaN(start.getTime())) {
    return undefined;
  }

  start.setDate(start.getDate() + 1);

  return start.toISOString().slice(0, 10);
};
