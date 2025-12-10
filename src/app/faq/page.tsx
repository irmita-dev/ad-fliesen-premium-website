import { MainLayout } from "@/components/layout/MainLayout";
import { cormorant } from "@/components/layout/fonts";

type FaqItem = {
  question: string;
  answer: string;
};

const faqGroups: { title: string; items: FaqItem[] }[] = [
  {
    title: "Allgemeine Fragen zu AD FLIESEN",
    items: [
      {
        question:
          "Wer ist AD FLIESEN und seit wann arbeiten Sie als Fliesenleger in Salzburg?",
        answer:
          "AD FLIESEN ist ein regionales Fliesenleger-Unternehmen mit Sitz in Salzburg. Der Inhaber verfügt über langjährige Erfahrung auf Baustellen in ganz Salzburg – von klassischen Badezimmern über Komplettsanierungen bis hin zu modernen Wohn- und Terrassenprojekten. Heute konzentrieren wir uns darauf, für Privat- und Gewerbekunden hochwertige, saubere und langlebige Fliesenarbeiten umzusetzen.",
      },
      {
        question: "In welchen Regionen rund um Salzburg sind Sie tätig?",
        answer:
          "Wir arbeiten in der Stadt Salzburg, in Salzburg Umgebung und – je nach Projekt – auch in Teilen des Umlands. Besonders häufig sind wir für Kundinnen und Kunden in Wohnungen, Einfamilienhäusern und kleineren Gewerbeobjekten tätig. Am liebsten sehen wir Ihr Projekt direkt vor Ort, um eine passende Lösung vorzuschlagen.",
      },
      {
        question: "Wie kann ich Sie am schnellsten kontaktieren?",
        answer:
          "Am schnellsten erreichen Sie uns telefonisch oder per WhatsApp unter 0664 464 3336. Sie können uns auch über das Kontaktformular schreiben, aber für eine erste Einschätzung ist ein kurzer Anruf oder eine WhatsApp-Nachricht oft am effizientesten – gerne mit Fotos der bestehenden Situation.",
      },
    ],
  },
  {
    title: "Leistungen & Projektablauf",
    items: [
      {
        question: "Welche Fliesenarbeiten bieten Sie in Salzburg an?",
        answer:
          "Unser Leistungsspektrum umfasst Badsanierungen, Fliesenverlegung in Bad, WC, Küche, Wohnräumen, Fluren und Stiegenhäusern, Terrassen- und Balkonfliesen, Großformatfliesen, Mosaikflächen, Fliesenspiegel in der Küche, Verlegung auf Fußbodenheizung, Reparaturen, Fugensanierungen und vieles mehr. Wir beraten Sie gerne, welche Lösung für Ihr Projekt sinnvoll ist.",
      },
      {
        question: "Wie läuft ein typisches Fliesen-Projekt mit AD FLIESEN ab?",
        answer:
          "Zuerst nehmen Sie Kontakt mit uns auf und schildern Ihr Projekt – gerne mit Fotos oder Plänen. Anschließend vereinbaren wir bei Bedarf einen Termin vor Ort, sehen uns die Gegebenheiten an und besprechen Ihre Wünsche. Danach erhalten Sie ein transparentes Angebot. Nach Ihrer Freigabe planen wir die Ausführung und setzen diese sauber, strukturiert und termintreu um.",
      },
      {
        question:
          "Übernehmen Sie auch nur Teilbereiche, z. B. nur Dusche oder nur Bodenfliesen?",
        answer:
          "Ja. Wir übernehmen sowohl komplette Badsanierungen als auch Teilbereiche wie nur die Dusche, nur den Boden im Wohnbereich oder einzelne Akzentwände. Wichtig ist uns, dass das Ergebnis optisch und technisch stimmig ist – egal ob kleines oder großes Projekt.",
      },
      {
        question:
          "Bieten Sie auch Großformatfliesen und fugenarme Lösungen an?",
        answer:
          "Ja, wir verlegen regelmäßig großformatige Fliesen und Platten. Gerade in modernen Bädern, Duschen und Wohnbereichen erzeugen Großformate eine ruhige, elegante Wirkung. Wir achten dabei besonders auf Untergrundvorbereitung, Zuschnitt, Trage- und Verlegehilfen sowie ein ruhiges Fugenbild.",
      },
    ],
  },
  {
    title: "Kosten, Angebot & Dauer",
    items: [
      {
        question:
          "Was kostet eine Badsanierung oder neue Fliesenarbeiten in Salzburg?",
        answer:
          "Die Kosten hängen stark von Größe, Zustand, Materialwahl und gewünschter Ausführung ab. Aus diesem Grund arbeiten wir nicht mit pauschalen Quadratmeterpreisen. Nach einer kurzen Beschreibung mit Fotos können wir eine grobe Einschätzung abgeben. Ein konkretes, schriftliches Angebot erstellen wir nach einer Besichtigung vor Ort.",
      },
      {
        question: "Wie lange dauert die Ausführung der Fliesenarbeiten?",
        answer:
          "Die Dauer hängt vom Umfang des Projekts ab. Ein kleineres Bad kann – je nach Vorarbeiten und Trocknungszeiten – in wenigen Tagen fertiggestellt werden, bei größeren Um- oder Neubauten dauert es entsprechend länger. Wir geben Ihnen immer einen realistischen Zeitplan und informieren, wenn sich aufgrund von Trocknungszeiten oder Zusatzarbeiten etwas ändert.",
      },
      {
        question: "Erstellen Sie kostenlose Angebote?",
        answer:
          "Eine erste grobe Einschätzung per Telefon, WhatsApp oder E-Mail ist für Sie kostenlos. Für detaillierte Angebote nach einer Vor-Ort-Besichtigung – insbesondere bei komplexen Sanierungen – kann je nach Aufwand eine Angebots- bzw. Beratungs­pauschale anfallen, die bei Auftragserteilung meist angerechnet wird. Dies besprechen wir immer vorab transparent mit Ihnen.",
      },
    ],
  },
  {
    title: "Technik, Qualität & Materialien",
    items: [
      {
        question:
          "Arbeiten Sie nach den geltenden Normen für Nassräume und Abdichtung?",
        answer:
          "Ja. Wir verarbeiten Abdichtungen, Dichtbänder und Dichtecken nach den einschlägigen ÖNORMEN und Herstellervorgaben. Gerade im Duschbereich und rund um Badewannen ist eine fachgerechte Abdichtung entscheidend, um Schäden durch Feuchtigkeit und Schimmel langfristig zu verhindern.",
      },
      {
        question: "Mit welchen Materialien und Marken arbeiten Sie?",
        answer:
          "Wir arbeiten überwiegend mit in Österreich gängigen Marken für Fliesen, Kleber, Fugenmörtel, Abdichtungen und Silikone. Wichtig ist uns, dass Materialien zueinander passen (Systemaufbau) und sich im Alltag bewährt haben. Auf Wunsch berücksichtigen wir gerne Ihre bevorzugten Hersteller oder beraten Sie bei der Auswahl.",
      },
      {
        question:
          "Kann ich Fliesen selbst besorgen und Sie übernehmen nur die Verlegung?",
        answer:
          "Grundsätzlich ist das möglich – viele Kundinnen und Kunden wählen ihre Fliesen selbst im Schauraum aus. Wichtig ist, dass wir vorab Informationen zu Format, Stärke, Oberfläche und Kantenbearbeitung erhalten, um zu prüfen, ob sie für den geplanten Einsatzbereich geeignet sind. Gerne beraten wir Sie dabei.",
      },
    ],
  },
  {
    title: "Kleine Arbeiten, Reparaturen & Service",
    items: [
      {
        question:
          "Übernehmen Sie auch kleine Reparaturen oder nur große Projekte?",
        answer:
          "Wir übernehmen auch kleinere Arbeiten wie den Austausch einzelner beschädigter Fliesen, das Erneuern von Silikonfugen, Ausbesserungen im Duschbereich oder im Fliesenspiegel der Küche. Gerade solche Details verbessern den Gesamteindruck Ihres Bades oder Ihrer Küche deutlich.",
      },
      {
        question: "Erneuern Sie auch nur Silikonfugen in Bad und Dusche?",
        answer:
          "Ja. Silikonfugen sind Wartungsfugen und müssen regelmäßig erneuert werden, insbesondere in stark genutzten Duschen. Wir entfernen altes Silikon fachgerecht, reinigen die Fugenflanken und bringen neue Silikonfugen sauber und gleichmäßig ein.",
      },
      {
        question: "Können Sie beschädigte Fliesen einzeln tauschen?",
        answer:
          "Sofern Ersatzfliesen vorhanden sind oder verfügbar gemacht werden können, tauschen wir einzelne beschädigte Fliesen in Bad, Küche oder Wohnbereich aus. Ob dies optisch unauffällig möglich ist, hängt vom Alter, Farbton und Format der Fliesen ab – wir beraten Sie dazu ehrlich.",
      },
    ],
  },
  {
    title: "Kontakt & Kommunikation",
    items: [
      {
        question: "Kann ich Ihnen Fotos oder Videos per WhatsApp schicken?",
        answer:
          "Ja, sehr gerne. Schicken Sie uns Fotos oder ein kurzes Video Ihres Badezimmers, der Küche, Terrasse oder der betreffenden Fläche per WhatsApp an 0664 464 3336. So können wir uns schneller ein Bild machen und Sie besser beraten.",
      },
      {
        question: "Wann ist der beste Zeitpunkt, um Sie zu kontaktieren?",
        answer:
          "Sie können uns grundsätzlich jederzeit eine Nachricht schreiben. Telefonisch sind wir in der Regel werktags erreichbar. Sollten wir gerade auf einer Baustelle sein, rufen wir Sie so bald wie möglich zurück oder melden uns per WhatsApp.",
      },
      {
        question:
          "Arbeiten Sie auch mit anderen Gewerken zusammen (Installateur, Elektriker, etc.)?",
        answer:
          "Ja. Bei Bedarf stimmen wir uns mit anderen Gewerken ab – etwa Installateur, Elektriker, Trockenbau oder Maler. Gerade bei Badsanierungen ist eine gute Koordination wichtig, damit alle Schritte aufeinander abgestimmt sind und der Ablauf für Sie möglichst reibungslos verläuft.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="pb-24 pt-10 md:pt-16 space-y-14 md:space-y-18">
        {/* Header – glassmorphic intro */}
        <section className="animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-xl rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-[0_20px_55px_rgba(0,0,0,0.22)] p-6 md:p-8 space-y-4 text-center">
              <h1
                className={`${cormorant.className} text-[2rem] md:text-[2.6rem] font-semibold text-[var(--color-ink)]`}
              >
                FAQ – Häufige Fragen zu Fliesenarbeiten in Salzburg
              </h1>
              <div className="w-24 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)]" />
              <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed max-w-3xl mx-auto">
                Hier beantworten wir häufig gestellte Fragen rund um Fliesenarbeiten,
                Badsanierung, Kosten, Ablauf und Zusammenarbeit mit AD FLIESEN in
                Salzburg & Umgebung. Wenn Ihre Frage nicht dabei ist, kontaktieren
                Sie uns gerne direkt – telefonisch, per WhatsApp oder über das
                Kontaktformular.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="bg-[rgba(255,255,255,0.88)] backdrop-blur-xl rounded-[1.8rem] border border-[rgba(0,0,0,0.04)] shadow-[0_18px_40px_rgba(0,0,0,0.18)] p-5 md:p-7 space-y-4"
              >
                <div className="space-y-2">
                  <h2
                    className={`${cormorant.className} text-[1.4rem] md:text-[1.7rem] font-semibold text-[var(--color-ink)]`}
                  >
                    {group.title}
                  </h2>
                  <div className="w-16 h-[2px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a)]" />
                </div>

                <div className="space-y-3">
                  {group.items.map((item, index) => (
                    <details
                      key={index}
                      className="group rounded-[1.5rem] bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.04)] px-4 py-3.5 md:px-5 md:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-300 open:shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                        <span className="text-[14px] md:text-[15px] font-medium text-[var(--color-ink)]">
                          {item.question}
                        </span>
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-[var(--color-gold)] text-xs bg-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.13)] group-open:rotate-180 transition-transform duration-300"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}