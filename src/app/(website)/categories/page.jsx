import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { categories, products } from "@/lib/products";

export default function CategoriesPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Categories</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold" data-reveal>Shop by Category</h1>
          <p className="mt-3 text-orange-100 max-w-xl" data-reveal>
            Explore our complete range of authentic puja essentials, organised
            by category for a quicker, easier shopping experience.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
          {categories.map((category) => {
            const count = products.filter((p) => p.categorySlug === category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0A0A]/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-white/90 text-[#3B0A0A] text-xs px-3 py-1 rounded-full font-semibold">
                    {count} {count === 1 ? "Product" : "Products"}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#3B0A0A] flex items-center gap-2">
                    {category.title}
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition text-yellow-500"
                    />
                  </h3>
                  <p className="mt-3 text-gray-500 leading-7">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-400 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6" data-reveal>
          <div className="flex items-center gap-4">
            <Sparkles className="text-[#3B0A0A] w-10 h-10" />
            <div>
              <h2 className="text-2xl font-bold text-[#3B0A0A]">
                Not sure what you need?
              </h2>
              <p className="text-[#3B0A0A]/80">
                Browse our full range and discover everything for your puja.
              </p>
            </div>
          </div>
          <Link
            href="/shop"
            className="bg-[#3B0A0A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#5A1414] transition"
          >
            View All Products
          </Link>
        </div>
      </section>
    </main>
  );
}
