"use client";

import Link from "next/link";
import { CalendarDays, ArrowRight, Sparkles } from "lucide-react";

const festivals = [
  {
    id: 1,
    name: "Dashain",
    month: "October",
    image:
      "/images/main.jpg",
    description:
      "Celebrate the biggest Hindu festival with complete Dashain Puja Samagri, Jamara sets, Kalash, and sacred items.",
    color: "bg-red-600",
  },
  {
    id: 2,
    name: "Tihar",
    month: "November",
    image:
      "/images/main.jpg",
    description:
      "Decorate your home with diyas, rangoli colors, candles, flowers, and Lakshmi Puja essentials.",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    name: "Maha Shivaratri",
    month: "February",
    image:
      "/images/main.jpg",
    description:
      "Offer Bel Patra, Rudraksha, Dhoop, Ganga Jal, and complete Shiva Puja kits.",
    color: "bg-indigo-600",
  },
  {
    id: 4,
    name: "Krishna Janmashtami",
    month: "August",
    image:
      "/images/main.jpg",
    description:
      "Beautiful Krishna idols, dresses, flutes, Makhan pots, and temple decorations.",
    color: "bg-blue-600",
  },
  {
    id: 5,
    name: "Ganesh Chaturthi",
    month: "September",
    image:
      "/images/main.jpg",
    description:
      "Eco-friendly Ganesh idols, modak plates, flowers, incense, and puja accessories.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Raksha Bandhan",
    month: "August",
    image:
      "/images/main.jpg",
    description:
      "Premium Rakhi collection, gift hampers, sweets, and festive decorations.",
    color: "bg-pink-600",
  },
];

export default function page() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B0A0A] via-[#5A1414] to-[#7A1F1F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Sparkles className="mx-auto mb-5 text-yellow-400" size={42} />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hindu Festivals Collection
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-orange-100 text-base sm:text-lg">
            Celebrate every festival with authentic Puja Samagri,
            Idols, Decorations, and Spiritual Essentials delivered
            to your doorstep.
          </p>
        </div>
      </section>

      {/* Festivals */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8" data-reveal-stagger>
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <span
                  className={`absolute top-5 left-5 ${festival.color} text-white text-xs px-4 py-2 rounded-full`}
                >
                  {festival.month}
                </span>
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-bold text-[#3B0A0A]">
                  {festival.name}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mt-3">
                  <CalendarDays size={18} />
                  <span>{festival.month}</span>
                </div>

                <p className="text-gray-600 mt-5 leading-7">
                  {festival.description}
                </p>

                <Link
                  href="/shop"
                  className="mt-7 inline-flex items-center gap-2 bg-[#3B0A0A] text-white px-6 py-3 rounded-xl hover:bg-[#5A1414] transition"
                >
                  Shop Collection
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3B0A0A] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Celebrate Every Festival with Devotion
          </h2>

          <p className="mt-5 text-orange-100 text-lg">
            Explore premium Puja Kits, Idols, Diyas, Incense, Temple
            Decor, Flowers, and Spiritual Gifts for every occasion.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 text-[#3B0A0A] font-semibold px-8 py-4 rounded-xl transition"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}