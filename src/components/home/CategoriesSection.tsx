'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import {
  FaTshirt,
  FaLaptop,
  FaShoppingBasket,
  FaCouch,
  FaDumbbell,
  FaBookOpen,
  FaCarSide
} from 'react-icons/fa'

import { MdOutlinePets, MdOutlineHealthAndSafety } from 'react-icons/md'

const categories = [
  {
    id: 1,
    title: 'Fashion & Clothing',
    slug: 'fashion',
    products: '2.5K+ Products',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2070&auto=format&fit=crop',
    icon: FaTshirt
  },

  {
    id: 2,
    title: 'Electronics & Gadgets',
    slug: 'electronics',
    products: '1.8K+ Products',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop',
    icon: FaLaptop
  },

  {
    id: 3,
    title: 'Grocery & Daily Needs',
    slug: 'grocery',
    products: '3.1K+ Products',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop',
    icon: FaShoppingBasket
  },

  {
    id: 4,
    title: 'Beauty & Personal Care',
    slug: 'beauty',
    products: '1.2K+ Products',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop',
    icon: MdOutlineHealthAndSafety
  },

  {
    id: 5,
    title: 'Furniture & Home Decor',
    slug: 'furniture',
    products: '980+ Products',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
    icon: FaCouch
  },

  {
    id: 6,
    title: 'Sports & Fitness',
    slug: 'sports',
    products: '860+ Products',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    icon: FaDumbbell
  },

  {
    id: 7,
    title: 'Books & Education',
    slug: 'books',
    products: '740+ Products',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop',
    icon: FaBookOpen
  },

  {
    id: 8,
    title: 'Toys & Pet Store',
    slug: 'toys',
    products: '520+ Products',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop',
    icon: MdOutlinePets
  },

  {
    id: 9,
    title: 'Automotive & Bike Accessories',
    slug: 'automotive',
    products: '430+ Products',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    icon: FaCarSide
  }
]

export default function CategoriesSection() {
  const [showAll, setShowAll] = useState(false)

  const visibleCategories = showAll ? categories : categories.slice(0, 6)

  return (
    <section className="relative overflow-hidden bg-gray-200 py-20">
      {/* BACKGROUND EFFECT */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div
              className="
                mb-5 flex w-fit items-center gap-2
                rounded-full border border-emerald-500/20
                bg-emerald-500/10 px-4 py-2
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-xs font-bold tracking-[3px] text-emerald-600">
                TOP CATEGORIES
              </p>
            </div>

            <h2
              className="
                text-3xl font-black leading-tight text-gray-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Explore Trending
              <span className="text-emerald-600"> Categories</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-600">
              Discover premium collections with modern fashion, electronics,
              groceries, sports and lifestyle products for your next generation
              shopping experience.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              group flex w-fit items-center gap-3
              rounded-2xl border border-gray-200
              bg-white px-6 py-4
              font-semibold text-gray-900
              shadow-lg shadow-black/5
              transition-all duration-300
              hover:border-emerald-500/30
              hover:bg-emerald-500
              hover:text-white
            "
          >
            {showAll ? 'Show Less Categories' : 'View All Categories'}

            {showAll ? (
              <ChevronUp
                size={18}
                className="transition group-hover:-translate-y-1"
              />
            ) : (
              <ChevronDown
                size={18}
                className="transition group-hover:translate-y-1"
              />
            )}
          </button>
        </div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {visibleCategories.map(category => {
            const Icon = category.icon

            return (
              <Link
                key={category.id}
                href={`/shop/${category.slug}`}
                className="
                  group relative overflow-hidden rounded-4xl
                  border border-gray-200
                  bg-white
                  shadow-lg shadow-black/5
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-emerald-500/20
                "
              >
                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  {/* ICON */}
                  <div
                    className="
                      absolute left-5 top-5
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      bg-white/20
                      text-white
                      backdrop-blur-xl
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* TRENDING */}
                  <div
                    className="
                      absolute right-5 top-5
                      rounded-full
                      bg-emerald-500 px-4 py-2
                    "
                  >
                    <p className="text-xs font-bold text-white">TRENDING</p>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <div
                      className="
                        rounded-3xl
                        border border-white/10
                        bg-black/40 p-5
                        backdrop-blur-2xl
                      "
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-black text-white">
                            {category.title}
                          </h3>

                          <p className="mt-2 text-gray-300">
                            {category.products}
                          </p>
                        </div>

                        {/* BUTTON */}
                        <div
                          className="
                            flex h-12 w-12 items-center justify-center
                            rounded-2xl
                            bg-emerald-500
                            text-white
                            transition-all duration-300
                            group-hover:rotate-45
                            group-hover:scale-110
                          "
                        >
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* BOTTOM BANNER */}
        <div
          className="
            relative mt-16 overflow-hidden rounded-[40px]
            border border-gray-200
            bg-white
            p-8 shadow-xl shadow-black/5
            sm:p-10
            lg:p-14
          "
        >
          {/* GLOW */}
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-emerald-400/10 blur-[120px]" />

          <div
            className="
              relative z-10 flex flex-col gap-10
              lg:flex-row lg:items-center lg:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-2xl">
              <div
                className="
                  mb-5 flex w-fit items-center gap-2
                  rounded-full border border-emerald-500/20
                  bg-emerald-500/10 px-4 py-2
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <p className="text-xs font-bold tracking-[3px] text-emerald-600">
                  SPECIAL OFFER
                </p>
              </div>

              <h2
                className="
                  text-3xl font-black leading-tight text-gray-900
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Up To 70% Discount On
                <span className="text-emerald-600"> Premium Products</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                Limited time shopping experience with premium collections,
                futuristic gadgets and modern lifestyle products.
              </p>
            </div>

            {/* RIGHT */}
            <Link
              href="/shop"
              className="
                group flex w-fit items-center gap-3
                rounded-2xl bg-emerald-500
                px-8 py-5
                font-bold text-white
                transition-all duration-300
                hover:scale-105 hover:bg-gray-900
              "
            >
              Shop Collection
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
