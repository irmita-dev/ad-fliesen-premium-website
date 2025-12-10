import { Service } from "@/core/domain/service";

export async function getServices(): Promise<Service[]> {
  return [
    {
      id: "tiles-installation",
      title: "Fliesenverlegung",
      shortDescription:
        "Präzise und saubere Verlegung in Bädern, Küchen, Wohnräumen und auf Terrassen.",
      slug: "fliesenverlegung",
    },
    {
      id: "bathroom-renovation",
      title: "Badsanierung",
      shortDescription:
        "Komplette Badsanierung aus einer Hand – von der Demontage bis zur fertigen Fläche.",
      slug: "badsanierung",
    },
    {
      id: "grout-repair",
      title: "Fugen & Reparaturen",
      shortDescription:
        "Austausch beschädigter Fliesen, Neuverfugung und optische Auffrischung.",
      slug: "fugen-und-reparaturen",
    },
    {
      id: "consulting-planning",
      title: "Beratung & Planung",
      shortDescription:
        "Unterstützung bei Auswahl von Format, Material und Verlegeart passend zu Ihrem Raum.",
      slug: "beratung-und-planung",
    },
  ];
}