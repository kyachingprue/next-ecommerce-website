'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/types/product'

import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check
} from 'lucide-react'

interface Props {
  product: Product
}

export default function ProductDetailsCard({ product }: Props) {
  // ACTIVE IMAGE
  const [activeImage, setActiveImage] = useState(
    product.images?.[0] || product.thumbnail
  )

  return (
    <section className="py-5 lg:py-0">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* MAIN IMAGE */}
          <div
            className="
    group relative overflow-hidden
    w-10/12 mx-auto
    rounded-4xl
    border border-gray-300
    bg-white/80
    backdrop-blur-xl
    shadow-[0_10px_60px_rgba(0,0,0,0.08)]
    transition-all duration-500
    hover:shadow-[0_20px_80px_rgba(16,185,129,0.15)]
  "
          >
            {/* SALE BADGE */}
            <div
              className="
                absolute left-4 top-4 z-20
                rounded-full bg-emerald-500
                px-4 py-2
                text-xs font-bold uppercase tracking-wider
                text-white shadow-lg
              "
            >
              Best Seller
            </div>

            {/* MAIN PRODUCT IMAGE */}
            <div
              className="
    relative mx-auto overflow-hidden
    h-70 w-full
    sm:h-95
    md:h-112.5
    lg:h-110
  "
            >
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                loading="eager"
                sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      40vw
    "
                className="
      object-contain
      transition-all duration-700
      group-hover:scale-105
    "
              />
            </div>

            {/* OVERLAY */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-linear-to-t from-black/5 via-transparent to-transparent
              "
            />
          </div>

          {/* THUMBNAIL IMAGES */}
          <div
            className="
             mt-6 grid grid-cols-4 gap-4 sm:grid-cols-5
            ">
            {product.images?.map((image, index) => {
              const isActive = activeImage === image

              return (
                <button
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={`
                    group relative overflow-hidden
                    rounded-3xl border-2 bg-white/80 backdrop-blur-md shadow-sm
                    transition-all duration-300

                    ${
                      isActive
                        ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                        : 'border-gray-200 hover:border-emerald-300'
                    }
                  `}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image}
                      alt={product.title}
                      fill
                      sizes="120px"
                      className="
                        object-cover
                        transition duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* ACTIVE CHECK ICON */}
                  {isActive && (
                    <div
                      className="
                        absolute right-2 top-2
                        rounded-full bg-emerald-500
                        p-1 text-white shadow-md
                      "
                    >
                      <Check size={12} />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:sticky lg:top-24">
          {/* CATEGORY */}
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full bg-emerald-500/10
              px-4 py-2
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <p className="text-sm font-semibold capitalize text-emerald-600">
              {product.category}
            </p>
          </div>

          {/* TITLE */}
          <h1
            className="
    text-3xl font-black leading-tight tracking-tight
    text-gray-900
    sm:text-4xl
    lg:text-[52px]
  "
          >
            {product.title}
          </h1>

          {/* BRAND */}
          <p className="mt-3 text-base text-gray-500 sm:text-lg">
            Brand:
            <span className="ml-2 font-semibold text-gray-900">
              {product.brand}
            </span>
          </p>

          {/* RATING */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="font-bold">{product.rating}</span>
            </div>

            <p className="text-gray-500">({product.reviews} Reviews)</p>

            <div
              className="
                rounded-full bg-emerald-100
                px-3 py-1
                text-sm font-semibold text-emerald-700
              "
            >
              In Stock ({product.stock})
            </div>
          </div>

          {/* PRICE */}
          <div className=" mt-8 flex flex-wrap items-end gap-4 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
            <h2
              className="
                text-4xl font-black text-emerald-600
                sm:text-5xl
              "
            >
              ${product.discountPrice}
            </h2>

            <p className="text-xl text-gray-400 line-through sm:text-2xl">
              ${product.price}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7 leading-8 text-gray-600
              text-sm sm:text-base
            "
          >
            {product.description}
          </p>

          {/* FEATURES */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Features</h3>

            <div className="flex flex-wrap gap-3">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="
                    rounded-full border border-gray-200
                    bg-gray-100 px-4 py-2
                    text-sm font-medium text-gray-700
                    transition hover:bg-emerald-50
                  "
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* SPECIFICATIONS */}
          {product.specifications && (
            <div className="mt-10">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Specifications
              </h3>

              <div
                className="
                  space-y-4 rounded-[28px]
                  border border-gray-200
                  bg-white p-6 shadow-sm
                "
              >
                {Object.entries(product.specifications).map(
                  ([key, value]) =>
                    value && (
                      <div
                        key={key}
                        className="
                          flex items-center justify-between
                          border-b border-gray-100 pb-3
                          last:border-0 last:pb-0
                        "
                      >
                        <span className="capitalize text-gray-500">{key}</span>

                        <span className="font-semibold text-gray-900">
                          {value}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          )}

          {/* SHIPPING */}
          <div
            className="
              mt-10 rounded-[28px]
              border border-gray-200
              bg-linear-to-br from-white to-gray-50
              p-6 shadow-sm
            "
          >
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Truck className="text-emerald-500" />

                <p className="text-gray-700">
                  Delivery:
                  <span className="ml-2 font-semibold">
                    {product.shipping?.deliveryTime}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <RotateCcw className="text-emerald-500" />

                <p className="text-gray-700">
                  Return:
                  <span className="ml-2 font-semibold">
                    {product.shipping?.returnPolicy}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-emerald-500" />

                <p className="text-gray-700">
                  Free Shipping:
                  <span className="ml-2 font-semibold">
                    {product.shipping.freeShipping
                      ? 'Available'
                      : 'Not Available'}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-10 flex flex-col gap-4
              sm:flex-row
            "
          >
            <button
              className="
    group relative overflow-hidden
    flex flex-1 items-center justify-center gap-3
    rounded-2xl
    bg-linear-to-r
    from-emerald-500
    to-emerald-600
    px-8 py-4
    font-bold text-white
    shadow-lg shadow-emerald-500/30
    transition-all duration-500
    hover:-translate-y-1
    hover:shadow-2xl hover:shadow-emerald-500/40
  "
            >
              <ShoppingCart size={20} />
              Add To Cart
            </button>

            <button
              className="
                flex items-center justify-center gap-3
                rounded-2xl border border-gray-200
                bg-white px-8 py-4
                font-bold text-gray-900
                transition-all duration-300
                hover:bg-gray-100
              "
            >
              <Heart size={20} />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
