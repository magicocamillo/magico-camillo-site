"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ToastItem = {
  id: number;
  name: string;
};

// Popup leggero (niente librerie esterne, solo React + classi Tailwind gia'
// presenti nel progetto) che festeggia quando qualcosa viene aggiunto al
// carrello. Ascolta l'evento "cart:item-added" emesso da addToCart in
// app/data/carts.ts, quindi funziona da qualunque pagina/pulsante "Aggiungi"
// senza bisogno di ripetere la logica in ogni componente prodotto.
export default function CartToast() {
  const [queue, setQueue] = useState<ToastItem[]>([]);
  const [visible, setVisible] = useState(false);
  const dismissTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const advanceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    function handleAdded(event: Event) {
      const detail = (event as CustomEvent<{ name?: string }>).detail;

      if (!detail?.name) {
        return;
      }

      nextId.current += 1;
      setQueue((current) => [
        ...current,
        { id: nextId.current, name: detail.name as string },
      ]);
    }

    window.addEventListener("cart:item-added", handleAdded);

    return () => {
      window.removeEventListener("cart:item-added", handleAdded);
    };
  }, []);

  const current = queue[0];

  useEffect(() => {
    if (!current) {
      return;
    }

    setVisible(false);
    const enterFrame = requestAnimationFrame(() => setVisible(true));

    if (dismissTimeout.current) clearTimeout(dismissTimeout.current);
    if (advanceTimeout.current) clearTimeout(advanceTimeout.current);

    dismissTimeout.current = setTimeout(() => {
      setVisible(false);

      advanceTimeout.current = setTimeout(() => {
        setQueue((q) => q.slice(1));
      }, 300);
    }, 2800);

    return () => {
      cancelAnimationFrame(enterFrame);
      if (dismissTimeout.current) clearTimeout(dismissTimeout.current);
      if (advanceTimeout.current) clearTimeout(advanceTimeout.current);
    };
  }, [current]);

  if (!current) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 sm:bottom-8 sm:justify-end sm:pr-8"
    >
      <div
        className={`pointer-events-auto flex max-w-sm items-center gap-4 rounded-2xl border border-[#d4af37]/40 bg-black/90 px-6 py-4 shadow-[0_15px_45px_rgba(0,0,0,0.55)] backdrop-blur transition-all duration-300 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 opacity-100 scale-100 sm:translate-x-0"
            : "translate-y-4 opacity-0 scale-95 sm:translate-x-6 sm:translate-y-0"
        }`}
      >
        <span className="text-2xl" aria-hidden="true">
          ✨
        </span>

        <div className="min-w-0">
          <p className="font-bold uppercase tracking-wide text-[#d4af37]">
            Evviva!
          </p>

          <p className="mt-0.5 text-sm leading-snug text-white/80">
            <span className="font-semibold text-white">{current.name}</span>{" "}
            è stato aggiunto al carrello.
          </p>
        </div>

        <Link
          href="/cart"
          className="ml-auto shrink-0 whitespace-nowrap rounded-full border border-[#d4af37]/50 px-3 py-1.5 text-xs font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          Vai al carrello
        </Link>
      </div>
    </div>
  );
}
