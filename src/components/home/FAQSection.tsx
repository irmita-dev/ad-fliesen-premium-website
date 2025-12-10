"use client";

import { useState } from "react";
import Link from "next/link";
import { cormorant } from "@/components/layout/fonts";

const faqItems = [
  {
    q: "Wie schnell können Sie einen Termin vor Ort in Salzburg anbieten?",
    a: "In den meisten Fällen innerhalb von 24–48 Stunden. Wir richten uns flexibel nach Ihrem Zeitplan.",
  },
  {
    q: "Arbeiten Sie auch an kleinen Projekten oder Reparaturen?",
    a: "Ja – auch kleinere Aufträge wie Silikonfugen, Reparaturen oder einzelne Fliesen führen wir zuverlässig aus.",
  },
  {
    q: "Erstellen Sie fixe Preisangebote?",
    a: "Ja. Nach einer kurzen Besichtigung erhalten Sie ein strukturiertes Angebot mit klaren Preisen.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-12 md:py-14">
      {/* Soft golden-white gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br 
        from-[rgba(255,255,255,0.9)] 
        via-[rgba(250,245,235,0.86)] 
        to-[rgba(245,233,214,0.84)]"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Deluxe heading */}
        <div className="text-center space-y-4">
          <h2
            className={`${cormorant.className} text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-ink)]`}
          >
            <strong>Häufige Fragen (FAQ)</strong>
          </h2>
          <div className="w-20 h-[3px] mx-auto rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_16px_rgba(212,181,109,0.55)]" />
          <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
            Kurze Antworten auf die wichtigsten Fragen rund um Termine, Projekte
            und Angebote mit AD FLIESEN in Salzburg & Umgebung.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`rounded-[1.6rem] bg-[rgba(255,255,255,0.78)] backdrop-blur-md border border-[rgba(0,0,0,0.04)] 
                shadow-[0_14px_36px_rgba(0,0,0,0.16)] overflow-hidden transition-all duration-300
                ${isOpen ? "shadow-[0_20px_55px_rgba(0,0,0,0.24)] -translate-y-[2px]" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
                >
                  <span className="text-[15px] md:text-[16px] font-medium text-[var(--color-ink)]">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] text-[var(--color-ink)] text-sm bg-white/70 shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-[rgba(0,0,0,0.04)]">
                    <p className="mt-3 text-[14px] text-[var(--color-muted)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to full FAQ page */}
        <div className="text-center pt-2">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center text-[14px] font-medium text-[var(--color-ink)] relative group"
          >
            <span>Mehr Fragen & Antworten ansehen</span>
            <span className="ml-1">→</span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[linear-gradient(90deg,#d4b56d,#e6c98a)] rounded-full -translate-x-1/2 transition-all duration-300 group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}