"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VintageTvPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
};

type TvState = "idle" | "tuning" | "playing";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Knob() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d4af37]/70 bg-[#111]">
      <div className="h-3 w-[2px] -translate-y-1 rotate-45 bg-[#d4af37]" />
    </div>
  );
}

export default function VintageTvPlayer({
  src,
  poster,
  className,
}: VintageTvPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<TvState>("idle");
  const [intensify, setIntensify] = useState(false);

  // Rumore "neve" animato su canvas, attivo finché non parte il video
  useEffect(() => {
    if (state === "playing") return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const width = 160;
    const height = 90;
    canvas.width = width;
    canvas.height = height;

    const fps = intensify ? 24 : 12;
    const interval = 1000 / fps;
    let lastDraw = 0;
    let frameId: number;

    const draw = (time: number) => {
      if (time - lastDraw >= interval) {
        lastDraw = time;
        const imageData = ctx.createImageData(width, height);
        const buffer = imageData.data;
        for (let i = 0; i < buffer.length; i += 4) {
          const shade = Math.random() * 255;
          buffer[i] = shade;
          buffer[i + 1] = shade;
          buffer[i + 2] = shade;
          buffer[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
      }
      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(frameId);
  }, [state, intensify]);

  const handlePlay = async () => {
    if (state !== "idle") return;

    const video = videoRef.current;

    setState("tuning");
    setIntensify(true);

    if (video) {
      try {
        video.currentTime = 0;
        video.muted = true;
        await video.play();
      } catch (err) {
        console.error(err);
      }
    }

    // fase 1: la neve si intensifica leggermente
    await wait(180);
    setIntensify(false);

    // fase 2: sfarfallio, il "segnale" si aggancia
    await wait(220);

    if (video) {
      video.muted = false;
    }
    setState("playing");
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setState("idle");
  };

  return (
    <div className={`relative mx-auto w-full max-w-3xl ${className ?? ""}`}>
      {/* ANTENNA */}
      <svg
        viewBox="0 0 120 60"
        className="pointer-events-none absolute -top-10 left-1/2 h-14 w-28 -translate-x-1/2 sm:-top-12 sm:h-16 sm:w-32"
      >
        <line x1="60" y1="55" x2="20" y2="5" stroke="#8a8a8a" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="55" x2="100" y2="5" stroke="#8a8a8a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="5" r="4" fill="#d4af37" />
        <circle cx="100" cy="5" r="4" fill="#d4af37" />
        <circle cx="60" cy="55" r="5" fill="#8a8a8a" />
      </svg>

      {/* CORNICE TV */}
      <div className="relative rounded-[42px] border-[10px] border-[#2a2a2a] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] p-4 shadow-2xl sm:p-6">
        <div className="flex items-stretch gap-4">
          {/* SCHERMO */}
          <div className="relative flex-1 overflow-hidden rounded-[26px] border-4 border-black bg-black">
            <motion.div
              className="relative aspect-video w-full"
              animate={
                state === "tuning"
                  ? { x: [0, 3, -3, 2, 0], y: [0, -2, 2, -1, 0] }
                  : { x: 0, y: 0 }
              }
              transition={{ duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }}
            >
              {state !== "playing" && (
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 h-full w-full"
                  style={{ imageRendering: "pixelated" }}
                />
              )}

              {state !== "playing" && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 2px, transparent 3px)",
                  }}
                />
              )}

              <video
                ref={videoRef}
                src={src}
                poster={poster}
                playsInline
                controls={state === "playing"}
                preload="auto"
                onEnded={handleEnded}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ${
                  state === "playing" ? "opacity-100" : "opacity-0"
                }`}
              />

              <AnimatePresence>
                {state === "tuning" && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.75, 0.1, 0.5, 0, 0.35, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.22,
                      times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
                    }}
                  />
                )}
              </AnimatePresence>

              {state === "idle" && (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/10"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d4af37] bg-black/60 text-4xl text-[#d4af37] transition hover:scale-110">
                    ▶
                  </div>
                </button>
              )}
            </motion.div>
          </div>

          {/* MANOPOLE */}
          <div className="hidden w-10 flex-col items-center justify-center gap-6 sm:flex">
            <Knob />
            <Knob />
          </div>
        </div>

        {/* GRIGLIA ALTOPARLANTE (mobile) */}
        <div className="mt-4 flex justify-center gap-1 sm:hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-1 w-8 rounded-full bg-black/40" />
          ))}
        </div>
      </div>
    </div>
  );
}
