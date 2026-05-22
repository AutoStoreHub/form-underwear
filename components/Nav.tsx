"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, List, X } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_oklch(88%_0.008_65)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[0.85rem] font-bold tracking-[0.22em] uppercase text-ink"
        >
          FORM
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/shop"
            className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
          >
            Underwear
          </Link>
          <Link
            href="/shop?category=Bundles"
            className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
          >
            Bundles
          </Link>
          <Link
            href="/about"
            className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart button with count */}
          <button
            onClick={openDrawer}
            className="relative text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
            aria-label={`Cart (${itemCount} items)`}
          >
            <ShoppingBag size={20} weight="light" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent text-canvas text-[0.55rem] font-bold flex items-center justify-center leading-none">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          <Link
            href="/shop"
            className="hidden md:inline-flex items-center h-9 px-5 bg-accent text-canvas text-xs font-semibold tracking-wide rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all duration-200"
          >
            Shop
          </Link>
          <button
            className="md:hidden text-ink cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-canvas border-t border-border px-6 py-8 flex flex-col gap-6">
          {[
            { label: "Underwear", href: "/shop" },
            { label: "Bundles", href: "/shop?category=Bundles" },
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Track Order", href: "/track" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="text-accent text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Bag ({itemCount})
          </Link>
        </div>
      )}
    </header>
  );
}
