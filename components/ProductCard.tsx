"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const hasColors = product.colors.length > 1 && product.colors[0].hex !== "";

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    add({
      id: `${product.id}-${selectedColor}`,
      title: product.name,
      variant: product.colors[selectedColor]?.name ?? "Default",
      price: product.price,
      image: "",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
        delay: (index % 4) * 0.07,
      }}
      layout
    >
      <Link href={`/products/${product.id}`} className="group block cursor-pointer">
        {/* Card image area — gradient-branded */}
        <div className="relative overflow-hidden aspect-[3/4] rounded-lg mb-3">
          {/* Brand gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${product.cardGradient[0]} 0%, ${product.cardGradient[1]} 100%)`,
            }}
          />

          {/* Dot texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Brand name watermark */}
          <p
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-black text-white/10 tracking-widest uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            {product.brand}
          </p>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-2">
              {product.material.split(",")[0]}
            </p>
            <p className="text-white text-base md:text-lg font-bold tracking-tight leading-tight mb-3">
              {product.name}
            </p>
            {product.certifications[0] && (
              <span className="inline-flex items-center gap-1 text-[0.6rem] text-white/70 bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
                <ShieldCheck size={10} weight="fill" />
                {product.certifications[0]}
              </span>
            )}
          </div>

          {/* Tag */}
          {product.tag && (
            <span className="absolute top-3 left-3 text-[0.6rem] tracking-[0.15em] uppercase font-semibold bg-canvas/90 text-accent px-2.5 py-1 rounded-full backdrop-blur-sm">
              {product.tag}
            </span>
          )}

          {/* Hover overlay: color + quick add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-canvas/96 backdrop-blur-md p-4 pt-3">
            {hasColors && (
              <div className="flex items-center gap-2 mb-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    title={color.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedColor(i);
                    }}
                    className="w-4 h-4 rounded-full transition-all duration-150 cursor-pointer flex-shrink-0"
                    style={{
                      backgroundColor: color.hex,
                      border: "1.5px solid oklch(88% 0.008 65)",
                      boxShadow:
                        selectedColor === i
                          ? "0 0 0 2px var(--color-canvas), 0 0 0 3.5px var(--color-accent)"
                          : undefined,
                    }}
                  />
                ))}
                <span className="text-[0.6rem] text-ink-muted ml-1">
                  {product.colors[selectedColor]?.name}
                </span>
              </div>
            )}
            <button
              onClick={handleQuickAdd}
              className={`w-full h-9 rounded-full text-xs font-semibold active:scale-[0.98] transition-all duration-200 cursor-pointer ${
                added
                  ? "bg-surface-dark text-white"
                  : "bg-accent text-canvas hover:bg-accent-hover"
              }`}
            >
              {added ? "Added to bag" : "Quick add"}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-2 px-0.5">
          <div className="min-w-0">
            <p className="text-xs text-ink-muted font-medium">{product.brand}</p>
            <p className="text-sm font-semibold text-ink leading-snug truncate mt-0.5">
              {product.name}
            </p>
            <p className="text-[0.65rem] text-ink-muted mt-0.5">{product.cut}</p>
          </div>
          <p className="text-sm font-semibold text-ink flex-shrink-0 mt-3">
            ${product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
