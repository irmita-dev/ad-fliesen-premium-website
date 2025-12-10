"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "adfliesen_cookie_consent_v1";

type ConsentValue = "necessary-only" | "all";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // No decision yet → show banner
      setVisible(true);
    }
  }, []);

  function setConsent(value: ConsentValue) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);

    // 👉 place for future analytics initialisation
    if (value === "all") {
      // e.g. initGoogleAnalytics();
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="rounded-3xl bg-[rgba(25,20,16,0.96)] text-[rgba(248,245,240,0.98)] border border-[rgba(255,255,255,0.18)] shadow-[0_-20px_50px_rgba(0,0,0,0.45)] px-5 py-4 sm:px-7 sm:py-5 flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
          <div className="flex-1 space-y-1.5">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[rgba(245,234,214,0.85)]">
              Cookies & Datenschutz
            </p>
            <p className="text-[13px] sm:text-[14px] leading-relaxed">
              Wir verwenden Cookies, die für den technischen Betrieb der Website
              notwendig sind und keinen Personenbezug herstellen. Details dazu
              finden Sie in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-[3px] decoration-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setConsent("necessary-only")}
              className="w-full sm:w-auto rounded-full border border-[rgba(248,245,240,0.9)] bg-transparent px-4 py-2.5 text-[12px] font-medium tracking-[0.14em] uppercase text-[rgba(248,245,240,0.96)] hover:bg-[rgba(248,245,240,0.06)] transition-colors"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => setConsent("all")}
              className="w-full sm:w-auto rounded-full bg-[var(--color-gold)] px-4 py-2.5 text-[12px] font-medium tracking-[0.14em] uppercase text-[#1E1B18] shadow-[0_14px_36px_rgba(0,0,0,0.45)] hover:bg-[#caa96b] transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}