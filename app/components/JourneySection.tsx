"use client";

import { useRef, useState } from "react";

export default function JourneySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;

    try {
      await videoRef.current.play();
      setStarted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="border-y border-white/10 bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-[#d4af37]">
            IL VIAGGIO VERSO LA MAGIA
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            Ogni spettacolo inizia molto prima
            <br />
            di salire sul palco.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Centinaia di chilometri, montagne, Family Hotel,
            teatri e piazze. Ogni viaggio rappresenta il primo
            passo per regalare un'esperienza indimenticabile
            a bambini e famiglie.
          </p>

        </div>

        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#d4af37]/20 shadow-2xl">

          <video
            ref={videoRef}
            className="w-full"
            src="/video/viaggio-andalo.mp4"
            playsInline
            controls={started}
            onEnded={() => setStarted(false)}
          />

          {!started && (
            <button
              onClick={playVideo}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 transition hover:bg-black/35"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37] bg-black/50 text-5xl text-[#d4af37] transition hover:scale-110">
                ▶
              </div>

              <p className="mt-8 uppercase tracking-[0.4em] text-[#d4af37]">
                IL VIAGGIO VERSO LA MAGIA
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-white">
                Guarda il viaggio
              </h3>

              <p className="mt-4 max-w-xl px-8 text-center text-white/80">
                Scopri cosa succede prima che si alzi il sipario.
              </p>

            </button>
          )}

        </div>

      </div>
    </section>
  );
}