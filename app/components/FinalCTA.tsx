"use client";

import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <AnimatedSection className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-28 sm:px-10 lg:px-14">

      {/* Effetti di sfondo */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.65),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[42px] border border-[#d4af37]/20 bg-white/5 p-10 text-center shadow-stage backdrop-blur-xl sm:p-14 lg:p-20">

        <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          È il momento di stupire il tuo pubblico
        </p>

        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
          Trasformiamo il tuo evento
          <br />
          in un ricordo indimenticabile.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
          Ogni spettacolo è costruito su misura per coinvolgere bambini,
          ragazzi e adulti. Family Hotel, teatri, biblioteche, scuole,
          piazze, festival, aziende e feste private.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-10 py-5 text-base font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#e7c75b]"
          >
            Richiedi un preventivo
          </Link>

          <Link
            href="/video"
            className="inline-flex items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-10 py-5 text-base font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20"
          >
            Guarda il trailer
          </Link>

        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">

          <div>
            <p className="text-5xl font-semibold text-[#d4af37]">
              3000+
            </p>

            <p className="mt-3 uppercase tracking-[0.2em] text-white/70">
              spettacoli
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold text-[#d4af37]">
              15+
            </p>

            <p className="mt-3 uppercase tracking-[0.2em] text-white/70">
              anni di esperienza
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold text-[#d4af37]">
              ★★★★★
            </p>

            <p className="mt-3 uppercase tracking-[0.2em] text-white/70">
              sorrisi ed emozioni
            </p>
          </div>

        </div>

      </div>

    </AnimatedSection>
  );
}