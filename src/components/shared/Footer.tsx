'use client'

import Link from 'next/link'
import { Send, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const shopLinks = [
  'Men Fashion',
  'Women Fashion',
  'Electronics',
  'Gaming',
  'Accessories'
]

const quickLinks = [
  'About Us',
  'Contact',
  'FAQ',
  'Privacy Policy',
  'Terms & Conditions'
]

const customerLinks = [
  'My Account',
  'Wishlist',
  'Order Tracking',
  'Shipping',
  'Support Center'
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      {/* ================= BACKGROUND EFFECT ================= */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* ================= TOP NEWSLETTER ================= */}
      <div className="border-b border-white/10">
        <div
          className="
            mx-auto flex max-w-7xl flex-col gap-8
            px-4 py-10
            sm:px-6
            lg:flex-row lg:items-center lg:justify-between lg:px-8
          "
        >
          {/* LEFT */}
          <div className="max-w-2xl">
            <div
              className="
                mb-4 flex w-fit items-center gap-2
                rounded-full border border-emerald-400/20
                bg-emerald-400/10 px-4 py-2
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <p className="text-xs font-semibold tracking-[3px] text-emerald-400">
                NEWSLETTER
              </p>
            </div>

            <h2
              className="
                text-3xl font-black leading-tight
                sm:text-4xl
                lg:text-5xl
              "
            >
              Join The Future Of
              <span className="text-emerald-400"> Shopping</span>
            </h2>

            <p className="mt-4 max-w-xl text-gray-400">
              Subscribe to get special offers, premium product updates and
              exclusive shopping deals from ShopNest.
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-xl">
            <div
              className="
                flex flex-col gap-3 rounded-[28px]
                border border-white/10
                bg-white/5 p-3
                backdrop-blur-2xl
                sm:flex-row
              "
            >
              <input
                type="email"
                placeholder="Enter your email..."
                className="
                  h-14 flex-1 rounded-2xl
                  bg-transparent px-5
                  text-white outline-none
                  placeholder:text-gray-500
                "
              />

              <button
                type="button"
                aria-label="Subscribe Newsletter"
                title="Subscribe Newsletter"
                className="
                  group flex h-14 items-center justify-center gap-3
                  rounded-2xl bg-emerald-400
                  px-6 font-bold text-black
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:bg-white
                "
              >
                Subscribe
                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10">
        <div
          className="
            mx-auto grid max-w-7xl grid-cols-1 gap-12
            px-4 py-16
            sm:px-6
            md:grid-cols-2
            lg:grid-cols-5 lg:px-8
          "
        >
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <Link href="/">
              <h1 className="text-4xl font-black">
                Shop<span className="text-emerald-400">Nest</span>
              </h1>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              ShopNest is a modern premium e-commerce platform where customers
              discover fashion, electronics, gaming accessories and lifestyle
              products with futuristic shopping experience.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-2xl bg-white/5
                  "
                >
                  <MapPin size={20} className="text-emerald-400" />
                </div>

                <p className="text-gray-300">Chattogram, Bangladesh</p>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-2xl bg-white/5
                  "
                >
                  <Phone size={20} className="text-emerald-400" />
                </div>

                <p className="text-gray-300">+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-2xl bg-white/5
                  "
                >
                  <Mail size={20} className="text-emerald-400" />
                </div>

                <p className="text-gray-300">support@shopnest.com</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label="Social Media"
                    title="Social Media"
                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl border border-white/10
                    bg-white/5 text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/40
                    hover:bg-emerald-400
                    hover:text-black
                  "
                  >
                    <Icon size={20} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* ================= SHOP ================= */}
          <div>
            <h3 className="text-xl font-black text-white">Shop</h3>

            <div className="mt-6 flex flex-col gap-4">
              {shopLinks.map(link => (
                <Link
                  key={link}
                  href="/shop"
                  className="
                    group flex items-center gap-2
                    text-gray-400 transition-all duration-300
                    hover:text-emerald-400
                  "
                >
                  <ArrowRight
                    size={16}
                    className="
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
                  />

                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-xl font-black text-white">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map(link => (
                <Link
                  key={link}
                  href="/"
                  className="
                    group flex items-center gap-2
                    text-gray-400 transition-all duration-300
                    hover:text-emerald-400
                  "
                >
                  <ArrowRight
                    size={16}
                    className="
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
                  />

                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CUSTOMER ================= */}
          <div>
            <h3 className="text-xl font-black text-white">Customer</h3>

            <div className="mt-6 flex flex-col gap-4">
              {customerLinks.map(link => (
                <Link
                  key={link}
                  href="/"
                  className="
                    group flex items-center gap-2
                    text-gray-400 transition-all duration-300
                    hover:text-emerald-400
                  "
                >
                  <ArrowRight
                    size={16}
                    className="
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
                  />

                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto flex max-w-7xl flex-col gap-4
            px-4 py-6
            text-center
            sm:px-6
            md:flex-row md:items-center md:justify-between
            md:text-left
            lg:px-8
          "
        >
          <p className="text-sm text-gray-500">
            © 2026 ShopNest. All Rights Reserved.
          </p>

          <div className="flex items-center justify-center gap-5 md:justify-end">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 transition hover:text-emerald-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-gray-500 transition hover:text-emerald-400"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-gray-500 transition hover:text-emerald-400"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
