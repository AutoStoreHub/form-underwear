import Link from "next/link";
import { InstagramLogo, TiktokLogo, PinterestLogo, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const NAV = {
  Shop: [
    { label: "All products", href: "/shop" },
    { label: "Briefs", href: "/shop?category=Brief" },
    { label: "Trunks", href: "/shop?category=Trunk" },
    { label: "Thongs", href: "/shop?category=Thong" },
    { label: "Bundles", href: "/shop?category=Bundle" },
  ],
  Company: [
    { label: "About FORM", href: "/about" },
    { label: "How we vet brands", href: "/about#standards" },
    { label: "FAQ", href: "/faq" },
  ],
  Support: [
    { label: "Track your order", href: "/track" },
    { label: "Shipping policy", href: "/shipping" },
    { label: "Returns & refunds", href: "/refund-policy" },
    { label: "Contact us", href: "mailto:hello@formunderwear.com" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
  ],
};

const CERTIFICATIONS = ["OEKO-TEX® Standard 100", "GOTS Organic", "ECOCERT"];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-16 md:mb-20">
          {/* Brand column */}
          <div>
            <p className="text-[0.85rem] font-bold tracking-[0.22em] uppercase mb-4">
              FORM
            </p>
            <p className="text-sm text-white/40 leading-relaxed max-w-[30ch] mb-6">
              A curated marketplace for certified-clean underwear. Every brand vetted for material transparency.
            </p>

            {/* Cert badges */}
            <div className="flex flex-col gap-2 mb-8">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 text-[0.65rem] text-white/40 w-fit"
                >
                  <ShieldCheck size={10} weight="fill" className="text-accent flex-shrink-0" />
                  {cert}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/30 hover:text-white transition-colors duration-200"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-white/30 hover:text-white transition-colors duration-200"
              >
                <TiktokLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-white/30 hover:text-white transition-colors duration-200"
              >
                <PinterestLogo size={18} />
              </a>
            </div>
          </div>

          {Object.entries(NAV).map(([category, items]) => (
            <div key={category}>
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-white/30 font-medium mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} FORM. All rights reserved.
            {" "}FORM is an affiliate marketplace and is not affiliated with HUHA, Boody, TBô, Q for Quinn, or WAMA.
          </p>

          {/* Payment icons — text-based since no image assets */}
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal", "Shop Pay"].map((p) => (
              <span
                key={p}
                className="text-[0.6rem] font-mono text-white/20 border border-white/10 px-1.5 py-0.5 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
