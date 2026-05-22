import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const SECTIONS = [
  {
    title: "About FORM",
    content: `FORM ("we", "our", "us") is an affiliate marketplace that curates and lists certified health-focused underwear from third-party brands. We do not manufacture any products ourselves.

When you purchase through FORM, you are purchasing from the listed brand (HUHA, Boody, TBô, Q for Quinn, WAMA, or others). FORM earns an affiliate commission on qualifying purchases.`,
  },
  {
    title: "Use of the site",
    content: `You must be at least 18 years old to use this site or place an order. By using this site, you represent that you meet this requirement.

You agree not to use this site for any unlawful purpose, to submit false information, to attempt to gain unauthorised access to our systems, or to engage in any conduct that could damage, disable, or impair the site.`,
  },
  {
    title: "Product descriptions and pricing",
    content: `We make every effort to describe products accurately, including materials, certifications, and health claims. All certifications referenced (OEKO-TEX®, GOTS, ECOCERT) are held by the respective brands and are subject to their own verification and renewal processes.

Prices are displayed in USD and are subject to change without notice. We reserve the right to correct pricing errors. If a product is incorrectly priced, we will contact you before processing your order.`,
  },
  {
    title: "Orders and payment",
    content: `By placing an order, you make an offer to purchase a product at the stated price. We reserve the right to accept or decline any order.

Payment is due at the time of order. We accept Visa, Mastercard, American Express, PayPal, and Shop Pay. All transactions are encrypted and processed by Stripe.`,
  },
  {
    title: "Returns and refunds",
    content: `Our returns and refund policy is described in full on our Returns & Refund Policy page. We offer 60-day returns on unworn, unpackaged items.`,
  },
  {
    title: "Limitation of liability",
    content: `To the maximum extent permitted by applicable law, FORM shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our site or products purchased through it.

Our total liability to you for any claim shall not exceed the amount you paid for the relevant order.`,
  },
  {
    title: "Intellectual property",
    content: `All content on this site — including text, design, logos, and graphics — is owned by FORM or used with permission. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: "Changes to these terms",
    content: `We may update these terms from time to time. The date at the bottom of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "Contact",
    content: `For questions about these terms, email hello@formunderwear.com.`,
  },
];

export const metadata = {
  title: "Terms of Service — FORM",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            Terms of service
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
        </div>
      </main>
      <Footer />
    </>
  );
}
