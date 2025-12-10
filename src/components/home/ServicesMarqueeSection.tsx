import { cormorant } from "@/components/layout/fonts";

type ServiceMarqueeProps = {
  services: { id: string; title: string }[];
};

export function ServicesMarqueeSection({ services }: ServiceMarqueeProps) {
  // vzamemo prvih 6 storitev, če jih je manj, uporabimo vse
  const visibleServices = services.slice(0, 6);
  const marqueeItems = [...visibleServices, ...visibleServices];

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-7">
        {/* DELUXE HEADER – CENTERED, BOLD, GOLD UNDERLINE */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2
            className={`${cormorant.className} text-[1.9rem] md:text-[2.2rem] font-semibold text-[var(--color-ink)] leading-tight`}
          >
            <strong>Typische Fliesenarbeiten in Salzburg</strong>
          </h2>

          {/* gold underline */}
          <div className="w-24 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)] animate-pulse" />

          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            Als regionaler Fliesenleger in Salzburg setzen wir Ihre Projekte mit
            höchster Sorgfalt und Präzision um. Moderne Bäder, hochwertige
            Wand- und Bodenfliesen, elegante Küchenlösungen und
            witterungsbeständige Außenbereiche – wir bieten Ihnen eine breite
            Palette an Leistungen für ein stilvolles Zuhause. Unsere Beratung ist
            persönlich, flexibel und direkt bei Ihnen vor Ort.
          </p>
          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            Ganz gleich, ob es sich um eine vollständige Badsanierung, neue
            Bodenfliesen, großformatige Fliesen oder kleinere Reparaturarbeiten
            handelt: Bei AD FLIESEN erhalten Sie eine hochwertige Umsetzung,
            klare Kommunikation und faire, transparente Preise – ohne
            versteckte Kosten.
          </p>
          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            Wir arbeiten für Privatkunden, Vermieter, Hausverwaltungen und
            Gewerbebetriebe in ganz Salzburg & Umgebung. Unser Anspruch ist es,
            jedes Projekt so umzusetzen, dass es langlebig, harmonisch und
            ästhetisch wirkt – ganz im Stil Ihrer Wohnräume.
          </p>
        </div>

        {/* Marquee kapsule – nežno, premium, zlato-bel preliv */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[rgba(255,255,255,0.78)] backdrop-blur-xl border border-[rgba(0,0,0,0.04)] shadow-luxe-sm">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />

          <div className="flex min-w-max gap-4 py-4 px-6 animate-marquee-slow">
            {marqueeItems.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="px-6 md:px-8 py-3 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.98),rgba(255,255,255,0.9))] 
                           bg-[length:200%_200%] border border-[rgba(0,0,0,0.04)] shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                           relative overflow-hidden"
              >
                {/* nežna zlata glow linija */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_top_right,rgba(200,165,110,0.28),transparent_55%)]" />
                <div className="relative">
                  <p className="text-[13px] md:text-[14px] font-medium tracking-[0.08em] uppercase text-[var(--color-ink)] whitespace-nowrap">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}