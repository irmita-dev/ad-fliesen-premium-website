import { HomepageContent } from "@/core/domain/homepage";

export async function getHomepageContent(): Promise<HomepageContent> {
  return {
    heroTitle: "Hochwertige Fliesenarbeiten in Salzburg",
    heroSubtitle:
      "Präzise Ausführung, langlebige Qualität und saubere Baustellen – vom ersten Gespräch bis zur fertigen Fläche.",
    heroPrimaryCta: "Kostenlose Angebotserstellung in 24h",
    heroSecondaryCta: "Aktuelle Referenzen ansehen",
    heroImageUrl: "/images/hero-bathroom-salzburg.jpg",
    highlights: [
      {
        id: "experience",
        title: "15+ Jahre Erfahrung",
        description: "Langjährige Erfahrung mit privaten und gewerblichen Projekten.",
      },
      {
        id: "quality",
        title: "Premium Materialien",
        description: "Zusammenarbeit mit ausgewählten Herstellern und Qualitätssystemen.",
      },
      {
        id: "clean-sites",
        title: "Saubere Baustellen",
        description: "Wir hinterlassen Ihre Räume so sauber, wie wir sie vorgefunden haben.",
      },
    ],
  };
}