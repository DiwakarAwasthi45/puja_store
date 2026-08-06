"use client";

import Link from "next/link";
import { Mail, Flame, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-300 overflow-hidden" data-reveal>
          <div className="bg-gradient-to-r from-[#3B0A0A] to-[#6B1111] px-8 py-10 text-center text-white">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border border-gray-300 backdrop-blur">
              <Flame className="h-10 w-10 text-yellow-400" />
            </div>
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="mt-2 text-orange-100">
              Enter your email to reset your password
            </p>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                <h2 className="mt-6 text-2xl font-bold text-[#3B0A0A]">
                  Check Your Email
                </h2>
                <p className="mt-3 text-gray-500 leading-7">
                  We have sent a password reset link to your email address.
                  Please follow the instructions in the email to set a new
                  password.
                </p>
                <Link
                  href="/login"
                  className="mt-8 inline-block h-12 w-full rounded-xl bg-[#3B0A0A] font-semibold text-white transition hover:bg-[#5A1414] flex items-center justify-center"
                >
                  Back to Login
                </Link>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="Enter your registered email"
                      required
                      className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition focus:border-gray-300 focus:ring-4 focus:ring-yellow-100"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#3B0A0A] font-semibold text-white transition hover:bg-[#5A1414]"
                >
                  Send Reset Link
                </button>
              </form>
            )}

            <p className="mt-8 text-center text-gray-600">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#3B0A0A] hover:text-yellow-600"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
