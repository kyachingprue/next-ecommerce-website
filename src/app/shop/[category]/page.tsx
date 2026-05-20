import ProductCard from '@/components/shop/ProductCard'
import { getProductsByCategory } from '@/lib/products'

interface Props {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params

  const products = getProductsByCategory(category)

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="mb-10 text-4xl font-black capitalize">{category}</h1>

      <div
        className="
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
