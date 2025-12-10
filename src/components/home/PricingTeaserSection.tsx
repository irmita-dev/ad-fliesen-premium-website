import Link from "next/link";
import { cormorant } from "@/components/layout/fonts";

const typicalProjectsLeft = [
  "Teil-Badsanierung (Dusche, Boden, Wände)",
  "Komplette Badsanierung inkl. Trockenbau",
  "Küchenrückwand & Arbeitsbereich",
];

const typicalProjectsRight = [
  "Wohnraum- & Flurfliesen",
  "Terrasse oder Balkon (rutschfest & frostsicher)",
  "Reparaturarbeiten & Fugen-Erneuerung",
];

export function PricingTeaserSection() {
  return (
    <section className="relative py-12 md:py-14">
      {/* Soft gold-beige background wash */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#fdf7ec,#f4e4c8,#ead5b0)] opacity-[0.92]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        {/* Deluxe centered header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2
            className={`${cormorant.className} text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-ink)] leading-tight`}
          >
            <strong>Transparente Preise & klare Angebote</strong>
          </h2>

          {/* gold underline */}
          <div className="w-24 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)]" />

          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            Jede Baustelle ist individuell – trotzdem erhalten Sie bei AD FLIESEN
            immer ein strukturiertes, schriftliches Angebot. Wir besichtigen
            Ihr Projekt auf Wunsch direkt bei Ihnen vor Ort in Salzburg & Umgebung.
          </p>

          <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
            Sie erhalten klare Positionen, transparente Flächenberechnung und faire
            Preise – ohne Überraschungen und ohne versteckte Zusatzkosten.
          </p>
        </div>

        {/* Content cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
          {/* Left – CTA card */}
          <div className="flex-1">
            <div className="h-full rounded-[2rem] bg-[rgba(255,255,255,0.92)] backdrop-blur-xl border border-[rgba(0,0,0,0.05)] shadow-[0_20px_55px_rgba(0,0,0,0.25)] p-6 md:p-8 space-y-5 animate-floating-slow">
              <p className="text-[12px] uppercase tracking-[0.20em] text-[rgba(82,73,63,0.9)]">
                Angebot & Erstberatung
              </p>

              <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
                Wir nehmen uns Zeit für Ihr Projekt – ob Badsanierung, Küche oder
                Außenbereich. Am liebsten klären wir die Details in einem kurzen,
                persönlichen Gespräch und erstellen danach ein klares, verständliches
                Angebot.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[13px] font-medium
                             bg-[#D7BA80] text-[#1E1B18]
                             shadow-[0_16px_36px_rgba(0,0,0,0.25)]
                             hover:bg-[#caa96b] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                             transition-all"
                >
                  Unverbindliches Angebot anfragen
                </Link>

                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-medium
                             bg-[rgba(255,255,255,0.7)] backdrop-blur-md
                             text-[var(--color-ink)]
                             border border-[rgba(0,0,0,0.04)]
                             shadow-[0_10px_24px_rgba(0,0,0,0.14)]
                             hover:bg-white hover:shadow-[0_14px_32px_rgba(0,0,0,0.2)]
                             transition-all"
                >
                  Typische Projekte ansehen
                </Link>
              </div>

              <p className="text-[11px] text-[rgba(82,73,63,0.85)] pt-2">
                Wir melden uns in der Regel innerhalb von 24 Stunden.
              </p>
            </div>
          </div>

          {/* Right – typical projects pill grid */}
          <div className="flex-1 w-full">
            <div className="h-full rounded-[2rem] bg-[rgba(255,255,255,0.88)] backdrop-blur-xl border border-[rgba(0,0,0,0.05)] shadow-[0_20px_55px_rgba(0,0,0,0.25)] p-5 md:p-6 space-y-5">
              <p className="text-[12px] uppercase tracking-[0.20em] text-[rgba(82,73,63,0.9)]">
                Typische Projekte in Salzburg
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  {typicalProjectsLeft.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl px-4 py-3 text-[13px] text-[var(--color-ink)]
                                 bg-[linear-gradient(135deg,rgba(248,244,236,0.9),rgba(215,186,128,0.24))]
                                 backdrop-blur-sm border border-[rgba(0,0,0,0.03)]
                                 shadow-[0_10px_26px_rgba(0,0,0,0.16)]
                                 transition-transform duration-300 hover:-translate-y-[3px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {typicalProjectsRight.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl px-4 py-3 text-[13px] text-[var(--color-ink)]
                                 bg-[linear-gradient(135deg,rgba(248,244,236,0.9),rgba(215,186,128,0.24))]
                                 backdrop-blur-sm border border-[rgba(0,0,0,0.03)]
                                 shadow-[0_10px_26px_rgba(0,0,0,0.16)]
                                 transition-transform duration-300 hover:-translate-y-[3px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-[rgba(82,73,63,0.9)] pt-1">
                Perfekte Vorbereitung für jedes Badezimmer-, Küchen- oder Wohnprojekt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}