export const formatStayPrice = (
  pricePerNight: number,
  nights = 2,
): string => `$${(pricePerNight * nights).toLocaleString()} for ${nights} nights`;
