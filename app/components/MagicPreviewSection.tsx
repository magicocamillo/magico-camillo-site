"use client";

import { useRef, useState } from "react";

export default function MagicPreviewSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;

      await videoRef.current.play();

      setStarted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-[#d4af37]">
            UN ASSAGGIO DELLO SPETTACOLO
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            La magia prende vita
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Nessun effetto speciale.
            Nessuna ripresa in studio.
            Solo uno dei tanti momenti che il pubblico vive durante uno
            spettacolo di Magico Camillo.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#d4af37]/20 shadow-2xl">

          <video
            ref={videoRef}
            className="w-full"
            src="/video/magia-camillo.mp4"
            playsInline
            preload="metadata"
            controls={started}
            onEnded={() => setStarted(false)}
          />

          {!started && (
            <button
              type="button"
              onClick={playVideo}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 transition hover:bg-black/30"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37] bg-black/60 text-5xl text-[#d4af37]">
                ▶
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Guarda un momento dello spettacolo
              </h3>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}