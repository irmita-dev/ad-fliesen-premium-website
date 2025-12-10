import { MainLayout } from "@/components/layout/MainLayout";

export default function DatenschutzPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-6">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(82,73,63,0.9)]">
            AD FLIESEN · DATENSCHUTZ
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Datenschutzerklärung
          </h1>
        </header>

        <section className="rounded-[1.5rem] bg-[rgba(255,255,255,0.86)] backdrop-blur-md border border-[rgba(0,0,0,0.05)] shadow-luxe-sm p-4 md:p-5 space-y-3 text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
            Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf
            Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG).
          </p>

          <p>
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit
            uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <p>
            Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung,
            Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
            Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
            gegen das Datenschutzrecht verstößt, können Sie sich bei uns oder
            der Datenschutzbehörde beschweren.
          </p>

          <p className="text-[11px]">
            Hinweis: Diese Datenschutzerklärung ist eine vereinfachte Vorlage
            und ersetzt keine individuelle rechtliche Beratung.
          </p>

          <p>
            Unsere Website verwendet Cookies, die für den technischen Betrieb der Seite
            erforderlich sind (z. B. zur sicheren Übermittlung von Formularen und zur
            stabilen Darstellung der Inhalte). Diese Cookies enthalten keine
            personenbezogenen Profile und dienen ausschließlich der funktionalen Nutzung
            der Website.
          </p>

          <p>
            Der Einsatz dieser technisch notwendigen Cookies erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren,
            stabilen und funktionierenden Webauftritt).
          </p>

          <p>
            Tracking- oder Marketing-Cookies (z. B. Google Analytics, Remarketing,
            Social-Media-Pixel) werden derzeit **nicht** eingesetzt. Sollte sich dies
            ändern, informieren wir Sie vorab und holen Ihre Einwilligung über den
            Cookie-Hinweis ein.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}