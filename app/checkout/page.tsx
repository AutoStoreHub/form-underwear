"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, LockSimple, ShieldCheck } from "@phosphor-icons/react";
import { Nav } from "@/components/Nav";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING_THRESHOLD = 50;

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState<"info" | "shipping" | "payment" | "confirmed">("info");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : 6.99;
  const estimatedTax = +(total * 0.08).toFixed(2);
  const orderTotal = +(total + shipping + estimatedTax).toFixed(2);

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setStep("confirmed");
    clear();
  }

  if (step === "confirmed") {
    return (
      <>
        <Nav />
        <main className="pt-16 min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-accent-sub flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} className="text-accent" weight="fill" />
            </div>
            <h1 className="text-3xl font-bold text-ink tracking-tight mb-3">
              Order confirmed
            </h1>
            <p className="text-sm text-ink-muted mb-2">
              A confirmation email is on its way to <strong>{email}</strong>.
            </p>
            <p className="text-sm text-ink-muted mb-8">
              Orders placed before 2pm ET ship same day. You&apos;ll receive a tracking number within 24 hours.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center h-11 px-7 bg-accent text-canvas text-sm font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all"
            >
              Continue shopping
            </Link>
          </div>
        </main>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Nav />
        <main className="pt-16 min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-xl font-bold text-ink mb-3">Your bag is empty</p>
            <p className="text-sm text-ink-muted mb-8">Add something before checking out.</p>
            <Link
              href="/shop"
              className="inline-flex items-center h-11 px-7 bg-accent text-canvas text-sm font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all"
            >
              Shop the lineup
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10 md:gap-16">
          {/* Left: form */}
          <div>
            <Link
              href="/cart"
              className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              Back to cart
            </Link>

            <h1 className="text-2xl font-bold text-ink tracking-tight mb-8">Checkout</h1>

            <form onSubmit={handleConfirm} className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-4">
                  Contact
                </p>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-4">
                  Shipping address
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    <input
                      type="text"
                      placeholder="ZIP / Postal code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      required
                      className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-4">
                  Payment
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card number"
                    maxLength={19}
                    required
                    className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30 font-mono"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      maxLength={7}
                      required
                      className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30 font-mono"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      maxLength={4}
                      required
                      className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30 font-mono"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-accent text-canvas text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-accent-hover active:scale-[0.97] transition-all cursor-pointer"
              >
                <LockSimple size={15} weight="bold" />
                Place order — ${orderTotal.toFixed(2)}
              </button>

              <p className="text-xs text-ink-muted text-center">
                Secure checkout. Your payment info is never stored on our servers.
              </p>
            </form>
          </div>

          {/* Right: order summary */}
          <div>
            <div className="bg-surface rounded-2xl p-6 sticky top-24">
              <p className="text-sm font-semibold text-ink mb-5">Order summary</p>

              <div className="space-y-3 mb-5 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className="w-12 h-14 rounded-lg flex-shrink-0 bg-border"
                      style={{ minWidth: "3rem" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-ink truncate">{item.title}</p>
                      <p className="text-[0.65rem] text-ink-muted">{item.variant} · Qty {item.quantity}</p>
                    </div>
                    <p className="text-xs font-semibold text-ink flex-shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-xs text-ink-muted">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-ink-muted">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xs text-ink-muted">
                  <span>Est. tax</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-ink pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
