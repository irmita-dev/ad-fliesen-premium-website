import { Project } from "@/core/domain/project";
import Image from "next/image";
import Link from "next/link";
import { cormorant } from "@/components/layout/fonts";

interface ProjectsSectionProps {
  projects: Project[];
}

// Kurirani projekti za HOME (1–3)
const homeShowcaseProjects = [
  {
    image: "/images/showcase-1.jpg",
    title: "Modernes Badprojekt in Stadt Salzburg",
    description:
      "Großformatige Feinsteinzeugfliesen in drei Farbwelten – schwarzer Marmor, warmes Terracotta und ruhiges Braun. Präzise Fugen, wandbündige Nischen und hotelähnliche Atmosphäre.",
    location: "Stadt Salzburg",
  },
  {
    image: "/images/showcase-2.jpg",
    title: "Helle Terrassenfliesen in Salzburg Umgebung",
    description:
      "Sonnige Terrasse mit rutschfesten, hellen Fliesen. Witterungsbeständig, pflegeleicht und ideal für lange Sommerabende im Freien.",
    location: "Salzburg Umgebung",
  },
  {
    image: "/images/showcase-3.jpg",
    title: "Grüne Designküche an der Salzburger Alpenstraße",
    description:
      "Exklusive Küche mit grün-weißen Fliesen als Akzentwand und Fliesenspiegel – perfekt für moderne Küchen mit Charakter.",
    location: "Salzburg · Alpenstraße",
  },
];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  // backend podatkov se ne dotikamo – za home uporabimo kurirani array
  const items = homeShowcaseProjects;

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-7">
        {/* Deluxe header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2
            className={`${cormorant.className} text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-ink)] leading-tight`}
          >
            <strong>Ausgewählte Projekte in Salzburg</strong>
          </h2>

          {/* gold underline */}
          <div className="w-24 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)]" />

          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            AD FLIESEN realisiert hochwertige Fliesenarbeiten in ganz Salzburg:
            moderne Badsanierungen, elegante Küchenrückwände, präzise verlegte
            Boden- und Wandfliesen, barrierefreie Duschen, Mosaikarbeiten,
            großformatige Fliesen, Terrassen- und Balkonlösungen, Wellness- und
            Spa-Bereiche sowie Reparaturen und Fugensanierungen.
          </p>
          <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
            Jedes Projekt wird mit höchster Genauigkeit umgesetzt – von der
            Vorbereitung und Abdichtung über den millimetergenauen Schnitt bis
            zur perfekten Fuge. Ob Neubau oder Altbau, kleines Badezimmer oder
            großzügiger Wohnbereich: Wir sorgen für ein langlebiges,
            ästhetisches Ergebnis, das den Charakter Ihres Raumes unterstreicht.
          </p>
        </div>

        {/* Grid – 3 enakovredne deluxe kartice */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {items.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem]
                         border border-[rgba(255,255,255,0.45)]
                         shadow-[0_20px_55px_rgba(0,0,0,0.35)]
                         transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
                />
                {/* dark–gold overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.72),rgba(0,0,0,0.15))]" />

                {/* Content */}
                <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[rgba(255,255,255,0.7)]">
                      AD FLIESEN · FLIESENLEGER SALZBURG
                    </p>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[12px] md:text-[13px] text-[rgba(255,255,255,0.9)] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-[11px] md:text-[12px] text-[rgba(255,255,255,0.85)]">
                      <span className="uppercase tracking-[0.16em]">
                        {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-[6px] w-[6px] rounded-full bg-[var(--color-gold)]" />
                        Referenzprojekt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link na Projekte page */}
        <div className="flex justify-end">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-ink)] relative group"
          >
            Weitere Projekte ansehen
            <span className="w-8 h-[1px] bg-[var(--color-gold)] inline-block translate-y-[1px] transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}