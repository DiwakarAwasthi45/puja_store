"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Flame,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Festivals", href: "/festivals" },
    { name: "Offers", href: "/offers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    {
      title: "Idols & Murtis",
      href: "/idols",
      items: ["Ganesha Idol", "Lakshmi Idol", "Krishna Idol", "Shiva Idol"],
    },
    {
      title: "Puja Samagri",
      href: "/samagri",
      items: ["Puja Thali", "Diya", "Kalash", "Bell"],
    },
    {
      title: "Puja Kits",
      href: "/puja-kits",
      items: ["Daily Kit", "Festival Kit", "Wedding Kit"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      {/* TOP BAR */}
      <div className="bg-[#3B0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between text-xs">
          <span className="flex items-center gap-2">
            <span>🪔</span>
            <span>Authentic Puja Products</span>
          </span>
          <span className="hidden md:flex items-center gap-2">
            <span>🚚</span>
            <span>Free Delivery Above Rs.999</span>
          </span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-md before:absolute before:-inset-1 before:border before:border-yellow-400/60 before:rounded-full before:opacity-60 group-hover:before:-inset-2 transition">
              <Flame className="text-[#3B0A0A] w-6 h-6" />
            </div>

            <div>
              <h1 className="font-serif font-bold text-2xl text-[#3B0A0A] tracking-tight">
                Puja Store
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Sacred products online
              </p>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                placeholder="Search puja items..."
                className="w-full h-11 rounded-full border border-gray-200 pl-12 pr-5 text-sm outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 md:gap-5">
            <Link
              href="/wishlist"
              className="relative text-gray-600 hover:text-[#3B0A0A] transition"
            >
              <Heart className="w-5 h-5" />
              <span className="sr-only">Wishlist</span>
            </Link>

            <Link
              href="/login"
              className="relative text-gray-600 hover:text-[#3B0A0A] transition"
            >
              <User className="w-5 h-5" />
              <span className="sr-only">Account</span>
            </Link>

            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-[#3B0A0A] transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -right-2.5 -top-2 bg-[#3B0A0A] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                2
              </span>
              <span className="sr-only">Cart</span>
            </Link>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Search puja items..."
              className="w-full h-11 rounded-full border border-gray-200 pl-12 pr-5 text-sm outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition"
            />
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="hidden md:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-8">
            {/* CATEGORY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <button className="flex items-center gap-2 py-4 font-semibold text-[#3B0A0A] group">
                Categories
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition"
                />
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition" />
              </button>

              {categoryOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-2">
                  {categories.map((cat) => (
                    <div key={cat.title} className="group/item relative">
                      <Link
                        href={cat.href}
                        className="flex justify-between items-center px-3 py-2.5 rounded-lg text-sm hover:bg-yellow-50 transition"
                      >
                        <span>{cat.title}</span>
                        <ChevronRight size={14} />
                      </Link>

                      <div className="hidden group-hover/item:block absolute left-full top-0 w-60 bg-white border border-gray-200 rounded-xl shadow-xl p-2">
                        {cat.items.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3B0A0A] hover:bg-gray-50 rounded-md transition"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MENU ITEMS */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-4 text-sm font-medium text-gray-600 hover:text-[#3B0A0A] group relative"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-4 sm:px-6 py-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-2.5 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
              <Link
                href="/wishlist"
                className="flex flex-col items-center gap-1 hover:text-[#3B0A0A]"
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>
              <Link
                href="/login"
                className="flex flex-col items-center gap-1 hover:text-[#3B0A0A]"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center gap-1 hover:text-[#3B0A0A]"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}