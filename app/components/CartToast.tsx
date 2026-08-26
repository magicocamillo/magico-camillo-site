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
//
// Grande e centrato nello schermo (non un angolo) cosi' non passa
// inosservato, ma resta "pointer-events-none" sullo sfondo: non blocca i
// click sul resto della pagina, si vede e basta finche' non sparisce da
// solo dopo circa 4 secondi.
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

    // Resta visibile a lungo (4s pieni) prima di iniziare l'uscita, poi
    // aspetta la fine dell'animazione di uscita per passare al prossimo.
    dismissTimeout.current = setTimeout(() => {
      setVisible(false);

      advanceTimeout.current = setTimeout(() => {
        setQueue((q) => q.slice(1));
      }, 300);
    }, 4000);

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
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center px-4"
    >
      {/* Sfondo sfumato dietro al popup: solo visivo, non blocca i click */}
      <div
        className={`pointer-events-none absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`pointer-events-auto relative flex w-full max-w-lg flex-col items-center gap-5 rounded-[32px] border border-[#d4af37]/50 bg-black px-10 py-12 text-center shadow-[0_30px_90px_rgba(0,0,0,0.65)] transition-all duration-300 ease-out motion-reduce:transition-none ${
          visible
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0"
        }`}
      >
        <span className="text-6xl" aria-hidden="true">
          ✨
        </span>

        <div>
          <p className="text-3xl font-extrabold uppercase tracking-wide text-[#d4af37] sm:text-4xl">
            Evviva!
          </p>

          <p className="mt-3 text-lg leading-relaxed text-white/85 sm:text-xl">
            <span className="font-semibold text-white">{current.name}</span>{" "}
            è stato aggiunto al carrello.
          </p>
        </div>

        <Link
          href="/cart"
          className="mt-2 rounded-full bg-[#d4af37] px-8 py-3 text-base font-bold text-black transition hover:scale-[1.03] hover:bg-[#e5c24d]"
        >
          Vai al carrello
        </Link>
      </div>
    </div>
  );
}
