"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Flame } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden" data-reveal>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#3B0A0A] to-[#6B1111] px-8 py-10 text-center text-white">

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur">
              <Flame className="h-10 w-10 text-yellow-400" />
            </div>

            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-orange-100">
              Login to your Puja Store account
            </p>

          </div>

          {/* Form */}
          <div className="p-8">

            <form className="space-y-6">

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
                  />

                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-12 outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="font-medium text-[#3B0A0A] hover:text-yellow-600"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#3B0A0A] font-semibold text-white transition hover:bg-[#5A1414]"
              >
                Login
              </button>

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="px-4 text-sm text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Google Login */}
            <button
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 font-medium transition hover:bg-gray-50"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-8 text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#3B0A0A] hover:text-yellow-600"
              >
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}