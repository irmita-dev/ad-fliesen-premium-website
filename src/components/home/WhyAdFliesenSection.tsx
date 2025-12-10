import { cormorant } from "@/components/layout/fonts";

export function WhyAdFliesenSection() {
  return (
    <section className="py-8 md:py-10 animate-fadeInScale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col items-start md:items-center md:text-center gap-2">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-muted)]">
            Vertrauen & Qualität
          </p>
          <h2
            className={`${cormorant.className} text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-ink)]`}
          >
            Warum Kunden in Salzburg AD FLIESEN wählen
          </h2>
          <div className="w-20 h-[2px] rounded-full bg-[linear-gradient(to_right,rgba(200,165,110,0.9),rgba(200,165,110,0.2))]" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Präzision & Planung",
              title: "Saubere Ausführung von Anfang an",
              text: "Exakte Untergrundvorbereitung, Abdichtung nach ÖNORM und millimetergenaue Verlegung – so entstehen langlebige, wertige Flächen.",
            },
            {
              label: "Beratung vor Ort",
              title: "Persönlich, ehrlich & lösungsorientiert",
              text: "Wir kommen zu Ihnen in Salzburg & Umgebung, analysieren Räume und beraten zu Formaten, Fugenbild, Farben und Pflege.",
            },
            {
              label: "Verlässliche Abläufe",
              title: "Fixe Ansprechpartner & klare Termine",
              text: "Direkte Kommunikation mit dem Inhaber, transparente Zeitpläne und saubere Baustellen – damit Sie sich jederzeit gut aufgehoben fühlen.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.6rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-5 relative overflow-hidden group"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,165,110,0.22),transparent_55%)] opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="relative space-y-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}