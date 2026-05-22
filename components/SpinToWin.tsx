"use client";

import { useEffect, useRef, useState } from "react";
import { X, Gift } from "@phosphor-icons/react";

const PRIZES = [
  { label: "10% OFF", code: "FORM10", color: "#c4663a", bg: "#f5ede7" },
  { label: "FREE SHIP", code: "FORMSHIP", color: "#4a7ca8", bg: "#e8f0f8" },
  { label: "15% OFF", code: "FORM15", color: "#3a7a4a", bg: "#e8f0e8" },
  { label: "5% OFF", code: "FORM5", color: "#8a5a3a", bg: "#f0e8e0" },
  { label: "20% OFF", code: "FORM20", color: "#5a3a8a", bg: "#ede8f5" },
  { label: "12% OFF", code: "FORM12", color: "#1a3a5a", bg: "#e0eaf5" },
];

const SEG = 360 / PRIZES.length;
const R = 110;
const CX = 128;
const CY = 128;

function WheelSvg({ rotation }: { rotation: number }) {
  return (
    <svg
      width="256"
      height="256"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: rotation > 0 ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
        willChange: "transform",
      }}
    >
      {PRIZES.map((p, i) => {
        const startAngle = (i * SEG - 90) * (Math.PI / 180);
        const endAngle = ((i + 1) * SEG - 90) * (Math.PI / 180);
        const x1 = CX + R * Math.cos(startAngle);
        const y1 = CY + R * Math.sin(startAngle);
        const x2 = CX + R * Math.cos(endAngle);
        const y2 = CY + R * Math.sin(endAngle);
        const mid = ((i + 0.5) * SEG - 90) * (Math.PI / 180);
        const tx = CX + R * 0.65 * Math.cos(mid);
        const ty = CY + R * 0.65 * Math.sin(mid);
        const textRot = (i + 0.5) * SEG - 90;
        return (
          <g key={p.code}>
            <path
              d={`M${CX},${CY} L${x1},${y1} A${R},${R} 0 0,1 ${x2},${y2} Z`}
              fill={p.color}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={tx}
              y={ty}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="10"
              fontWeight="800"
              transform={`rotate(${textRot}, ${tx}, ${ty})`}
            >
              {p.label}
            </text>
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r="14" fill="white" />
      <circle cx={CX} cy={CY} r="10" fill="oklch(56% 0.13 40)" />
    </svg>
  );
}

const STORAGE_KEY = "form-spin-used";

export function SpinToWin() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [won, setWon] = useState<(typeof PRIZES)[0] | null>(null);
  const spinRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => setOpen(true), 18000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
        document.removeEventListener("mouseleave", onLeave);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function handleClose() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  function handleSpin() {
    if (!email || spinning || won) return;
    setSpinning(true);
    const prizeIndex = Math.floor(Math.random() * PRIZES.length);
    const prizeAngle = 360 - (prizeIndex * SEG + SEG / 2);
    const newRotation = spinRef.current + 1440 + prizeAngle;
    spinRef.current = newRotation;
    setRotation(newRotation);
    setTimeout(() => {
      setWon(PRIZES[prizeIndex]);
      setSpinning(false);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 4100);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-canvas rounded-3xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-ink-muted hover:text-ink transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="px-6 pt-8 pb-2 text-center">
          <div className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            <Gift size={12} weight="fill" />
            Limited offer
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-ink mb-1">
            Spin for a deal
          </h2>
          <p className="text-sm text-ink-muted">
            Enter your email, give it a spin. One chance only.
          </p>
        </div>

        {/* Wheel */}
        <div className="relative flex justify-center py-4">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div
              className="w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "18px solid oklch(56% 0.13 40)",
              }}
            />
          </div>
          <WheelSvg rotation={rotation} />
        </div>

        {won ? (
          <div className="px-6 pb-8 text-center">
            <div
              className="rounded-2xl py-4 px-5 mb-4"
              style={{ backgroundColor: won.bg }}
            >
              <p className="text-xs text-ink-muted mb-1">You won</p>
              <p className="text-2xl font-black tracking-tight" style={{ color: won.color }}>
                {won.label}
              </p>
              <p className="text-sm font-mono font-bold text-ink mt-2 bg-white rounded-lg py-2">
                {won.code}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-full h-11 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all cursor-pointer"
            >
              Shop now
            </button>
          </div>
        ) : (
          <div className="px-6 pb-8">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 rounded-full border border-border bg-surface text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent/30 mb-3"
            />
            <button
              onClick={handleSpin}
              disabled={!email || spinning}
              className="w-full h-11 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {spinning ? "Spinning…" : "Spin the wheel"}
            </button>
            <p className="text-[0.6rem] text-ink-muted text-center mt-2">
              One spin per customer. No purchase necessary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
