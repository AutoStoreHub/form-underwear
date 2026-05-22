"use client";

import { notFound } from "next/navigation";
import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowLeft, Plus, Minus, ShoppingBag, CheckCircle } from "@phosphor-icons/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { getProductById, PRODUCTS } from "@/lib/products";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const rawProduct = getProductById(id);
  if (!rawProduct) return notFound();
  const product = rawProduct;

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add, openDrawer } = useCart();

  const hasColors = product.colors.length > 1 && product.colors[0].hex !== "";

  function handleAddToCart() {
    add({
      id: `${product.id}-${selectedColorIdx}-${selectedSize}`,
      title: product.name,
      variant: `${product.colors[selectedColorIdx]?.name ?? "Default"} / ${selectedSize}`,
      price: product.price,
      image: "",
    });
    for (let i = 0; i < qty - 1; i++) {
      add({
        id: `${product.id}-${selectedColorIdx}-${selectedSize}`,
        title: product.name,
        variant: `${product.colors[selectedColorIdx]?.name ?? "Default"} / ${selectedSize}`,
        price: product.price,
        image: "",
      });
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openDrawer();
    }, 1200);
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 border-b border-border">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={12} />
            All products
          </Link>
        </div>

        {/* PDP grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-20">
          {/* Left: visual */}
          <div className="sticky top-24 self-start">
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-square mb-3"
              style={{ background: `linear-gradient(145deg, ${product.cardGradient[0]} 0%, ${product.cardGradient[1]} 100%)` }}
            >
              <Image
                src={product.images[activeImg]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.tag && (
                <span className="absolute top-4 left-4 z-10 text-[0.65rem] tracking-[0.15em] uppercase font-semibold bg-canvas/90 text-accent px-3 py-1.5 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                      activeImg === i ? "ring-2 ring-accent ring-offset-2" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: info */}
          <div>
            <p className="text-xs text-ink-muted font-medium mb-2">{product.brand}</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-1">
              {product.name}
            </h1>
            <p className="text-sm text-ink-muted italic mb-5">{product.brandTagline}</p>

            <p className="text-3xl font-bold text-ink mb-6">${product.price}</p>

            {/* Scarcity */}
            <div className="flex items-center gap-2 bg-accent-sub rounded-lg px-3 py-2 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <span className="text-xs text-accent font-semibold">
                Only {4 + (product.id.charCodeAt(0) % 5)} left in stock
              </span>
            </div>

            {/* Color selector */}
            {hasColors && (
              <div className="mb-6">
                <p className="text-xs font-semibold text-ink mb-3">
                  Color: <span className="text-ink-muted font-normal">{product.colors[selectedColorIdx].name}</span>
                </p>
                <div className="flex gap-2.5 flex-wrap">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      title={color.name}
                      onClick={() => setSelectedColorIdx(i)}
                      className="w-8 h-8 rounded-full transition-all duration-150 cursor-pointer"
                      style={{
                        backgroundColor: color.hex,
                        border: "2px solid oklch(88% 0.008 65)",
                        boxShadow:
                          selectedColorIdx === i
                            ? "0 0 0 2px var(--color-canvas), 0 0 0 4px var(--color-accent)"
                            : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-ink mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-9 px-4 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer ${
                      selectedSize === size
                        ? "bg-ink text-canvas"
                        : "bg-surface border border-border text-ink-muted hover:border-ink/30 hover:text-ink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + ATC */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center border border-border rounded-full">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <Minus size={13} weight="bold" />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-ink">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-11 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <Plus size={13} weight="bold" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 h-11 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 active:scale-[0.97] transition-all cursor-pointer ${
                  added
                    ? "bg-surface-dark text-white"
                    : "bg-accent text-canvas hover:bg-accent-hover"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle size={16} weight="fill" />
                    Added to bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} weight="light" />
                    Add to bag — ${(product.price * qty).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 pb-8 border-b border-border mb-8">
              {["Free shipping over $50", "60-day returns", "Ships same day"].map((t) => (
                <span key={t} className="text-xs text-ink-muted">{t}</span>
              ))}
            </div>

            {/* Health benefits */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-4">
                Health benefits
              </p>
              <ul className="space-y-3">
                {product.healthBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckCircle size={16} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-4">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 text-xs border border-border text-ink-muted rounded-full px-3 py-1.5"
                  >
                    <ShieldCheck size={12} weight="fill" className="text-accent" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-surface rounded-2xl p-6">
              <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-3">About</p>
              <p className="text-sm text-ink-muted leading-relaxed">{product.description}</p>
              <p className="text-xs text-ink-muted mt-3">
                Material: <span className="text-ink font-medium">{product.material}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
              <p className="text-xs font-semibold text-ink tracking-[0.22em] uppercase mb-3">
                You might also like
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="group flex gap-4 items-center p-4 rounded-xl hover:bg-surface transition-colors duration-200"
                  >
                    <div
                      className="w-16 h-20 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(145deg, ${p.cardGradient[0]}, ${p.cardGradient[1]})`,
                      }}
                    >
                      <span className="text-white/50 text-[0.5rem] font-black tracking-widest uppercase">
                        {p.brand}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] text-ink-muted">{p.brand}</p>
                      <p className="text-sm font-semibold text-ink truncate">{p.name}</p>
                      <p className="text-sm text-ink-muted">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
