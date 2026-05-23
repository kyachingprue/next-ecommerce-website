"use client";

import ProductCard from '@/components/shop/ProductCard'
import { getProductsByCategory } from '@/lib/products'
import { use, useState } from 'react'

interface Props {
  params: Promise<{
    category: string
  }>
}

export default function CategoryPage({ params }: Props) {
  const { category } = use(params)
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)

  const products = getProductsByCategory(category)
  // Products Per Page
  const productsPerPage = 12

  // Total Pages
  const totalPages = Math.ceil(products.length / productsPerPage)

  // Start & End Index
  const startIndex = (currentPage - 1) * productsPerPage

  const endIndex = startIndex + productsPerPage

  // Current Products
  const currentProducts = products.slice(startIndex, endIndex)


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
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
            className="
        rounded-full px-6 py-3
        bg-linear-to-r
        from-slate-100 to-slate-200
        text-slate-700 font-semibold
        shadow-md
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
          >
            Prev
          </button>

          {/* Dynamic Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
              h-12 w-12 rounded-full
              font-bold shadow-md
              transition-all duration-300
              hover:scale-110

              ${
                currentPage === page
                  ? 'bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-cyan-300'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }
            `}
              >
                {page}
              </button>
            )
          })}

          {/* Next */}
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
            className="
        rounded-full px-6 py-3
        bg-linear-to-r
        from-cyan-500 to-blue-500
        text-white font-semibold
        shadow-lg shadow-cyan-200
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}
