'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock3, Flame, ShoppingBag, Zap } from 'lucide-react'


export default function DealsPage() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] grid-pattern" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Hero Section */}
        <div
          className="
            relative overflow-hidden rounded-[40px]
            border border-slate-100
            bg-linear-to-br from-white via-cyan-50 to-blue-50
            px-6 py-14 shadow-2xl shadow-cyan-100
            md:px-12 lg:px-16
          "
        >
          {/* Floating Glow */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-200 blur-3xl opacity-40" />

          <div
            className="
              grid items-center gap-14
              lg:grid-cols-2
            "
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-red-100
                  px-5 py-2 text-sm
                  font-bold text-red-600
                "
              >
                <Flame className="h-4 w-4" />
                Limited Time Flash Deals
              </div>

              <h1
                className="
                  mt-6 text-4xl font-black
                  leading-tight text-slate-900
                  md:text-6xl
                "
              >
                Mega Shopping
                <span
                  className="
                    block bg-linear-to-r
                    from-cyan-500 via-blue-500 to-indigo-500
                    bg-clip-text text-transparent
                  "
                >
                  Deals & Discounts
                </span>
              </h1>

              <p
                className="
                  mt-6 max-w-2xl
                  text-base leading-8 text-slate-500
                  md:text-lg
                "
              >
                Explore premium products with exclusive discounts, modern
                gadgets, trending fashion and limited-time offers crafted for
                your ultimate shopping experience.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className="
                    flex items-center gap-3
                    rounded-full bg-white
                    px-5 py-3 shadow-lg
                  "
                >
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-slate-700">
                    Fast Delivery
                  </span>
                </div>

                <div
                  className="
                    flex items-center gap-3
                    rounded-full bg-white
                    px-5 py-3 shadow-lg
                  "
                >
                  <ShoppingBag className="h-5 w-5 text-cyan-500" />
                  <span className="font-semibold text-slate-700">
                    Premium Products
                  </span>
                </div>

                <div
                  className="
                    flex items-center gap-3
                    rounded-full bg-white
                    px-5 py-3 shadow-lg
                  "
                >
                  <Clock3 className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-slate-700">
                    24/7 Support
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="
                    inline-flex items-center gap-3
                    rounded-full bg-linear-to-r
                    from-cyan-500 via-blue-500 to-indigo-500
                    px-8 py-4 text-lg
                    font-bold text-white
                    shadow-xl shadow-cyan-200
                    transition-all duration-300
                    hover:scale-105 hover:shadow-2xl
                  "
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/contact"
                  className="
                    rounded-full border
                    border-slate-200 bg-white
                    px-8 py-4 text-lg
                    font-bold text-slate-700
                    shadow-lg transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="
                  relative overflow-hidden rounded-[40px]
                  border border-white/40
                  bg-white p-4 shadow-2xl
                "
              >
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop"
                  alt="Deals Banner"
                  width={700}
                  height={500}
                  className="
                    h-87.5 w-full rounded-[30px]
                    object-cover md:h-125
                  "
                />

                {/* Floating Card */}
                <div
                  className="
                    absolute bottom-6 left-6
                    rounded-3xl bg-white/90
                    px-6 py-4 backdrop-blur-xl
                    shadow-xl
                  "
                >
                  <p className="text-sm font-semibold text-slate-500">
                    Today Special Offer
                  </p>

                  <h3 className="mt-1 text-3xl font-black text-slate-900">
                    Up To 70% OFF
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Seller Deals Section */}
        <div className="mt-20">
          {/* Heading */}
          <div
            className="
      flex flex-col gap-6
      md:flex-row md:items-center
      md:justify-between
    "
          >
            <div>
              <div
                className="
          inline-flex items-center gap-2
          rounded-full bg-cyan-50
          px-5 py-2 text-sm
          font-bold text-cyan-700
        "
              >
                🤝 Seller Partnership Program
              </div>

              <h2
                className="
          mt-5 text-4xl font-black
          leading-tight text-slate-900
        "
              >
                Sell Your Products
                <span
                  className="
            block bg-linear-to-r
            from-cyan-500 via-blue-500 to-indigo-500
            bg-clip-text text-transparent
          "
                >
                  Partner With Our Marketplace
                </span>
              </h2>

              <p
                className="
          mt-4 max-w-2xl
          text-base leading-8 text-slate-500
        "
              >
                Join our modern ecommerce platform and connect directly with
                admin to approve, manage and publish your products. Grow your
                business with premium visibility and trusted marketplace
                support.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
        inline-flex items-center justify-center gap-3
        rounded-full bg-linear-to-r
        from-cyan-500 via-blue-500 to-indigo-500
        px-8 py-4 text-lg
        font-bold text-white
        shadow-xl shadow-cyan-200
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
      "
            >
              Become Seller
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Deal System Cards */}
          <div
            className="
      mt-14 grid gap-8
      md:grid-cols-2
      xl:grid-cols-3
    "
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
        group relative overflow-hidden
        rounded-4xl border border-slate-100
        bg-white p-8 shadow-xl
        transition-all duration-300
        hover:shadow-2xl
      "
            >
              {/* Background Glow */}
              <div
                className="
          absolute -right-10 -top-10
          h-40 w-40 rounded-full
          bg-cyan-100 blur-3xl
          opacity-50
        "
              />

              {/* Icon */}
              <div
                className="
          relative z-10 flex h-20 w-20
          items-center justify-center
          rounded-3xl bg-linear-to-r
          from-cyan-500 to-blue-500
          text-4xl text-white
          shadow-lg shadow-cyan-200
        "
              >
                🛍️
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-black text-slate-900">
                  Upload Products
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  Sellers can upload premium products with images, pricing,
                  descriptions and categories for admin review.
                </p>

                <button
                  type="button"
                  className="
            mt-8 rounded-full
            bg-linear-to-r
            from-cyan-500 to-blue-500
            px-6 py-3 text-sm
            font-bold text-white
            shadow-lg shadow-cyan-200
            transition-all duration-300
            hover:scale-105
          "
                >
                  Submit Product
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
        group relative overflow-hidden
        rounded-4xl border border-slate-100
        bg-white p-8 shadow-xl
        transition-all duration-300
        hover:shadow-2xl
      "
            >
              <div
                className="
          absolute -left-10 -bottom-10
          h-40 w-40 rounded-full
          bg-pink-100 blur-3xl
          opacity-50
        "
              />

              {/* Icon */}
              <div
                className="
          relative z-10 flex h-20 w-20
          items-center justify-center
          rounded-3xl bg-linear-to-r
          from-pink-500 to-purple-500
          text-4xl text-white
          shadow-lg shadow-pink-200
        "
              >
                🤝
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-black text-slate-900">
                  Admin Approval
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  Our admin team reviews every submitted product to ensure
                  trusted quality and modern marketplace standards.
                </p>

                <button
                  type="button"
                  className="
            mt-8 rounded-full
            bg-linear-to-r
            from-pink-500 to-purple-500
            px-6 py-3 text-sm
            font-bold text-white
            shadow-lg shadow-pink-200
            transition-all duration-300
            hover:scale-105
          "
                >
                  Review Process
                </button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
        group relative overflow-hidden
        rounded-4xl border border-slate-100
        bg-white p-8 shadow-xl
        transition-all duration-300
        hover:shadow-2xl
      "
            >
              <div
                className="
          absolute right-0 top-0
          h-40 w-40 rounded-full
          bg-indigo-100 blur-3xl
          opacity-50
        "
              />

              {/* Icon */}
              <div
                className="
          relative z-10 flex h-20 w-20
          items-center justify-center
          rounded-3xl bg-linear-to-r
          from-indigo-500 to-blue-500
          text-4xl text-white
          shadow-lg shadow-indigo-200
        "
              >
                🚀
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-3xl font-black text-slate-900">
                  Start Selling
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  After approval, your products become live in the marketplace
                  and reach thousands of modern shoppers.
                </p>

                <button
                  type="button"
                  className="
            mt-8 rounded-full
            bg-linear-to-r
            from-indigo-500 to-blue-500
            px-6 py-3 text-sm
            font-bold text-white
            shadow-lg shadow-indigo-200
            transition-all duration-300
            hover:scale-105
          "
                >
                  Launch Store
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
