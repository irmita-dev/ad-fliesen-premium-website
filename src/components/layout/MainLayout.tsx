"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  // Parallax marble (moves slightly on scroll – mobile safe)
  const marbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marbleRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.08; // gentle parallax
        if (el) {
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="min-h-screen no-copy-wrapper"
      onContextMenu={(e) => e.preventDefault()} // block right-click
    >
      {/* Global gold–taupe background with parallax marble */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Warm base */}
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        {/* Gold-taupe soft gradient across page */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9dfd0] via-[#f4ece1] to-[#faf6ee]" />
        {/* Parallax marble layer */}
        <div
          ref={marbleRef}
          className="absolute inset-0 opacity-[0.22] will-change-transform"
          style={{
            backgroundImage: "url('/images/marble-veins.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <Navbar />

      {/* space for fixed navbar/footer */}
      <main className="pt-[76px] pb-[64px]">{children}</main>

      <Footer />

      {/* Cookie banner at the very bottom */}
      <CookieBanner />
    </div>
  );
}