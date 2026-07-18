import Image from "next/image";
import Link from "next/link";

const recensioni = [
  {
    testo: "È come tornare bambini.",
    autore: "Arianna Nicoli",
  },
  {
    testo: "Ogni volta uno spettacolo diverso.",
    autore: "Giorgia Rapone",
  },
  {
    testo: "Una garanzia di divertimento per grandi e piccini.",
    autore: "Stefano Valiani",
  },
  {
    testo:
      "Mio figlio aspetta con impazienza lo spettacolo ogni anno.",
    autore: "Stefano Zanin",
  },
  {
    testo:
      "Fin dai primi minuti riesce a catturare l'attenzione dei piccoli e coinvolgere anche i grandi.",
    autore: "Andrea Gazzieri",
  },
  {
    testo:
      "Il suo spettacolo è talmente coinvolgente che anche gli adulti se lo godono.",
    autore: "Alessandro Bonazza",
  },
  {
    testo:
      "Mescola magia, teatro, clownerie, giocoleria e tecnologia.",
    autore: "Recensione Google",
  },
  {
    testo: "Uno stile assolutamente unico.",
    autore: "Maga Gaia",
  },
  {
    testo: "Ha reso magica una serata.",
    autore: "Giorgia Rapone",
  },
  {
    testo: "Uno spettacolo che supera ogni aspettativa.",
    autore: "Andrea Gazzieri",
  },
  {
    testo:
      "Gentile, cordiale e soprattutto molto professionale.",
    autore: "Recensione Google",
  },
  {
    testo: "I bambini ti hanno adorato.",
    autore: "Recensione Google",
  },
];

const parole = [
  "Famiglia",
  "Risate",
  "Meraviglia",
  "Divertimento",
  "Emozione",
  "Coinvolgimento",
  "Professionalità",
  "Originalità",
  "Magia",
  "Bambini",
  "Adulti",
  "Ricordi",
];

export default function RecensioniPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      <section className="relative min-h-screen">

        <Image
          src="/images/camillo/panorama.jpeg"
          alt="Magico Camillo durante uno spettacolo davanti al pubblico"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pt-44 pb-20 sm:px-10 sm:pt-48 sm:pb-24 lg:px-14 lg:pt-52 lg:pb-28">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Dicono di me
            </p>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-8xl">
              Le parole di chi ha vissuto lo spettacolo
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Famiglie, organizzatori e strutture raccontano con le loro parole
              l’esperienza di uno spettacolo di Magico Camillo.
            </p>

          </div>

        </div>

      </section>
            <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-3 sm:px-10 lg:px-14">

          <div>
            <p className="text-4xl font-semibold text-[#d4af37]">
              4,7 su 5
            </p>
            <p className="mt-2 text-white/60">
              Valutazione su Google
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-[#d4af37]">
              26
            </p>
            <p className="mt-2 text-white/60">
              Recensioni pubblicate
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-[#d4af37]">
              Oltre 3.000
            </p>
            <p className="mt-2 text-white/60">
              Spettacoli realizzati
            </p>
          </div>

        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Una frase che dice tutto
          </p>

          <blockquote className="mt-10 text-5xl font-semibold leading-tight sm:text-6xl lg:text-8xl">
            «È come tornare bambini.»
          </blockquote>

          <div className="mt-8">
            <p className="text-lg font-medium">
              Arianna Nicoli
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">
              Recensione Google
            </p>
          </div>

        </div>

      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Esperienze autentiche
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Bambini e adulti coinvolti nello stesso spettacolo
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {recensioni.slice(1).map((recensione, index) => (

              <article
                key={`${recensione.autore}-${index}`}
                className="flex min-h-[300px] flex-col justify-between rounded-[32px] border border-white/10 bg-black/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 sm:p-10"
              >

                <div>

                  <p className="text-sm tracking-[0.2em] text-[#d4af37]">
                    ★★★★★
                  </p>

                  <blockquote className="mt-8 text-2xl font-medium leading-relaxed sm:text-3xl">
                    «{recensione.testo}»
                  </blockquote>

                </div>

                <div className="mt-10 border-t border-white/10 pt-6">

                  <p className="font-medium">
                    {recensione.autore}
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Recensione pubblicata su Google
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>
            <section className="px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Le parole che ritornano
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ciò che il pubblico porta a casa
            </h2>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">

            {parole.map((parola) => (

              <span
                key={parola}
                className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-base text-white/80 sm:px-8 sm:py-4 sm:text-lg"
              >
                {parola}
              </span>

            ))}

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#d4af37]/25 bg-gradient-to-br from-[#d4af37]/15 via-white/[0.04] to-transparent p-8 text-center sm:p-14 lg:p-20">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Porta lo spettacolo al tuo evento
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Regala al tuo pubblico un'esperienza da ricordare
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Raccontami dove si svolgerà l'evento e quale pubblico sarà presente.
            Prepariamo insieme la proposta più adatta.
          </p>

          <Link
            href="/contatti"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-[1.03] hover:bg-[#e4c457]"
          >
            Richiedi un preventivo
          </Link>

        </div>

      </section>

    </main>
  );
}