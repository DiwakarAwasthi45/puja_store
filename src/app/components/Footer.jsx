"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Truck,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3B0A0A] text-white" role="contentinfo">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b20,transparent_40%)]" aria-hidden="true" />

      <div className="relative">
        {/* Newsletter */}
        <section aria-labelledby="newsletter-heading">
          <div className="border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-14">
              <div className="rounded-3xl bg-gradient-to-r from-red-900 to-amber-700 p-10 lg:flex items-center justify-between gap-10">
                <div>
                  <span className="text-amber-200 font-semibold uppercase tracking-widest">
                    Newsletter
                  </span>

                  <h2 id="newsletter-heading" className="mt-3 text-3xl lg:text-4xl font-bold">
                    Get Festival Offers & Spiritual Updates
                  </h2>

                  <p className="mt-3 text-white/80 max-w-xl">
                    Subscribe to receive exclusive offers, festival
                    collections, and updates about newly arrived puja
                    essentials.
                  </p>
                </div>

                <form className="mt-8 lg:mt-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto" aria-label="Newsletter subscription">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                    className="w-full lg:w-80 rounded-full px-6 py-4 text-white  border border-gray-300 "
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-white text-red-900 font-semibold px-8 py-4 hover:bg-amber-200 transition flex items-center justify-center gap-2"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                    <Send size={18} aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <section aria-labelledby="footer-heading">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Company */}
              <div>
                <h2 id="footer-heading" className="text-3xl font-bold text-amber-400">
                  Puja Samagri
                </h2>

                <p className="mt-6 leading-8 text-gray-300">
                  We provide authentic puja essentials, idols, incense
                  sticks, diyas, flowers, rudraksha, and festival
                  collections delivered with devotion across Nepal.
                </p>

                <div className="flex gap-4 mt-8" role="navigation" aria-label="Social media links">
                  <a
                    href="#"
                    className="h-11 w-11 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
                    aria-label="Follow us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={18} aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    className="h-11 w-11 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
                    aria-label="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={18} aria-hidden="true" />
                  </a>

                  <a
                    href="#"
                    className="h-11 w-11 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
                    aria-label="Subscribe to our YouTube channel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-6">
                  Categories
                </h3>

                <ul className="space-y-4 text-gray-300" role="list">
                  <li>
                    <Link href="/categories/puja-kits" className="hover:text-amber-400 transition">
                      Puja Kits
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/idols-murtis" className="hover:text-amber-400 transition">
                      Idols & Murtis
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/incense-dhoop" className="hover:text-amber-400 transition">
                      Incense & Dhoop
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/diya-lamps" className="hover:text-amber-400 transition">
                      Diya & Lamps
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/festival-collection" className="hover:text-amber-400 transition">
                      Festival Collection
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6">
                  Quick Links
                </h3>

                <ul className="space-y-4 text-gray-300" role="list">
                  <li>
                    <Link href="/" className="hover:text-amber-400 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="hover:text-amber-400 transition">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-amber-400 transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-amber-400 transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-amber-400 transition">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold mb-6">
                  Contact Us
                </h3>

                <div className="space-y-5 text-gray-300">
                  <a
                    href="tel:+9779800000000"
                    className="flex gap-3 hover:text-amber-400 transition"
                    aria-label="Call us at +977-9800000000"
                  >
                    <Phone
                      size={18}
                      className="text-amber-400 mt-1"
                      aria-hidden="true"
                    />
                    <span>+977-9800000000</span>
                  </a>

                  <a
                    href="mailto:info@pujasamagri.com"
                    className="flex gap-3 hover:text-amber-400 transition"
                    aria-label="Email us at info@pujasamagri.com"
                  >
                    <Mail
                      size={18}
                      className="text-amber-400 mt-1"
                      aria-hidden="true"
                    />
                    <span>info@pujasamagri.com</span>
                  </a>

                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="text-amber-400 mt-1"
                      aria-hidden="true"
                    />
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Trust and security features">
          <div className="border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8 text-center">
              <div className="flex justify-center items-center gap-3">
                <Truck className="text-amber-400" aria-hidden="true" />
                <span>Fast Nationwide Delivery</span>
              </div>

              <div className="flex justify-center items-center gap-3">
                <ShieldCheck className="text-amber-400" aria-hidden="true" />
                <span>100% Secure Shopping</span>
              </div>

              <div className="flex justify-center items-center gap-3">
                <CreditCard className="text-amber-400" aria-hidden="true" />
                <span>eSewa • Khalti • Fonepay • Cash on Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom */}
        <section aria-label="Copyright and legal links">
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Puja Samagri. All Rights Reserved.
              </p>

              <div className="flex gap-8">
                <Link href="/terms" className="hover:text-amber-400 transition">
                  Terms & Conditions
                </Link>
                <Link href="/refund" className="hover:text-amber-400 transition">
                  Refund Policy
                </Link>
                <Link href="/shipping" className="hover:text-amber-400 transition">
                  Shipping Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}