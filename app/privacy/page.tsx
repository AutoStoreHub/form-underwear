import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const SECTIONS = [
  {
    title: "What we collect",
    content: `When you place an order, we collect your name, email address, shipping address, and payment information. Payment data is processed and stored by our payment processor (Stripe) — we never store raw card details on our servers.

When you browse our site, we collect standard analytics data (pages visited, time on site, referring URL, device type) via privacy-respecting analytics. We do not sell this data to third parties.

If you sign up for our email list, we store your email address for marketing purposes. You can unsubscribe at any time.`,
  },
  {
    title: "How we use your information",
    content: `We use your personal information to fulfil and communicate about your orders, respond to customer service enquiries, send order and shipping confirmations, send marketing emails (only if you opted in), and improve our site and product selection.

We do not sell, rent, or trade your personal information to any third party.`,
  },
  {
    title: "Third-party services",
    content: `We use the following third-party services:

Stripe — payment processing. Subject to Stripe's privacy policy.
Klaviyo — email marketing. Subject to Klaviyo's privacy policy.
Vercel — website hosting and analytics.
Commission Junction (CJ Affiliate) — affiliate tracking for brand referrals.

Each of these services has its own privacy policy governing how they handle your data.`,
  },
  {
    title: "Cookies",
    content: `We use cookies to keep items in your cart between sessions, remember your preferences, and collect aggregated analytics data.

You can disable cookies in your browser settings. If you do, some site features (including the cart) may not function correctly.`,
  },
  {
    title: "Your rights",
    content: `You have the right to request a copy of the personal data we hold about you, request that we delete your personal data, opt out of marketing emails at any time using the unsubscribe link, and request correction of any inaccurate data.

To exercise any of these rights, email hello@formunderwear.com. We will respond within 30 days.`,
  },
  {
    title: "Data retention",
    content: `We retain order data for 7 years for accounting and tax purposes. Email marketing data is retained until you unsubscribe. Analytics data is aggregated and anonymised after 90 days.`,
  },
  {
    title: "Contact",
    content: `If you have questions about this privacy policy or how we handle your data, contact us at hello@formunderwear.com.`,
  },
];

export const metadata = {
  title: "Privacy Policy — FORM",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10 border-b border-border">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-none text-ink">
            Privacy policy
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
