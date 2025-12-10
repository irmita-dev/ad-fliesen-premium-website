"use client";

import Image from "next/image";

const showcaseItems = [
  {
    src: "/images/showcase-1.jpg",
    title: "Modernes Badezimmer",
    subtitle: "Großformatige Fliesen, begehbare Dusche, fugenreduzierte Optik.",
  },
  {
    src: "/images/showcase-2.jpg",
    title: "Elegante Walk-in-Dusche",
    subtitle: "Klarglas, Nischenablagen und exakt geschnittene Fugenbilder.",
  },
  {
    src: "/images/showcase-3.jpg",
    title: "Küchenrückwand in Steinoptik",
    subtitle: "Pflegeleicht, hitzebeständig und perfekt an Möbel angepasst.",
  },
  {
    src: "/images/showcase-4.jpg",
    title: "Wohnbereich mit Feinsteinzeug",
    subtitle: "Warmer Farbton, klare Linien, hochwertige Bodengestaltung.",
  },
  {
    src: "/images/showcase-5.jpg",
    title: "Terrasse mit Outdoor-Fliesen",
    subtitle: "Rutschfest, frostsicher und ideal für Salzburger Wetter.",
  },
];

// za nemoten loop podvojimo
const loopedItems = [...showcaseItems, ...showcaseItems];

export function ShowcaseGallery() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-7">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Projekte im Überblick
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Ein visueller Eindruck von Badezimmern, Küchen, Wohnbereichen und
            Terrassen, die wir in Salzburg & Umgebung mit hochwertigen Fliesen
            realisiert haben.
          </p>
        </div>

        {/* Main gallery card */}
        <div className="rounded-[2.2rem] bg-[rgba(255,255,255,0.9)] backdrop-blur-md border border-[rgba(0,0,0,0.05)] shadow-luxe overflow-hidden px-4 py-5 md:px-6 md:py-6">
          <div className="relative overflow-hidden">
            {/* Moving track */}
            <div className="gallery-track">
              {loopedItems.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className="relative min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px]"
                >
                  <div className="relative aspect-[4/3] rounded-[1.6rem] overflow-hidden shadow-luxe-sm">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                    {/* Soft gradient overlay bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent" />
                    {/* Text overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[13px] md:text-[14px] font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] md:text-[12px] text-[rgba(255,255,255,0.85)]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Small hint text */}
          <p className="mt-4 text-[11px] text-[rgba(82,73,63,0.75)]">
            Die Galerie zeigt eine Auswahl – weitere Projekte finden Sie auf der
            Projektseite. Auf Wunsch senden wir Ihnen zusätzliche Referenzfotos.
          </p>
        </div>
      </div>
    </section>
  );
}