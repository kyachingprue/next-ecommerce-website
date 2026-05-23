'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Category', href: '/categories' },
  { name: 'Deals', href: '/deals' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [showSearch, setShowSearch] = useState(false)

  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
          scrolled ? 'bg-black/70 backdrop-blur-2xl' : 'bg-black'
        }`}
      >
        <div className="mx-auto flex w-full lg:max-w-8xl items-center justify-between gap-2 px-2 py-4 sm:px-3 lg:px-4">
          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-3">
            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label="Open Menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-emerald-500/20 lg:hidden"
            >
              <Menu size={22} />
            </button>

            {/* LOGO */}
            <Link href="/" className="shrink-0">
              <h1
                className="
    text-lg font-black tracking-wide
    text-white transition-all duration-300
    hover:scale-105 sm:text-2xl
  "
              >
                Shop<span className="text-emerald-400">Nest</span>
              </h1>
            </Link>
          </div>
          {/* ================= SEARCH ================= */}
          {/* Desktop Search */}
          <div className="hidden flex-1 px-4 lg:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="
        h-12 w-full rounded-2xl
        border border-white/10
        bg-white px-5 pr-32
        text-sm text-gray-400
        outline-none backdrop-blur-xl
        placeholder:text-gray-400
        focus:border-emerald-400
      "
              />

              <button
                type="button"
                title="Search"
                aria-label="Search"
                className="
        absolute right-1 top-1
        flex h-10 items-center gap-2
        rounded-xl bg-emerald-400
        px-5 text-sm font-semibold
        text-black transition-all duration-300
        hover:bg-white
      "
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
          {/* Mobile Search Button */}
          <button
            type="button"
            title="Open Search"
            aria-label="Open Search"
            onClick={() => setShowSearch(true)}
            className="
    flex h-11 w-11 items-center
    justify-center rounded-full
    bg-green-800 text-white
    shadow-lg transition-all duration-300
    hover:scale-105 hover:bg-emerald-400
    lg:hidden
  "
          >
            <Search size={20} />
          </button>
          {/* Mobile Popup Search */}
          {showSearch && (
            <div
              className="
      fixed inset-0 z-999
      bg-black/50 backdrop-blur-sm
      lg:hidden
    "
            >
              <div
                ref={searchRef}
                className="
        absolute left-1/2 top-6
        w-[92%] max-w-lg
        -translate-x-1/2
        rounded-3xl border border-white/10
        bg-[#074b34]
        p-4 shadow-2xl
      "
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="
            h-14 w-full rounded-2xl
            border border-white/10
            bg-white/5 px-5 pr-16
            text-sm text-white
            outline-none
            placeholder:text-gray-400
            focus:border-emerald-400
          "
                  />

                  <button
                    type="button"
                    title="Search"
                    aria-label="Search"
                    className="
            absolute right-2 top-2
            flex h-10 w-10 items-center
            justify-center rounded-xl
            bg-emerald-400 text-black
            transition-all duration-300
            hover:bg-white
          "
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
          {/*  DESKTOP MENU  */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map(item => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative overflow-hidden px-4 py-2"
                >
                  {/* TOP TEXT */}
                  <span
                    className={`
                block text-sm font-medium transition-transform duration-300
                ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-white group-hover:translate-y-[-140%]'
                }
              `}
                  >
                    {item.name}
                  </span>

                  {/* HOVER TEXT */}
                  {!isActive && (
                    <span
                      className="
                  absolute left-4 top-2
                  translate-y-[140%]
                  text-sm font-medium text-emerald-400
                  transition-transform duration-300
                  group-hover:translate-y-0
                "
                    >
                      {item.name}
                    </span>
                  )}

                  {/* UNDERLINE */}
                  <span
                    className={`
                absolute bottom-0 left-0 h-0.5
                bg-emerald-400 transition-all duration-300
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
              `}
                  />
                </Link>
              )
            })}
          </nav>
          {/* ================= RIGHT ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ICONS */}
            <button
              type="button"
              aria-label="Wishlist"
              title="Wishlist"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:flex"
            >
              <Heart size={20} />
            </button>

            <button
              type="button"
              aria-label="Shopping Cart"
              title="Shopping Cart"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:flex"
            >
              <ShoppingCart size={20} />
            </button>

            {/* LOGIN BUTTON */}
            <Link href="/login">
              <button
                type="button"
                aria-label="Login Account"
                title="Login Account"
                className="
                  group relative overflow-hidden rounded-md md:rounded-2xl
                  border border-emerald-400/30
                  bg-emerald-400 px-3 md:px-5 py-1.5 md:py-3
                  font-semibold text-black
                  transition-all duration-300
                  hover:bg-white
                "
              >
                <div className="relative h-6 overflow-hidden">
                  {/* FIRST TEXT */}
                  <span
                    className="
                      block transition-all duration-300
                      group-hover:-translate-y-full
                    "
                  >
                    Login
                  </span>

                  {/* SECOND TEXT */}
                  <span
                    className="
                      absolute left-0 top-0 translate-y-full
                      transition-all duration-300
                      group-hover:translate-y-0
                    "
                  >
                    Login
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`
          fixed inset-0 z-100 bg-black/60 backdrop-blur-sm transition-all duration-300
          ${open ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      >
        {/* SIDEBAR */}
        <div
          className={`
            absolute left-0 top-0 h-screen w-[85%] max-w-85
            border-r border-white/10
            bg-[#0b0b0b]
            p-5
            transition-all duration-500
            ${open ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'}
          `}
        >
          {/* TOP */}
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-black text-white">
              Shop<span className="text-emerald-400">Nest</span>
            </h2>

            <button
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close Menu"
              title="Close Menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* USER CARD */}
          <div
            className="
              mb-8 rounded-3xl border border-white/10
              bg-linear-to-br from-emerald-500/20 to-white/5
              p-5
            "
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-black">
              <User size={26} />
            </div>

            <h3 className="text-lg font-bold text-white">Welcome Back</h3>

            <p className="mt-1 text-sm text-gray-400">
              Explore premium fashion, gadgets and modern products.
            </p>
          </div>

          {/* MOBILE MENU */}
          <div className="flex flex-col gap-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <div
                  className="
                    group flex items-center justify-between
                    rounded-2xl border border-white/5
                    bg-white/5 px-4 py-4
                    transition-all duration-300
                    hover:border-emerald-400/30
                    hover:bg-emerald-500/10
                  "
                >
                  <span className="text-white transition group-hover:translate-x-2">
                    {item.name}
                  </span>

                  <span className="text-emerald-400 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* LOGIN BUTTON */}
          <Link href="/login" onClick={() => setOpen(false)}>
            <button
              className="
                mt-8 w-full rounded-2xl
                bg-emerald-400 py-4
                font-bold text-black
                transition-all duration-300
                hover:scale-[1.02]
                hover:bg-white
              "
            >
              Login Account
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
