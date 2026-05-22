"use client";

import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="bg-surface-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-accent font-semibold mb-5">
              Stay in the loop
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-white mb-5">
              Get 10% off
              <br />
              your first order.
            </h2>
            <p className="text-sm text-white/45 leading-relaxed max-w-[44ch]">
              Join the list for the discount code, early access to new drops, and
              occasional notes on why what you wear next to your skin actually matters.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold text-white mb-2">
                  Check your inbox.
                </p>
                <p className="text-sm text-white/50">
                  Your 10% code is on its way. Thank you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 h-12 px-5 rounded-full bg-white/[0.07] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-6 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all inline-flex items-center gap-2 justify-center flex-shrink-0 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? "Sending…" : (
                      <>
                        Get 10% off
                        <ArrowRight size={14} weight="bold" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[0.65rem] text-white/25 mt-3 pl-1">
                  No spam. Unsubscribe any time. We take your privacy seriously.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
