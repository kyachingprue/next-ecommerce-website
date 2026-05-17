'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Shirt,
  Headphones,
  Smartphone,
  Gamepad2,
  Watch,
  Laptop
} from 'lucide-react'

const categories = [
  {
    id: 1,
    title: 'Fashion',
    products: '2.5K+ Products',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2070&auto=format&fit=crop',
    icon: Shirt
  },

  {
    id: 2,
    title: 'Electronics',
    products: '1.8K+ Products',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop',
    icon: Smartphone
  },

  {
    id: 3,
    title: 'Gaming',
    products: '950+ Products',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    icon: Gamepad2
  },

  {
    id: 4,
    title: 'Audio',
    products: '1.2K+ Products',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    icon: Headphones
  },

  {
    id: 5,
    title: 'Smart Watch',
    products: '650+ Products',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    icon: Watch
  },

  {
    id: 6,
    title: 'Laptop',
    products: '890+ Products',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
    icon: Laptop
  }
]

export default function CategoriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white">
      {/* ================= BACKGROUND EFFECT ================= */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div
              className="
                mb-5 flex w-fit items-center gap-2
                rounded-full border border-emerald-400/20
                bg-emerald-400/10 px-4 py-2
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <p className="text-xs font-semibold tracking-[3px] text-emerald-400">
                TOP CATEGORIES
              </p>
            </div>

            <h2
              className="
                text-3xl font-black leading-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Explore Premium
              <span className="text-emerald-400"> Categories</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              Discover modern collections with premium fashion, gaming,
              electronics and lifestyle products for your next generation
              shopping experience.
            </p>
          </div>

          {/* RIGHT */}
          <Link
            href="/categories"
            className="
              group flex w-fit items-center gap-3
              rounded-2xl border border-white/10
              bg-white/5 px-6 py-4
              font-semibold text-white
              backdrop-blur-xl
              transition-all duration-300
              hover:border-emerald-400/30
              hover:bg-emerald-400
              hover:text-black
            "
          >
            View All Categories
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {categories.map(category => {
            const Icon = category.icon

            return (
              <Link
                key={category.id}
                href="/shop"
                className="
                  group relative overflow-hidden rounded-4xl
                  border border-white/10
                  bg-white/5
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-emerald-400/30
                "
              >
                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className=" object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                  {/* ICON */}
                  <div
                    className="
                      absolute left-5 top-5
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl border border-white/10
                      bg-black/40
                      text-white backdrop-blur-2xl
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* FLOATING TAG */}
                  <div
                    className="
                      absolute right-5 top-5
                      rounded-full border border-emerald-400/20
                      bg-emerald-400/10 px-4 py-2
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs font-semibold text-emerald-400">
                      TRENDING
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <div
                      className="
                        rounded-3xl border border-white/10
                        bg-black/40 p-5
                        backdrop-blur-2xl
                      "
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-black text-white">
                            {category.title}
                          </h3>

                          <p className="mt-2 text-gray-400">
                            {category.products}
                          </p>
                        </div>

                        {/* BUTTON */}
                        <div
                          className="
                            flex h-12 w-12 items-center justify-center
                            rounded-2xl bg-emerald-400
                            text-black
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

        {/* ================= BOTTOM BANNER ================= */}
        <div
          className="
            relative mt-16 overflow-hidden rounded-[40px]
            border border-white/10
            bg-linear-to-r from-emerald-500/20 via-white/5 to-emerald-400/10
            p-8
            backdrop-blur-2xl
            sm:p-10
            lg:p-14
          "
        >
          {/* GLOW */}
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-emerald-400/20 blur-[120px]" />

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
                  rounded-full border border-white/10
                  bg-white/5 px-4 py-2
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <p className="text-xs font-semibold tracking-[3px] text-emerald-400">
                  SPECIAL OFFER
                </p>
              </div>

              <h2
                className="
                  text-3xl font-black leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Up To 70% Discount On
                <span className="text-emerald-400"> Premium Products</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-300">
                Limited time shopping experience with premium collections,
                futuristic gadgets and modern fashion products.
              </p>
            </div>

            {/* RIGHT */}
            <Link
              href="/shop"
              className="
                group flex w-fit items-center gap-3
                rounded-2xl bg-emerald-400
                px-8 py-5
                font-bold text-black
                transition-all duration-300
                hover:scale-105 hover:bg-white
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
