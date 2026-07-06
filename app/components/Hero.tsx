import Link from "next/link";
import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.3),_transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#d4af37]/30 blur-sm animate-float"
            style={{
              top: `${6 + index * 8}%`,
              left: `${(index * 11) % 94}%`,
              animationDelay: `${index * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 max-w-2xl space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">MAGICO CAMILLO</p>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl xl:text-7xl">
              La magia che emoziona,
              <br />
              fa ridere
              <br />
              e resta nel cuore.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Da oltre 15 anni porto spettacoli di magia comica, teatro e poesia in Family Hotel, teatri, piazze e festival.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/video"
              className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37]/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4af37] transition duration-300 hover:bg-[#d4af37]/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)]"
            >
              Guarda il trailer
            </Link>
            <Link
              href="/spettacoli"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e6c95f] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              Richiedi un preventivo
            </Link>
          </div>

          <StatsBar />
        </div>

        <div className="relative mx-auto flex w-full max-w-[720px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-[80px]" />
          <div className="absolute inset-0">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="absolute h-2 w-2 rounded-full bg-[#d4af37]/70 shadow-[0_0_12px_rgba(212,175,55,0.7)] animate-float"
                style={{
                  top: `${15 + index * 11}%`,
                  left: `${12 + index * 10}%`,
                  animationDelay: `${index * 0.25}s`,
                }}
              />
            ))}
          </div>

          <div className="relative w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-[0_0_40px_rgba(212,175,55,0.06)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[32px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06),_transparent_60%)]" />
              <img
                src="/images/gallery/gallery 10.jpeg"
                alt="Magico Camillo"
                className="w-full object-cover"
                style={{ height: '760px', objectPosition: 'center 36%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
