"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
  ArrowRight,
} from "lucide-react";

const initialWishlist = [
  {
    id: 1,
    name: "Brass Diya",
    category: "Puja Samagri",
    price: 499,
    oldPrice: 699,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600",
  },
  {
    id: 2,
    name: "Ganesh Idol",
    category: "Idols",
    price: 1499,
    oldPrice: 1899,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600",
  },
  {
    id: 3,
    name: "Puja Thali Set",
    category: "Puja Kits",
    price: 999,
    oldPrice: 1299,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
];

export default function page() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist((items) => items.filter((item) => item.id !== id));
  };

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <Heart className="mx-auto text-red-500 mb-6" size={70} />

          <h1 className="text-3xl font-bold text-[#3B0A0A]">
            Your Wishlist is Empty
          </h1>

          <p className="text-gray-500 mt-4">
            Save your favorite spiritual products and shop them later.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-[#3B0A0A] text-white px-7 py-4 rounded-xl hover:bg-[#5A1414] transition"
          >
            Continue Shopping
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#faf8f5] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            My Wishlist
          </h1>

          <p className="mt-4 text-orange-100">
            Keep your favorite puja essentials in one place.
          </p>
        </div>
      </section>

      {/* Wishlist */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center text-red-500 hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>

              </div>

              <div className="p-6">

                <span className="text-sm text-yellow-700">
                  {item.category}
                </span>

                <h2 className="text-2xl font-bold mt-2 text-[#3B0A0A]">
                  {item.name}
                </h2>

                <div className="flex items-center gap-1 mt-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <span className="text-2xl font-bold text-[#3B0A0A]">
                    Rs. {item.price}
                  </span>

                  <span className="line-through text-gray-400">
                    Rs. {item.oldPrice}
                  </span>
                </div>

                <Link href={'/cart'} className="w-full mt-6 bg-[#3B0A0A] hover:bg-[#5A1414] text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">
                  <ShoppingCart size={18} />
                  Add to Cart
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}