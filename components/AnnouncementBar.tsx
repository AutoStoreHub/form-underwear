"use client";

import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react";

const MESSAGES = [
  "Free shipping on orders over $50 — no code needed",
  "60-day returns, no questions asked",
  "Micro-stretch cotton · OEKO-TEX certified · Ships same day",
  "First-time order? Get 10% off — spin the wheel below",
];

export function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (MESSAGES.length <= 1) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-surface-dark text-white text-xs py-2.5 px-10 text-center overflow-hidden">
      <span
        style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}
        className="inline-block font-medium tracking-wide"
      >
        {MESSAGES[idx]}
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}
