'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Premium Fashion Collection 2026',
    subtitle:
      'Discover luxury fashion, trending outfits and premium accessories with modern shopping experience.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    tag: 'NEW ARRIVAL',
    discount: 'UP TO 50% OFF'
  },

  {
    id: 2,
    title: 'Modern Smart Gadgets & Electronics',
    subtitle:
      'Explore futuristic devices, smart watches, headphones and powerful electronics for your lifestyle.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop',
    tag: 'TRENDING PRODUCTS',
    discount: 'LIMITED OFFER'
  },

  {
    id: 3,
    title: 'Premium Gaming Setup Collection',
    subtitle:
      'Upgrade your gaming experience with premium accessories, RGB setups and next generation devices.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    tag: 'GAMING WORLD',
    discount: 'FREE SHIPPING'
  },

  {
    id: 4,
    title: 'Ultra Performance Laptop Collection',
    subtitle:
      'Discover powerful laptops with modern design, ultra-fast performance and premium features for gaming, programming and creative work.',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
    tag: 'LAPTOP COLLECTION',
    discount: 'UP TO 40% OFF'
  }
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(slider)
  }, [])

  return (
    <section className="relative overflow-hidden bg-green-700 ">
      {/* ================= SLIDER ================= */}
      <div className="relative h-180 md:h-162.5 w-full sm:h-180 lg:h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-all duration-1000
              ${
                current === index
                  ? 'z-20 opacity-100 scale-100'
                  : 'z-10 opacity-0 scale-110'
              }
            `}
          >
            {/* BACKGROUND IMAGE */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-green-700/50" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-30 flex h-full items-center">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                {/* ================= LEFT CONTENT ================= */}
                <div className="flex flex-col justify-center mt-12 md:mt-0">
                  {/* TOP TAG */}
                  <div
                    className="
                      mb-6 flex w-fit items-center gap-2
                      rounded-full border border-emerald-400/30
                      bg-emerald-400/10 px-5 py-2
                      backdrop-blur-xl
                    "
                  >
                    <Star size={16} className="text-emerald-400" />

                    <span className="text-xs font-semibold tracking-[3px] text-emerald-400">
                      {slide.tag}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h1
                    className="
                      max-w-2xl text-3xl font-black leading-tight text-white
                      sm:text-4xl
                      lg:text-6xl
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-6 max-w-xl text-base leading-8 text-gray-300
                      sm:text-lg
                    "
                  >
                    {slide.subtitle}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    {/* SHOP BUTTON */}
                    <Link
                      href="/shop"
                      className="
                        group flex items-center gap-3
                        rounded-2xl bg-emerald-400
                        px-7 py-4 font-bold text-black
                        transition-all duration-300
                        hover:scale-105 hover:bg-white
                      "
                    >
                      <ShoppingBag size={20} />
                      Shop Now
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>

                    {/* EXPLORE BUTTON */}
                    <Link
                      href="/categories"
                      className="
                        rounded-2xl border border-white/20
                        bg-white/5 px-7 py-4
                        font-semibold text-white
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:bg-white/10
                      "
                    >
                      Explore Collection
                    </Link>
                  </div>

                  {/* ANNOUNCEMENT CARD */}
                  <div
                    className="
                      mt-10 flex w-fit flex-wrap items-center gap-5
                      rounded-3xl border border-white/10
                      bg-white/5 p-5
                      backdrop-blur-2xl
                    "
                  >
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {slide.discount}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        Premium products with modern design.
                      </p>
                    </div>

                    <div className="h-12 w-px bg-white/10" />

                    <div>
                      <h4 className="text-lg font-bold text-white">15K+</h4>

                      <p className="text-sm text-gray-400">Happy Customers</p>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="hidden items-center justify-end lg:flex">
                  <div
                    className="
                      relative overflow-hidden rounded-[40px]
                      border border-white/10
                      bg-white/5 p-6
                      backdrop-blur-2xl
                    "
                  >
                    {/* PRODUCT CARD */}
                    <div className="relative h-125 w-95 overflow-hidden rounded-[30px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                      {/* PRODUCT INFO */}
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <div
                          className="
                            rounded-3xl border border-white/10
                            bg-black/40 p-5
                            backdrop-blur-2xl
                          "
                        >
                          <p className="text-sm text-emerald-400">
                            Premium Collection
                          </p>

                          <h3 className="mt-2 text-2xl font-black text-white">
                            {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
                          </h3>

                          <div className="mt-5 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-400">
                                Starting From
                              </p>

                              <h4 className="text-3xl font-black text-white">
                                $299
                              </h4>
                            </div>

                            <button
                              type="button"
                              aria-label="Shop Product"
                              title="Shop Product"
                              className="
                                rounded-2xl bg-emerald-400
                                p-4 text-black
                                transition-all duration-300
                                hover:scale-110 hover:bg-white
                              "
                            >
                              <ArrowRight size={22} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ================= SLIDER DOTS ================= */}
        <div
          className="
            absolute bottom-8 left-1/2 z-40
            flex -translate-x-1/2 items-center gap-3
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go To Slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${current === index ? 'w-10 bg-emerald-400' : 'w-3 bg-white/40'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
