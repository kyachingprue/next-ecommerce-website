'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/shop/ProductCard'
import ShopBanner from '@/components/shop/ShopBanner'

import { getAllProducts, getAllCategories } from '@/lib/products'

const ShopPage = () => {
  const allProducts = getAllProducts()
  const categories = getAllCategories()

  // Selected Category State
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter Products
  const filteredProducts =
    selectedCategory === 'all'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory)

  return (
    <div className="container mx-auto py-6 md:py-5">
      {/* Banner */}
      <ShopBanner />

      {/* Category Section */}
      <div className="mt-12">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900">
              Shop By Category
            </h2>

            <p className="text-slate-500 mt-2">
              Explore premium product categories
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* All Products Button */}
          <button
            onClick={() => setSelectedCategory('all')}
            className={`
              group relative overflow-hidden rounded-3xl border bg-white p-5
              shadow-md transition-all duration-300 hover:-translate-y-2
              hover:shadow-2xl

              ${
                selectedCategory === 'all'
                  ? 'border-cyan-500 ring-2 ring-cyan-200'
                  : 'border-slate-200'
              }
            `}
          >
            <div className="relative z-10">
              <div
                className="
                mx-auto flex h-20 w-20 items-center justify-center
                rounded-2xl bg-cyan-100 text-3xl
              "
              >
                🛍️
              </div>

              <h3 className="mt-4 text-center text-lg font-bold text-slate-900">
                All Products
              </h3>

              <p className="mt-2 text-center text-sm text-slate-500">
                Browse everything
              </p>
            </div>
          </button>

          {/* Dynamic Categories */}
          {categories.map(category => (
            <Link
              href={`/shop/${category.slug}`}
               key={category.id}
              className={`
                group relative overflow-hidden rounded-3xl border bg-white p-5
                shadow-md transition-all duration-300 hover:-translate-y-2
                hover:shadow-2xl

                ${
                  selectedCategory === category.slug
                    ? 'border-cyan-500 ring-2 ring-cyan-200'
                    : 'border-slate-200'
                }
              `}
            >
              {/* Hover Background */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-br
                  from-cyan-50
                  via-white
                  to-blue-50
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Image */}
                <div
                  className="
                    relative mx-auto h-20 w-20 overflow-hidden
                    rounded-2xl bg-slate-100
                  "
                >
                  <Image
                    src={category.banner}
                    alt={category.title}
                    fill
                    sizes="80px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4 text-center text-lg
                    font-bold text-slate-900
                  "
                >
                  {category.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2 line-clamp-2 text-center
                    text-sm text-slate-500
                  "
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mt-14">
        {/* Dynamic Title */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900">
            {selectedCategory === 'all'
              ? 'All Products'
              : `${selectedCategory} Products`}
          </h2>

          <p className="text-slate-500">
            {filteredProducts.length} Products Found
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
