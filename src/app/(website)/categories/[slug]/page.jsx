import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ShoppingCart } from "lucide-react";
import { categories, getCategoryBySlug, getCategoryProducts } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return notFound();

  const categoryProducts = getCategoryProducts(slug);

  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-yellow-300">Categories</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{category.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold" data-reveal>{category.title}</h1>
          <p className="mt-3 text-orange-100 max-w-xl" data-reveal>
            {category.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <p className="text-gray-600">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1 ? "product" : "products"} found
          </p>
          <Link
            href="/categories"
            className="text-[#3B0A0A] font-semibold hover:underline shrink-0"
          >
            View All Categories
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow p-16 text-center">
            <h2 className="text-2xl font-bold text-[#3B0A0A]">
              No products in this category yet
            </h2>
            <p className="mt-3 text-gray-600">
              New products are being added regularly. Please check back soon.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-8 bg-[#3B0A0A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#5A1414] transition"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {categoryProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300 group"
              >
                <Link href={`/shop/${item.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-orange-700">{item.category}</p>
                    <h3 className="font-bold text-xl mt-1">{item.name}</h3>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-gray-600 text-sm ml-1">
                        ({item.rating}.0)
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-[#3B0A0A]">
                          Rs. {item.price}
                        </span>
                        <span className="line-through text-gray-400 text-sm">
                          Rs. {item.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="px-6 pb-6">
                  <Link
                    href="/cart"
                    className="w-full bg-[#3B0A0A] text-white p-2.5 rounded-xl hover:bg-[#5A1414] transition inline-flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
