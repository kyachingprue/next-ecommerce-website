import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-xl p-4">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-4">{product.title}</h2>

      <p className="text-gray-500">{product.brand}</p>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-2xl font-bold">${product.discountPrice}</span>

        <span className="line-through text-gray-400">${product.price}</span>
      </div>

      <Link
        href={`/shop/${product.category}/${product.slug}`}
        className="inline-block mt-4 text-blue-500"
      >
        View Details
      </Link>
    </div>
  )
}

export default ProductCard
