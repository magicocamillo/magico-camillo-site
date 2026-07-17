"use client";

import { useEffect, useState } from "react";

export default function DiarioSegreto() {
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedText = localStorage.getItem("mc-diario");
    const savedDate = localStorage.getItem("mc-diario-data");

    if (savedText) {
      setText(savedText);
    }

    if (savedDate) {
      setSavedAt(savedDate);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const timer = setTimeout(() => {
      localStorage.setItem("mc-diario", text);

      const now = new Date().toLocaleString("it-IT");

      localStorage.setItem("mc-diario-data", now);
      setSavedAt(now);
    }, 500);

    return () => clearTimeout(timer);
  }, [text, loaded]);

  function clearDiary() {
    if (!window.confirm("Vuoi cancellare tutto il diario?")) return;

    localStorage.removeItem("mc-diario");
    localStorage.removeItem("mc-diario-data");

    setText("");
    setSavedAt("");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <p className="uppercase tracking-[0.4em] text-[#d4af37]">
          AREA SEGRETA
        </p>

        <h1 className="mt-6 text-5xl font-bold text-white sm:text-6xl">
          📖 Diario Segreto
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Scrivi idee, effetti, numeri, musiche e appunti.
          Tutto viene salvato automaticamente nel browser.
        </p>

        <div className="mt-10 rounded-[32px] border border-[#d4af37]/20 bg-[#111] p-8">

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Scrivi qui..."
            className="min-h-[450px] w-full resize-y rounded-2xl border border-white/10 bg-black/30 p-6 text-lg leading-8 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#d4af37]"
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                Ultimo salvataggio
              </p>

              <p className="mt-2 text-white/60">
                {savedAt || "Nessun salvataggio"}
              </p>
            </div>

            <button
              type="button"
              onClick={clearDiary}
              className="rounded-full border border-red-500/30 px-6 py-3 text-red-400 transition hover:border-red-500 hover:bg-red-500/10"
            >
              Cancella tutto
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}