export function StatsSection() {
  const items = [
    {
      label: "Projekte in Salzburg & Umgebung",
      value: "100+",
    },
    {
      label: "Rückmeldungen zu Beratung & Ausführung",
      value: "5★",
    },
    {
      label: "Fokus auf Bad, Küche, Wohnräume & Terrassen",
      value: "Fokus",
    },
    {
      label: "Direkter Kontakt zum Inhaber",
      value: "Persönlich",
    },
  ];

  return (
    <section className="py-8 md:py-10 animate-fadeInScale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-[rgba(255,255,255,0.94)] rounded-[1.4rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-4 text-center relative overflow-hidden group"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,165,110,0.2),transparent_60%)] opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative space-y-1">
              <p className="text-[22px] font-semibold text-[var(--color-ink)]">
                {item.value}
              </p>
              <p className="text-[12px] text-[var(--color-muted)] leading-snug">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}