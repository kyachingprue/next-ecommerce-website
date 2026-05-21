'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CategoryBanner = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-20">
      {/* Top Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Shop by Category
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore trending collections curated for you
        </p>
      </div>

      {/* Banner Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT BIG BANNER */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative lg:col-span-2 h-75 md:h-105 rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Electronics"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute left-6 md:left-10 bottom-6 text-white">
            <h3 className="text-xl md:text-3xl font-bold">Electronics Deals</h3>
            <p className="text-sm md:text-base text-gray-200 mt-1">
              Up to 50% off on smart devices
            </p>

            <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* RIGHT STACK BANNERS */}
        <div className="flex flex-col gap-6">
          {/* Fashion */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-47.5 rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd49"
              alt="Fashion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute left-5 bottom-5 text-white">
              <h3 className="text-lg font-semibold">Fashion</h3>
              <p className="text-xs text-gray-200">New arrivals</p>
            </div>
          </motion.div>

          {/* Home Decor */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-47.5 rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="Home Decor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute left-5 bottom-5 text-white">
              <h3 className="text-lg font-semibold">Home Decor</h3>
              <p className="text-xs text-gray-200">Modern lifestyle</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner
