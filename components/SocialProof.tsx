"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const TESTIMONIALS = [
  {
    quote:
      "I switched to HUHA after my doctor recommended more breathable fabrics. The difference was noticeable within a week. The zinc gusset isn't a gimmick — it genuinely keeps things fresher.",
    author: "Priya Venkataraman",
    location: "San Francisco, CA",
  },
  {
    quote:
      "I have sensitive skin and have tried everything. Boody's bamboo is the only fabric that doesn't irritate. It's soft, stays that way, and the OEKO-TEX cert means I actually know what's in it.",
    author: "Juno Reyes",
    location: "Portland, OR",
  },
];

const SERVICE_POINTS = [
  { label: "OEKO-TEX® certified", sub: "1,000+ harmful substances tested and absent" },
  { label: "60-day returns", sub: "No questions, no conditions" },
  { label: "Ships same day", sub: "Orders placed before 2pm ET" },
];

function ServicePoint({
  point,
  index,
}: {
  point: (typeof SERVICE_POINTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: index * 0.08,
      }}
    >
      <p className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-1">
        {point.label}
      </p>
      <p className="text-sm text-ink-muted leading-snug max-w-[28ch]">{point.sub}</p>
    </motion.div>
  );
}

export function SocialProof() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 md:py-36 bg-canvas border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-5">
            Our promises
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            What you can count on.
          </h2>
        </motion.div>

        {/* Service commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 mb-20 md:mb-28">
          {SERVICE_POINTS.map((point, i) => (
            <ServicePoint key={point.label} point={point} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-canvas p-8 md:p-12">
              <p className="text-base md:text-[1.05rem] text-ink leading-[1.65] mb-7 max-w-[54ch]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 h-12 px-7 bg-accent text-canvas text-sm font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all duration-200"
          >
            Shop the full lineup
            <ArrowRight size={15} weight="bold" />
          </Link>
          <p className="text-sm text-ink-muted">
            Free shipping over $50 · Easy 60-day returns
          </p>
        </div>
      </div>
    </section>
  );
}
