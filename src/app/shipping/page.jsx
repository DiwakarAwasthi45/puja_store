import Link from "next/link";
import { Truck } from "lucide-react";

export default function ShippingPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Shipping Policy</span>
          </nav>
          <h1 className="text-4xl font-bold" data-reveal>Shipping Policy</h1>
          <p className="mt-3 text-orange-100" data-reveal>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10 text-gray-600 leading-8" data-reveal>
          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4 flex items-center gap-3">
              <Truck className="text-yellow-500" />
              Delivery Coverage
            </h2>
            <p>
              We deliver across all districts of Nepal, including Kathmandu
              Valley and major cities. Orders placed from remote areas may take
              slightly longer to arrive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Delivery Timeframes
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kathmandu Valley:</strong> 1-3 business days
              </li>
              <li>
                <strong>Major cities (Pokhara, Biratnagar, etc.):</strong> 3-5
                business days
              </li>
              <li>
                <strong>Other districts:</strong> 5-10 business days
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Shipping Charges
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free delivery on all orders above Rs. 999</li>
              <li>Flat Rs. 99 delivery charge for orders below Rs. 999</li>
              <li>Cash on Delivery is available with no extra fee</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Order Processing
            </h2>
            <p>
              Orders are processed and dispatched within 24-48 hours of being
              placed, excluding weekends and public holidays. You will receive
              a tracking update once your order is dispatched.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Delivery Instructions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Please provide a correct and complete delivery address</li>
              <li>Keep your phone available for delivery confirmation calls</li>
              <li>Inspect your parcel at the time of delivery</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white shadow p-8">
            <h2 className="text-xl font-bold text-[#3B0A0A] mb-3">
              Track Your Order
            </h2>
            <p>
              For any questions about your delivery, please{" "}
              <Link href="/contact" className="text-[#3B0A0A] font-medium underline">
                contact us
              </Link>{" "}
              or call{" "}
              <a href="tel:+9779800000000" className="text-[#3B0A0A] font-medium underline">
                +977-9800000000
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
