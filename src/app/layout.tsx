import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { inter, cormorant } from "@/components/layout/fonts";


export const metadata: Metadata = {
  title: "AD FLIESEN | Fliesenleger Salzburg",
  description: "Hochwertige Fliesenarbeiten & Badsanierung in Salzburg und Umgebung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[var(--color-bg)]">
        {children}
      </body>
    </html>
  );
}