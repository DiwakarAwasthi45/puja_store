import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function RefundPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Refund Policy</span>
          </nav>
          <h1 className="text-4xl font-bold" data-reveal>Refund Policy</h1>
          <p className="mt-3 text-orange-100" data-reveal>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10 text-gray-600 leading-8" data-reveal>
          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4 flex items-center gap-3">
              <Undo2 className="text-yellow-500" />
              7-Day Return Policy
            </h2>
            <p>
              We want you to be completely satisfied with your purchase. If for
              any reason you are not, you may request a return or exchange
              within <strong>7 days</strong> of receiving your order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Eligible Conditions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Item is unused, unwashed and in its original packaging</li>
              <li>Return request is raised within 7 days of delivery</li>
              <li>Defective, damaged or wrong item is received</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Non-Returnable Items
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items that have been used or opened (e.g. incense, dhoop)</li>
              <li>Perishable items such as flowers and prasad</li>
              <li>Items marked as final sale</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              How Refunds Work
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact us within 7 days with your order number</li>
              <li>We will arrange a pickup or provide a return address</li>
              <li>Once inspected, refunds are processed within 3-5 business days</li>
              <li>Refunds are issued to the original payment method or as store credit</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Damaged on Arrival
            </h2>
            <p>
              If your order arrives damaged, please send us a photo of the item
              and packaging within 48 hours of delivery. We will arrange a free
              replacement or full refund.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow p-8">
            <h2 className="text-xl font-bold text-[#3B0A0A] mb-3">
              Request a Return
            </h2>
            <p>
              Email us at{" "}
              <a href="mailto:info@pujasamagri.com" className="text-[#3B0A0A] font-medium underline">
                info@pujasamagri.com
              </a>{" "}
              or call{" "}
              <a href="tel:+9779800000000" className="text-[#3B0A0A] font-medium underline">
                +977-9800000000
              </a>{" "}
              with your order number to begin the process.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
