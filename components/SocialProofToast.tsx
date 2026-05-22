"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const NAMES = [
  "Priya", "Marcus", "Diane", "Jordan", "Keisha", "Liam",
  "Nora", "Alex", "Yuki", "Rafael", "Simone", "Owen", "Zara", "Ellis",
];
const CITIES = [
  "Austin, TX", "Portland, OR", "Chicago, IL", "Denver, CO",
  "Nashville, TN", "Seattle, WA", "Boston, MA", "Atlanta, GA",
  "Brooklyn, NY", "Oakland, CA", "Miami, FL", "Minneapolis, MN",
];
const PRODUCTS = [
  "HUHA Brief", "Boody Full Brief", "TBô Trunk 3-Pack",
  "Q for Quinn Organic Brief", "HUHA Thong", "WAMA Hemp Brief",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface Toast {
  name: string;
  city: string;
  product: string;
  mins: number;
}

export function SocialProofToast() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    const mins = Math.floor(Math.random() * 18) + 2;
    setToast({ name: pick(NAMES), city: pick(CITIES), product: pick(PRODUCTS), mins });
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  }, []);

  useEffect(() => {
    const first = setTimeout(show, 14000 + Math.random() * 6000);
    const repeats = setInterval(show, 35000 + Math.random() * 15000);
    return () => {
      clearTimeout(first);
      clearInterval(repeats);
    };
  }, [show]);

  if (!toast) return null;

  return (
    <div
      className="fixed bottom-6 left-4 z-50 max-w-[280px]"
      style={{
        transition: "opacity 0.45s ease, transform 0.45s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="bg-canvas rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-border px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <span className="text-accent text-sm font-bold">{toast.name[0]}</span>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-ink leading-snug">
            {toast.name} from {toast.city}
          </p>
          <p className="text-[0.65rem] text-ink-muted leading-snug mt-0.5 truncate">
            just ordered {toast.product}
          </p>
        </div>
        <CheckCircle size={16} weight="fill" className="text-accent flex-shrink-0" />
      </div>
      <p className="text-[0.6rem] text-ink-muted mt-1.5 pl-1">
        {toast.mins} min ago
      </p>
    </div>
  );
}
