import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EmailCapture } from "@/components/EmailCapture";

const VALUES = [
  {
    number: "01",
    name: "Chemical transparency",
    desc: "Every brand we carry must hold at minimum an OEKO-TEX® Standard 100 certification — tested free of over 1,000 harmful substances including formaldehyde, heavy metals, and endocrine disruptors.",
  },
  {
    number: "02",
    name: "Fabric integrity",
    desc: "We only work with materials proven to support intimate health — certified organic cotton, TENCEL™, bamboo viscose, and hemp. All breathable. None synthetic-coated.",
  },
  {
    number: "03",
    name: "Honest claims",
    desc: "We don't make medical claims. We share what the certifications, independent testing, and material science actually say — and let you decide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-surface-dark min-h-[55vh] flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-32">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-white/40 font-medium mb-5">
              About FORM
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-none text-white max-w-3xl">
              The case for
              <br />
              <span className="text-white/30">healthier underwear.</span>
            </h1>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-24">
            <div>
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-6">
                Why we exist
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-none text-ink">
                Most underwear is made for price.
                <br />
                <span className="text-ink-muted">Not for you.</span>
              </h2>
            </div>
            <div className="space-y-5 text-base text-ink-muted leading-relaxed">
              <p>
                The average person wears underwear 16 hours a day, directly against some of
                the most sensitive skin on their body. The fabric choices matter — especially
                for people prone to bacterial vaginosis, yeast infections, or skin sensitivity.
              </p>
              <p>
                FORM is a curated collection of the best certified-clean underwear brands
                in the world. Every brand we carry — HUHA, Boody, TBô, Q for Quinn, and WAMA
                — has been assessed for material transparency, third-party certification, and
                genuine breathability.
              </p>
              <p>
                We don&apos;t manufacture anything. We find the brands doing it right and bring
                them to one place, with honest descriptions and no marketing fluff.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-ink-muted font-medium mb-12">
              Our standards
            </p>
            <div className="divide-y divide-border">
              {VALUES.map((v) => (
                <div
                  key={v.number}
                  className="grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] gap-4 md:gap-12 py-8 items-start"
                >
                  <span className="font-mono text-sm text-accent pt-0.5">{v.number}</span>
                  <h3 className="text-base font-bold text-ink tracking-tight">{v.name}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
