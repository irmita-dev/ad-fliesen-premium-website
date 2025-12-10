import { MainLayout } from "@/components/layout/MainLayout";
import { cormorant } from "@/components/layout/fonts";

export default function UeberUnsPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-14">
        {/* INTRO – WER IST AD FLIESEN */}
        <section className="animate-fadeInScale animate-parallax">
          <div className="max-w-4xl mx-auto bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe p-6 md:p-8 space-y-5 text-center">
            <h1
              className={`${cormorant.className} text-[2rem] md:text-[2.4rem] font-semibold text-[var(--color-ink)]`}
            >
              Über uns – AD FLIESEN in Salzburg
            </h1>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              AD FLIESEN ist ein inhabergeführtes Fliesenleger-Unternehmen aus
              Salzburg, spezialisiert auf hochwertige Fliesenarbeiten für Bäder,
              Küchen, Wohnräume, Terrassen und gewerbliche Flächen. Unser Fokus
              liegt auf präziser Ausführung, sauberer Baustellenorganisation und
              einer ästhetischen Gestaltung, die perfekt zu Ihrem Zuhause in
              Salzburg & Umgebung passt.
            </p>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              Von der ersten Beratung bis zur letzten Silikonfuge begleiten wir
              Sie persönlich – mit klarer Kommunikation, verlässlichen Terminen
              und Lösungen, die langfristig Freude machen. Jede Fläche wird so
              geplant und verlegt, als wäre es unser eigenes Zuhause.
            </p>
          </div>
        </section>

        {/* WARUM AD FLIESEN – 3 PREMIUM KARTICE */}
        <section className="animate-fadeInScale">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2
              className={`${cormorant.className} text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-ink)] text-center`}
            >
              Warum Kunden in Salzburg AD FLIESEN wählen
            </h2>

            <div className="grid gap-5 md:grid-cols-3 stagger">
              <div className="bg-[rgba(255,255,255,0.92)] backdrop-blur-md rounded-[1.6rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-5 space-y-2 hover-gold">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Präzision & Planung
                </p>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)]">
                  Saubere Ausführung von Anfang an
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Exakte Vorbereitung des Untergrunds, sorgfältige Abdichtung nach
                  ÖNORM und millimetergenaue Fliesenverlegung – so entstehen
                  langlebige Flächen, die auch nach Jahren noch wertig wirken.
                </p>
              </div>

              <div className="bg-[rgba(255,255,255,0.92)] backdrop-blur-md rounded-[1.6rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-5 space-y-2 hover-gold">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Beratung vor Ort
                </p>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)]">
                  Persönlich, ehrlich & lösungsorientiert
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Wir kommen zu Ihnen nach Hause in Salzburg & Umgebung, analysieren
                  die Gegebenheiten und beraten Sie zu Formaten, Fugenbild, Farben
                  und Pflege – damit das Ergebnis wirklich zu Ihrem Alltag passt.
                </p>
              </div>

              <div className="bg-[rgba(255,255,255,0.92)] backdrop-blur-md rounded-[1.6rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-5 space-y-2 hover-gold">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Verlässliche Abläufe
                </p>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-[var(--color-ink)]">
                  Fixe Ansprechpartner & klare Termine
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Kurze Wege, direkte Kommunikation mit dem Inhaber und
                  transparente Zeitpläne – so behalten Sie Ihr Projekt und Ihre
                  Baustelle jederzeit im Blick.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARBEITSWEISE – 3-STUFEN PROZESS */}
        <section className="animate-fadeInScale">
          <div className="max-w-5xl mx-auto bg-[rgba(255,255,255,0.88)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe-sm p-6 md:p-8 space-y-6">
            <h2
              className={`${cormorant.className} text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-ink)] text-center`}
            >
              Unsere Arbeitsweise – Schritt für Schritt
            </h2>

            <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:gap-5 stagger">
              <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-2 hover-gold rounded-[1.4rem] p-2 md:p-3">
                <div className="h-8 w-8 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center text-[13px] font-semibold">
                  1
                </div>
                <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">
                  Beratung & Planung
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Gemeinsame Besprechung vor Ort in Salzburg, Klärung von Budget,
                  Zeitplan und Designwunsch. Auf Wunsch inkl. Vorschlägen zu
                  Fliesenformat, Verlegebild und Fugenfarbe.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-2 hover-gold rounded-[1.4rem] p-2 md:p-3">
                <div className="h-8 w-8 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center text-[13px] font-semibold">
                  2
                </div>
                <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">
                  Vorbereitung & Verlegung
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Fachgerechte Untergrundvorbereitung, Abdichtung, Zuschnitt und
                  Verlegung – sauber, staubarm und strukturiert, damit der Ablauf
                  für Sie so angenehm wie möglich bleibt.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-2 hover-gold rounded-[1.4rem] p-2 md:p-3">
                <div className="h-8 w-8 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center text-[13px] font-semibold">
                  3
                </div>
                <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">
                  Detailarbeit & Übergabe
                </h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
                  Perfekte Fugen, saubere Silikonabschlüsse, gründliche Reinigung
                  der Flächen und gemeinsame Abnahme – damit Ihr neues Bad, Ihre
                  Küche oder Terrasse sofort nutzbar ist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST / ZAHLEN – STATISTIK KARTICE */}
        <section className="animate-fadeInScale">
          <div className="max-w-5xl mx-auto grid gap-4 md:grid-cols-4 stagger">
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[1.4rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-4 text-center space-y-1 hover-gold">
              <p className="text-[22px] font-semibold text-[var(--color-ink)]">
                100+
              </p>
              <p className="text-[12px] text-[var(--color-muted)] leading-snug">
                realisierte Projekte
                <br />
                in Salzburg & Umgebung
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[1.4rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-4 text-center space-y-1 hover-gold">
              <p className="text-[22px] font-semibold text-[var(--color-ink)]">
                5★
              </p>
              <p className="text-[12px] text-[var(--color-muted)] leading-snug">
                Rückmeldungen zu
                <br />
                Beratung & Ausführung
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[1.4rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-4 text-center space-y-1 hover-gold">
              <p className="text-[22px] font-semibold text-[var(--color-ink)]">
                Fokus
              </p>
              <p className="text-[12px] text-[var(--color-muted)] leading-snug">
                auf Bäder, Küchen,
                <br />
                Wohnräume & Terrassen
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)] rounded-[1.4rem] border border-[rgba(0,0,0,0.04)] shadow-luxe-sm p-4 text-center space-y-1 hover-gold">
              <p className="text-[22px] font-semibold text-[var(--color-ink)]">
                Persönlich
              </p>
              <p className="text-[12px] text-[var(--color-muted)] leading-snug">
                direkter Kontakt
                <br />
                zum Inhaber
              </p>
            </div>
          </div>
        </section>

        {/* CTA – KONTAKT */}
        <section className="animate-fadeInScale animate-parallax">
          <div className="max-w-4xl mx-auto text-center bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-luxe p-6 md:p-8 space-y-4">
            <h2
              className={`${cormorant.className} text-[1.8rem] md:text-[2rem] font-semibold text-[var(--color-ink)]`}
            >
              Lernen Sie AD FLIESEN persönlich kennen
            </h2>
            <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
              Sie planen eine Badsanierung, neue Fliesen im Wohnbereich oder ein
              Projekt in Salzburg & Umgebung? Schreiben Sie uns oder rufen Sie
              direkt an – wir melden uns zuverlässig und besprechen Ihr Vorhaben
              unverbindlich.
            </p>
            <a
              href="/kontakt"
              className="btn-gold-line inline-block px-9 py-3.5 rounded-full bg-[var(--color-gold)] text-black text-[13px] font-medium shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:bg-[#c2a05e] transition-all"
            >
              Kontakt & kostenlose Ersteinschätzung
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}