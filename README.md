<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  
</head>
<body>
  <h1>AD FLIESEN – Premium Website<br />Fliesenleger in Salzburg</h1>

  <p>
    This repository contains the source code for the premium marketing website of
    <strong>AD FLIESEN | Fliesenleger | Salzburg</strong>, a local tiling and bathroom renovation business
    based in Salzburg, Austria.
  </p>

  <ul>
    <li><strong>UI language:</strong> German (DE)</li>
    <li><strong>Target:</strong> local customers in Salzburg &amp; Salzburg Umgebung</li>
    <li><strong>Goal:</strong> Turn visitors into high-quality leads via phone, WhatsApp and contact form</li>
    <li><strong>Link:</strong> https://ad-fliesen-salzburg.netlify.app/</li>
  </ul>

  <hr />

  <h2>Tech Stack</h2>

  <ul>
    <li><strong>Framework:</strong> Next.js (App Router, TypeScript)</li>
    <li><strong>Styling:</strong> Tailwind CSS + custom CSS variables in <code>globals.css</code></li>
    <li><strong>UI Style:</strong> warm gold–taupe palette, marble background, glassmorphism, premium hotel-like look</li>
    <li><strong>Images:</strong> <code>next/image</code>, assets in <code>public/images</code></li>
    <li><strong>Architecture:</strong> Clean Architecture (domain &amp; usecases), explicit API routes</li>
    <li><strong>Testing:</strong> Backend use cases &amp; API routes covered by tests (TDD for core logic)</li>
    <li><strong>Deployment:</strong> Designed for static / serverless deployment (e.g. Netlify)</li>
  </ul>

  <hr />

  <h2>Main Features</h2>

  <h3>1. Home Page (Startseite)</h3>
  <ul>
    <li>Full-screen hero with premium bathroom background image (<code>/images/hero-main.jpg</code>)</li>
    <li>Soft beige gradient overlay + subtle vignette for depth</li>
    <li>Clear headline and SEO text for tiling work in Salzburg</li>
    <li>Primary CTAs:
      <ul>
        <li>WhatsApp consultation button (links to <code>https://wa.me/436644643336</code>)</li>
        <li>“Angebot anfragen” button (link to contact page)</li>
      </ul>
    </li>
    <li>Floating “reference project” card with slow floating animation</li>
    <li>Sections:
      <ul>
        <li><strong>Unsere Leistungen in Salzburg &amp; Umgebung</strong> – services teaser with text + supporting images</li>
        <li><strong>Typische Fliesenarbeiten</strong> – marquee of service “pills” with soft gold gradients</li>
        <li><strong>Ausgewählte Projekte in Salzburg</strong> – curated 3-project grid with one featured card</li>
        <li><strong>Why AD FLIESEN / Process / Stats</strong> – trust-building blocks from the “Über uns” page reused on home</li>
        <li><strong>Showcase Gallery / Signature bathroom</strong> – strong hero-style reference image</li>
        <li><strong>Pricing teaser</strong> – “Transparente Preise &amp; klare Angebote” with typical projects on the right</li>
        <li><strong>Testimonials carousel</strong> – moving customer reviews with 5-star rating</li>
        <li><strong>FAQ teaser</strong> – 3 FAQ items + link to full FAQ page</li>
        <li><strong>Contact teaser</strong> – final CTA to contact page with 24h response promise</li>
      </ul>
    </li>
  </ul>

  <h3>2. Leistungen (Services)</h3>
  <ul>
    <li>SEO-optimised German copy describing services in Salzburg &amp; Umgebung</li>
    <li>Glassmorphic hero card with headline and description</li>
    <li>Animated marquee section with service “pills” (white–gold gradients)</li>
    <li>Additional premium section listing service types in pill format</li>
    <li>CTA block “Bereit für Ihr Projekt in Salzburg?” linking to contact page</li>
  </ul>

  <h3>3. Projekte (Projects / References)</h3>
  <ul>
    <li>Intro section: “Unsere Projekte – Fliesenarbeiten in Salzburg &amp; Umgebung”</li>
    <li>Service scope rendered as elegant pill cards instead of boring bullet lists</li>
    <li>Featured project:
      <ul>
        <li>Uses backend <code>getProjects()</code> data</li>
        <li>Large 2-column layout: left image, right description</li>
      </ul>
    </li>
    <li>Visual gallery of 10 curated showcase images:
      <ul>
        <li>Images: <code>showcase-1.jpg</code> to <code>showcase-10.jpg</code></li>
        <li>Each with short description and location (e.g. Stadt Salzburg, Alpenstraße, Maxglan…)</li>
      </ul>
    </li>
    <li>Grid of remaining backend projects with fallback images, hover zoom and additional micro-copy</li>
  </ul>

  <h3>4. Über uns (About)</h3>
  <ul>
    <li>Premium intro card describing AD FLIESEN’s philosophy and quality standards</li>
    <li>“Why AD FLIESEN” – 3 trust pillars (quality, cleanliness, personal consultation)</li>
    <li>Project process as a 4-step timeline (from inquiry to execution)</li>
    <li>Stats section (e.g. projects, experience) as large numerals, gold highlights</li>
    <li>Additional trust block emphasising clean worksites, clear offers and personal service</li>
  </ul>

  <h3>5. Kontakt (Contact)</h3>
  <ul>
    <li>SEO intro with title, description and contact details</li>
    <li>Left column:
      <ul>
        <li>Direct contact via phone and WhatsApp</li>
        <li>Explanation of sending photos/videos for faster assessment</li>
        <li>Mini “how request works” steps (1–4)</li>
      </ul>
    </li>
    <li>Right column: contact form
      <ul>
        <li>Name, phone, e-mail (optional), preferred contact method (phone/WhatsApp)</li>
        <li>Message / project description</li>
        <li>Validation + success/error messages</li>
        <li>POST to <code>/api/contact</code> (backend kept as-is)</li>
      </ul>
    </li>
    <li>All inputs use premium glassmorphic styling, consistent with the brand</li>
  </ul>

  <h3>6. FAQ (Home section &amp; full page)</h3>
  <ul>
    <li>Home:
      <ul>
        <li>3 FAQs in collapsible cards</li>
        <li>Soft gold–white gradient background</li>
        <li>Link to full FAQ page</li>
      </ul>
    </li>
    <li>Full FAQ page:
      <ul>
        <li>Groups: general info, services &amp; process, costs, technical/quality, small repairs, contact &amp; communication</li>
        <li>Each group rendered as elegant glassmorphic <code>&lt;details&gt;</code> cards with +/− toggle and smooth text</li>
        <li>SEO-optimised German copy, kept intact</li>
      </ul>
    </li>
  </ul>

  <h3>7. Cookies &amp; Privacy (EU / AT)</h3>
  <ul>
    <li>Custom <strong>CookieBanner</strong> component:
      <ul>
        <li>Bottom-fixed glass/dark gold panel with text and two buttons:
          <ul>
            <li>“Nur notwendige”</li>
            <li>“Alle akzeptieren”</li>
          </ul>
        </li>
        <li>Consent stored in <code>localStorage</code> under <code>adfliesen_cookie_consent_v1</code></li>
        <li>Option to initialise analytics only when “all” is accepted</li>
      </ul>
    </li>
    <li>Designed to be legally safer for EU/Austria (informing about technically necessary cookies; analytics is optional to add).</li>
  </ul>

  <hr />

  <h2>Architecture &amp; Folder Structure</h2>

  <p>The project follows a Clean Architecture-inspired structure with clear separation between:</p>
  <ul>
    <li><strong>Domain</strong> (core business models)</li>
    <li><strong>Use cases</strong> (business logic)</li>
    <li><strong>API routes</strong> (Next.js route handlers)</li>
    <li><strong>UI components</strong> (React components / pages)</li>
  </ul>

  <pre><code>src/
  app/
    api/
      homepage/route.ts
      services/route.ts
      projects/route.ts
      contact/route.ts
    page.tsx // Home
    leistungen/page.tsx // Services
    projekte/page.tsx // Projects
    ueber-uns/page.tsx // About
    kontakt/page.tsx // Contact
    faq/page.tsx // FAQ
    impressum/page.tsx // (optional) Legal notice
    datenschutz/page.tsx // (optional) Privacy policy

  components/
    layout/
      MainLayout.tsx // Global layout (bg, parallax, navbar, footer, cookie banner)
      Navbar.tsx // Fixed header with logo &amp; navigation
      Footer.tsx // Global footer
      CookieBanner.tsx // EU cookie info / consent banner

    home/
      HeroSection.tsx
      ServicesSection.tsx
      ServicesMarqueeSection.tsx
      ProjectsSection.tsx
      TestimonialsSection.tsx
      PricingTeaserSection.tsx
      ShowcaseGallery.tsx
      FAQSection.tsx
      ContactTeaser.tsx
      WhyAdFliesenSection.tsx
      ProcessSection.tsx
      StatsSection.tsx

  core/
    domain/
      homepage.ts
      service.ts
      project.ts
      contact.ts
    usecases/
      getHomepageContent.ts
      getServices.ts
      getProjects.ts
      submitContactRequest.ts

  infrastructure/
    email/
      emailGateway.ts // stub or adapter for sending e-mails

  tests/
    backend/
      usecases/
        getHomepageContent.test.ts
        getServices.test.ts
        getProjects.test.ts
        submitContactRequest.test.ts
      api/
        homepageApi.test.ts
        servicesApi.test.ts
        projectsApi.test.ts
        contactApi.test.ts

public/
  images/
    hero-main.jpg
    marble-veins.png
    logo-adfliesen.png
    showcase-1.jpg ... showcase-10.jpg
</code></pre>

  <hr />

  <h2>Styling &amp; Animations</h2>

  <h3>Global Styling</h3>
  <ul>
    <li>Tailwind CSS with custom CSS variables defined in <code>globals.css</code>:
      <ul>
        <li><code>--color-bg</code> – base background (warm light marble beige)</li>
        <li><code>--color-surface</code>, <code>--color-surface-soft</code>, <code>--color-surface-elevated</code></li>
        <li><code>--color-ink</code>, <code>--color-muted</code> – main and secondary text colors</li>
        <li><code>--color-gold</code>, <code>--color-gold-soft</code> – brand gold tones</li>
        <li><code>--color-accent</code> – beige accent</li>
      </ul>
    </li>
    <li>Utility classes for:
      <ul>
        <li><code>.animate-fadeInUp</code> – fade &amp; slide-in animation</li>
        <li><code>.animate-floating-slow</code> – slow up/down floating effect</li>
        <li><code>.animate-marquee-slow</code> – horizontal marquee for pills / testimonials</li>
        <li><code>.marquee-track</code>, <code>.testimonials-track</code> – base marquee tracks</li>
      </ul>
    </li>
  </ul>

  <h3>Luxury Effects</h3>
  <ul>
    <li>Parallax marble background in <code>MainLayout</code> using <code>requestAnimationFrame</code> on scroll</li>
    <li>Glassmorphism cards with:
      <ul>
        <li>semi-transparent backgrounds</li>
        <li>soft borders</li>
        <li>blur hints</li>
        <li>deep shadows for a “premium” feel</li>
      </ul>
    </li>
    <li>Gold underline effects on navigation links and CTAs</li>
    <li>Hover lift and zoom on project cards</li>
  </ul>

  <hr />

  <h2>Development</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li><strong>Node.js:</strong> 18+ recommended</li>
    <li><strong>Package manager:</strong> npm, pnpm or yarn (examples use npm)</li>
  </ul>

  <h3>Install dependencies</h3>
  <pre><code>npm install
</code></pre>

  <h3>Run development server</h3>
  <pre><code>npm run dev
</code></pre>
  <p>By default, the site will be available at <code>http://localhost:3000</code>.</p>

  <h3>Build for production</h3>
  <pre><code>npm run build
npm start
</code></pre>

  <h3>Run tests (if configured)</h3>
  <pre><code>npm test
</code></pre>

  <hr />

  <h2>Deployment</h2>

  <p>
    The project is designed to work well on platforms like <strong>Netlify</strong> or <strong>Vercel</strong>.
    A typical Netlify configuration:
  </p>

  <ul>
    <li><strong>Build command:</strong> <code>npm run build</code></li>
    <li><strong>Publish directory:</strong> <code>.next</code></li>
    <li><strong>Base directory:</strong> (empty)</li>
  </ul>

  <p>
    After connecting the Git repository, Netlify will run the build and expose a live URL that
    can be used for client review.
  </p>

  <hr />

  <h2>Notes for Future Projects</h2>

  <ul>
    <li>Keep the <strong>backend contracts stable</strong> (<code>getServices</code>, <code>getProjects</code>, <code>/api/contact</code>) and
      evolve only the frontend components and styling.</li>
    <li>Use the same <strong>gold–taupe + marble visual language</strong> for other premium local business sites (with new colors as needed).</li>
    <li>Always:
      <ul>
        <li>design mobile-first,</li>
        <li>treat “trust” (testimonials, process, stats, FAQ) as core conversion elements,</li>
        <li>highlight phone and WhatsApp clearly, especially for local trades.</li>
      </ul>
    </li>
  </ul>

  <hr />

  <h2>Business Summary</h2>

  <p>
    This website is built specifically for <strong>AD FLIESEN</strong>, a tiler / tiling company in Salzburg,
    specialising in:
  </p>

  <ul>
    <li>Badsanierungen (bathroom renovations)</li>
    <li>Fliesenarbeiten in Bad, Küche, Wohnräumen und Fluren</li>
    <li>Terrassen- &amp; Balkonfliesen</li>
    <li>Großformatfliesen &amp; Mosaike</li>
    <li>Reparaturarbeiten &amp; Fugensanierung</li>
  </ul>

  <p>
    The entire UI is written in <strong>German</strong>, tailored to local SEO around
    <em>Fliesen Salzburg</em> and surrounding areas.
  </p>
</body>
</html>
