export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}


let cartItems: CartItem[] = [];


export function getCart() {
  return cartItems;
}


export function addToCart(item: CartItem) {

  const existing = cartItems.find(
    (product) => product.id === item.id
  );


  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push(item);
  }


  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function removeFromCart(id: string) {

  cartItems = cartItems.filter(
    (item) => item.id !== id
  );


  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function clearCart() {

  cartItems = [];


  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

}



export function getCartTotal() {

  return cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

}



export function getCartCount() {

  return cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}