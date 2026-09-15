"use client";

import Link from "next/link";

export default function PaginaSegreta() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
            Contenuto segreto
          </p>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl">
            Hai scoperto il passaggio nascosto
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Questa pagina non compare nel menu del sito. È riservata soltanto
            agli spettatori più curiosi che sono riusciti a trovare l’indizio.
          </p>
        </header>

        <section className="mt-14 overflow-hidden rounded-[32px] border border-[#d4af37]/30 bg-[#111] p-4 shadow-[0_0_80px_rgba(212,175,55,0.12)] sm:p-6">
          <div className="aspect-video overflow-hidden rounded-[24px] bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source
                src="/videos/contenuto-segreto.mp4"
                type="video/mp4"
              />

              Il tuo browser non supporta la riproduzione del video.
            </video>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Primo indizio
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Guarda attentamente
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Nel video potrebbe essere nascosto un particolare che conduce a
              un altro contenuto.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Dietro le quinte
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Un contenuto esclusivo
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Qui possiamo inserire prove, gag, errori divertenti o scene mai
              mostrate durante lo spettacolo.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Solo per pochi
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Mantieni il segreto
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Non rivelare subito agli altri come sei arrivato fino a questa
              pagina.
            </p>
          </article>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#d4af37]/40 px-8 py-4 font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
          >
            Torna al sito
          </Link>
        </div>
      </div>
    </main>
  );
}