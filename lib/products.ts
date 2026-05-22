export type Category = "Underwear" | "Socks" | "Bundles";
export type CategoryFilter = "All" | Category;
export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

export interface Product {
  id: string;
  name: string;
  brand: string;
  brandTagline: string;
  cut: string;
  category: Category;
  price: number;
  material: string;
  certifications: string[];
  healthBenefits: string[];
  description: string;
  colors: { name: string; hex: string }[];
  cardGradient: [string, string];
  image: string;
  images: string[];
  sizes: string[];
  tag?: string;
  isNew: boolean;
  affiliateUrl: string;
}

// Real health-focused underwear brands sourced via affiliate networks
export const PRODUCTS: Product[] = [
  {
    id: "huha-brief",
    name: "HUHA Brief",
    brand: "HUHA",
    brandTagline: "Let your body breathe™",
    cut: "Brief",
    category: "Underwear",
    price: 26,
    material: "TENCEL™ + Zinc Oxide gusset",
    certifications: ["OEKO-TEX® Standard 100", "Vegan"],
    healthBenefits: [
      "Antimicrobial zinc oxide gusset",
      "Naturally moisture-wicking TENCEL™",
      "No synthetic fragrance or dyes",
      "Breathable for sensitive skin",
    ],
    description:
      "Designed by a founder who experienced recurring UTIs, HUHA's brief features a zinc oxide–infused gusset that actively reduces bacterial growth. TENCEL™ fibers are sourced from responsibly harvested trees and are certified OEKO-TEX® Standard 100 — tested free from over 1,000 harmful substances.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Ivory", hex: "#f0ebe1" },
      { name: "Sage", hex: "#8aab8a" },
      { name: "Clay", hex: "#c07a5a" },
    ],
    cardGradient: ["#2a2724", "#c4663a"],
    image: "https://images.pexels.com/photos/7479438/pexels-photo-7479438.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/7479438/pexels-photo-7479438.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/11010392/pexels-photo-11010392.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "Health pick",
    isNew: false,
    affiliateUrl: "#",
  },
  {
    id: "huha-thong",
    name: "HUHA Thong",
    brand: "HUHA",
    brandTagline: "Let your body breathe™",
    cut: "Thong",
    category: "Underwear",
    price: 24,
    material: "TENCEL™ + Zinc Oxide gusset",
    certifications: ["OEKO-TEX® Standard 100", "Vegan"],
    healthBenefits: [
      "Antimicrobial zinc oxide protection",
      "Virtually seamless fit",
      "Naturally temperature-regulating",
      "Free from harsh chemicals",
    ],
    description:
      "All the intimate health benefits of the HUHA Brief in a barely-there thong cut. Zinc oxide is naturally antimicrobial — it doesn't wash out or degrade over time. TENCEL™ fibers keep you cool, dry, and comfortable all day.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Ivory", hex: "#f0ebe1" },
      { name: "Blush", hex: "#d4a89e" },
    ],
    cardGradient: ["#1e1b18", "#8a5a3a"],
    image: "https://images.pexels.com/photos/12458078/pexels-photo-12458078.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/12458078/pexels-photo-12458078.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/6879815/pexels-photo-6879815.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isNew: true,
    tag: "New",
    affiliateUrl: "#",
  },
  {
    id: "boody-brief",
    name: "Boody Full Brief",
    brand: "Boody",
    brandTagline: "Naturally gentle on skin",
    cut: "Brief",
    category: "Underwear",
    price: 17,
    material: "79% Viscose from Bamboo, 21% Spandex",
    certifications: ["OEKO-TEX® Standard 100", "FSC", "ECOCERT", "Vegan"],
    healthBenefits: [
      "Naturally hypoallergenic bamboo fibers",
      "Moisture-wicking and temperature-regulating",
      "Soft seamless construction",
      "Gentle on eczema-prone skin",
    ],
    description:
      "Boody's signature bamboo viscose is silky soft, incredibly breathable, and naturally hypoallergenic — ideal for anyone with sensitive skin or fabric allergies. Certified by OEKO-TEX® Standard 100, ECOCERT, and FSC, every pair meets strict global standards for chemical safety.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Clove", hex: "#8b5e3c" },
      { name: "Natural", hex: "#e8dcc8" },
    ],
    cardGradient: ["#1c3a2a", "#4a8a5a"],
    image: "https://images.pexels.com/photos/11010392/pexels-photo-11010392.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/11010392/pexels-photo-11010392.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/7232397/pexels-photo-7232397.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "Bestseller",
    isNew: false,
    affiliateUrl: "#",
  },
  {
    id: "boody-ribbed-brief",
    name: "Boody Ribbed High-Leg",
    brand: "Boody",
    brandTagline: "Naturally gentle on skin",
    cut: "High-Leg Brief",
    category: "Underwear",
    price: 18,
    material: "68% Lyocell from Bamboo, 27% Nylon, 5% Spandex",
    certifications: ["OEKO-TEX® Standard 100", "FSC", "ECOCERT"],
    healthBenefits: [
      "Lyocell bamboo regulates moisture better than cotton",
      "Naturally odour-resistant",
      "No synthetic fragrances or dyes",
      "Breathable ribbed texture",
    ],
    description:
      "A modern high-leg cut with tactile ribbed texture. Lyocell from bamboo is 50% more moisture-absorbent than cotton, keeping skin balanced and fresh. The elevated leg opening reduces friction and improves airflow exactly where you need it.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Powder Pink", hex: "#e8c4bc" },
      { name: "Storm", hex: "#8892a4" },
    ],
    cardGradient: ["#1a2a3a", "#3a6a8a"],
    image: "https://images.pexels.com/photos/6879815/pexels-photo-6879815.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/6879815/pexels-photo-6879815.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/7479438/pexels-photo-7479438.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isNew: false,
    affiliateUrl: "#",
  },
  {
    id: "tbo-trunk-3pack",
    name: "TBô Trunk 3-Pack",
    brand: "TBô",
    brandTagline: "Engineered for men's health",
    cut: "Trunk",
    category: "Underwear",
    price: 35,
    material: "95% Bamboo Viscose, 5% Spandex",
    certifications: ["OEKO-TEX® Certified", "Vegan"],
    healthBenefits: [
      "Bamboo kun naturally reduces bacterial growth",
      "3× more breathable than cotton",
      "Moisture-wicking in high-sweat zones",
      "Chafe-free flatlock seams",
    ],
    description:
      "Three performance trunks built around bamboo's natural antimicrobial agent — bamboo kun — which has been shown to reduce the growth of bacteria by over 70%. The trunk cut provides full coverage with a contoured pouch that prevents bunching and keeps things cool.",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1b2a5a" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    cardGradient: ["#1a1e2a", "#2a4a8a"],
    image: "https://images.pexels.com/photos/5175669/pexels-photo-5175669.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/5175669/pexels-photo-5175669.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/8874933/pexels-photo-8874933.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    tag: "Best value",
    isNew: false,
    affiliateUrl: "#",
  },
  {
    id: "q-for-quinn-brief",
    name: "Q for Quinn Organic Brief",
    brand: "Q for Quinn",
    brandTagline: "Better for your body and the planet",
    cut: "Brief",
    category: "Underwear",
    price: 25,
    material: "100% GOTS-certified Organic Cotton",
    certifications: [
      "GOTS Certified Organic",
      "OEKO-TEX® Certified Elastics",
      "Plant-based dyes",
      "1% for the Planet",
    ],
    healthBenefits: [
      "Certified organic cotton — zero pesticides",
      "Plant-based dyes, no synthetic colourants",
      "Naturally pH-balancing",
      "Recommended for yeast infection prevention",
    ],
    description:
      "100% GOTS-certified organic cotton grown without synthetic pesticides or fertilisers. Dyed with plant-based colours and finished with OEKO-TEX–certified elastics. Dermatologists frequently recommend organic cotton briefs for women prone to bacterial vaginosis or yeast infections — this is that brief.",
    colors: [
      { name: "Natural", hex: "#e8dcc8" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Dusty Rose", hex: "#d4a8a0" },
      { name: "Sage", hex: "#8aab8a" },
    ],
    cardGradient: ["#2a1e14", "#8a6a3a"],
    image: "https://images.pexels.com/photos/7479438/pexels-photo-7479438.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/7479438/pexels-photo-7479438.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/5908326/pexels-photo-5908326.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "Doctor recommended",
    isNew: false,
    affiliateUrl: "#",
  },
  {
    id: "wama-brief",
    name: "WAMA Hemp Brief",
    brand: "WAMA",
    brandTagline: "Sustainable intimates, naturally",
    cut: "Brief",
    category: "Underwear",
    price: 22,
    material: "53% Hemp, 44% Organic Cotton, 3% Spandex",
    certifications: [
      "PETA-Approved Vegan",
      "Green America Certified",
      "OEKO-TEX® Certified Factory",
      "National Hemp Association",
    ],
    healthBenefits: [
      "Hemp is naturally antibacterial",
      "Organic cotton keeps skin breathing",
      "No synthetic chemicals throughout",
      "4× more breathable than polyester",
    ],
    description:
      "A 53/44 hemp-organic cotton blend that gets softer with every wash. Hemp is one of the most naturally antibacterial textiles on earth — it requires no pesticides to grow and continues fighting odour-causing bacteria in wear. WAMA is PETA-approved vegan, Green America certified, and made in a OEKO-TEX–certified factory.",
    colors: [
      { name: "Natural", hex: "#e8dcc8" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Forest", hex: "#3a5a3a" },
    ],
    cardGradient: ["#1e2a1a", "#4a6a2a"],
    image: "https://images.pexels.com/photos/7232397/pexels-photo-7232397.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/7232397/pexels-photo-7232397.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/5908326/pexels-photo-5908326.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isNew: true,
    tag: "New",
    affiliateUrl: "#",
  },
  {
    id: "boody-bundle",
    name: "Boody Starter Bundle",
    brand: "Boody",
    brandTagline: "Your full healthy foundation",
    cut: "Bundle",
    category: "Bundles",
    price: 48,
    material: "79% Viscose from Bamboo, 21% Spandex",
    certifications: ["OEKO-TEX® Standard 100", "ECOCERT", "FSC"],
    healthBenefits: [
      "3 pairs of certified-clean bamboo underwear",
      "Full 7-day rotation starter set",
      "Save 6% vs. buying separately",
    ],
    description:
      "Three Boody Full Briefs in your three favourite colours. A full hypoallergenic bamboo foundation in one box — naturally soft, breathable, and certified clean from harvest to finished garment.",
    colors: [{ name: "3 colours of your choice", hex: "" }],
    cardGradient: ["#1c3a2a", "#3a7a4a"],
    image: "https://images.pexels.com/photos/6568223/pexels-photo-6568223.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: ["https://images.pexels.com/photos/6568223/pexels-photo-6568223.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/9356539/pexels-photo-9356539.jpeg?auto=compress&cs=tinysrgb&w=800"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "Save 6%",
    isNew: false,
    affiliateUrl: "#",
  },
];

export const CATEGORIES: CategoryFilter[] = ["All", "Underwear", "Socks", "Bundles"];

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Featured", value: "featured" },
  { label: "Newest first", value: "newest" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
];

export function filterAndSort(
  products: Product[],
  category: CategoryFilter,
  sort: SortOption
): Product[] {
  const filtered =
    category === "All" ? products : products.filter((p) => p.category === category);
  switch (sort) {
    case "newest":
      return [...filtered].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    case "price-asc":
      return [...filtered].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...filtered].sort((a, b) => b.price - a.price);
    default:
      return filtered;
  }
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
