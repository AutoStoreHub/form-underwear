"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import {
  CATEGORIES,
  PRODUCTS,
  SORT_OPTIONS,
  filterAndSort,
  type CategoryFilter,
  type SortOption,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ShopClient() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") as CategoryFilter | null;

  const [category, setCategory] = useState<CategoryFilter>(
    CATEGORIES.includes(urlCategory as CategoryFilter) ? (urlCategory as CategoryFilter) : "All"
  );
  const [sort, setSort] = useState<SortOption>("featured");

  useEffect(() => {
    if (urlCategory && CATEGORIES.includes(urlCategory as CategoryFilter)) {
      setCategory(urlCategory as CategoryFilter);
    }
  }, [urlCategory]);

  const visible = filterAndSort(PRODUCTS, category, sort);

  return (
    <div>
      {/* Filter + Sort bar */}
      <div className="sticky top-16 z-40 bg-canvas/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6 overflow-x-auto">
          <div className="flex items-center gap-2 flex-shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`h-8 px-4 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  category === cat
                    ? "bg-ink text-canvas"
                    : "bg-surface text-ink-muted hover:text-ink hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
            <p className="text-xs text-ink-muted whitespace-nowrap">
              {visible.length} {visible.length === 1 ? "product" : "products"}
            </p>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none h-8 pl-3 pr-8 rounded-full text-xs font-medium bg-surface text-ink border border-border hover:border-ink/30 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <CaretDown
                size={12}
                weight="bold"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Health call-out strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
        <p className="text-xs text-ink-muted">
          Every product on FORM is certified by at least one independent body: OEKO-TEX®, GOTS, or ECOCERT.
          <span className="text-accent ml-1 hover:underline cursor-pointer">What does that mean?</span>
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <AnimatePresence mode="popLayout">
          {visible.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="py-32 flex flex-col items-center justify-center text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-ink mb-3">
                Nothing here yet.
              </p>
              <p className="text-sm text-ink-muted mb-8">
                Try a different category or clear the filter.
              </p>
              <button
                onClick={() => setCategory("All")}
                className="h-10 px-6 bg-accent text-canvas text-xs font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all duration-200 cursor-pointer"
              >
                Show all products
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              layout
              className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10"
            >
              {visible.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
