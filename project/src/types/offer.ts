export type CityLocation = {
  latitude: number
  longitude: number
  zoom: number
};

export type City = {
  location: CityLocation
  name: string
}

export type Host = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type OfferLocation = {
  latitude: number
  longitude: number
  zoom: number
}

export type Offer = {
  bedrooms: number
  city: City
  description: string
  goods: [string]
  host: Host
  id: number
  images: [string]
  isFavorite: boolean
  isPremium: boolean
  location: OfferLocation
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}


export type Offers = Offer[]
