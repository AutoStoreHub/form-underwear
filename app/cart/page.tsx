"use client";

import Link from "next/link";
import { Minus, Plus, Trash, ShoppingBag, ArrowRight } from "@phosphor-icons/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING = 50;

export default function CartPage() {
  const { items, remove, updateQty, total, freeShippingRemaining } = useCart();
  const progressPct = Math.min(100, (total / FREE_SHIPPING) * 100);

  return (
    <>
      <Nav />
      <main className="pt-16 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-10">
            Your bag
          </h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <ShoppingBag size={48} weight="light" className="text-border mb-5" />
              <p className="text-xl font-bold text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-ink-muted mb-8 max-w-[30ch]">
                Find a pair that works for your body and your health.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 h-12 px-8 bg-accent text-canvas text-sm font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all"
              >
                Shop the lineup
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-16">
              {/* Items */}
              <div>
                {/* Free shipping bar */}
                <div className="bg-accent-sub rounded-xl px-5 py-4 mb-8">
                  {freeShippingRemaining === 0 ? (
                    <p className="text-sm font-semibold text-accent">
                      Free shipping unlocked!
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-ink-muted mb-2">
                        Add{" "}
                        <span className="font-semibold text-ink">
                          ${freeShippingRemaining.toFixed(2)}
                        </span>{" "}
                        more for free shipping
                      </p>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-5 py-6">
                      <div className="w-20 h-24 rounded-xl overflow-hidden bg-surface flex-shrink-0 flex items-center justify-center">
                        <ShoppingBag size={24} weight="light" className="text-border" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-ink">{item.title}</p>
                            <p className="text-xs text-ink-muted mt-0.5">{item.variant}</p>
                          </div>
                          <p className="text-sm font-semibold text-ink flex-shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border rounded-full">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              className="w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer"
                            >
                              <Minus size={12} weight="bold" />
                            </button>
                            <span className="w-7 text-center text-sm font-semibold text-ink">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.quantity + 1)}
                              className="w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer"
                            >
                              <Plus size={12} weight="bold" />
                            </button>
                          </div>
                          <button
                            onClick={() => remove(item.id)}
                            className="text-ink-muted hover:text-accent transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
                          >
                            <Trash size={13} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link
                    href="/shop"
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    ← Continue shopping
                  </Link>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-surface rounded-2xl p-7 self-start">
                <p className="text-base font-bold text-ink mb-6">Order summary</p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-ink-muted">
                    <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-ink-muted">
                    <span>Shipping</span>
                    <span>{freeShippingRemaining === 0 ? "Free" : `$${(6.99).toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-ink-muted">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-ink text-base border-t border-border pt-4 mb-6">
                  <span>Estimated total</span>
                  <span>
                    ${(total + (freeShippingRemaining === 0 ? 0 : 6.99)).toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center h-12 w-full rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all gap-2"
                >
                  Proceed to checkout
                  <ArrowRight size={14} weight="bold" />
                </Link>

                <div className="mt-5 space-y-2">
                  {["60-day returns", "Ships same day", "Secure checkout"].map((t) => (
                    <p key={t} className="text-[0.65rem] text-ink-muted text-center">{t}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
