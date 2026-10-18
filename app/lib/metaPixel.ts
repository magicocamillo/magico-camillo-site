// Pixel di Meta (Gestione eventi > dataset "Magico Camillo sito").
// Misura chi arriva dai reel/inserzioni e cosa fa sul sito:
// PageView, ViewContent (scheda prodotto), AddToCart, InitiateCheckout, Purchase.
export const META_PIXEL_ID = "40133169856267135";

type PixelParams = Record<string, unknown>;

type Fbq = (command: string, event: string, params?: PixelParams) => void;

const PENDING_PURCHASE_KEY = "magico-camillo-pixel-acquisto";
const TRACKED_PURCHASES_KEY = "magico-camillo-pixel-acquisti-tracciati";

// Chiama fbq solo se lo script del pixel e' presente: se un utente blocca il
// tracciamento (adblock, Safari ecc.) il sito deve continuare a funzionare.
export function trackPixel(event: string, params?: PixelParams) {
  if (typeof window === "undefined") {
    return;
  }

  const fbq = (window as unknown as { fbq?: Fbq }).fbq;

  if (typeof fbq !== "function") {
    return;
  }

  try {
    fbq("track", event, params);
  } catch {
    // Mai bloccare il sito per un errore di tracciamento.
  }
}

type PixelProduct = { id: string; price: number; quantity: number };

export function productsToPixel(prodotti: PixelProduct[], totale: number) {
  return {
    content_ids: prodotti.map((p) => p.id),
    content_type: "product",
    num_items: prodotti.reduce((sum, p) => sum + p.quantity, 0),
    value: Number(totale.toFixed(2)),
    currency: "EUR",
  };
}

// Prima di mandare il cliente su Stripe salviamo i dati dell'acquisto, cosi'
// al ritorno su /ordine-confermato possiamo segnalare a Meta il valore.
export function savePendingPurchase(prodotti: PixelProduct[], totale: number) {
  try {
    window.sessionStorage.setItem(
      PENDING_PURCHASE_KEY,
      JSON.stringify(productsToPixel(prodotti, totale))
    );
  } catch {
    // ignoriamo: senza storage l'acquisto viene comunque tracciato senza valore
  }
}

export function readPendingPurchase(): PixelParams | null {
  try {
    const raw = window.sessionStorage.getItem(PENDING_PURCHASE_KEY);
    return raw ? (JSON.parse(raw) as PixelParams) : null;
  } catch {
    return null;
  }
}

// Evita di contare due volte lo stesso ordine se la pagina viene ricaricata.
export function trackPurchaseOnce(orderKey: string, params: PixelParams) {
  try {
    const raw = window.localStorage.getItem(TRACKED_PURCHASES_KEY);
    const tracked: string[] = raw ? JSON.parse(raw) : [];

    if (tracked.includes(orderKey)) {
      return;
    }

    trackPixel("Purchase", params);

    window.localStorage.setItem(
      TRACKED_PURCHASES_KEY,
      JSON.stringify([...tracked, orderKey].slice(-20))
    );
    window.sessionStorage.removeItem(PENDING_PURCHASE_KEY);
  } catch {
    trackPixel("Purchase", params);
  }
}
