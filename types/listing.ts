export interface Host {
  name: string;
  yearsHosting: number;
  avatar: string;
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
}

export interface Room extends Listing {
  host: Host;
  amenities: string[];
  photos: string[];
  description: string;
}
