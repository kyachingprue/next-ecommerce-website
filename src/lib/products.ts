import data from '@/data/products.json'
import { Product, Category } from '@/types/product'

export const categories: Category[] = data.categories

export const productData: Product[] = data.products

// Get all products
export const getAllProducts = () => {
  return productData
}

// Get all categories
export const getAllCategories = () => {
  return categories
}

// Get products by category
export const getProductsByCategory = (category: string) => {
  return productData.filter(product => product.category === category)
}

// Get single product
export const getProductBySlug = (slug: string) => {
  return productData.find(product => product.slug === slug)
}
