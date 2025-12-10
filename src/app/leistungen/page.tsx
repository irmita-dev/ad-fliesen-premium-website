import { getServices } from "@/core/usecases/getServices";
import { cormorant } from "@/components/layout/fonts";
import { MainLayout } from "@/components/layout/MainLayout";

const featureLabelsTop = [
  "Fliesenverlegung",
  "Badsanierung",
  "Fugen & Reparaturen",
  "Beratung & Planung",
  "Großformatige Fliesen",
  "Boden- & Wandfliesen",
];

const featureLabelsBottom = [
  "Küchenrückwände",
  "Bäder in Salzburg",
  "Wohnbereich mit Fliesen",
  "Terrasse & Außenbereich",
  "Sanierung im Altbau",
  "Moderner Duschbereich",
];

export default async function LeistungenPage() {
  // backend ostane – čeprav ga trenutno ne uporabljamo na strani
  const services = (await getServices()) as any[];

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-14">

        {/* HEADER */}
        <section className="space-y-6 text-center animate-fadeInUp">
          <h1
            className={`${cormorant.className} text-[2rem] md:text-[2.6rem] font-semibold text-[var(--color-ink)]`}
          >
            Unsere Leistungen – Fliesenleger in Salzburg & Umgebung
          </h1>

          <p className="text-[14px] md:text-[15px] max-w-3xl mx-auto text-[var(--color-muted)] leading-relaxed
            bg-[rgba(255,255,255,0.85)] backdrop-blur-md rounded-[1.5rem] border border-[rgba(0,0,0,0.04)]
            shadow-luxe-sm p-5">
            AD FLIESEN bietet professionelle, saubere und präzise Fliesenarbeiten
            in Salzburg und Umgebung. Von der modernen Badsanierung über elegante
            Küchenrückwände bis hin zu hochwertigen Bodenfliesen – wir begleiten
            Sie von der Planung bis zum fertigen Ergebnis. Flexibel, zuverlässig
            und mit Liebe zum Detail.
          </p>
        </section>

        {/* PREMIKAJOČA SEKCIJA – ZGORAJ */}
        <section className="animate-fadeInUp">
          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-[rgba(0,0,0,0.04)]
            bg-[rgba(255,255,255,0.7)] backdrop-blur-md shadow-luxe-sm py-3">
            <div className="leistungen-track">
              {[...featureLabelsTop, ...featureLabelsTop].map((label, idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] rounded-full
                    px-4 py-2.5 text-center text-[13px] md:text-[14px] font-medium text-[var(--color-ink)]
                    bg-gradient-to-r from-[rgba(255,255,255,0.96)] via-[rgba(255,255,255,0.9)]
                    to-[rgba(215,186,128,0.35)] shadow-luxe-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⚠️ SERVICES GRID – ODSTRANJEN (bil vmes) */}

        {/* SEO TEXT BLOK – ENAKA ŠIRINA KOT CTA */}
        <section className="animate-fadeInUp">
          <div className="max-w-4xl mx-auto space-y-5 md:space-y-6 
            bg-[rgba(255,255,255,0.82)] backdrop-blur-md rounded-[1.8rem] 
            border border-[rgba(0,0,0,0.05)] shadow-luxe-sm p-6 md:p-7 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)]">
              Ihr Fliesenleger für Bad, Küche, Boden & Terrasse in Salzburg
            </h2>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              Als regionaler Fliesenleger in Salzburg setzen wir Ihre Projekte mit
              höchster Sorgfalt und Präzision um. Moderne Bäder, hochwertige
              Wand- und Bodenfliesen, elegante Küchenlösungen und witterungsbeständige
              Außenbereiche – wir bieten Ihnen eine breite Palette an Leistungen für
              ein stilvolles Zuhause. Unsere Beratung ist persönlich, flexibel und
              direkt bei Ihnen vor Ort.
            </p>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              Ganz gleich, ob es sich um eine vollständige Badsanierung, neue
              Bodenfliesen, großformatige Fliesen oder kleinere Reparaturarbeiten
              handelt: Bei AD FLIESEN erhalten Sie eine hochwertige Umsetzung, klare
              Kommunikation und faire, transparente Preise – ohne versteckte Kosten.
            </p>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              Wir arbeiten für Privatkunden, Vermieter, Hausverwaltungen und
              Gewerbebetriebe in ganz Salzburg & Umgebung. Unser Anspruch ist es,
              jedes Projekt so umzusetzen, dass es langlebig, harmonisch und
              ästhetisch wirkt – ganz im Stil Ihrer Wohnräume.
            </p>
          </div>
        </section>

        {/* PREMIKAJOČA SEKCIJA – SPODAJ */}
        <section className="animate-fadeInUp">
          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-[rgba(0,0,0,0.04)]
            bg-[rgba(255,255,255,0.7)] backdrop-blur-md shadow-luxe-sm py-3">
            <div className="leistungen-track">
              {[...featureLabelsBottom, ...featureLabelsBottom].map((label, idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="min-w-[190px] sm:min-w-[210px] md:min-w-[230px] rounded-full 
                    px-4 py-2.5 text-center text-[13px] md:text-[14px] font-medium text-[var(--color-ink)]
                    bg-gradient-to-r from-[rgba(255,255,255,0.96)] via-[rgba(255,255,255,0.9)]
                    to-[rgba(215,186,128,0.35)] shadow-luxe-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA – ENAKA ŠIRINA KOT SEO BLOK */}
        <section className="animate-fadeInUp">
          <div className="max-w-4xl mx-auto text-center bg-[rgba(255,255,255,0.9)] backdrop-blur-md 
            rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe p-8 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)]">
              Bereit für Ihr Projekt in Salzburg?
            </h3>
            <p className="text-[14px] text-[var(--color-muted)]">
              Kontaktieren Sie uns telefonisch oder per WhatsApp für eine schnelle,
              unverbindliche Ersteinschätzung.
            </p>
            <a
              href="/kontakt"
              className="btn-gold-line inline-block px-9 py-3.5 rounded-full bg-[var(--color-gold)] 
                text-black text-[13px] font-medium shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                hover:bg-[#c2a05e] transition-all"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}