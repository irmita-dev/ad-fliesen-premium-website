"use client";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/436644643336"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        w-14 h-14 flex items-center justify-center
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        transition-all
      "
      aria-label="WhatsApp Chat starten"
    >
      <span className="sr-only">WhatsApp Chat starten</span>
      <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
    </a>
  );
}