import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ShopClient } from "@/components/ShopClient";

export const metadata = {
  title: "Shop — FORM",
  description:
    "Shop all FORM underwear, socks, and bundles. Micro-stretch cotton, flat-lock seams. Built to last.",
};

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            All products
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.025em] leading-none text-ink">
            Shop FORM
          </h1>
        </div>

        <Suspense>
          <ShopClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
