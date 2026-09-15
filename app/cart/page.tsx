"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  clearCart,
  CartItem,
} from "../data/carts";

const SHIPPING_COST = 7;

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const finalTotal = subtotal + shipping;

  function formatPrice(value: number) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  function handleRemove(id: string) {
    removeFromCart(id);
    setItems(getCart());
  }

  function handleClear() {
    clearCart();
    setItems([]);
  }

  return (
    <main className="min-h-screen bg-black px-8 py-32 text-white lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="uppercase tracking-[0.4em] text-[#d4af37]">
          Boutique
        </p>

        <h1 className="mt-5 text-5xl font-semibold">
          Il tuo carrello
        </h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="text-xl text-white/70">
              Il carrello è vuoto.
            </p>

            <Link
              href="/boutique"
              className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-[#e5c24d]"
            >
              Vai alla Boutique
            </Link>
          </div>
        ) : (
          <div className="mt-12 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-white/60">
                      Quantità: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-2xl font-bold text-[#d4af37]">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="mt-3 text-sm text-red-400 transition hover:text-red-300"
                  >
                    Rimuovi
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-left text-white/60 transition hover:text-white"
                >
                  Svuota carrello
                </button>

                <div className="w-full max-w-sm space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-white/60">
                      Subtotale prodotti
                    </span>

                    <span className="font-semibold text-white">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="text-white/60">
                      Spese di spedizione
                    </span>

                    <span className="font-semibold text-white">
                      {formatPrice(shipping)}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-sm uppercase tracking-widest text-white/50">
                          Totale
                        </p>

                        <p className="mt-1 text-sm text-white/40">
                          Spedizione inclusa
                        </p>
                      </div>

                      <p className="text-4xl font-bold text-[#d4af37]">
                        {formatPrice(finalTotal)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/checkout"
                className="
                  rounded-full
                  bg-[#d4af37]
                  px-10
                  py-5
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                  hover:bg-[#e5c24d]
                "
              >
                Procedi all&apos;ordine
              </Link>

              <Link
                href="/boutique"
                className="
                  rounded-full
                  border
                  border-[#d4af37]
                  px-10
                  py-5
                  text-[#d4af37]
                  transition
                  hover:bg-[#d4af37]/10
                "
              >
                Continua acquisti
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}