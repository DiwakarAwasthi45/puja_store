"use client";

import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Flame,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">

        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden" data-reveal>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#3B0A0A] to-[#6B1111] text-white text-center px-8 py-10">

            <div className="mx-auto h-20 w-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-5">
              <Flame className="h-10 w-10 text-yellow-400" />
            </div>

            <h1 className="text-3xl font-bold">
              Create Account
            </h1>

            <p className="text-orange-100 mt-2">
              Join Puja Store and start your spiritual journey.
            </p>

          </div>

          {/* Form */}
          <div className="p-8">

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type="tel"
                    placeholder="98XXXXXXXX"
                    className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:ring-4 focus:ring-yellow-100 focus:border-yellow-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showConfirm ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-[#3B0A0A] font-semibold hover:text-yellow-600"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#3B0A0A] font-semibold hover:text-yellow-600"
                  >
                    Privacy Policy
                  </Link>.
                </span>
              </label>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#3B0A0A] text-white font-semibold hover:bg-[#5A1414] transition"
              >
                Create Account
              </button>

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="px-4 text-sm text-gray-400">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Google */}
            <button className="w-full h-12 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
              <img
                src="/images/main.jpg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            {/* Login */}
            <p className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#3B0A0A] hover:text-yellow-600"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}