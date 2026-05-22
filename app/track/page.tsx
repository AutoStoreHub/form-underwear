"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function TrackPage() {
  const [orderId, setOrderId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!orderId.trim()) return;
    setSubmitted(true);
  }

  return (
    <>
      <Nav />
      <main className="pt-16 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Shipping
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            Track your order
          </h1>
        </div>

        <div className="max-w-lg mx-auto px-6 py-16 md:py-24">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-ink-muted mb-6">
                Enter your order number and email to get the latest shipping status.
              </p>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2">
                  Order number
                </label>
                <input
                  type="text"
                  placeholder="FORM-12345"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MagnifyingGlass size={15} />
                Track order
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent-sub flex items-center justify-center mx-auto mb-5">
                <MagnifyingGlass size={24} className="text-accent" />
              </div>
              <p className="text-xl font-bold text-ink mb-2">Looking up your order…</p>
              <p className="text-sm text-ink-muted mb-6">
                Order <span className="font-mono font-semibold">{orderId}</span> — we&apos;ll
                email your tracking link shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setOrderId(""); }}
                className="text-sm text-accent hover:underline cursor-pointer"
              >
                Try a different order number
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
