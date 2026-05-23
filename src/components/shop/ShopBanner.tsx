'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react'

export default function ShopBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-cyan-50 py-12 md:py-14">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] grid-pattern" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 shadow-md backdrop-blur-xl">
            <ShoppingBag className="h-4 w-4 text-cyan-600" />
            <span className="text-sm font-medium text-slate-700">
              Premium E-Commerce Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Discover Modern
            <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {' '}
              Smart Shopping
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Upgrade your lifestyle with premium fashion, electronics,
            accessories, and modern essentials — all in one beautiful shopping
            experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/categories"
              className="rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-700 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600"
            >
              Explore Categories
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
              <Truck className="mb-3 h-7 w-7 text-cyan-600" />
              <h4 className="font-semibold text-slate-900">Fast Delivery</h4>
              <p className="mt-1 text-sm text-slate-600">
                Quick shipping worldwide.
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
              <ShieldCheck className="mb-3 h-7 w-7 text-cyan-600" />
              <h4 className="font-semibold text-slate-900">Secure Payment</h4>
              <p className="mt-1 text-sm text-slate-600">
                100% protected checkout.
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
              <Star className="mb-3 h-7 w-7 text-cyan-600" />
              <h4 className="font-semibold text-slate-900">Premium Quality</h4>
              <p className="mt-1 text-sm text-slate-600">
                Trusted modern products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex-1"
        >
          {/* Main Card */}
          <div className="relative mx-auto max-w-140 rounded-4xl border border-white/60 bg-white/70 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                alt="Modern E-commerce Product"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-87.5 w-full object-cover sm:h-112.5"
              />

              {/* Floating Product Card */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl">
                <p className="text-sm text-slate-500">Featured Product</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Smart Luxury Watch
                </h3>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xl font-black text-cyan-600">$249</span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    New Arrival
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Small Cards */}
            <div className="absolute -top-5 -left-5 hidden rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:block">
              <p className="text-sm text-slate-500">Weekly Sales</p>
              <h4 className="text-2xl font-black text-slate-900">+45%</h4>
            </div>

            <div className="absolute -right-5 top-10 hidden rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:block">
              <p className="text-sm text-slate-500">Happy Customers</p>
              <h4 className="text-2xl font-black text-slate-900">12K+</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
