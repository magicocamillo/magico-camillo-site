import Link from "next/link";

export default function ChiSono() {
  const capannoImages = [
    "/images/capanno-magico/capanno-1.jpg",
    "/images/capanno-magico/capanno-2.jpg",
    "/images/capanno-magico/capanno-3.jpg",
    "/images/capanno-magico/capanno-4.jpg",
  ];

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

  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}

        <section className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#171717] via-[#101010] to-black shadow-stage">
          <div className="grid items-center gap-14 p-8 sm:p-10 lg:grid-cols-2 lg:p-16">
            <div className="overflow-hidden rounded-[38px] border border-white/10 bg-black">
              <img
                src="/images/about/hero.jpg"
                alt="Magico Camillo"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[650px] lg:h-[700px]"
              />
            </div>

            <div>
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
              servizio, ma li metto al servizio di qualcosa di diverso:
              creare meraviglia, emozionare e far sorridere.
            </p>
          </div>
        </section>

        {/* RACHELE E LA NASCITA DI MAGICO CAMILLO */}

        <section className="mt-24 overflow-hidden rounded-[42px] border border-[#d4af37]/20 bg-gradient-to-br from-[#171717] to-black">
          <div className="grid items-center gap-14 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-black">
                <img
                  src="/images/about/rachele.jpg"
                  alt="Magico Camillo con la figlia Rachele durante uno dei primi spettacoli"
                  className="h-[500px] w-full object-cover object-center transition duration-700 hover:scale-105 sm:h-[620px]"
                />
              </div>

              <p className="mt-5 text-center text-sm italic leading-7 text-white/50">
                Uno dei primi spettacoli insieme a mia figlia Rachele.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
                La nascita di Magico Camillo
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Tutto iniziò con un semplice disegno.
              </h2>

              <p className="mt-8 leading-9 text-white/70">
                Un giorno mia figlia Rachele mi chiese di restare fermo qualche
                minuto mentre disegnava il suo papà.
              </p>

              <p className="mt-6 leading-9 text-white/70">
                Quando terminò il disegno sorrisi e le dissi:
              </p>

              <blockquote className="mt-6 border-l-4 border-[#d4af37] pl-6 text-2xl italic leading-10 text-white">
                «Ma quello non sono io...»
              </blockquote>

              <p className="mt-8 leading-9 text-white/70">
                Lei mi guardò e rispose con la semplicità che soltanto i
                bambini possiedono:
              </p>

              <blockquote className="mt-6 border-l-4 border-[#d4af37] pl-6 text-2xl italic leading-10 text-[#d4af37]">
                «Certo che sei tu, papà. Solo che qui non ti chiami Emanuele...
                ti chiami Camillo.»
              </blockquote>

              <p className="mt-8 leading-9 text-white/70">
                In quel momento sembrava soltanto un gioco. In realtà, senza
                saperlo, Rachele aveva già dato un nome al personaggio che
                avrebbe cambiato la mia vita.
              </p>

              <p className="mt-6 leading-9 text-white/70">
                Poco tempo dopo arrivarono i nostri primi spettacoli insieme.
                Questa fotografia racconta proprio quel periodo: l’inizio di un
                viaggio fatto di risate, emozioni e migliaia di bambini
                incontrati negli anni.
              </p>

              <a
                href="/documents/caravan-story.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex rounded-full border border-[#d4af37] px-8 py-4 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Leggi l’articolo completo
              </a>
            </div>
          </div>
        </section>

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
                <div
                  key={item.year}
                  className="relative pl-20 sm:pl-24"
                >
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
            biennale di Pedagogia del Circo, oltre a workshop dedicati al
            teatro, al clown, alla comicità, alla dizione, alla voce e alla
            presenza scenica.
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

        {/* COMPAGNIA MAGICO CAMILLO APS */}

        <section className="mt-24 overflow-hidden rounded-[42px] border border-[#d4af37]/20 bg-gradient-to-br from-[#161616] to-black shadow-stage">
          <div className="grid items-center gap-14 p-8 sm:p-10 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
                Compagnia Magico Camillo APS
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Un luogo dove la magia continua anche fuori dal palco.
              </h2>

              <p className="mt-8 text-lg leading-9 text-white/70">
                Sono Presidente della Compagnia Magico Camillo APS,
                associazione culturale nata per promuovere arte, spettacolo,
                formazione e cultura attraverso esperienze dedicate a bambini,
                famiglie e artisti.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/70">
                Il cuore dell’associazione è il{" "}
                <strong className="text-white">Capanno Magico</strong>, uno
                spazio dove le idee prendono vita prima di salire sul
                palcoscenico.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/70">
                Qui organizziamo prove, laboratori, workshop, incontri e serate
                dedicate al teatro, alla magia, alla musica e alla crescita
                artistica.
              </p>

              <Link
                href="/capanno-magico"
                className="mt-10 inline-flex rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Scopri il Capanno Magico
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capannoImages.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-[28px] border border-white/10 ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Capanno Magico ${index + 1}`}
                    className={`w-full object-cover transition duration-500 hover:scale-105 ${
                      index === 0 ? "h-72" : "h-48"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINALE */}

        <section className="mx-auto mb-16 mt-24 max-w-4xl text-center">
          <blockquote className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            “Quel giorno mia figlia non disegnò soltanto un clown.
            <span className="mt-3 block text-[#d4af37]">
              Disegnò il futuro che io non riuscivo ancora a vedere.”
            </span>
          </blockquote>

          <p className="mt-10 text-lg leading-9 text-white/60 sm:text-xl">
            Se, tornando a casa, un bambino continua a parlare dello
            spettacolo, allora la magia ha fatto davvero il suo lavoro.
          </p>
        </section>
      </div>
    </main>
  );
}