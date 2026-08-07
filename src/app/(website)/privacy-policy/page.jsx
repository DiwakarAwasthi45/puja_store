import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold" data-reveal>Privacy Policy</h1>
          <p className="mt-3 text-orange-100" data-reveal>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10 text-gray-600 leading-8" data-reveal>
          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4 flex items-center gap-3">
              <ShieldCheck className="text-yellow-500" />
              Introduction
            </h2>
            <p>
              At Puja Samagri, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains what information we collect, how we use it, and the
              choices you have regarding your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number and delivery address</li>
              <li>Order history and payment preferences</li>
              <li>Device and browser information for site improvement</li>
              <li>Cookies used to remember your cart and preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and deliver your orders</li>
              <li>To provide customer support and resolve issues</li>
              <li>To send order updates and promotional offers (with consent)</li>
              <li>To improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Data Security
            </h2>
            <p>
              We use industry-standard security measures, including encryption
              and secure payment gateways (eSewa, Khalti, Fonepay), to protect
              your data. Your payment information is never stored on our
              servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Sharing of Information
            </h2>
            <p>
              We do not sell your personal information. We may share necessary
              details with trusted delivery partners and payment providers
              solely to fulfil your orders.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3B0A0A] mb-4">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at{" "}
              <a href="mailto:info@pujasamagri.com" className="text-[#3B0A0A] font-medium underline">
                info@pujasamagri.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#3B0A0A] mb-3">
              Questions?
            </h2>
            <p>
              If you have any questions about this policy, please{" "}
              <Link href="/contact" className="text-[#3B0A0A] font-medium underline">
                contact us
              </Link>{" "}
              or read our{" "}
              <Link href="/terms" className="text-[#3B0A0A] font-medium underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
