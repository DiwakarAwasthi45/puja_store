"use client";

import { Search, Star, ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Brass Diya",
    category: "Puja Samagri",
    price: 499,
    oldPrice: 699,
    rating: 5,
    image: "https://images.unsplash.com/photo-1607082350899-105aa886ae?w=60",
    badge: "20% OFF",
  },
  {
    id: 2,
    name: "Ganesh Idol",
    category: "Idols",
    price: 1499,
    oldPrice: 1999,
    rating: 5,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d=60",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Puja Thali Set",
    category: "Puja Kits",
    price: 999,
    oldPrice: 1299,
    rating: 4,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30=600",
    badge: "New",
  },
  {
    id: 4,
    name: "Incense Sticks",
    category: "Incense",
    price: 299,
    oldPrice: 399,
    rating: 5,
    image: "https://images.unsplash.com/photo-161662798145-a19a4f9f2db4?w=600",
    badge: "Hot",
  },
  {
    id: 5,
    name: "Rudraksha Mala",
    category: "Spiritual",
    price: 899,
    oldPrice: 1199,
    rating: 5,
    image: "https://images.unsplash.com/photo-152157216347-6864f9cf17ab?w=600",
    badge: "Trending",
  },
  {
    id: 6,
    name: "Temple Bell",
    category: "Temple",
    price: 799,
    oldPrice: 999,
    rating: 4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ffw=600",
    badge: "Sale",
  },
];

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
            {[
              "All Products",
              "Puja Samagri",
              "Idols",
              "Temple",
              "Incense",
              "Spiritual",
              "Puja Kits",
            ].map((item) => (
              <li key={item}>
                <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-yellow-50 hover:text-[#3B0A0A] transition">
                  {item}
                </button>
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
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 group"
              >
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

                  <button className="mt-5 w-full h-11 rounded-xl bg-[#3B0A0A] hover:bg-[#5b1414] text-white flex justify-center items-center gap-2 transition">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
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