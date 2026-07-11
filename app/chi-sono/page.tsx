export default function ChiSono() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-12 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Chi sono
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Magico Camillo
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-9 text-white/70">
            Da oltre quindici anni porto sui palchi di tutta Italia uno
            spettacolo dove magia, comicità, teatro e tecnologia si uniscono
            per creare un'esperienza coinvolgente per tutta la famiglia.
          </p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[36px] border border-white/10 bg-black/60 p-10 shadow-stage">
            <h2 className="text-3xl font-semibold text-white">
              La mia storia
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Ogni spettacolo nasce da una semplice idea:
              far ridere, stupire ed emozionare grandi e bambini nello stesso
              momento.
            </p>

            <p className="mt-6 leading-8 text-white/70">
              Negli anni ho realizzato migliaia di spettacoli per Family Hotel,
              Comuni, biblioteche, scuole, teatri, Pro Loco e feste private,
              sviluppando uno stile personale riconoscibile.
            </p>
          </div>

          <div className="rounded-[36px] border border-[#d4af37]/20 bg-[#d4af37]/5 p-10 shadow-stage">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              In numeri
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-5xl font-bold text-[#d4af37]">
                  3000+
                </p>
                <p className="mt-2 text-white/70">
                  spettacoli realizzati
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-[#d4af37]">
                  15+
                </p>
                <p className="mt-2 text-white/70">
                  anni di esperienza
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-[#d4af37]">
                  Famiglie
                </p>
                <p className="mt-2 text-white/70">
                  sorrisi ed emozioni ogni stagione
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}