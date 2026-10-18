// Consenso ai cookie di marketing (pixel di Meta).
// Il pixel parte solo se il visitatore ha cliccato "Accetta" nel banner.
export type CookieConsent = "accettato" | "rifiutato";

const CONSENT_KEY = "magico-camillo-consenso-cookie";
export const CONSENT_EVENT = "cookie-consent:changed";

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accettato" || value === "rifiutato" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: CookieConsent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Senza storage la scelta vale solo per questa pagina.
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

// Usato dal link "Preferenze cookie" nel footer per far ricomparire il banner.
export function resetConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignoriamo
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
