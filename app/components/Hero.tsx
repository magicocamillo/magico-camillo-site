"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import StatsBar from "./StatsBar";
import LogoMagicOverlay from "./LogoMagicOverlay";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

  {/* SFONDO */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_28%)]" />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

  {/* LOGO */}

  <div className="relative z-20 mt-24 -mb-8 lg:-mt-12 lg:-mb-12 flex justify-center px-2">

    <div className="relative w-[98vw] max-w-[2200px]">

      <Image
        src="/images/branding/scritta-magico-camillo.png"
        alt="Magico Camillo"
        width={2001}
        height={786}
        priority
        className="h-auto w-full select-none"
      />

      <LogoMagicOverlay />

    </div>

  </div>

  {/* HERO */}

  <div className="relative z-20 mx-auto max-w-7xl px-8 pt-0 lg:px-12">

    <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.95fr]">
    {/* TESTO */}

<div className="lg:mt-26">

  <motion.p
    className="-mt-6 uppercase tracking-[0.45em] text-[#d4af37]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      delay: 0.55,
    }}
  >
    MAGIA COMICA • TEATRO • MERAVIGLIA
  </motion.p>

 <motion.h1
  className="mt-3 text-5xl font-semibold leading-[0.92] text-white sm:text-6xl xl:text-7xl"
  initial={{
    opacity: 0,
    filter: "blur(18px)",
    scale: 1.03,
  }}
  animate={{
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  }}
  transition={{
    duration: 1.4,
    delay: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Magico Camillo

  <span className="mt-8 block bg-gradient-to-r from-[#d4af37] to-[#fff3c0] bg-clip-text text-transparent text-3xl font-semibold leading-snug sm:text-4xl sm:leading-tight xl:text-5xl">
    Spettacoli di magia per bambini, famiglie,
    <br />
    Family Hotel, resort, teatri ed eventi
  </span>

  <span className="mt-8 block text-xl font-normal leading-relaxed text-white/85 sm:text-2xl">
    La magia che emoziona,
    <br />
    fa ridere
    <br />
    e resta nel cuore.
  </span>
</motion.h1>

  <motion.p
    className="mt-6 max-w-xl text-xl leading-9 text-white/70"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: 1.25,
    }}
  >
    Spettacoli di magia comica che uniscono illusioni,
    comicità e poesia si intrecciano per
    emozionare bambini, ragazzi e adulti.
    Ogni spettacolo è costruito per lasciare
    un ricordo che continua anche dopo
    l'ultimo applauso.
  </motion.p>

  <motion.div
  className="mt-12 flex flex-wrap gap-5"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.45,
  }}
>
  <Link
    href="/video"
    className="rounded-full border border-[#d4af37] px-9 py-4 uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/10 hover:border-[#f4d66a] hover:shadow-[0_0_25px_rgba(212,175,55,.25)]"
  >
    Guarda il trailer
  </Link>

  <Link
    href="/richiedi-preventivo"
    className="rounded-full bg-[#d4af37] px-10 py-4 font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"
  >
    Richiedi preventivo
  </Link>
</motion.div>

</div>
  {/* FOTO */}

<div className="flex justify-center lg:justify-end">

  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.1,
      delay: 0.5,
    }}
  >

    <div className="relative">

      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-[#d4af37]/10
          blur-[120px]
          scale-75
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.018, 1],
          x: [0, 3, 0],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <Image
          src="/images/hero.jpg"
          alt="Magico Camillo"
          width={980}
          height={1200}
          priority
          draggable={false}
          className="h-auto w-full max-w-[780px] object-contain select-none lg:translate-x-12 xl:max-w-[920px] 2xl:max-w-[980px]"
        />

      </motion.div>

    </div>

  </motion.div>

</div>

</div>
        {/* STATISTICHE */}

        <div className="mt-20">
          <StatsBar />
        </div>

        {/* FRECCIA */}

        <div className="mt-16 flex justify-center">

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[#d4af37]/70"
          >

            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>

          </motion.div>

        </div>

      </div>

    </section>
  );
}