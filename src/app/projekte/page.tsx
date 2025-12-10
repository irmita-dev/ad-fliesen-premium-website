import { getProjects } from "@/core/usecases/getProjects";
import { cormorant } from "@/components/layout/fonts";
import { MainLayout } from "@/components/layout/MainLayout";
import Image from "next/image";

const scopeItems: string[] = [
  "Badsanierungen & Komplettumbauten",
  "Barrierefreie Duschen & bodenebene Duschbereiche",
  "Großformatfliesen (XXL-Platten)",
  "Mosaikfliesen & dekorative Akzentflächen",
  "Moderne Küchenrückwände & Fliesenspiegel",
  "Bodenfliesen für Wohnräume, Küche, Flur, Stiegenhaus",
  "Wandfliesen in Bad, WC, Wellness & Spa",
  "Terrassen- & Balkonfliesen (frostsicher & rutschfest)",
  "Nassraumabdichtung nach ÖNORM",
  "Silikonfugen, Erneuerung & Reparaturen",
  "Austausch einzelner beschädigter Fliesen",
  "Ausgleichs- & Vorbereitungsarbeiten",
];

// 10 kuriranih vizualnih referenc (povezano z /public/images/showcase-1..10.jpg)
const staticShowcase = [
  {
    title: "Modernes Badezimmer in Stadt Salzburg",
    location: "Stadt Salzburg",
    image: "/images/showcase-1.jpg",
  },
  {
    title: "Helle Terrassenfliesen in Salzburg Umgebung",
    location: "Salzburg Umgebung",
    image: "/images/showcase-2.jpg",
  },
  {
    title: "Grüne Designküche an der Salzburger Alpenstraße",
    location: "Salzburg · Alpenstraße",
    image: "/images/showcase-3.jpg",
  },
  {
    title: "Minimalistisches Schwarz-Weiß-Bad in Salzburg Maxglan",
    location: "Salzburg · Maxglan",
    image: "/images/showcase-4.jpg",
  },
  {
    title: "Dunkles Spa-Badezimmer in Salzburg Umgebung",
    location: "Salzburg Umgebung",
    image: "/images/showcase-5.jpg",
  },
  {
    title: "Urbaner Balkon mit hellen Fliesen",
    location: "Salzburg Stadt",
    image: "/images/showcase-6.jpg",
  },
  {
    title: "Bunte Badgestaltung in Salzburg-Liefering",
    location: "Salzburg · Liefering",
    image: "/images/showcase-7.jpg",
  },
  {
    title: "Hotelbad mit Schwarz-Weiß-Fliesen in Salzburg Umgebung",
    location: "Salzburg Umgebung",
    image: "/images/showcase-8.jpg",
  },
  {
    title: "Skandinavische Küche in Salzburg-Lehen",
    location: "Salzburg · Lehen",
    image: "/images/showcase-9.jpg",
  },
  {
    title: "Urbane Designküche in Stadt Salzburg",
    location: "Stadt Salzburg",
    image: "/images/showcase-10.jpg",
  },
];

export default async function ProjektePage() {
  const projects = (await getProjects()) as any[];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-14">
        {/* 1) SEO INTRO – GLASSMORPHIC KARTICA */}
        <section className="animate-fadeInUp">
          <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <h1
                className={`${cormorant.className} text-[2rem] md:text-[2.6rem] font-semibold text-[var(--color-ink)]`}
              >
                Unsere Projekte – Fliesenarbeiten in Salzburg & Umgebung
              </h1>

              {/* GOLD UNDERLINE */}
              <div className="w-24 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)] animate-pulse" />

              <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
                AD FLIESEN realisiert hochwertige Fliesenarbeiten in ganz
                Salzburg: moderne Badsanierungen, elegante Küchenrückwände,
                präzise verlegte Boden- und Wandfliesen, barrierefreie Duschen,
                Mosaikarbeiten, großformatige Fliesen, Terrassen- und
                Balkonlösungen, Wellness- und Spa-Bereiche sowie Reparaturen und
                Fugensanierungen.
              </p>

              <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
                Jedes Projekt wird mit höchster Genauigkeit umgesetzt – von der
                Vorbereitung und Abdichtung über den millimetergenauen Schnitt
                bis zur perfekten Fuge. Ob Neubau oder Altbau, kleines Badezimmer
                oder großzügiger Wohnbereich: Wir sorgen für ein langlebiges,
                ästhetisches Ergebnis, das den Charakter Ihres Raumes
                unterstreicht.
              </p>
            </div>

            {/* kapsule namesto dolgočasne bullet liste */}
            <div className="space-y-3">
              <h2 className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)]">
                Unser Leistungsspektrum umfasst unter anderem:
              </h2>
              <div className="grid gap-2.5 md:grid-cols-2">
                {scopeItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] md:text-[14px]
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(215,186,128,0.22))]
                    border border-[rgba(0,0,0,0.04)]
                    shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
                  >
                    <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-gold-soft)]" />
                    <span className="text-[var(--color-muted)] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2) FEATURED PROJECT – VELIKI HIGHLIGHT */}
        {featuredProject && (
          <section className="animate-fadeInUp">
            <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-stretch rounded-[2rem] overflow-hidden bg-[rgba(255,255,255,0.9)] backdrop-blur-md border border-[rgba(0,0,0,0.05)] shadow-luxe">
              {/* (če želiš, lahko tukaj kasneje tudi dodava zoom na klik) */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredProject.imageUrl || "/images/showcase-1.jpg"}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                <p className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-muted)]">
                  Referenzprojekt · Salzburg
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)]">
                  {featuredProject.title}
                </h2>

                {/* GOLD UNDERLINE */}
                <div className="w-20 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_16px_rgba(212,181,109,0.5)]" />

                <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
                  {featuredProject.description}
                </p>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Fokus: präzise Fliesenverlegung, saubere Details und langlebige
                  Lösungen – ideal für Kunden, die in Salzburg Wert auf ein
                  hochwertiges Erscheinungsbild legen.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 3) VISUELLE GALERIE – 10 SHOWCASE SLIK (ZOOM NA KLIK) */}
        <section className="animate-fadeInUp">
          <div className="space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <h2
                className={`${cormorant.className} text-[1.8rem] md:text-[2.1rem] font-semibold text-[var(--color-ink)]`}
              >
                Einblicke in unsere Referenzprojekte
              </h2>

              {/* GOLD UNDERLINE POD NASLOVOM NA DESNI / ZA DESKTOP */}
              <div className="hidden md:block w-20 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_16px_rgba(212,181,109,0.5)]" />

              <span className="hidden md:inline-block text-[13px] text-[var(--color-muted)]">
                Bäder · Küchen · Terrassen · Wohnräume in ganz Salzburg & Umgebung
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {staticShowcase.map((item) => (
                <article
                  key={item.title}
                  className="relative rounded-[1.8rem] overflow-hidden bg-[rgba(0,0,0,0.08)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.26)] transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* LINK ZA ZOOM – odpre sliko v novem tabu */}
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group block relative h-48 md:h-52 cursor-zoom-in"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.65),rgba(0,0,0,0.15))]" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-200">
                        AD FLIESEN · {item.location}
                      </p>
                      <p className="text-[13px] md:text-[14px] font-medium text-white leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4) GRID OSTALIH PROJEKTOV IZ BACKENDA */}
        {otherProjects.length > 0 && (
          <section className="animate-fadeInUp">
            <div className="space-y-6">
              {/* Naslov + zlata črta */}
              <div className="text-center space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)]">
                  Weitere Projekte im Überblick
                </h2>
                <div className="w-20 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_16px_rgba(212,181,109,0.5)]" />
              </div>

              

              {/* Deluxe closing statement na sredini + underline */}
              <div className="pt-4 text-center max-w-3xl mx-auto space-y-3">
                <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
                  <strong>
                    Ob kleines Bad, großzügiger Wohnbereich oder Außenfläche – jedes
                    Projekt wird bei AD FLIESEN in Salzburg mit derselben Sorgfalt,
                    Sauberkeit und Detailtreue umgesetzt.
                  </strong>
                </p>
                <div className="w-24 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)]" />
              </div>
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
}