import { cormorant } from "@/components/layout/fonts";

export function ProcessSection() {
  return (
    <section className="py-8 md:py-10 animate-fadeInScale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe-sm p-6 md:p-8 space-y-6 relative overflow-hidden">
        {/* subtilen gold gradient v ozadju */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,110,0.23),transparent_60%)] opacity-70" />

        <div className="relative space-y-2 text-center">
          <p className="text-[11px] tracking-[0.26em] uppercase text-[var(--color-muted)]">
            Ablauf & Zusammenarbeit
          </p>
          <h2
            className={`${cormorant.className} text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-ink)]`}
          >
            So läuft Ihr Projekt mit AD FLIESEN ab
          </h2>
        </div>

        <div className="relative grid gap-4 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Beratung & Planung",
              text: "Besichtigung vor Ort, Klärung von Budget, Zeitplan und Designwunsch – inkl. Vorschlägen zu Fliesenformat, Verlegebild und Fugenfarbe.",
            },
            {
              step: "2",
              title: "Vorbereitung & Verlegung",
              text: "Fachgerechte Untergrundvorbereitung, Abdichtung, Zuschnitt und Verlegung – sauber, staubarm und mit klar strukturiertem Ablauf.",
            },
            {
              step: "3",
              title: "Detailarbeit & Übergabe",
              text: "Perfekte Fugen, saubere Silikonabschlüsse und gemeinsame Abnahme – Ihr neues Bad, Ihre Küche oder Terrasse ist sofort nutzbar.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-[1.4rem] bg-[rgba(255,255,255,0.96)] border border-[rgba(0,0,0,0.04)] shadow-[0_14px_32px_rgba(0,0,0,0.16)] p-4 text-left md:text-center relative overflow-hidden group"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(to_right,rgba(200,165,110,0.9),rgba(200,165,110,0.2))]" />
              <div className="relative space-y-2">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[var(--color-gold)] text-black text-[13px] font-semibold mb-1">
                  {item.step}
                </div>
                <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">
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