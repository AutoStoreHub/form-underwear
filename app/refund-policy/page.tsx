import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const SECTIONS = [
  {
    title: "60-day return window",
    content: `We offer a 60-day return window on all orders from the date of delivery. If you are not satisfied with your purchase for any reason, contact us within 60 days and we will process a full refund to your original payment method.

To initiate a return, email returns@formunderwear.com with your order number. We will reply within one business day with a prepaid return label.`,
  },
  {
    title: "Condition of returned items",
    content: `For hygienic reasons, underwear must be returned unworn, unwashed, and in its original packaging. Tags must be attached.

Items that have been worn, laundered, or damaged after receipt are not eligible for return. If an item is returned in an ineligible condition, it will be sent back to you at your expense.`,
  },
  {
    title: "Refund processing",
    content: `Once we receive and inspect your return (typically 2–3 business days after arrival at our warehouse), your refund will be processed automatically to your original payment method.

Refunds typically appear on your statement within 5–10 business days, depending on your bank or card issuer. We will email you when your refund has been processed.`,
  },
  {
    title: "Defective or incorrect items",
    content: `If you receive a defective item or we shipped you the wrong product, we will cover return shipping and send a replacement at no additional cost. Email us at hello@formunderwear.com with a photo of the item and your order number.

Defective and incorrectly shipped items can be reported up to 90 days from the date of delivery.`,
  },
  {
    title: "Non-returnable items",
    content: `Gift cards are non-refundable. Items marked as final sale at the time of purchase are not eligible for return.`,
  },
  {
    title: "Exchanges",
    content: `We do not process direct exchanges. To get a different size or colour, return the original item for a refund and place a new order. This is the fastest way to ensure you receive the correct item.`,
  },
];

export const metadata = {
  title: "Returns & Refund Policy — FORM",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Policies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            Returns &amp; refunds
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
            <p className="text-sm text-ink-muted">
              Questions about a return? Email{" "}
              <a href="mailto:returns@formunderwear.com" className="text-accent hover:underline">
                returns@formunderwear.com
              </a>{" "}
              and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
