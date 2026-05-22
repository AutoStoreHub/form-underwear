"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 75, damping: 18 },
  },
};

const COLORS = ["Chalk White", "Deep Navy", "Sage Green", "Charcoal"];

export function Hero() {
  return (
    <section className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-[55fr_45fr] overflow-hidden">
      {/* Left: content */}
      <div className="flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[580px]"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-accent font-semibold mb-10"
          >
            <Sparkle size={11} weight="fill" />
            Premium Underwear — SS 2025
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[3.4rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-[-0.03em] leading-[0.92] text-ink mb-8"
          >
            Your body
            <br />
            <span className="text-ink-muted">deserves</span>
            <br />
            better.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-ink-muted leading-relaxed max-w-[50ch] mb-10"
          >
            Underwear built for movement. Stays put, feels light, holds its
            shape after 100 washes. No compromises.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 h-12 px-7 bg-accent text-canvas text-sm font-semibold rounded-full hover:bg-accent-hover active:scale-[0.97] transition-all duration-200"
            >
              Shop the line
              <ArrowRight size={15} weight="bold" />
            </Link>
            <Link
              href="#story"
              className="inline-flex items-center h-12 px-7 border border-border text-ink text-sm font-medium rounded-full hover:bg-surface active:scale-[0.97] transition-all duration-200"
            >
              How it&apos;s made
            </Link>
          </motion.div>

          <motion.p variants={item} className="text-xs text-ink-muted">
            Free shipping over $50 · 60-day returns · OEKO-TEX® certified fabrics
          </motion.p>
        </motion.div>
      </div>

      {/* Right: visual panel */}
      <div className="relative hidden md:flex flex-col justify-end bg-surface-dark dot-grid overflow-hidden">
        {/* Watermark typography */}
        <p
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 text-center select-none pointer-events-none"
          style={{
            fontSize: "clamp(7rem, 18vw, 16rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "oklch(100% 0 0 / 0.03)",
            lineHeight: 1,
          }}
        >
          FORM
        </p>

        {/* Accent line */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

        {/* Floating product card */}
        <div className="relative z-10 m-10 mt-auto">
          <div className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] rounded-2xl p-7">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-accent font-semibold mb-1.5">
                  Staff pick
                </p>
                <p className="text-white text-xl font-bold tracking-tight">
                  HUHA Brief
                </p>
              </div>
              <p className="text-white text-2xl font-bold tracking-tight">
                $26
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {COLORS.map((color) => (
                <span
                  key={color}
                  className="text-white/50 text-[0.7rem] border border-white/[0.12] rounded-full px-3 py-1 hover:border-accent/50 hover:text-white/80 transition-colors duration-200 cursor-pointer"
                >
                  {color}
                </span>
              ))}
            </div>

            <button className="w-full h-11 rounded-xl bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all duration-200 cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
