"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-[rgba(0,0,0,0.06)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-[11px] text-[var(--color-muted)]">
        <span>© 2025 AD FLIESEN · Alle Rechte vorbehalten.</span>
        <div className="flex gap-4">
          <Link href="/faq" className="hover:text-[var(--color-ink)] transition-colors">
            FAQ
          </Link>
          <Link
            href="/impressum"
            className="hover:text-[var(--color-ink)] transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-[var(--color-ink)] transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}