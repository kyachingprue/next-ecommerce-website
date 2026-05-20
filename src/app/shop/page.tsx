import CategoriesSection from '@/components/home/CategoriesSection';
import ProductCard from '@/components/shop/ProductCard'
import { getAllProducts } from '@/lib/products'

const ShopPage = () => {
  const products = getAllProducts()

  return (
    <div className="container mx-auto py-10">
      {/* Categories */}
      <CategoriesSection />

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage
