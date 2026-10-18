"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  readConsent,
  saveConsent,
} from "../lib/cookieConsent";

// Banner del consenso cookie: compare finche' il visitatore non sceglie.
// "Rifiuta" ha lo stesso peso di "Accetta", come richiesto dal Garante privacy.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(readConsent() === null);

    update();
    window.addEventListener(CONSENT_EVENT, update);

    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consenso cookie"
      className="fixed inset-x-0 bottom-0 z-[10000] border-t border-[#d4af37]/40 bg-black/95 px-4 py-5 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.6)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-white/80">
          Usiamo cookie tecnici per far funzionare il sito e il carrello. Con il
          tuo consenso usiamo anche il pixel di Meta per misurare le visite
          dalle nostre pubblicità su Facebook e Instagram.{" "}
          <Link
            href="/cookie-policy"
            className="text-[#d4af37] underline underline-offset-2"
          >
            Cookie policy
          </Link>
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => saveConsent("rifiutato")}
            className="flex-1 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-white md:flex-none"
          >
            Rifiuta
          </button>

          <button
            type="button"
            onClick={() => saveConsent("accettato")}
            className="flex-1 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5c24d] md:flex-none"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
