import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ShoppingCart, Truck, ShieldCheck, Undo2 } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  const related = getRelatedProducts(product);

  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <section className="bg-gradient-to-r from-[#3B0A0A] to-[#7A1F1F] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-orange-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-yellow-300">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
          <h1 className="text-4xl font-bold" data-reveal>{product.name}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow overflow-hidden" data-reveal>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[480px] object-cover"
            />
          </div>

          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                {product.badge}
              </span>
              <span className="text-sm text-orange-600">{product.category}</span>
            </div>

            <h2 className="mt-4 text-4xl font-bold text-[#3B0A0A]">
              {product.name}
            </h2>

            <div className="flex items-center gap-1 mt-4">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-500 text-sm ml-2">
                {product.rating}.0 Rating
              </span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="text-4xl font-bold text-[#3B0A0A]">
                Rs. {product.price}
              </span>
              <span className="line-through text-gray-400 text-xl">
                Rs. {product.oldPrice}
              </span>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                Save Rs. {product.oldPrice - product.price}
              </span>
            </div>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Truck className="text-green-600" />
                Free delivery over Rs.999
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ShieldCheck className="text-blue-600" />
                100% Secure payments
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Undo2 className="text-amber-600" />
                7-day return policy
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cart"
                className="bg-[#3B0A0A] hover:bg-[#5A1414] text-white px-10 py-4 rounded-xl flex items-center gap-2 font-semibold transition"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Link>
              <Link
                href="/cart"
                className="bg-yellow-500 hover:bg-yellow-400 text-[#3B0A0A] px-10 py-4 rounded-xl font-semibold text-center transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#3B0A0A]">
              Related Products
            </h2>
            <Link href="/shop" className="text-[#3B0A0A] font-semibold hover:underline">
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/shop/${item.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-orange-600">{item.category}</p>
                  <h3 className="font-bold text-xl mt-1">{item.name}</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xl font-bold text-[#3B0A0A]">
                      Rs. {item.price}
                    </span>
                    <span className="line-through text-gray-400">
                      Rs. {item.oldPrice}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
