const timeline = [
  {
    year: "1971",
    text: "Nasce Emanuele, in Trentino.",
  },
  {
    year: "1989",
    text: "Inizia il percorso professionale nella Polizia di Stato.",
  },
  {
    year: "2012",
    text: "Dopo ventitré anni di servizio sceglie di dedicarsi completamente allo spettacolo.",
  },
  {
    year: "Oggi",
    text: "Oltre 3.000 spettacoli realizzati per bambini e famiglie in tutta Italia.",
  },
];

const formazione = [
  {
    title: "Magia",
    text: "Studio dell’illusionismo, costruzione degli effetti e ricerca continua di nuove idee.",
  },
  {
    title: "Teatro",
    text: "Recitazione, improvvisazione, comicità, presenza scenica e costruzione del personaggio.",
  },
  {
    title: "Clown",
    text: "Il linguaggio del corpo, il ritmo comico e la capacità di trasformare un errore in una risata.",
  },
  {
    title: "Pedagogia del Circo",
    text: "Percorso biennale dedicato all’educazione attraverso il gioco, il teatro e le arti circensi.",
  },
  {
    title: "Voce e dizione",
    text: "Formazione dedicata alla voce, alla dizione, al canto e alla comunicazione sul palcoscenico.",
  },
  {
    title: "Tecnologia",
    text: "Elettronica, robotica, video, luci e automazioni utilizzate al servizio dello spettacolo.",
  },
];

export default function JourneyTraining() {
  return (
    <>
      {/* TIMELINE */}

      <section className="mt-24">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          Il mio percorso
        </p>

        <h2 className="mt-6 text-center text-4xl font-semibold text-white sm:text-5xl">
          Una vita in continua evoluzione
        </h2>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-6 top-0 h-full w-px bg-[#d4af37]/30 sm:left-8" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-20 sm:pl-24">
                <div
                  className={`absolute left-[13px] top-2 h-6 w-6 rounded-full border-4 border-[#d4af37] sm:left-5 ${
                    index === 2 ? "bg-[#d4af37]" : "bg-black"
                  }`}
                />

                <h3 className="text-3xl font-bold text-[#d4af37]">
                  {item.year}
                </h3>

                <p className="mt-3 leading-8 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAZIONE */}

      <section className="mt-24 rounded-[42px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          Formazione
        </p>

        <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
          Non ho mai smesso di imparare.
        </h2>

        <p className="mt-8 max-w-4xl leading-9 text-white/70">
          Quando ho iniziato questo percorso mi sono promesso una cosa: non
          smettere mai di studiare. Ogni spettacolo può insegnare qualcosa,
          ogni artista può trasmettere un’idea e ogni corso può aprire una
          strada nuova.
        </p>

        <p className="mt-6 max-w-4xl leading-9 text-white/70">
          Sono diplomato perito informatico e ho frequentato un percorso
          biennale di Pedagogia del Circo, oltre a workshop dedicati al teatro,
          al clown, alla comicità, alla dizione, alla voce e alla presenza
          scenica.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {formazione.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-black/30 p-8 transition hover:-translate-y-1 hover:border-[#d4af37]/30"
            >
              <h3 className="text-2xl font-semibold text-[#d4af37]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-2xl font-semibold text-white">
          Non studio per sapere di più.
          <span className="mt-2 block text-[#d4af37]">
            Studio per riuscire a stupire di più.
          </span>
        </p>
      </section>
    </>
  );
}