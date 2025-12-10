import { getHomepageContent } from "@/core/usecases/getHomepageContent";
import { getServices } from "@/core/usecases/getServices";
import { getProjects } from "@/core/usecases/getProjects";

import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingTeaserSection } from "@/components/home/PricingTeaserSection";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { FAQSection } from "@/components/home/FAQSection";

// premium sekcije
import { WhyAdFliesenSection } from "@/components/home/WhyAdFliesenSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesMarqueeSection } from "@/components/home/ServicesMarqueeSection";
import { SignatureProjectSection } from "@/components/home/SignatureProjectSection";

export default async function HomePage() {
  const [content, services, projects] = await Promise.all([
    getHomepageContent(),
    getServices(),
    getProjects(),
  ]);

  return (
    <MainLayout>
      {/* kompaktni razmiki, vsak blok fade-in z rahlo zamudo */}
      <div className="space-y-10 md:space-y-12 pb-16">
        {/* HERO */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0s" }}>
          <HeroSection content={content} />
        </div>

        {/* LEISTUNGEN PREVIEW - skrito za zdaj ker ne zgleda dobro
        <div className="animate-fadeInUp" style={{ animationDelay: "0.06s" }}>
          <ServicesSection services={services} />
        </div> */}

        {/* PREMIKJOČE KAPSULE – tipi Fliesenarbeiten */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.12s" }}>
          <ServicesMarqueeSection services={services} />
        </div>

        {/* SIGNATURE BATHROOM PROJEKT – velika slika */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.18s" }}>
          <SignatureProjectSection project={projects[0]} />
        </div>

        {/* PROJEKTE PREVIEW */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.24s" }}>
          <ProjectsSection projects={projects} />
        </div>

        {/* TESTIMONIALS */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.30s" }}>
          <TestimonialsSection />
        </div>

        {/* PRICING TEASER */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.36s" }}>
          <PricingTeaserSection />
        </div>

        {/* WHY / PROCESS / STATS – zaupanje & story */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.42s" }}>
          <WhyAdFliesenSection />
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: "0.48s" }}>
          <ProcessSection />
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: "0.54s" }}>
          <StatsSection />
        </div>

        {/* FAQ */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <FAQSection />
        </div>

        {/* KONTAKT */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.66s" }}>
          <ContactTeaser />
        </div>
      </div>
    </MainLayout>
  );
}