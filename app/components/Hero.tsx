import Link from "next/link";
import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* SFONDO */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_45%)]" />

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(12)].map((_, index) => (

          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-[#d4af37]/25 blur-sm animate-float"
            style={{
              top: `${5 + index * 8}%`,
              left: `${(index * 11) % 96}%`,
              animationDelay: `${index * 0.35}s`,
            }}
          />

        ))}

      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-screen-2xl items-center px-8 py-10 lg:px-16">

        {/* COLONNA SINISTRA */}

        <div className="z-10 w-full max-w-2xl">

          <h1 className="text-6xl font-semibold leading-[0.92] text-white sm:text-7xl xl:text-8xl">

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

          <div className="mt-14">

            <StatsBar />

          </div>

        </div>
                {/* FOTO */}

        <div className="relative flex flex-1 items-end justify-end">

          <div className="absolute right-8 top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

          <div className="absolute right-24 top-20 h-5 w-5 rounded-full bg-[#d4af37]/70 shadow-[0_0_30px_rgba(212,175,55,0.8)] animate-float" />

          <div className="absolute right-80 top-44 h-3 w-3 rounded-full bg-[#d4af37]/70 shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-float" />

          <div className="absolute right-40 bottom-40 h-4 w-4 rounded-full bg-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-float" />

          <img
            src="/images/hero.jpg"
            alt="Magico Camillo"
            className="relative z-10 h-[92vh] w-auto object-contain object-bottom select-none"
            draggable={false}
          />

        </div>

      </div>
          </section>
  );
}
