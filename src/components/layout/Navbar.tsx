"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "border-b backdrop-blur-md transition-all duration-300",
          scrolled
            ? "bg-[rgba(245,240,232,0.97)] border-[rgba(0,0,0,0.06)] shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            : "bg-[rgba(245,240,232,0.94)] border-[rgba(0,0,0,0.04)] shadow-[0_10px_26px_rgba(0,0,0,0.14)]",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-4">
          {/* Brand + Logo (3D floating) */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full bg-[rgba(255,255,255,0.96)] border border-[rgba(215,186,128,0.5)] logo-gold-3d logo-gold-shine overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/logo-adfliesen.png"
                alt="AD FLIESEN Logo"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)]">
                AD FLIESEN
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-[rgba(82,73,63,0.85)]">
                Fliesenleger · Salzburg
              </span>
            </div>
          </Link>

          {/* Desktop nav with gold underline */}
          <nav className="hidden md:flex items-center gap-6 text-[13px]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative tracking-[0.14em] uppercase gold-underline ${
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[rgba(82,73,63,0.85)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Telefon CTA */}
            <a
              href="tel:06644643336"
              className="ml-2 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[12px] font-medium bg-[var(--color-gold)] text-[#1E1B18] shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:bg-[#caa96b] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all transform-gpu hover:-translate-y-[1px]"
            >
              📞 0664&nbsp;464&nbsp;3336
            </a>
          </nav>

          {/* Mobile right side – phone + menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:06644643336"
              className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-medium bg-[var(--color-gold)] text-[#1E1B18] shadow-[0_8px_18px_rgba(0,0,0,0.22)] hover:bg-[#caa96b] transition-all"
            >
              📞 0664&nbsp;464&nbsp;3336
            </a>

            {/* Mobile menu button – elegant */}
            <button
              type="button"
              className="inline-flex flex-col justify-center gap-[4px] px-2 py-1.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.96)] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü öffnen"
            >
              <span className="block w-4 h-[1.4px] bg-[var(--color-ink)] rounded-full" />
              <span className="block w-4 h-[1.4px] bg-[var(--color-ink)] rounded-full" />
              <span className="block w-4 h-[1.4px] bg-[var(--color-ink)] rounded-full" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <nav
          className={`md:hidden absolute inset-x-0 top-[76px] z-40 transform origin-top transition-all duration-200 ${
            open
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          } bg-[rgba(245,240,232,0.98)] border-b border-[rgba(0,0,0,0.04)]`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] py-1 ${
                    active
                      ? "text-[var(--color-ink)] font-medium"
                      : "text-[rgba(82,73,63,0.9)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}