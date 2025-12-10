import Image from "next/image";
import { cormorant } from "@/components/layout/fonts";

type ProjectForHighlight = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string | null;
};

type SignatureProjectSectionProps = {
  project?: ProjectForHighlight;
};

export function SignatureProjectSection({ project }: SignatureProjectSectionProps) {
  const title =
    project?.title ?? "Modernes Badezimmer mit großformatigen Fliesen in Salzburg";

  const description =
    project?.description ??
    "Großformatige Feinsteinzeugfliesen, bodenebene Dusche, dezente Fugen und warme Beleuchtung – ein Badezimmer, das wie ein Boutique-Hotel wirkt.";

  // če ima projekt svojo sliko, jo uporabimo, sicer fallback na /public/images/signature-bathroom.jpg
  const imageSrc = project?.imageUrl || "/images/signature-bathroom.jpg";

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center">
          {/* Image side */}
          <div className="flex-1 relative rounded-[2rem] overflow-hidden bg-[rgba(0,0,0,0.08)] group shadow-[0_24px_70px_rgba(0,0,0,0.28)] aspect-[4/5] md:aspect-[5/4]">
            {/* subtle gold overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,110,0.35),transparent_60%)] opacity-60 mix-blend-soft-light" />

            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
              priority
            />

            {/* dark glass card */}
            <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
              <div className="bg-[rgba(6,6,8,0.85)]/90 backdrop-blur-md rounded-[1.6rem] border border-[rgba(255,255,255,0.18)] px-5 py-4 md:px-6 md:py-5">
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.7)] mb-1">
                  Referenzprojekt · Salzburg
                </p>
                <h3
                  className={`${cormorant.className} text-[1.2rem] md:text-[1.4rem] font-semibold text-white`}
                >
                  {title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-[rgba(255,255,255,0.86)] leading-relaxed mt-2">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 space-y-4">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              AD FLIESEN · FLIESENLEGER SALZBURG
            </p>
            <h2
              className={`${cormorant.className} text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-ink)]`}
            >
              Einblick in ein modernes Badprojekt in Salzburg
            </h2>
            <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
              Großformatige Fliesen, ruhiges Fugenbild und harmonische
              Materialkombinationen – so entsteht ein Badezimmer, das jeden Tag
              wie ein kurzer Aufenthalt im Hotel wirkt. AD FLIESEN plant und
              realisiert solche Projekte in Salzburg & Umgebung mit hoher
              Präzision und viel Gespür für Details.
            </p>
            <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
              Ob Neubau oder Sanierung: Wir achten auf stimmige Proportionen,
              optimale Aufteilung und eine pflegeleichte, langlebige Ausführung.
            </p>
            <a
              href="/projekte"
              className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-medium text-[var(--color-ink)] relative group"
            >
              Weitere Referenzprojekte ansehen
              <span className="w-8 h-[1px] bg-[var(--color-gold)] inline-block translate-y-[1px] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}