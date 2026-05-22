const PILLARS = [
  {
    number: "01",
    name: "Bamboo Lyocell & Bamboo Kun",
    desc: "2-3× more breathable than conventional cotton. Naturally moisture-wicking — keeps the intimate area dry and cool. Bamboo kun is a bioactive compound proven to reduce bacterial growth, without any chemical treatment.",
  },
  {
    number: "02",
    name: "GOTS-Certified Organic Cotton",
    desc: "Grown without synthetic pesticides or herbicides, dyed without harsh chemicals. Certified by the Global Organic Textile Standard — the most rigorous organic textile certification in the world.",
  },
  {
    number: "03",
    name: "TENCEL™ Lyocell & Hemp",
    desc: "TENCEL™ fibres are produced in a closed-loop water process with no waste. Hemp is naturally antimicrobial, requires zero pesticides, and softens with every wash. Both are certified OEKO-TEX® Standard 100.",
  },
];

export function FabricStory() {
  return (
    <section
      id="story"
      className="bg-surface-dark text-white py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 mb-16 md:mb-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-white/35 font-medium mb-6">
              Why materials matter
            </p>
            <h2 className="text-4xl md:text-[3.2rem] font-bold tracking-[-0.025em] leading-[0.95] text-white">
              Worn 16 hours
              <br />
              <span className="text-white/30">a day. Choose wisely.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-white/45 leading-relaxed self-end max-w-[60ch]">
            Underwear sits against some of the most sensitive skin on your body all day. Conventional fabrics carry pesticide residues, chemical dyes, and formaldehyde finishes. Every brand on FORM holds at least one independent certification to prove they don&apos;t.
          </p>
        </div>

        {/* Pillars as horizontal data rows */}
        <div className="divide-y divide-white/[0.08]">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] gap-4 md:gap-12 py-8 items-start"
            >
              <span className="font-mono text-sm text-accent pt-0.5">
                {pillar.number}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                {pillar.name}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
