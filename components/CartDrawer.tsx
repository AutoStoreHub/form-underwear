"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Minus, Plus, Trash, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING = 50;

export function CartDrawer() {
  const { items, drawerOpen, closeDrawer, remove, updateQty, total, freeShippingRemaining } =
    useCart();

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const progressPct = Math.min(100, (total / FREE_SHIPPING) * 100);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-[420px] bg-canvas flex flex-col transition-transform duration-300 ease-out shadow-2xl ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} weight="light" className="text-ink" />
            <p className="text-sm font-semibold text-ink tracking-tight">
              Your bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </p>
          </div>
          <button
            onClick={closeDrawer}
            className="text-ink-muted hover:text-ink transition-colors p-1 cursor-pointer"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-6 py-3 bg-accent-sub border-b border-border">
          {freeShippingRemaining === 0 ? (
            <p className="text-xs text-accent font-medium text-center">
              Free shipping unlocked!
            </p>
          ) : (
            <p className="text-xs text-ink-muted text-center mb-2">
              Add <span className="font-semibold text-ink">${freeShippingRemaining.toFixed(2)}</span> more for free shipping
            </p>
          )}
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag size={40} weight="light" className="text-border" />
              <p className="text-sm font-medium text-ink">Your bag is empty</p>
              <p className="text-xs text-ink-muted max-w-[24ch]">
                Add something from the lineup to get started.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-2 h-10 px-6 rounded-full bg-accent text-canvas text-xs font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all cursor-pointer"
              >
                Keep shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-surface">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink leading-snug truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-semibold text-ink mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer rounded-full"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} weight="bold" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer rounded-full"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} weight="bold" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-ink-muted hover:text-accent transition-colors cursor-pointer p-1"
                        aria-label="Remove"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-canvas">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-ink-muted">Subtotal</p>
              <p className="text-base font-bold text-ink">${total.toFixed(2)}</p>
            </div>
            <p className="text-xs text-ink-muted text-center mb-3">
              Taxes and shipping calculated at checkout
            </p>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="flex items-center justify-center h-12 w-full rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all"
            >
              Checkout — ${total.toFixed(2)}
            </Link>
            <button
              onClick={closeDrawer}
              className="mt-3 w-full text-sm text-ink-muted hover:text-ink transition-colors text-center cursor-pointer"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
