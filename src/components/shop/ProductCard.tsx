import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link href={`/shop/${product.category}/${product.slug}`}>
          <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />
          </div>
        </Link>

        {/* Overlay Gradient */}
        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/50
            via-black/10
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Top Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.newArrival && (
            <span
              className="
                rounded-full
                bg-cyan-500
                px-4
                py-1
                text-xs
                font-semibold
                text-white
                shadow-lg
              "
            >
              New
            </span>
          )}

          {product.bestSeller && (
            <span
              className="
                rounded-full
                bg-orange-500
                px-4
                py-1
                text-xs
                font-semibold
                text-white
                shadow-lg
              "
            >
              Best Seller
            </span>
          )}
        </div>

        {/* Discount Badge */}
        <div className="absolute right-4 top-4">
          <span
            className="
              rounded-full
              bg-red-500
              px-4
              py-1.5
              text-sm
              font-bold
              text-white
              shadow-lg
            "
          >
            -
            {Math.round(
              ((product.price - product.discountPrice) / product.price) * 100
            )}
            %
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Category */}
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-wider
            text-cyan-600
          "
        >
          {product.category}
        </p>

        {/* Title */}
        <Link href={`/shop/${product.category}/${product.slug}`}>
          <h2
            className="
              mt-2
              line-clamp-2
              text-xl
              font-bold
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-cyan-600
            "
          >
            {product.title}
          </h2>
        </Link>

        {/* Brand */}
        <p className="mt-2 text-sm text-slate-500">Brand: {product.brand}</p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
          </div>

          <span className="text-sm text-slate-500">
            ({product.reviews} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-3xl font-black text-slate-900">
            ${product.discountPrice}
          </span>

          <span className="text-lg text-slate-400 line-through">
            ${product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/shop/${product.category}/${product.slug}`}
            className="
              flex-1
              rounded-2xl
              bg-slate-900
              px-5
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-cyan-500
            "
          >
            View Details
          </Link>

          <button
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3
              text-slate-700
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-50
              hover:text-cyan-600
            "
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
