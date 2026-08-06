export const products = [
  {
    id: 1,
    slug: "brass-diya",
    name: "Brass Diya",
    category: "Diya & Lamps",
    categorySlug: "diya-lamps",
    price: 499,
    oldPrice: 699,
    rating: 5,
    image: "/images/main.jpg",
    badge: "20% OFF",
    description:
      "Handcrafted brass diya lamp, perfect for daily aarti, festivals and home decoration. Comes with a traditional matte finish and stays cool while burning.",
  },
  {
    id: 2,
    slug: "ganesh-idol",
    name: "Ganesh Idol",
    category: "Idols & Murtis",
    categorySlug: "idols-murtis",
    price: 1499,
    oldPrice: 1999,
    rating: 5,
    image: "/images/main.jpg",
    badge: "Best Seller",
    description:
      "Beautifully crafted Lord Ganesha idol made from premium materials. Ideal for home temple, office desk or gifting on auspicious occasions.",
  },
  {
    id: 3,
    slug: "puja-thali-set",
    name: "Puja Thali Set",
    category: "Puja Kits",
    categorySlug: "puja-kits",
    price: 999,
    oldPrice: 1299,
    rating: 4,
    image: "/images/main.jpg",
    badge: "New",
    description:
      "Complete puja thali set including aarti plate, kalash, small diya and bell. Everything you need for daily worship in one beautifully finished set.",
  },
  {
    id: 4,
    slug: "incense-sticks",
    name: "Incense Sticks",
    category: "Incense & Dhoop",
    categorySlug: "incense-dhoop",
    price: 299,
    oldPrice: 399,
    rating: 5,
    image: "/images/main.jpg",
    badge: "Hot",
    description:
      "Premium long-lasting incense sticks made from natural herbs and essential oils. Fills your home with a calming, divine fragrance.",
  },
  {
    id: 5,
    slug: "rudraksha-mala",
    name: "Rudraksha Mala",
    category: "Festival Collection",
    categorySlug: "festival-collection",
    price: 899,
    oldPrice: 1199,
    rating: 5,
    image: "/images/main.jpg",
    badge: "Trending",
    description:
      "Authentic 108-bead rudraksha mala, handpicked and tested. Believed to bring peace, focus and spiritual balance to the wearer.",
  },
  {
    id: 6,
    slug: "temple-bell",
    name: "Temple Bell",
    category: "Puja Samagri",
    categorySlug: "puja-samagri",
    price: 799,
    oldPrice: 999,
    rating: 4,
    image: "/images/main.jpg",
    badge: "Sale",
    description:
      "Traditional brass temple bell with a rich, resonant sound. Perfect for home mandir, aarti and festive celebrations.",
  },
  {
    id: 7,
    slug: "brass-kalash",
    name: "Brass Kalash",
    category: "Puja Samagri",
    categorySlug: "puja-samagri",
    price: 649,
    oldPrice: 849,
    rating: 5,
    image: "/images/main.jpg",
    badge: "New",
    description:
      "Traditional brass kalash (water pot) used in every puja ritual. Handcrafted with a fine engraved finish for weddings, hawan and festivals.",
  },
  {
    id: 8,
    slug: "shiva-idol",
    name: "Shiva Idol",
    category: "Idols & Murtis",
    categorySlug: "idols-murtis",
    price: 1899,
    oldPrice: 2399,
    rating: 5,
    image: "/images/main.jpg",
    badge: "Best Seller",
    description:
      "Meditative Lord Shiva idol sculpted with intricate detail. A serene addition to your home mandir, made from durable premium material.",
  },
  {
    id: 9,
    slug: "dhoop-cones",
    name: "Dhoop Cones",
    category: "Incense & Dhoop",
    categorySlug: "incense-dhoop",
    price: 199,
    oldPrice: 299,
    rating: 4,
    image: "/images/main.jpg",
    badge: "Sale",
    description:
      "Slow-burning natural dhoop cones with a rich, calming aroma. Ideal for daily puja, meditation and purifying your living space.",
  },
  {
    id: 10,
    slug: "lakshmi-idol",
    name: "Lakshmi Idol",
    category: "Idols & Murtis",
    categorySlug: "idols-murtis",
    price: 1699,
    oldPrice: 2199,
    rating: 5,
    image: "/images/main.jpg",
    badge: "Diwali Pick",
    description:
      "Goddess Lakshmi idol crafted for prosperity and good fortune. A perfect Diwali gift, beautifully detailed and ready for your puja.",
  },
];

export const categories = [
  {
    slug: "idols-murtis",
    title: "Idols & Murtis",
    description:
      "Handcrafted idols of your favourite deities for home temples and gifting.",
    image: "/images/main.jpg",
  },
  {
    slug: "puja-samagri",
    title: "Puja Samagri",
    description:
      "Essential puja items including bells, kalash and everything for daily worship.",
    image: "/images/main.jpg",
  },
  {
    slug: "puja-kits",
    title: "Puja Kits",
    description:
      "Complete ready-to-use kits for daily, festival and wedding ceremonies.",
    image: "/images/main.jpg",
  },
  {
    slug: "incense-dhoop",
    title: "Incense & Dhoop",
    description:
      "Natural incense sticks, dhoop and fragrances for a calm, divine atmosphere.",
    image: "/images/main.jpg",
  },
  {
    slug: "diya-lamps",
    title: "Diya & Lamps",
    description:
      "Traditional brass and clay diyas to light up your festivals and aarti.",
    image: "/images/main.jpg",
  },
  {
    slug: "festival-collection",
    title: "Festival Collection",
    description:
      "Curated products for Diwali, Teej, Dashain and all major celebrations.",
    image: "/images/main.jpg",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryProducts(slug) {
  return products.filter((p) => p.categorySlug === slug);
}

export function getRelatedProducts(product, limit = 3) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
