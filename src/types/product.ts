export interface Category {
  id: string
  title: string
  slug: string
  banner: string
  description: string
}

export interface Product {
  id: number
  title: string
  slug: string
  category: string
  brand: string
  price: number
  discountPrice: number
  stock: number
  rating: number
  reviews: number
  sku: string
  featured: boolean
  newArrival: boolean
  bestSeller: boolean
  thumbnail: string
  images: string[]
  description: string
  features: string[]
  specifications?: {
    display?: string
    storage?: string
    battery?: string
  }
  shipping: {
    freeShipping: boolean
    deliveryTime: string
    returnPolicy: string
  }
}
