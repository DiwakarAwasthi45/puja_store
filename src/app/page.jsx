"use client";

import Link from "next/link";
import CountUp from "./components/CountUp";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Star,
  Sparkles,
    Flower2,
  Flame,
  Gift,
  HeartHandshake,
  Gem,
   CheckCircle,
   Heart,
    ShoppingCart, 
  BadgeCheck,
  CreditCard,
  Headphones,
  Quote,
  
} from "lucide-react";

const categories = [
  {
    title: "Puja Kits",
    icon: Gift,
    image: "/images/main.jpg",
    count: "120+ Products",
  },
  {
    title: "Idols & Murtis",
    icon: Gem,
    image: "/images/main.jpg",
    count: "85+ Products",
  },
  {
    title: "Diya & Lamps",
    icon: Flame,
    image: "/images/main.jpg",
    count: "60+ Products",
  },
  {
    title: "Flowers & Mala",
    icon: Flower2,
    image: "/images/main.jpg",
    count: "90+ Products",
  },
  {
    title: "Incense & Dhoop",
    icon: Sparkles,
    image: "/images/main.jpg",
    count: "75+ Products",
  },
  {
    title: "Festival Essentials",
    icon: HeartHandshake,
    image: "/images/main.jpg",
    count: "150+ Products",
  },
];
const products = [
  {
    id: 1,
    name: "Complete Puja Kit",
    image: "/images/main.jpg",
    price: 1499,
    oldPrice: 1899,
    discount: "20%",
    rating: 5,
  },
  {
    id: 2,
    name: "Brass Diya Set",
    image: "/images/main.jpg",
    price: 899,
    oldPrice: 1099,
    discount: "18%",
    rating: 5,
  },
  {
    id: 3,
    name: "Lord Ganesha Idol",
    image: "/images/main.jpg",
    price: 2499,
    oldPrice: 2999,
    discount: "15%",
    rating: 5,
  },
  {
    id: 4,
    name: "Premium Agarbatti",
    image: "/images/main.jpg",
    price: 399,
    oldPrice: 499,
    discount: "20%",
    rating: 4,
  },
];
const festivals = [
  {
    title: "Dashain Collection",
    image: "/images/main.jpg",
    description: "Jamara, Kalash, Tika, Puja Kits & Sacred Essentials",
    color: "from-red-900/80 to-red-950/60",
  },
  {
    title: "Tihar Collection",
    image: "/images/main.jpg",
    description: "Diyas, Rangoli, Candles, Flowers & Decorations",
    color: "from-amber-700/80 to-orange-900/70",
  },
  {
    title: "Maha Shivaratri",
    image: "/images/main.jpg",
    description: "Belpatra, Rudraksha, Shiva Lingam & Puja Samagri",
    color: "from-slate-900/80 to-slate-700/70",
  },
  {
    title: "Ganesh Chaturthi",
    image: "/images/main.jpg",
    description: "Ganesh Idols, Modak Plates & Complete Puja Kits",
    color: "from-orange-700/80 to-red-800/70",
  },
];
const features = [
  {
    icon: BadgeCheck,
    title: "100% Authentic Products",
    description:
      "We provide genuine puja essentials sourced from trusted manufacturers and artisans.",
  },
  {
    icon: Truck,
    title: "Fast & Safe Delivery",
    description:
      "Quick doorstep delivery with secure packaging across Nepal.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay confidently using eSewa, Khalti, Fonepay, Cards, and Cash on Delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every product is carefully inspected to ensure the highest quality.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to help with your orders and inquiries.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Thousands",
    description:
      "Thousands of families choose us for their daily worship and festival needs.",
  },
];
const testimonials = [
  {
    id: 1,
    name: "Ram Sharma",
    location: "Kathmandu",
    image: "/images/main.jpg",
    rating: 5,
    review:
      "The quality of the puja items exceeded my expectations. Delivery was fast, packaging was excellent, and every product felt authentic. Highly recommended!",
  },
  {
    id: 2,
    name: "Sita Adhikari",
    location: "Pokhara",
    image: "/images/main.jpg",
    rating: 5,
    review:
      "I ordered a complete Lakshmi Puja Kit for Tihar. Everything arrived on time and beautifully packed. I'll definitely shop here again.",
  },
  {
    id: 3,
    name: "Hari Karki",
    location: "Butwal",
    image: "/images/main.jpg",
    rating: 5,
    review:
      "Excellent service and genuine products. The brass diya and incense sticks were of premium quality. Great customer support as well.",
  },
];

 function page() {
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      {/* Background Decoration */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-red-300/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div data-reveal-stagger>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-red-900">
                100% Authentic Spiritual Products
              </span>
            </div>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-red-950">
              Everything You Need
              <span className="block text-amber-600">
                For Your Daily Puja
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Discover premium quality idols, incense sticks, diyas, flowers,
              puja thalis, sacred accessories and complete festival kits
              delivered to your doorstep with devotion.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-red-950 px-8 py-4 text-white font-semibold transition hover:bg-amber-600"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/categories"
                className="rounded-full border-2 border-red-900 px-8 py-4 font-semibold text-red-900 transition hover:bg-red-950 hover:text-white"
              >
                Explore Categories
              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <Truck className="w-8 h-8 text-amber-600" />
                <h4 className="mt-3 font-bold text-red-900">
                  Fast Delivery
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Nationwide Shipping
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                <h4 className="mt-3 font-bold text-red-900">
                  Genuine Items
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Trusted Quality
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-lg">
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                <h4 className="mt-3 font-bold text-red-900">
                  5★ Reviews
                </h4>
                <p className="mt-2 text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            {/* Decorative Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-300/30 to-orange-100 blur-sm" />
            </div>

            {/* Main Product Image */}
            <div className="relative mx-auto w-[420px] h-[420px] rounded-full bg-white shadow-2xl border-8 border-white overflow-hidden">
              <img
                src="/images/main.jpg"
                alt="Puja Samagri"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm text-gray-500">
                Festival Offers
              </p>
              <h3 className="text-2xl font-bold text-red-900">
                Up to 30% OFF
              </h3>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-0 bottom-16 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm text-gray-500">
                Trusted by
              </p>
              <h3 className="text-2xl font-bold text-red-900">
                10K+ Families
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>

      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
            Sacred Collection
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-red-950">
            Shop By Category
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Discover authentic puja essentials, idols, flowers,
            incense sticks and complete festival kits carefully
            curated for every spiritual occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" data-reveal-stagger>

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                href="/shop"
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">

                  <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/80">
                    {item.count}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-amber-300 font-semibold">
                    Explore Collection →
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-3xl transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>

     <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="relative">
            <img
              src="/images/main.jpg"
              alt="Puja Samagri"
              className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
            />

            <div className="absolute -bottom-6 -right-6 bg-red-950 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-bold text-amber-400">10+</h3>
              <p className="mt-1 text-sm">
                Years of Serving Devotion
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold">
              About Our Store
            </span>

            <h2 className="mt-6 text-5xl font-bold text-red-950 leading-tight">
              Your Trusted Destination
              <span className="block text-amber-600">
                For Authentic Puja Essentials
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At <strong>Puja Samagri</strong>, we believe every prayer deserves
              authentic and high-quality spiritual products. We offer a complete
              range of puja essentials including idols, diyas, incense sticks,
              flowers, puja kits, rudraksha, and festival items.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Our mission is to make religious shopping simple and convenient by
              delivering genuine products directly to your doorstep with care
              and devotion.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-950">
                    Authentic Products
                  </h4>
                  <p className="text-sm text-gray-500">
                    Premium quality religious items.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-950">
                    Fast Delivery
                  </h4>
                  <p className="text-sm text-gray-500">
                    Safe delivery across Nepal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-950">
                    Secure Payments
                  </h4>
                  <p className="text-sm text-gray-500">
                    Trusted online payment methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-950">
                    Customer Support
                  </h4>
                  <p className="text-sm text-gray-500">
                    Friendly support whenever you need help.
                  </p>
                </div>
              </div>

            </div>

            <Link
              href="/about"
              className="inline-block mt-10 bg-red-950 hover:bg-amber-600 transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Learn More
            </Link>

          </div>
        </div>
      </div>
    </section>

     <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-sm font-semibold">
            Best Collection
          </span>

          <h2 className="mt-5 text-5xl font-bold text-red-950">
            Featured Products
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Discover our most loved spiritual products carefully selected
            for your daily worship and festival celebrations.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8" data-reveal-stagger>

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Discount */}
                <span className="absolute top-4 left-4 bg-red-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.discount} OFF
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-900 hover:text-white transition">
                  <Heart size={18} />
                </button>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-red-950">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-2xl font-bold text-red-900">
                    Rs. {product.price}
                  </span>

                  <span className="line-through text-gray-400">
                    Rs. {product.oldPrice}
                  </span>
                </div>

                <Link href="/cart" className="mt-6 w-full bg-red-950 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-16">

          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-4 rounded-full bg-red-950 text-white font-semibold hover:bg-amber-600 transition"
          >
            View All Products →
          </Link>

        </div>

      </div>
    </section>

     <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold">
            Festival Special
          </span>

          <h2 className="mt-5 text-5xl font-bold text-red-950">
            Celebrate Every Festival
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Prepare for every sacred celebration with specially curated
            collections of authentic puja essentials and festive decorations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8" data-reveal-stagger>

          {festivals.map((festival) => (
            <div
              key={festival.title}
              className="group relative overflow-hidden rounded-3xl h-[360px] shadow-xl"
            >
              <img
                src={festival.image}
                alt={festival.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${festival.color}`}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8">

                <span className="w-fit rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-medium text-white">
                  Festival Collection
                </span>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  {festival.title}
                </h3>

                <p className="mt-3 text-white/90 leading-7">
                  {festival.description}
                </p>

                <Link
                  href="/shop"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-red-950 transition hover:bg-amber-400 hover:text-white"
                >
                  Explore Collection
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>

    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50">

  {/* Background Decoration */}
  <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-200/20 blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex items-center rounded-full bg-amber-100 border border-amber-300 px-5 py-2 text-amber-700 font-semibold">
        ✨ Why Choose Us
      </span>

      <h2 className="mt-6 text-5xl font-bold text-red-950 leading-tight">
        Experience Devotion With
        <span className="block text-amber-600">
          Quality & Trust
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        We are committed to delivering authentic spiritual products,
        premium quality, and a seamless shopping experience for every
        devotee across Nepal.
      </p>

    </div>

    {/* Features */}
    <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white border border-orange-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >

            {/* Top Gradient */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:rotate-6 transition">

              <Icon className="w-8 h-8 text-white" />

            </div>

            {/* Content */}
            <h3 className="mt-8 text-2xl font-bold text-red-950">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              {feature.description}
            </p>

            {/* Hover Arrow */}
            <div className="mt-8 flex items-center text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>

          </div>
        );
      })}

    </div>
  </div>
</section>

     <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Customer Reviews
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-red-950">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Thousands of devotees trust us for authentic puja essentials,
            fast delivery, and excellent customer service.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-orange-100 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 opacity-10">
                <Quote size={70} />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              {/* Customer */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-4 border-amber-200 object-cover"
                />

                <div>
                  <h4 className="font-bold text-red-950">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.location}, Nepal
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4" data-reveal-stagger>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-red-950">
              <CountUp to={10000} suffix="+" />
            </h3>
            <p className="mt-2 text-gray-500">Happy Customers</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-red-950">
              <CountUp to={4.9} decimals={1} suffix="★" />
            </h3>
            <p className="mt-2 text-gray-500">Average Rating</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-red-950">
              <CountUp to={500} suffix="+" />
            </h3>
            <p className="mt-2 text-gray-500">Authentic Products</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-red-950">24/7</h3>
            <p className="mt-2 text-gray-500">Customer Support</p>
          </div>

        </div>

      </div>
    </section>

    </>
  );
}
export default page