export interface Host {
  name: string;
  yearsHosting: number;
  avatar: string;
  isSuperhost?: boolean;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  latitude: number;
  longitude: number;
  isGuestFavorite?: boolean;
}

export interface Room extends Listing {
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  host: Host;
  amenities: string[];
  photos: string[];
  description: string;
}
