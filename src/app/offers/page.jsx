"use client";

import Link from "next/link";
import {
  Tag,
  Gift,
  ShoppingBag,
  Percent,
  Clock,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Festival Mega Sale",
    discount: "Up to 50% OFF",
    description:
      "Save big on Puja Kits, Idols, Diyas, and Temple Essentials.",
    color: "from-red-700 to-orange-500",
  },
  {
    id: 2,
    title: "Free Delivery",
    discount: "Orders Above Rs.999",
    description:
      "Enjoy free shipping across Nepal on eligible orders.",
    color: "from-green-600 to-emerald-400",
  },
  {
    id: 3,
    title: "Buy 2 Get 1",
    discount: "Incense Collection",
    description:
      "Buy any two incense packs and get one absolutely free.",
    color: "from-purple-700 to-pink-500",
  },
];

const coupons = [
  {
    code: "PUJA10",
    value: "10% OFF",
    min: "Minimum Order Rs.1000",
  },
  {
    code: "FESTIVE20",
    value: "20% OFF",
    min: "Minimum Order Rs.2500",
  },
  {
    code: "FIRST50",
    value: "Rs.500 OFF",
    min: "First Purchase Above Rs.5000",
  },
];

export default function page() {
  return (
    <main className="bg-[#faf8f5]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B0A0A] via-[#5A1414] to-[#7A1F1F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Tag className="mx-auto text-yellow-400 mb-5" size={42} />

          <h1 className="text-5xl font-bold">
            Exclusive Festival Offers
          </h1>

          <p className="mt-6 text-orange-100 text-lg max-w-2xl mx-auto">
            Celebrate every occasion with amazing discounts on
            authentic Puja products and spiritual essentials.
          </p>

        </div>
      </section>

      {/* Offers */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-8" data-reveal-stagger>

          {offers.map((offer) => (

            <div
              key={offer.id}
              className={`rounded-3xl bg-gradient-to-r ${offer.color} text-white p-8 shadow-lg`}
            >

              <Percent className="mb-5" size={36} />

              <h2 className="text-3xl font-bold">
                {offer.discount}
              </h2>

              <h3 className="text-xl mt-3">
                {offer.title}
              </h3>

              <p className="mt-5 text-white/90 leading-7">
                {offer.description}
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 mt-8 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* Coupons */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <Gift
              className="mx-auto text-[#3B0A0A] mb-4"
              size={36}
            />

            <h2 className="text-4xl font-bold text-[#3B0A0A]">
              Coupon Codes
            </h2>

            <p className="text-gray-500 mt-4">
              Apply these coupons during checkout.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8" data-reveal-stagger>

            {coupons.map((coupon) => (

              <div
                key={coupon.code}
                className="border-2 border-dashed border-yellow-400 rounded-3xl p-8 bg-yellow-50"
              >

                <span className="text-sm uppercase text-gray-500">
                  Coupon Code
                </span>

                <h3 className="text-3xl font-bold text-[#3B0A0A] mt-3">
                  {coupon.code}
                </h3>

                <p className="text-xl text-red-600 font-semibold mt-5">
                  {coupon.value}
                </p>

                <p className="text-gray-600 mt-3">
                  {coupon.min}
                </p>

                <button className="mt-8 w-full bg-[#3B0A0A] hover:bg-[#5A1414] text-white py-3 rounded-xl transition">
                  Copy Coupon
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Flash Deal */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-10 flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <Clock />
                <span>Limited Time Deal</span>
              </div>

              <h2 className="text-4xl font-bold">
                Flat 30% OFF
              </h2>

              <p className="mt-5 text-lg">
                On selected Puja Kits, Diyas, Temple Decor,
                and Brass Items.
              </p>

            </div>

            <Link
              href="/shop"
              className="bg-white text-[#3B0A0A] font-semibold px-8 py-4 rounded-xl hover:bg-yellow-100 transition inline-flex items-center gap-2"
            >
              <ShoppingBag size={20} />
              Shop Deals
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#3B0A0A] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Don't Miss Today's Offers
          </h2>

          <p className="mt-6 text-orange-100 text-lg">
            Premium spiritual products at unbeatable prices.
            Shop now before the offers expire.
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