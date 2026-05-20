import ProductDetailsCard from '@/components/shop/ProductDetailsCard'
import { getProductBySlug } from '@/lib/products'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{
    category: string
    slug: string
  }>
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <ProductDetailsCard product={product} />
    </main>
  )
}
