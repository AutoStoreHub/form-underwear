"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "@phosphor-icons/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const FAQS = [
  {
    q: "What is OEKO-TEX® Standard 100?",
    a: "OEKO-TEX® Standard 100 is an independent certification that tests every component of a garment — including fabric, thread, and elastic — against a list of over 1,000 harmful substances. Certified products are guaranteed free from formaldehyde, heavy metals, pesticide residues, and endocrine disruptors. It's the most rigorous textile certification available.",
  },
  {
    q: "Why is bamboo better for intimate health?",
    a: "Bamboo viscose and lyocell are 2-3× more breathable than cotton and naturally moisture-wicking, which reduces the warm, damp conditions that allow bacteria and yeast to flourish. Bamboo also contains 'bamboo kun', a natural bioagent that's been shown to reduce bacterial growth. It's also hypoallergenic and gentler than cotton on sensitive skin.",
  },
  {
    q: "Is organic cotton really different from regular cotton?",
    a: "Yes, significantly. Conventional cotton is one of the most pesticide-intensive crops in the world. Organic cotton, certified to GOTS (Global Organic Textile Standard), is grown without synthetic pesticides or fertilisers and finished without harsh chemical dyes. For underwear worn directly against skin 16 hours a day, this difference is meaningful — especially for people with eczema, sensitivity, or recurring infections.",
  },
  {
    q: "What is the HUHA zinc oxide gusset?",
    a: "HUHA adds a zinc oxide–enhanced gusset to each pair of underwear. Zinc oxide is a naturally antimicrobial mineral — the same ingredient in diaper rash cream — that actively inhibits the growth of odour-causing bacteria. Unlike silver-treated fabrics, it doesn't degrade or wash out over time.",
  },
  {
    q: "How does FORM work — do you manufacture these products?",
    a: "FORM is a curated affiliate marketplace. We don't manufacture any products. We research, vet, and list the best certified-clean underwear brands and earn a commission when you purchase through our links. The brands you're buying from are HUHA, Boody, TBô, Q for Quinn, and WAMA — each with their own quality and fulfilment process.",
  },
  {
    q: "What is your returns policy?",
    a: "We offer 60-day returns on all items, no questions asked. Underwear must be unworn and in original packaging for hygienic reasons. Reach out at returns@formunderwear.com and we'll handle the rest.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders placed before 2pm ET ship same day. Domestic delivery typically takes 3-5 business days via standard shipping, or 1-2 days with expedited. Shipping is free on all orders over $50.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently we ship within the US, Canada, and the UK. International shipping times vary — typically 7-14 business days. Import duties may apply depending on your location.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer group"
      >
        <p className="text-sm md:text-base font-semibold text-ink group-hover:text-accent transition-colors duration-200">
          {q}
        </p>
        <span className="flex-shrink-0 mt-0.5">
          {open ? (
            <Minus size={16} className="text-accent" />
          ) : (
            <Plus size={16} className="text-ink-muted" />
          )}
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-10">
          <p className="text-sm text-ink-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-6 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Questions
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.025em] leading-none text-ink">
            FAQ
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl py-8 md:py-12">
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <div className="py-12 border-t border-border">
            <p className="text-base font-semibold text-ink mb-2">
              Still have a question?
            </p>
            <p className="text-sm text-ink-muted mb-5">
              Email us at{" "}
              <a
                href="mailto:hello@formunderwear.com"
                className="text-accent hover:underline"
              >
                hello@formunderwear.com
              </a>{" "}
              — we reply within one business day.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center h-10 px-6 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all"
            >
              Shop the lineup
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
