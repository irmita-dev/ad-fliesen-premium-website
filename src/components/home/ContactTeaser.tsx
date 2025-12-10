import Link from "next/link";
import { cormorant } from "@/components/layout/fonts";

export function ContactTeaser() {
  return (
    <section className="relative py-12 md:py-14">
      {/* soft luxe background wash */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#fdf7ec,#f3e3c8,#e6d1ae)] opacity-[0.9]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[rgba(255,255,255,0.9)] backdrop-blur-xl border border-[rgba(0,0,0,0.05)] shadow-[0_22px_60px_rgba(0,0,0,0.28)] px-6 py-7 md:px-9 md:py-9 flex flex-col md:flex-row gap-7 md:gap-10 items-start md:items-center justify-between">
          {/* Left – text & trust */}
          <div className="space-y-4 max-w-xl">
            <h2
              className={`${cormorant.className} text-[1.9rem] md:text-[2.2rem] font-semibold text-[var(--color-ink)] leading-tight`}
            >
              <strong>Projekt in Salzburg geplant?</strong>
            </h2>

            <div className="w-20 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_16px_rgba(212,181,109,0.55)]" />

            <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
              Ob Badsanierung, neue Fliesen in der Küche, moderner Wohnbereich
              oder Terrasse – AD FLIESEN ist Ihr Fliesenleger in Salzburg & Umgebung
              für präzise, saubere und langlebige Fliesenarbeiten.
            </p>

            <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
              Schicken Sie uns Ihre Pläne oder Fotos – wir melden uns in der Regel
              innerhalb von 24 Stunden mit einer ehrlichen Ersteinschätzung und
              einem transparenten Angebot.
            </p>

            <ul className="text-[12px] md:text-[13px] text-[var(--color-muted)] leading-relaxed space-y-1.5">
              <li>• Fliesenarbeiten in Stadt Salzburg & Umgebung</li>
              <li>• Bad, Küche, Wohnräume, Terrasse & Balkon</li>
              <li>• Persönliche Beratung direkt bei Ihnen vor Ort</li>
            </ul>
          </div>

          {/* Right – dual CTA block */}
          <div className="w-full md:w-auto">
            <div className="rounded-[1.8rem] bg-[rgba(250,245,235,0.96)] border border-[rgba(0,0,0,0.05)] shadow-[0_18px_45px_rgba(0,0,0,0.22)] px-5 py-6 md:px-6 md:py-7 space-y-4">
              <p className="text-[11px] uppercase tracking-[0.20em] text-[rgba(82,73,63,0.9)]">
                Direkt Kontakt aufnehmen
              </p>

              <div className="space-y-2">
                <a
                  href="tel:06644643336"
                  className="block rounded-full px-5 py-3 text-[13px] font-medium
                           bg-[var(--color-gold)] text-black
                           shadow-[0_16px_40px_rgba(0,0,0,0.25)]
                           hover:bg-[#caa96b] hover:shadow-[0_20px_55px_rgba(0,0,0,0.32)]
                           transition-all text-center"
                >
                  📞 Jetzt anrufen: 0664 464 3336
                </a>

                <Link
                  href="/kontakt"
                  className="block rounded-full px-5 py-3 text-[13px] font-medium
                           bg-[rgba(255,255,255,0.9)] text-[var(--color-ink)]
                           border border-[rgba(0,0,0,0.06)]
                           shadow-[0_10px_26px_rgba(0,0,0,0.16)]
                           hover:bg-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.22)]
                           transition-all text-center"
                >
                  📩 Anfrage über Kontaktformular
                </Link>
              </div>

              <p className="text-[11px] text-[rgba(82,73,63,0.85)] text-center">
                Gerne auch per WhatsApp mit Fotos der bestehenden Situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}