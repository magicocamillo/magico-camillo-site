"use client";

import Link from "next/link";
import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* SFONDO */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_28%)]" />

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute right-[-40px] bottom-[-400px]">

          <img
            src="/images/hero.jpg"
            alt="Magico Camillo"
            draggable={false}
            className="h-[125vh] w-auto object-contain object-bottom select-none"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

      </div>


      {/* CONTENUTO */}

      <div className="relative z-20 flex min-h-screen items-center px-8 lg:px-20">

        <div className="ml-[1000px] max-w-2xl">


          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            MAGIA • COMICITÀ • EMOZIONE
          </p>


          <h1 className="mt-8 text-6xl font-semibold leading-[0.92] text-white xl:text-7xl">

            La magia
            <br />
            che emoziona,
            <br />
            fa ridere
            <br />
            e resta
            <br />
            nel cuore.

          </h1>


          <p className="mt-10 max-w-xl text-xl leading-9 text-white/70">

            Da oltre 15 anni porto spettacoli di magia,
            comicità e poesia in Family Hotel,
            teatri, scuole, piazze,
            festival e grandi eventi.

          </p>


          <div className="mt-12 flex flex-wrap gap-5">


            <Link
              href="/video"
              className="rounded-full border border-[#d4af37] px-9 py-4 uppercase tracking-[0.18em] text-[#d4af37] transition hover:bg-[#d4af37]/15"
            >
              Guarda il trailer
            </Link>


            <Link
              href="/contatti"
              className="rounded-full bg-[#d4af37] px-10 py-4 font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-105"
            >
              Richiedi preventivo
            </Link>


          </div>


          <div className="mt-16">

            <StatsBar />

          </div>


        </div>

      </div>

    </section>
  );
}