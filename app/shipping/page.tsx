import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const SECTIONS = [
  {
    title: "Processing & dispatch",
    content: `Orders placed before 2:00 PM Eastern Time (Monday–Friday, excluding public holidays) are dispatched the same business day. Orders placed after 2:00 PM ET or on weekends ship the next business day.

You will receive a shipment confirmation email with tracking information within 24 hours of dispatch.`,
  },
  {
    title: "Domestic shipping (US)",
    content: `Standard shipping: 3–5 business days
Expedited shipping: 1–2 business days

Standard shipping is free on all orders over $50. Orders under $50 carry a flat $6.99 shipping fee.

Expedited shipping rates are calculated at checkout based on your location.`,
  },
  {
    title: "Canada & UK",
    content: `We ship to Canada and the United Kingdom. International delivery typically takes 7–14 business days from the date of dispatch.

Customers in Canada and the UK are responsible for any applicable customs duties or import taxes. These fees are determined by your local customs authority and are not included in our shipping rates.`,
  },
  {
    title: "Order tracking",
    content: `Once your order has shipped, you will receive a tracking number by email. You can also track your order at any time using the Track Your Order page.

If you have not received a tracking email within 48 hours of placing your order, please check your spam folder or contact us at hello@formunderwear.com.`,
  },
  {
    title: "Lost or delayed shipments",
    content: `If your tracking shows your order has not moved in 5 or more business days, or if your order is marked as delivered but you have not received it, please contact us at hello@formunderwear.com within 30 days of the estimated delivery date.

We will work directly with the carrier to investigate and resolve the issue.`,
  },
];

export const metadata = {
  title: "Shipping Policy — FORM",
};

export default function ShippingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Policies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            Shipping policy
          </h1>
          <p className="text-sm text-ink-muted mt-4">Last updated: May 2025</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-base font-bold text-ink mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-ink-muted leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-ink-muted mb-4">
              Have a question about your shipment?{" "}
              <a href="mailto:hello@formunderwear.com" className="text-accent hover:underline">
                hello@formunderwear.com
              </a>{" "}
              — we reply within one business day.
            </p>
            <Link
              href="/track"
              className="inline-flex items-center h-10 px-6 rounded-full bg-accent text-canvas text-sm font-semibold hover:bg-accent-hover active:scale-[0.97] transition-all"
            >
              Track your order
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
