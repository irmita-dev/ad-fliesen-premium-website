"use client";

import { useState, FormEvent } from "react";
import { cormorant } from "@/components/layout/fonts";
import { MainLayout } from "@/components/layout/MainLayout";

type PreferredContactMethod = "phone" | "whatsapp";

export default function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("0664 464 3336");
  const [message, setMessage] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<PreferredContactMethod>("phone");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !message || (!phone && !email)) {
      setError(
        "Bitte geben Sie Ihren Namen, eine Kontaktmöglichkeit und eine kurze Projektbeschreibung ein."
      );
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          preferredContactMethod,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSuccess(
        "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich bei Ihnen."
      );
      setName("");
      setEmail("");
      setPhone("0664 464 3336");
      setMessage("");
      setPreferredContactMethod("phone");
    } catch (err) {
      setError(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <MainLayout>
      {/* LUX BACKGROUND DECORATION */}
      <div className="relative space-y-16 md:space-y-20 pb-24 pt-10 md:pt-16">
        {/* soft gold / marble-like glows in background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 -right-8 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,181,109,0.22),transparent)] blur-3xl opacity-80 animate-floating-slow" />
          <div className="absolute bottom-0 -left-10 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(136,110,78,0.22),transparent)] blur-3xl opacity-80 animate-floating-slow" />
        </div>

        {/* HEADER / SEO INTRO */}
        <section className="animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl bg-[rgba(255,255,255,0.9)] backdrop-blur-md rounded-[1.8rem] border border-[rgba(0,0,0,0.05)] shadow-[0_24px_60px_rgba(0,0,0,0.18)] p-6 md:p-8 space-y-5">
              <div className="space-y-3">
                <h1
                  className={`${cormorant.className} text-[2rem] md:text-[2.6rem] font-semibold text-[var(--color-ink)]`}
                >
                  Kontakt – AD FLIESEN | Fliesenleger Salzburg
                </h1>

                {/* GOLD UNDERLINE */}
                <div className="w-24 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_18px_rgba(212,181,109,0.55)] animate-pulse" />

                <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed max-w-3xl">
                  Sie planen eine Badsanierung, neue Fliesen für Küche oder
                  Wohnbereich oder möchten Terrasse und Balkon in Salzburg neu
                  gestalten? Schreiben Sie uns oder rufen Sie direkt an – wir
                  melden uns schnell und unkompliziert bei Ihnen. Am liebsten
                  klären wir alles in einem kurzen, persönlichen Gespräch.
                </p>

                <p className="text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed max-w-3xl">
                  <strong>
                    AD FLIESEN – Fliesenleger in Salzburg & Umgebung
                  </strong>
                  <br />
                  Telefon:{" "}
                  <a
                    href="tel:06644643336"
                    className="underline decoration-[var(--color-gold)] decoration-2 underline-offset-2"
                  >
                    0664 464 3336
                  </a>
                  <br />
                  Adresse: Hüttenbergstraße 6, 5020 Salzburg{" "}
                  <span className="text-[11px]">(Termine nach Vereinbarung)</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] items-start">
              {/* LEFT – INFO CARD */}
              <div className="space-y-6">
                <div className="relative rounded-3xl bg-[rgba(255,255,255,0.88)] backdrop-blur-md border border-[rgba(0,0,0,0.06)] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.18)] overflow-hidden">
                  {/* vertical gold accent bar */}
                  <div className="absolute inset-y-5 left-0 w-[3px] rounded-full bg-[linear-gradient(180deg,#d4b56d,#e6c98a,#d4b56d)] opacity-90" />

                  <div className="space-y-4 pl-4">
                    <h2 className="text-lg md:text-xl font-semibold text-[var(--color-ink)]">
                      Direkter Kontakt – Telefon & WhatsApp
                    </h2>
                    <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
                      Am schnellsten erreichen Sie uns telefonisch oder per
                      WhatsApp. Schicken Sie uns gerne Fotos oder ein kurzes Video
                      Ihres Badezimmers, Ihrer Küche oder der Fläche, die gefliest
                      werden soll. So können wir Ihnen rasch eine erste
                      Einschätzung geben.
                    </p>

                    <div className="space-y-3 text-[13px] md:text-[14px] text-[var(--color-ink)]">
                      <p>
                        <strong>📞 Telefon:</strong>{" "}
                        <a
                          href="tel:06644643336"
                          className="underline decoration-[var(--color-gold)] decoration-2 underline-offset-2"
                        >
                          0664 464 3336
                        </a>
                      </p>
                      <p>
                        <strong>💬 WhatsApp:</strong>{" "}
                        <span className="text-[var(--color-muted)]">
                          Direkt über den WhatsApp-Button oder mit dieser Nummer.
                        </span>
                      </p>
                      <p className="text-[12px] text-[var(--color-muted)]">
                        Wir vereinbaren nach Möglichkeit einen Termin direkt bei
                        Ihnen vor Ort in Salzburg oder Umgebung, um alles in Ruhe
                        zu besprechen.
                      </p>
                    </div>
                  </div>

                  {/* subtle corner glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,181,109,0.3),transparent)] blur-2xl opacity-80" />
                </div>

                <div className="rounded-3xl bg-[rgba(255,255,255,0.82)] backdrop-blur-md border border-[rgba(0,0,0,0.04)] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-2">
                    Wie läuft eine Anfrage ab?
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-[13px] text-[var(--color-muted)] leading-relaxed">
                    <li>
                      Sie rufen an, schreiben per WhatsApp oder nutzen das
                      Formular.
                    </li>
                    <li>Sie schildern kurz Ihr Projekt – gerne mit Fotos.</li>
                    <li>
                      Sie erhalten eine ehrliche Ersteinschätzung und bei Bedarf
                      einen Termin vor Ort.
                    </li>
                    <li>
                      Danach erstellen wir ein klares, transparentes Angebot.
                    </li>
                  </ol>
                </div>
              </div>

              {/* RIGHT – FORM CARD */}
              <div className="relative rounded-[2rem] bg-[rgba(255,255,255,0.92)] backdrop-blur-md border border-[rgba(0,0,0,0.06)] p-6 md:p-8 shadow-[0_24px_65px_rgba(0,0,0,0.22)] overflow-hidden">
                {/* soft radial highlight behind header */}
                <div className="pointer-events-none absolute -top-16 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,181,109,0.35),transparent)] blur-3xl opacity-90" />

                <div className="relative space-y-4 mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-[var(--color-ink)]">
                    Kontaktformular
                  </h2>
                  <div className="w-16 h-[3px] rounded-full bg-[linear-gradient(90deg,#d4b56d,#e6c98a,#d4b56d)] shadow-[0_0_14px_rgba(212,181,109,0.5)]" />
                  <p className="text-[13px] md:text-[14px] text-[var(--color-muted)] leading-relaxed">
                    Hinterlassen Sie uns Ihre Kontaktdaten und eine kurze
                    Beschreibung Ihres Projekts. Wir melden uns so schnell wie
                    möglich telefonisch oder per WhatsApp bei Ihnen.
                  </p>
                </div>

                <form className="relative space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[12px] font-medium text-[var(--color-ink)] mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-[rgba(0,0,0,0.12)] bg-white/85 px-3 py-2 text-[13px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12px] font-medium text-[var(--color-ink)] mb-1">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-[rgba(0,0,0,0.12)] bg-white/85 px-3 py-2 text-[13px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                        required={!email}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[var(--color-ink)] mb-1">
                        E-Mail (optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-[rgba(0,0,0,0.12)] bg-white/85 px-3 py-2 text-[13px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[var(--color-ink)] mb-1">
                      Bevorzugte Kontaktart
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3 text-[13px]">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={preferredContactMethod === "phone"}
                          onChange={() => setPreferredContactMethod("phone")}
                          className="accent-[var(--color-gold)]"
                        />
                        <span>Telefon</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={preferredContactMethod === "whatsapp"}
                          onChange={() => setPreferredContactMethod("whatsapp")}
                          className="accent-[var(--color-gold)]"
                        />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[var(--color-ink)] mb-1">
                      Ihre Nachricht / Projektbeschreibung *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full rounded-xl border border-[rgba(0,0,0,0.12)] bg-white/85 px-3 py-2 text-[13px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] resize-none"
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-[12px] text-red-600">{error}</p>
                  )}
                  {success && (
                    <p className="text-[12px] text-green-700">{success}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--color-gold)] text-black text-[13px] font-medium shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:bg-[#c2a05e] hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)] hover:-translate-y-[1px] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Wird gesendet..." : "Nachricht senden"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}