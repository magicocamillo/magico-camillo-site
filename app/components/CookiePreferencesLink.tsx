"use client";

import { resetConsent } from "../lib/cookieConsent";

export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={resetConsent}
      className="transition hover:text-[#d4af37]"
    >
      Preferenze cookie
    </button>
  );
}
