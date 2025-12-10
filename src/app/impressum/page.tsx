import { MainLayout } from "@/components/layout/MainLayout";

export default function ImpressumPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-6">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(82,73,63,0.9)]">
            AD FLIESEN · IMPRESSUM
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-ink)]">
            Impressum
          </h1>
        </header>

        <section className="rounded-[1.5rem] bg-[rgba(255,255,255,0.86)] backdrop-blur-md border border-[rgba(0,0,0,0.05)] shadow-luxe-sm p-4 md:p-5 space-y-3 text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
          <p>
            <strong>AD FLIESEN</strong>
            <br />
            Fliesenlegermeister in Salzburg
          </p>
          <p>
            Hüttenbergstraße 6
            <br />
            5020 Salzburg
            <br />
            Österreich
          </p>
          <p>
            Telefon: 0664 464 33 36
            <br />
            E-Mail: info@ad-fliesen.at
          </p>
          <p>
            Verantwortlich für den Inhalt dieser Website: AD FLIESEN, Inhaber
            (Fliesenleger in Salzburg).
          </p>
          <p className="text-[11px]">
            Hinweis: Diese Seite ersetzt keine rechtliche Beratung. Bitte
            lassen Sie Ihr Impressum im Zweifel von einer Rechtsberatung
            überprüfen.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}