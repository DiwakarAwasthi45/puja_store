"use client";

import Link from "next/link";
import { Search, Star, ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/products";

export default function page() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4" data-reveal>Puja Shop</h1>
          <p className="text-lg text-orange-100">
            Authentic Puja Samagri, Idols & Spiritual Essentials
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="font-bold text-xl mb-5 flex items-center gap-2">
            <Filter size={20} />
            Categories
          </h2>

          <ul className="space-y-3">
            <li>
              <Link
                href="/shop"
                className="block w-full text-left py-2 px-3 rounded-lg hover:bg-yellow-50 hover:text-[#3B0A0A] transition font-medium text-[#3B0A0A]"
              >
                All Products
              </Link>
            </li>
            {[
              { name: "Idols & Murtis", href: "/categories/idols-murtis" },
              { name: "Puja Samagri", href: "/categories/puja-samagri" },
              { name: "Puja Kits", href: "/categories/puja-kits" },
              { name: "Incense & Dhoop", href: "/categories/incense-dhoop" },
              { name: "Diya & Lamps", href: "/categories/diya-lamps" },
              { name: "Festival Collection", href: "/categories/festival-collection" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-yellow-50 hover:text-[#3B0A0A] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products */}
        <section className="lg:col-span-3">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-3.5 text-gray-400"
                size={20}
              />

              <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-full h-12 pl-12 pr-5 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <select className="border rounded-full px-5 h-12">
              <option>Latest</option>
              <option>Price Low - High</option>
              <option>Price High - Low</option>
              <option>Best Selling</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8" data-reveal-stagger>
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 group flex flex-col"
              >
                <Link href={`/shop/${item.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-orange-600">
                      {item.category}
                    </p>

                    <h3 className="font-bold text-xl mt-2">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-2xl font-bold text-[#3B0A0A]">
                        Rs. {item.price}
                      </span>

                      <span className="line-through text-gray-400">
                        Rs. {item.oldPrice}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="px-5 pb-5 mt-auto">
                  <Link
                    href="/cart"
                    className="w-full h-11 rounded-xl bg-[#3B0A0A] hover:bg-[#5b1414] text-white flex justify-center items-center gap-2 transition"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-600">
                No Products Found
              </h2>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}