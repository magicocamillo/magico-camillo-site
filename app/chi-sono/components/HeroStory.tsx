import Link from "next/link";

export default function HeroStory() {
  return (
    <>
      {/* HERO */}

      <section className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#171717] via-[#101010] to-black shadow-stage">
        <div className="grid gap-14 p-8 sm:p-10 lg:grid-cols-2 lg:items-stretch lg:p-16">
          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-black lg:h-full">
            <img
              src="/images/about/hero.jpg"
              alt="Magico Camillo"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[560px] lg:h-full lg:min-h-[700px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
              Chi sono
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Il mio nome è Emanuele.
              <span className="mt-4 block text-[#d4af37]">
                Ma migliaia di bambini mi conoscono come Magico Camillo.
              </span>
            </h1>

            <p className="mt-10 text-lg leading-9 text-white/70 sm:text-xl">
              Da oltre quindici anni porto sui palchi di tutta Italia
              spettacoli nei quali magia, comicità, teatro e tecnologia si
              fondono per regalare emozioni autentiche a bambini, famiglie e
              pubblico di ogni età.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/spettacoli"
                className="rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Scopri gli spettacoli
              </Link>

              <Link
                href="/contatti"
                className="rounded-full border border-[#d4af37] px-8 py-4 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Richiedi un preventivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LA MIA STORIA */}

      <section className="mt-24 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[38px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            La mia storia
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Due vite. Un’unica persona.
          </h2>

          <p className="mt-8 leading-9 text-white/70">
            Per oltre ventitré anni ho prestato servizio nella{" "}
            <strong className="text-white">Polizia di Stato</strong>. È stato
            un percorso che mi ha insegnato disciplina, responsabilità,
            rispetto e il valore del rapporto con le persone.
          </p>

          <p className="mt-6 leading-9 text-white/70">
            Ma, terminato il turno di lavoro, c’era un’altra parte di me che
            continuava a farsi sentire: quella che amava il teatro, la
            comicità, la magia e il sorriso dei bambini.
          </p>

          <p className="mt-6 leading-9 text-white/70">
            Per molto tempo queste due vite hanno camminato insieme. Una
            garantiva sicurezza. L’altra continuava a ricordarmi ciò che mi
            faceva sentire davvero vivo.
          </p>

          <p className="mt-6 leading-9 text-white/70">
            Nel 2012 ho scelto di lasciare una professione sicura e
            trasformare la mia passione nel mio lavoro. Non è stato un salto
            nel vuoto, ma un passo verso la persona che desideravo diventare.
          </p>
        </div>

        <div className="rounded-[38px] border border-[#d4af37]/20 bg-[#d4af37]/5 p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Una scelta di vita
          </p>

          <blockquote className="mt-8 border-l-4 border-[#d4af37] pl-6 text-2xl italic leading-relaxed text-white sm:text-3xl">
            “Non ho cambiato lavoro.
            <span className="mt-4 block">
              Ho cambiato vita per regalare emozioni.”
            </span>
          </blockquote>

          <p className="mt-10 leading-8 text-white/70">
            Oggi porto ancora con me i valori imparati durante gli anni di
            servizio, ma li metto al servizio di qualcosa di diverso: creare
            meraviglia, emozionare e far sorridere.
          </p>
        </div>
      </section>
    </>
  );
}