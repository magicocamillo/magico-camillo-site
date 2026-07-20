"use client";

import { useRef, useState } from "react";

export default function JourneySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;

      // iPhone richiede che il video sia pronto
      await video.play();

      setPlaying(true);
    } catch (e) {
      console.error(e);
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
            className="block w-full"
            src="/video/viaggio-andalo.mp4"
            playsInline
            controls={playing}
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={startVideo}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/35"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-5xl text-black transition hover:scale-110">
                ▶
              </div>
            </button>
          )}

        </div>

      </div>
    </section>
  );
}