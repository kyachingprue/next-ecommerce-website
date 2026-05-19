import Image from "next/image"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      category: 'Electronics',
      price: 1499,
      oldPrice: 1599,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      title: 'Premium Hoodie',
      category: 'Fashion',
      price: 89,
      oldPrice: 120,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      badge: 'New Arrival'
    },
    {
      id: 3,
      title: 'Modern Office Chair',
      category: 'Furniture',
      price: 349,
      oldPrice: 420,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      badge: 'Popular'
    },
    {
      id: 4,
      title: 'Gaming Keyboard RGB',
      category: 'Electronics',
      price: 140,
      oldPrice: 180,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop',
      badge: 'Trending'
    },
    {
      id: 5,
      title: 'Smart Fitness Watch',
      category: 'Sports',
      price: 220,
      oldPrice: 280,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      badge: 'Hot Deal'
    },
    {
      id: 6,
      title: 'Luxury Backpack',
      category: 'Fashion',
      price: 99,
      oldPrice: 130,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      badge: 'Limited'
    },
    {
      id: 7,
      title: 'Organic Grocery Box',
      category: 'Grocery',
      price: 45,
      oldPrice: 60,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
      badge: 'Fresh'
    },
    {
      id: 8,
      title: 'Wireless Earbuds Pro',
      category: 'Electronics',
      price: 179,
      oldPrice: 220,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1200&auto=format&fit=crop',
      badge: 'Top Rated'
    }
  ]

  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Furniture',
    'Sports',
    'Beauty',
    'Grocery'
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                Modern E-Commerce Collection
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Discover Premium Products For Your Lifestyle
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Explore modern electronics, fashion, furniture, sports, grocery,
                and beauty collections with premium quality and beautiful modern
                shopping experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-gray-800">
                  Shop Now
                </button>

                <button className="rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-gray-100">
                  Explore Categories
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-emerald-200/40 to-blue-200/40 blur-3xl"></div>

              <Image
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop"
                alt="Shop Banner"
                className="relative h-105 w-full rounded-[40px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-black text-white shadow-lg'
                  : 'border border-gray-200 bg-white text-gray-700 hover:border-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* SHOP GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  {product.badge}
                </div>

                <button className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-110">
                  ❤
                </button>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {product.category}
                  </span>

                  <span className="text-sm font-semibold text-amber-500">
                    ⭐ {product.rating}
                  </span>
                </div>

                <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                  {product.title}
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black text-black">
                    ${product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-2xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                    Add To Cart
                  </button>

                  <button className="rounded-2xl border border-gray-300 px-4 py-3 text-sm font-semibold transition hover:border-black hover:bg-gray-100">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
