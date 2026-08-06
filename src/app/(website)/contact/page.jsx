"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export default function page() {
  return (
    <main className="bg-[#faf8f5]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3B0A0A] via-[#5A1414] to-[#7A1F1F] text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/main.jpg')]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-yellow-500/20 border border-gray-300 text-yellow-300 px-5 py-2 rounded-full text-sm">
            <MessageCircle size={16} />
            We're Here To Help
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Contact Us
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-orange-100 text-lg">
            Have questions about our products, orders, or deliveries?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left */}
          <div className="lg:col-span-2 space-y-6" data-reveal-stagger>

            <div className="bg-white rounded-3xl shadow p-7">
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Phone className="text-[#3B0A0A]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#3B0A0A]">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +977-9800000000
                  </p>

                  <p className="text-gray-600">
                    +977-9811111111
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-7">
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Mail className="text-[#3B0A0A]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#3B0A0A]">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    support@pujastore.com
                  </p>

                  <p className="text-gray-600">
                    info@pujastore.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-7">
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">
                  <MapPin className="text-[#3B0A0A]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#3B0A0A]">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Kathmandu, Nepal
                  </p>

                  <p className="text-gray-600">
                    Near Pashupatinath Temple
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-7">
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="text-[#3B0A0A]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#3B0A0A]">
                    Opening Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Sunday - Friday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-10" data-reveal>

            <h2 className="text-3xl font-bold text-[#3B0A0A]">
              Send a Message
            </h2>

            <p className="text-gray-500 mt-3">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-xl h-14 px-5 outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-xl h-14 px-5 outline-none focus:ring-2 focus:ring-yellow-400"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl h-14 px-5 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl p-5 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button className="bg-[#3B0A0A] hover:bg-[#5A1414] text-white px-8 py-4 rounded-xl flex items-center gap-2 transition">
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pashupatinath+Temple+Kathmandu&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#3B0A0A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Do you deliver all over Nepal?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes, we provide delivery services throughout Nepal.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                How long does delivery take?
              </h3>

              <p className="text-gray-600 mt-3">
                Usually between 2–5 business days depending on your location.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Are your products authentic?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes. We source authentic puja products from trusted suppliers
                and artisans.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}