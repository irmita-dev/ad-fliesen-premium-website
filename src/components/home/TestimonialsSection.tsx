// Local SVG star icon – no external library
function StarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.8.94-5.49-4-3.9 5.53-.8L10 1.5z"
        fill="#D7BA80"
      />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Unglaublich präzise Arbeit. Unser Badezimmer wirkt jetzt wie in einem Boutique-Hotel.",
    name: "Anna M.",
    location: "Salzburg",
  },
  {
    quote:
      "Sehr sauber gearbeitet, Termine eingehalten und hervorragende Beratung.",
    name: "Thomas W.",
    location: "Altbau in Salzburg",
  },
  {
    quote:
      "Küche und Wohnbereich neu gefliest – Ergebnis: perfekt, Kommunikation immer freundlich.",
    name: "Familie Steiner",
    location: "Salzburg Umgebung",
  },
  {
    quote:
      "Top Fliesenleger in Salzburg. Von der Planung bis zur letzten Fuge alles professionell.",
    name: "Markus H.",
    location: "Stadt Salzburg",
  },
  {
    quote:
      "Besonders gefallen hat uns die saubere Baustelle und der respektvolle Umgang im Haus.",
    name: "Julia & Peter K.",
    location: "Salzburg Süd",
  },
];

const trackItems = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-7">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Was Kunden über uns sagen
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed max-w-2xl">
            Echte Rückmeldungen aus Salzburg und Umgebung – ausgewählte
            Stimmen unserer Kunden zu Fliesenarbeiten, Badsanierungen
            und Küchenprojekten.
          </p>
        </div>

        {/* Marquee track */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.05)] shadow-[0_16px_40px_rgba(0,0,0,0.16)] py-5">
          <div className="testimonials-track px-4">
            {trackItems.map((item, index) => (
              <figure
                key={`${item.name}-${index}`}
                className="min-w-[260px] max-w-[320px] md:min-w-[320px] md:max-w-[360px] bg-[rgba(249,246,240,0.95)] border border-[rgba(0,0,0,0.04)] rounded-2xl p-4 md:p-5 shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center gap-1 text-[#D7BA80] mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="text-[13px] md:text-[14px] text-[var(--color-ink)] leading-relaxed mb-3">
                  „{item.quote}“
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.16em] text-[rgba(82,73,63,0.9)]">
                  {item.name} · {item.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}