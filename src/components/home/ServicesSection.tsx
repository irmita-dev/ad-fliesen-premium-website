import { Service } from "@/core/domain/service";
import Link from "next/link";
import Image from "next/image";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  // vzamemo prvih 4 storitev za overlay naslove (če jih je manj, elegantno fallback)
  const previewServices = services.slice(0, 4);
  const previewImages = [
    "/images/showcase-1.jpg",
    "/images/showcase-2.jpg",
    "/images/showcase-3.jpg",
    "/images/showcase-4.jpg",
  ];

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        {/* header + opis */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Unsere Leistungen in Salzburg & Umgebung
          </h2>

          <p className="text-[14px] md:text-[15px] max-w-2xl text-[var(--color-muted)] leading-relaxed">
            AD FLIESEN bietet professionelle Fliesenverlegung, moderne
            Badsanierung, Küchenrückwände, Bodenfliesen, Terrassenfliesen
            und Reparaturarbeiten. Präzise, sauber und hochwertig – direkt
            bei Ihnen vor Ort in Salzburg.
          </p>
        </div>

        {/* grid s slikami storitev */}
        <div className="rounded-[2rem] bg-[rgba(255,255,255,0.78)]/80 border border-[rgba(255,255,255,0.9)] shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-md p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {previewImages.map((src, index) => {
              const service = previewServices[index];
              const label = service?.title ?? "Fliesenprojekt in Salzburg";

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[1.6rem] group aspect-[4/3] bg-[rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
                  />

                  {/* zlat preliv */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,110,0.45),transparent_55%)] mix-blend-soft-light opacity-80" />

                  {/* glass label */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="bg-[rgba(6,6,8,0.82)]/90 backdrop-blur-md rounded-full px-4 py-2.5 flex items-center justify-between gap-3 border border-[rgba(255,255,255,0.18)]">
                      <span className="text-[12px] md:text-[13px] font-medium text-white truncate">
                        {label}
                      </span>
                      <span className="text-[11px] md:text-[12px] text-[rgba(255,255,255,0.82)] uppercase tracking-[0.18em]">
                        Salzburg
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* link na vse storitve */}
        <div className="flex justify-end">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] relative group"
          >
            Alle Leistungen ansehen
            <span className="w-8 h-[1px] bg-[var(--color-gold)] inline-block translate-y-[1px] transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}