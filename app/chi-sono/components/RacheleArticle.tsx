export default function RacheleArticle() {
  return (
    <>
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
              Lei mi guardò e rispose con la semplicità che soltanto i bambini
              possiedono:
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
          </div>
        </div>
      </section>

      {/* ARTICOLO DI ALESSANDRA SARTORI */}

      <section className="mt-24 overflow-hidden rounded-[42px] border border-[#d4af37]/20 bg-gradient-to-br from-[#181818] to-black">
        <div className="p-8 sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Rassegna stampa
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Il ritratto di Magico Camillo
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-white/70 sm:text-xl">
            La scrittrice{" "}
            <strong className="text-white">Alessandra Sartori</strong> ha
            raccontato la nascita di Magico Camillo nel racconto{" "}
            <strong className="text-white">
              “Da poliziotto a clown, la storia di Emanuele”
            </strong>
            .
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-white/60">
            Clicca sulle pagine per aprirle a grandezza naturale e leggere
            l’articolo completo.
          </p>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
            <a
              href="/documents/alessandra-sartori-1.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-2xl"
            >
              <img
                src="/documents/alessandra-sartori-1.jpg"
                alt="Il ritratto di Magico Camillo, pagina 1"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <a
              href="/documents/alessandra-sartori-2.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-2xl"
            >
              <img
                src="/documents/alessandra-sartori-2.jpg"
                alt="Il ritratto di Magico Camillo, pagina 2"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}