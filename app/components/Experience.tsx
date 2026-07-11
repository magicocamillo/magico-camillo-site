"use client";

import Link from "next/link";

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* SFONDO */}

      <div className="absolute inset-0">
        <img
          src="/images/detective-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>


      {/* CONTENUTO */}

      <div className="relative z-10 mx-auto max-w-screen-2xl px-8 lg:px-20">


        <p className="mb-5 uppercase tracking-[0.45em] text-[#d4af37]">
          L'ESPERIENZA
        </p>


        <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white lg:text-7xl">

          Non porto soltanto magia.
          <br />
          Porto ricordi.

        </h2>


        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/70">

          Ogni spettacolo nasce per coinvolgere grandi e piccoli.
          Non è una semplice esibizione, ma un viaggio fatto di
          risate, stupore, poesia, tecnologia, musica e continue
          sorprese che trasformano il pubblico nel protagonista.

        </p>


        {/* CARD */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">


          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition hover:border-[#d4af37]/40">

            <div className="mb-8 h-[2px] w-20 bg-[#d4af37]" />

            <h3 className="text-3xl font-semibold text-white">
              Magia
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Effetti sorprendenti, comicità e partecipazione continua
              che coinvolgono grandi e bambini.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition hover:border-[#d4af37]/40">

            <div className="mb-8 h-[2px] w-20 bg-[#d4af37]" />

            <h3 className="text-3xl font-semibold text-white">
              Risate
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Uno spettacolo dove tutta la famiglia ride insieme,
              senza mai smettere di stupirsi.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition hover:border-[#d4af37]/40">

            <div className="mb-8 h-[2px] w-20 bg-[#d4af37]" />

            <h3 className="text-3xl font-semibold text-white">
              Emozioni
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Il finale lascia sempre un ricordo speciale,
              capace di restare nel cuore del pubblico.
            </p>

          </div>


        </div>


        <Link
          href="/spettacoli"
          className="mt-16 inline-flex rounded-full bg-[#d4af37] px-10 py-5 text-lg font-semibold uppercase tracking-[0.15em] text-black transition hover:scale-105"
        >
          Scopri gli spettacoli
        </Link>


      </div>

    </section>
  );
}