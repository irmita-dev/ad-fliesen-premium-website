export interface HomepageHighlight {
  id: string;
  title: string;
  description: string;
}

export interface HomepageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroImageUrl: string;
  highlights: HomepageHighlight[];
}