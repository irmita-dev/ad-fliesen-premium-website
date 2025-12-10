import { Project } from "@/core/domain/project";

export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: "bathroom-aigen",
      title: "Modernes Badezimmer in Salzburg-Aigen",
      description:
        "Großformatige Feinsteinzeugfliesen, begehbare Dusche und fugenreduzierte Optik.",
      location: "Salzburg-Aigen",
      images: ["/images/projects/bathroom-aigen-1.jpg"],
    },
    {
      id: "kitchen-black",
      title: "Küchenrückwand in Matt-Schwarz",
      description:
        "Robuste, pflegeleichte Fliesenlösung mit hoher Widerstandsfähigkeit gegen Fett und Hitze.",
      location: "Salzburg-Stadt",
      images: ["/images/projects/kitchen-black-1.jpg"],
    },
  ];
}