"use client";

import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Truck,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description:
      "We provide genuine puja essentials sourced from trusted manufacturers and artisans.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and secure delivery across Nepal with carefully packed spiritual products.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every product is quality checked before reaching your doorstep.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Service",
    description:
      "Thousands of devotees trust us for their daily worship and festival needs.",
  },
];

export default function page() {
  return (
    <main className="bg-[#faf8f5]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B0A0A] via-[#5A1414] to-[#7A1F1F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Sparkles className="mx-auto text-yellow-400 mb-5" size={42} />

          <h1 className="text-5xl font-bold" data-reveal>
            About Puja Store
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-orange-100">
            Bringing faith, devotion, and authentic puja essentials closer to
            every home with trusted quality and heartfelt service.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=900"
              alt="Puja Store"
              className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
            />
          </div>

          <div>

            <span className="text-yellow-600 font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-[#3B0A0A] mt-4">
              Devotion Delivered With Care
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Puja Store was founded with a simple mission—to make authentic
              puja samagri, idols, temple accessories, and festival essentials
              easily available to every devotee.
            </p>

            <p className="text-gray-600 leading-8 mt-6">
              Whether you're preparing for a daily prayer, a family ritual, or
              a major festival, we carefully select products that reflect
              tradition, purity, and quality.
            </p>

            <p className="text-gray-600 leading-8 mt-6">
              Our commitment is to preserve spiritual traditions while providing
              a convenient online shopping experience with reliable delivery and
              excellent customer support.
            </p>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#3B0A0A]">
              Why Choose Us?
            </h2>

            <p className="text-gray-500 mt-4">
              We are committed to quality, authenticity, and customer
              satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-[#faf8f5] rounded-3xl p-8 text-center hover:-translate-y-2 transition shadow-sm hover:shadow-xl"
                >
                  <div className="mx-auto h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Icon className="text-[#3B0A0A]" size={30} />
                  </div>

                  <h3 className="text-xl font-bold mt-6 text-[#3B0A0A]">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-reveal-stagger>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-5xl font-bold text-[#3B0A0A]">
                10K+
              </h3>
              <p className="text-gray-500 mt-3">
                Happy Customers
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-5xl font-bold text-[#3B0A0A]">
                500+
              </h3>
              <p className="text-gray-500 mt-3">
                Spiritual Products
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-5xl font-bold text-[#3B0A0A]">
                75+
              </h3>
              <p className="text-gray-500 mt-3">
                Festival Collections
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow p-8">
              <h3 className="text-5xl font-bold text-[#3B0A0A]">
                100%
              </h3>
              <p className="text-gray-500 mt-3">
                Genuine Products
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#3B0A0A] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Begin Your Spiritual Journey Today
          </h2>

          <p className="mt-6 text-orange-100 text-lg">
            Explore authentic idols, puja kits, diyas, incense, temple
            accessories, and much more—all in one place.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-yellow-500 hover:bg-yellow-400 text-[#3B0A0A] font-semibold px-8 py-4 rounded-xl transition"
          >
            Shop Now
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}