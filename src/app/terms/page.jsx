import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Terms &amp; Conditions</span>
          </nav>
          <h1 className="text-4xl font-bold" data-reveal>Terms &amp; Conditions</h1>
          <p className="mt-3 text-orange-100" data-reveal>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10 text-gray-600 leading-8" data-reveal>
          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4 flex items-center gap-3">
              <FileText className="text-yellow-500" />
              Agreement
            </h2>
            <p>
              By accessing or using the Puja Samagri website, you agree to be
              bound by these Terms and Conditions. Please read them carefully
              before placing an order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Orders &amp; Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are listed in Nepalese Rupees (Rs.)</li>
              <li>Prices and offers may change without prior notice</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Product colours may vary slightly from images</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Payments
            </h2>
            <p>
              We accept eSewa, Khalti, Fonepay and Cash on Delivery. All online
              payments are processed through secure third-party gateways and
              are subject to their respective terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Product Use &amp; Safety
            </h2>
            <p>
              Puja products such as diyas, incense and dhoop should be used
              with care. Always keep burning items away from children,
              curtains and flammable materials. Follow the instructions
              provided with each product.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including images, logos and text, is
              the property of Puja Samagri and may not be reproduced without
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Liability
            </h2>
            <p>
              Puja Samagri is not liable for any indirect, incidental or
              consequential damages arising from the use of this website or the
              products purchased from it, to the fullest extent permitted by
              law.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow p-8">
            <h2 className="text-xl font-bold text-[#3B0A0A] mb-3">
              Need more information?
            </h2>
            <p>
              For any questions, please review our{" "}
              <Link href="/refund" className="text-[#3B0A0A] font-medium underline">
                Refund Policy
              </Link>
              ,{" "}
              <Link href="/shipping" className="text-[#3B0A0A] font-medium underline">
                Shipping Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-[#3B0A0A] font-medium underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
