"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Tag,
  ShieldCheck,
  Truck,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "Brass Diya",
    price: 499,
    qty: 2,
    image:
      "/images/main.jpg",
  },
  {
    id: 2,
    name: "Ganesh Idol",
    price: 1499,
    qty: 1,
    image:
      "/images/main.jpg",
  },
];

export default function page() {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id, type) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 120;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <ShoppingBag
            className="mx-auto text-[#3B0A0A] mb-6"
            size={70}
          />

          <h1 className="text-3xl font-bold text-[#3B0A0A]">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-4">
            Looks like you haven't added any spiritual products yet.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-[#3B0A0A] text-white px-7 py-4 rounded-xl hover:bg-[#5A1414]"
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
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Shopping Cart</h1>
          <p className="mt-4 text-orange-100">
            Review your selected puja products before checkout.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6" data-reveal-stagger>

          {/* Shipping Progress */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex justify-between text-sm mb-3">
              <span>🚚 Free Shipping Progress</span>
              <span>
                {subtotal >= 999
                  ? "Unlocked 🎉"
                  : `Rs. ${999 - subtotal} away`}
              </span>
            </div>

            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-yellow-500"
                style={{
                  width: `${Math.min(
                    (subtotal / 999) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow p-5 flex flex-col md:flex-row gap-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-[#3B0A0A]">
                  {item.name}
                </h2>

                <p className="mt-3 text-lg font-semibold text-yellow-800">
                  Rs. {item.price}
                </p>

                <div className="flex items-center gap-3 mt-6">

                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="h-10 w-10 rounded-lg border-gray-300 flex items-center justify-center"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="font-bold text-lg w-8 text-center">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="h-10 w-10 rounded-lg border-gray-300 flex items-center justify-center"
                  >
                    <Plus size={18} />
                  </button>

                </div>
              </div>

              <div className="flex flex-col justify-between items-end">

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>

                <h3 className="text-2xl font-bold text-[#3B0A0A]">
                  Rs. {item.price * item.qty}
                </h3>

              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="bg-white rounded-2xl shadow p-6 sm:p-8 h-fit" data-reveal>

          <h2 className="text-2xl font-bold text-[#3B0A0A] mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "FREE" : `Rs. ${shipping}`}
              </span>
            </div>

            <div className="border-t border-gray-300 pt-5 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-[#3B0A0A]">
                Rs. {total}
              </span>
            </div>

          </div>

          {/* Coupon */}
          <div className="mt-8">

            <label className="font-semibold flex items-center gap-2 mb-3">
              <Tag size={18} />
              Coupon Code
            </label>

            <div className="flex">
              <input
                placeholder="Enter coupon"
                className="flex-1 border-gray-300 rounded-l-xl px-4 h-12 outline-none"
              />

              <button className="bg-[#3B0A0A] text-white px-6 rounded-r-xl">
                Apply
              </button>
            </div>

          </div>

          {/* Features */}
          <div className="mt-8 space-y-4 text-sm text-gray-600">

            <div className="flex gap-3">
              <Truck className="text-green-600" />
              Free delivery over Rs.999
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-blue-600" />
              Secure payment & checkout
            </div>

          </div>

          <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-[#3B0A0A] font-bold py-4 rounded-xl">
            Proceed to Checkout
          </button>

          <Link
            href="/shop"
            className="block text-center mt-5 text-[#3B0A0A] hover:underline"
          >
            Continue Shopping
          </Link>

        </aside>

      </section>
    </main>
  );
}