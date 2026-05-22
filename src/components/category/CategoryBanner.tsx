'use client'

import { motion } from 'motion/react'
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  ShoppingBag
} from 'lucide-react'
import Link from 'next/link'
import CategoriesSection from '../home/CategoriesSection'

export default function CategoryBanner() {
  return (
    <section>
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        {/* Background Blur Effects */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-100 blur-3xl opacity-40" />

        <div className="container mx-auto px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Modern Shopping Experience
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-4xl font-black leading-tight text-gray-900 md:text-6xl">
                Discover The Future Of
                <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Smart Online Shopping
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Upgrade your lifestyle with premium fashion, electronics,
                accessories, and modern essentials designed for everyday comfort
                and style.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-black"
                >
                  Shop Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/categories"
                  className="rounded-2xl border border-gray-300 px-7 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-gray-900 hover:bg-gray-100"
                >
                  Explore Categories
                </Link>
              </div>

              {/* Features */}
              <div className="mt-12 flex flex-wrap gap-5">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg shadow-gray-100">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">
                    Fast Delivery
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg shadow-gray-100">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">
                    Secure Payment
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg shadow-gray-100">
                  <ShoppingBag className="h-5 w-5 text-pink-600" />
                  <span className="font-medium text-gray-700">
                    Premium Products
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE 3D ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Main Floating Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative z-20 h-105 w-[320px] rounded-[40px] border border-white/40 bg-linear-to-br from-gray-900 via-gray-800 to-black p-6 shadow-2xl"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Premium Collection</p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      Urban Fashion
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-xl">
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>

                {/* Product Circle */}
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="mx-auto mt-12 flex h-48 w-48 items-center justify-center rounded-full border border-dashed border-white/20"
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 shadow-2xl">
                    <ShoppingBag className="h-14 w-14 text-white" />
                  </div>
                </motion.div>

                {/* Bottom Stats */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-sm text-gray-400">Products</p>
                    <h4 className="mt-1 text-2xl font-bold text-white">25K+</h4>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-sm text-gray-400">Customers</p>
                    <h4 className="mt-1 text-2xl font-bold text-white">18K+</h4>
                  </div>
                </div>
              </motion.div>

              {/* Floating Small Card 1 */}
              <motion.div
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute left-0 top-10 z-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl"
              >
                <p className="text-sm text-gray-500">Flash Sale</p>
                <h4 className="mt-1 text-2xl font-black text-gray-900">
                  70% OFF
                </h4>
              </motion.div>

              {/* Floating Small Card 2 */}
              <motion.div
                animate={{
                  y: [0, 18, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute bottom-8 right-0 z-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl"
              >
                <p className="text-sm text-gray-500">New Arrival</p>
                <h4 className="mt-1 text-xl font-bold text-gray-900">
                  Smart Gadgets
                </h4>
              </motion.div>

              {/* Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>
      <CategoriesSection/>
    </section>
  )
}
