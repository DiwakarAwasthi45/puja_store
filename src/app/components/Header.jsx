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
  Phone,
  MapPin,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
      href: "/categories/idols-murtis",
      items: [
        { name: "Ganesha Idol", href: "/categories/idols-murtis" },
        { name: "Lakshmi Idol", href: "/categories/idols-murtis" },
        { name: "Krishna Idol", href: "/categories/idols-murtis" },
        { name: "Shiva Idol", href: "/categories/idols-murtis" },
      ],
    },
    {
      title: "Puja Samagri",
      href: "/categories/puja-samagri",
      items: [
        { name: "Puja Thali", href: "/categories/puja-samagri" },
        { name: "Diya", href: "/categories/diya-lamps" },
        { name: "Kalash", href: "/categories/puja-samagri" },
        { name: "Bell", href: "/categories/puja-samagri" },
      ],
    },
    {
      title: "Puja Kits",
      href: "/categories/puja-kits",
      items: [
        { name: "Daily Kit", href: "/categories/puja-kits" },
        { name: "Festival Kit", href: "/categories/puja-kits" },
        { name: "Wedding Kit", href: "/categories/puja-kits" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="bg-[#3B0A0A] text-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 min-w-0">
            <span className="hidden sm:flex items-center gap-2">
              <Phone size={13} className="text-yellow-400 shrink-0" />
              <span className="truncate">+977-9800000000</span>
            </span>
            <span className="hidden lg:flex items-center gap-2">
              <MapPin size={13} className="text-yellow-400 shrink-0" />
              <span>Kathmandu, Nepal</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-base leading-none">🪔</span>
              <span className="truncate">Authentic Puja Products</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span>🚚</span>
            <span>Free Delivery Above Rs.999</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/offers"
              className="hover:text-yellow-400 transition shrink-0"
            >
              Offers
            </Link>
            <Link
              href="/contact"
              className="hidden sm:block hover:text-yellow-400 transition shrink-0"
            >
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-md before:absolute before:-inset-1 before:border before:border-yellow-400/50 before:rounded-full before:opacity-60 group-hover:before:-inset-2 before:transition-all">
                <Flame className="text-[#3B0A0A] w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-xl sm:text-2xl text-[#3B0A0A] tracking-tight leading-none">
                  Puja Store
                </h1>
                <p className="text-[11px] text-gray-500 mt-1">
                  Sacred products online
                </p>
              </div>
            </Link>

            {/* SEARCH (desktop) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  placeholder="Search puja items..."
                  className="w-full h-11 rounded-full border border-gray-300 pl-12 pr-24 text-sm outline-none focus:border-[#3B0A0A] focus:ring-4 focus:ring-amber-100 transition"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#3B0A0A] hover:bg-[#5A1414] text-white text-sm font-medium px-5 py-2 rounded-full transition">
                  Search
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/wishlist"
                className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                <span className="sr-only">Wishlist</span>
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] w-4.5 h-4.5 min-w-4.5 rounded-full flex items-center justify-center font-semibold">
                  0
                </span>
              </Link>

              <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 p-2 pl-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
                <span className="hidden xl:block text-sm font-medium">
                  Account
                </span>
              </Link>
              <Link
                href="/login"
                className="sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                className="relative p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#3B0A0A] transition"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#3B0A0A] text-white text-[10px] w-4.5 h-4.5 min-w-4.5 rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
              </Link>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="lg:hidden mt-4 pb-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  placeholder="Search puja items..."
                  className="w-full h-11 rounded-full border border-gray-300 pl-12 pr-5 text-sm outline-none focus:border-[#3B0A0A] focus:ring-4 focus:ring-amber-100 transition"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden lg:block border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center">
            {/* CATEGORY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <button
                className={`flex items-center gap-2 px-5 py-3.5 font-semibold text-white bg-[#3B0A0A] rounded-t-lg transition ${
                  categoryOpen ? "opacity-95" : "hover:opacity-95"
                }`}
              >
                <Menu size={18} />
                Categories
                <ChevronDown
                  size={16}
                  className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {categoryOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-300 rounded-b-2xl rounded-tr-2xl shadow-xl overflow-hidden">
                  {categories.map((cat) => (
                    <div key={cat.title} className="group/item">
                      <Link
                        href={cat.href}
                        className="flex justify-between items-center px-5 py-3.5 border-b border-gray-100 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                        onClick={() => setCategoryOpen(false)}
                      >
                        <span>{cat.title}</span>
                        <ChevronRight size={15} className="text-gray-400 group-hover/item:text-[#3B0A0A]" />
                      </Link>
                    </div>
                  ))}
                  <Link
                    href="/categories"
                    className="block px-5 py-3.5 text-sm font-semibold text-[#3B0A0A] bg-amber-50 hover:bg-amber-100 transition"
                  >
                    View All Categories →
                  </Link>
                </div>
              )}
            </div>

            {/* MENU ITEMS */}
            <div className="flex items-center ml-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3.5 text-sm font-medium text-gray-700 hover:text-[#3B0A0A] group relative"
                >
                  {item.name}
                  <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              ))}
            </div>

            <div className="ml-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
                <Flame size={13} />
                Festive Offers Live
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] border-b border-gray-300" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-300">
            <p className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Categories
            </p>
            <div className="space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="block px-3 py-2.5 rounded-lg text-gray-600 text-sm hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                  onClick={() => setOpen(false)}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-300">
            <div className="grid grid-cols-4 gap-2 text-center text-xs text-gray-600">
              <Link
                href="/wishlist"
                className="flex flex-col items-center gap-1.5 py-2 rounded-lg hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                onClick={() => setOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>
              <Link
                href="/login"
                className="flex flex-col items-center gap-1.5 py-2 rounded-lg hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                onClick={() => setOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center gap-1.5 py-2 rounded-lg hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                onClick={() => setOpen(false)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </Link>
              <Link
                href="/offers"
                className="flex flex-col items-center gap-1.5 py-2 rounded-lg hover:bg-amber-50 hover:text-[#3B0A0A] transition"
                onClick={() => setOpen(false)}
              >
                <Flame className="w-5 h-5" />
                <span>Offers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
