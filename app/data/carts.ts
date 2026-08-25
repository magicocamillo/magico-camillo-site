export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Il carrello viene salvato nel localStorage del browser, cosi' sopravvive
// al ricaricamento della pagina o alla chiusura/riapertura del sito
// (prima era tenuto solo in una variabile in memoria e si svuotava ad ogni
// refresh). Funziona solo lato client: su window undefined (es. rendering
// server) restituiamo semplicemente un carrello vuoto.
const STORAGE_KEY = "magico-camillo-cart";

function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Es. storage pieno o non disponibile (modalita' privata): ignoriamo,
    // il carrello resta comunque valido per la pagina corrente.
  }
}


export function getCart() {
  return readCart();
}


export function addToCart(item: CartItem) {

  const cartItems = readCart();

  const existing = cartItems.find(
    (product) => product.id === item.id
  );


  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push(item);
  }

  writeCart(cartItems);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function removeFromCart(id: string) {

  const cartItems = readCart().filter(
    (item) => item.id !== id
  );

  writeCart(cartItems);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function clearCart() {

  writeCart([]);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function getCartTotal() {

  return readCart().reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

}



export function getCartCount() {

  return readCart().reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}
