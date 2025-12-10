"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomepageContent } from "@/core/domain/homepage";

interface HeroSectionProps {
  content: HomepageContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const strongLayer = scrollY * -0.15; // background image parallax
  const softLayer = scrollY * -0.08; // gradient overlay parallax

  return (
    <section className="relative isolate min-h-[80vh] md:min-h-[88vh] flex flex-col justify-center overflow-hidden">
      {/* Hero image – parallax strong */}
      <div
        className="absolute inset-0 -z-20 will-change-transform"
        style={{ transform: `translateY(${strongLayer}px)` }}
      >
        <Image
          src="/images/hero-main.jpg"
          alt="Hochwertige Fliesenarbeiten und Badsanierungen in Salzburg"
          fill
          priority
          className="object-cover object-center brightness-[0.9] saturate-[1.05]"
        />
      </div>

      {/* Softer gradient – parallax soft */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(241,236,227,0.96)] via-[rgba(241,236,227,0.68)] to-[rgba(241,236,227,0.16)] will-change-transform"
        style={{ transform: `translateY(${softLayer}px)` }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.14),transparent_60%)] opacity-55" />

      {/* Golden glow behind right card */}
      <div className="pointer-events-none absolute -right-20 md:right-[-60px] top-[30%] h-72 w-72 md:h-80 md:w-80 rounded-full bg-[radial-gradient(circle,rgba(215,186,128,0.45),transparent_65%)] blur-3xl opacity-70" />

      {/* Soft tile-like squares (very subtle) */}
      <div className="pointer-events-none absolute -left-10 top-24 h-32 w-32 border border-[rgba(255,255,255,0.35)]/80 rounded-[1.2rem] opacity-[0.18]" />
      <div className="pointer-events-none absolute left-24 top-44 h-24 w-24 border border-[rgba(255,255,255,0.25)]/80 rounded-[0.9rem] opacity-[0.16]" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
          {/* LEFT */}
          <div className="flex-1 max-w-xl space-y-6 md:space-y-7">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[rgba(82,73,63,0.78)]">
              AD FLIESEN · FLIESENLEGER · SALZBURG
            </p>

            <h1 className="text-[2.1rem] leading-[1.1] md:text-[3rem] md:leading-[1.05] font-semibold text-[#2E2924]">
              Präzise Fliesenarbeiten &{" "}
              <span className="block mt-1">
                moderne Badgestaltung in Salzburg
              </span>
            </h1>

            <p className="text-[14px] md:text-[15px] text-[rgba(78,70,62,0.9)] leading-relaxed">
              Hochwertige Fliesenverlegung, komplette Badsanierungen und
              Detailarbeiten für Bäder, Küchen, Wohnräume und Terrassen – sauber
              ausgeführt, klar geplant und direkt bei Ihnen vor Ort in Salzburg
              & Umgebung.
            </p>

            <p className="text-[13px] md:text-[14px] text-[rgba(78,70,62,0.95)] leading-relaxed">
              Spezialisiert auf hochwertige Fliesenarbeiten in Stadt Salzburg &
              Umgebung – vom ersten Entwurf bis zur letzten Fuge.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://wa.me/436644643336"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-medium bg-[#D7BA80] text-[#1E1B18] shadow-[0_18px_40px_rgba(0,0,0,0.24)] hover:bg-[#caa96b] hover:shadow-[0_22px_55px_rgba(0,0,0,0.3)] hover:-translate-y-[1px] transition-all transform-gpu"
              >
                WhatsApp Beratung · 0664&nbsp;464&nbsp;3336
              </a>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[13px] font-medium bg-[rgba(255,255,255,0.9)] text-[#2E2924] border border-[rgba(0,0,0,0.08)] shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:bg-white hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] hover:-translate-y-[1px] transition-all transform-gpu"
              >
                Angebot anfragen
              </Link>
            </div>

            <p className="text-[11px] text-[rgba(82,73,63,0.9)]">
              Schnelle Rückmeldung, Besichtigung bei Ihnen vor Ort & transparente
              Angebote für Fliesenarbeiten in Salzburg.
            </p>
          </div>

          {/* RIGHT: floating reference card */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="relative w-[260px] h-[320px] rounded-[2rem] bg-[rgba(18,18,18,0.92)] text-[#F8F5F0] shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden animate-floating-slow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_60%)]" />
              <div className="absolute inset-0 border border-[rgba(255,255,255,0.16)] rounded-[2rem]" />

              <div className="absolute top-6 left-6 text-[11px] tracking-[0.24em] uppercase text-[rgba(255,255,255,0.72)]">
                Referenzprojekt
              </div>

              <div className="absolute left-6 right-6 bottom-7 space-y-2.5">
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.9)]">
                  Modernes Badezimmer · Salzburg
                </p>
                <p className="text-[12px] text-[rgba(255,255,255,0.80)] leading-relaxed">
                  Großformatfliesen, bodenebene Dusche, fugenarme Optik und
                  warme Lichtakzente – umgesetzt von AD FLIESEN mit Fokus auf
                  Präzision und langlebige Qualität.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST ROW – small luxury badges under hero */}
        <div className="mt-8 flex flex-wrap gap-2.5 md:gap-3 text-[11px] md:text-[12px] text-[var(--color-ink)]">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-[rgba(255,255,255,0.9)] border border-[rgba(0,0,0,0.04)] shadow-[0_10px_26px_rgba(0,0,0,0.16)]">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-gold)] mr-2" />
            <span>Badsanierungen & Fliesenarbeiten in Stadt Salzburg & Umgebung</span>
          </div>
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-[rgba(255,255,255,0.88)] border border-[rgba(0,0,0,0.04)] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-gold-soft)] mr-2" />
            <span>Saubere Baustellen, klare Absprachen & persönliche Beratung</span>
          </div>
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-[rgba(255,255,255,0.88)] border border-[rgba(0,0,0,0.04)] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-gold-soft)] mr-2" />
            <span>WhatsApp-Beratung mit Fotos für schnelle Ersteinschätzung</span>
          </div>
        </div>
      </div>
    </section>
  );
}