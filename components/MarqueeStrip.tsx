"use client";

const ITEMS = [
  "OEKO-TEX® certified fabrics",
  "No harsh chemicals or dyes",
  "Free shipping over $50",
  "60-day hassle-free returns",
  "Antimicrobial bamboo & hemp",
  "Ships same day before 2pm",
  "Naturally breathable materials",
  "GOTS-certified organic cotton",
];

export function MarqueeStrip() {
  return (
    <div className="bg-surface-dark border-y border-white/[0.07] py-[14px] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[18px] px-[18px] flex-shrink-0"
          >
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span className="text-white/60 text-[0.78rem] tracking-wide font-light">
              {text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
