"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";

const FEATURED = PRODUCTS.filter((p) =>
  ["huha-brief", "boody-brief"].includes(p.id)
);

function ProductRow({
  product,
  reversed,
}: {
  product: (typeof PRODUCTS)[0];
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [added, setAdded] = useState(false);
  const { add, openDrawer } = useCart();

  function handleAdd() {
    add({
      id: product.id,
      title: product.name,
      variant: product.colors[0]?.name ?? "Default",
      price: product.price,
      image: "",
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      openDrawer();
    }, 1200);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
      className="grid grid-cols-1 md:grid-cols-2 border-t border-border"
    >
      {/* Visual panel */}
      <div
        className={`relative overflow-hidden aspect-[4/5] ${reversed ? "md:order-2" : ""}`}
        style={{ background: `linear-gradient(145deg, ${product.cardGradient[0]} 0%, ${product.cardGradient[1]} 100%)` }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {product.tag && (
          <span className="absolute top-5 left-5 z-10 text-[0.65rem] tracking-[0.15em] uppercase font-semibold bg-canvas/90 text-accent px-3 py-1.5 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center px-8 md:px-14 lg:px-20 py-14 bg-canvas ${
          reversed ? "md:order-1" : ""
        }`}
      >
        <p className="text-[0.7rem] tracking-[0.22em] uppercase text-accent font-semibold mb-5">
          {product.brand}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[0.95] text-ink mb-3">
          {product.name}
        </h2>
        <p className="text-sm text-ink-muted italic mb-5">{product.brandTagline}</p>
        <p className="text-base text-ink-muted leading-relaxed max-w-[44ch] mb-7">
          {product.description.slice(0, 220)}…
        </p>

        {/* Health benefits */}
        <ul className="space-y-2 mb-8">
          {product.healthBenefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-ink-muted">
              <CheckCircle size={14} weight="fill" className="text-accent flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button
            onClick={handleAdd}
            className={`h-11 px-7 rounded-full text-sm font-semibold active:scale-[0.97] transition-all duration-200 cursor-pointer ${
              added
                ? "bg-surface-dark text-white"
                : "bg-accent text-canvas hover:bg-accent-hover"
            }`}
          >
            {added ? "Added to bag" : `Add to bag — $${product.price}`}
          </button>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200 group"
          >
            Full details
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProducts() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="products">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="px-6 md:px-10 py-16 max-w-7xl mx-auto"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-4">
              Staff picks
            </p>
            <p className="text-3xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
              Certified healthy.
              <br />
              <span className="text-ink-muted">Actually comfortable.</span>
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200 group flex-shrink-0 pb-1"
          >
            Shop all
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </motion.div>

      {FEATURED.map((product, i) => (
        <ProductRow key={product.id} product={product} reversed={i % 2 === 1} />
      ))}
    </section>
  );
}
