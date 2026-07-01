export default function Spettacoli() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Spettacoli</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Spettacoli pensati per bambini, famiglie e comunità.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Scopri le proposte di Magico Camillo per hotel, villaggi, Pro Loco, teatri, piazze e feste private con un tono divertente, poetico e professionale.
          </p>
        </section>

        <div className="grid gap-8 xl:grid-cols-3">
          {[
            {
              title: "Family Hotel e Villaggi",
              subtitle: "Spettacoli studiati per le vacanze in famiglia.",
              details: [
                "Intrattenimento quotidiano e serale.",
                "Numeri interattivi per bambini di ogni età.",
                "Atmosfera calda e autentica.",
              ],
            },
            {
              title: "Feste, piazze e teatri",
              subtitle: "Show coinvolgenti per eventi all’aperto e sale teatrali.",
              details: [
                "Ritmo brillante e humor contagioso.",
                "Adatto a pubblici misti.",
                "Componibilità per piazze e teatri.",
              ],
            },
            {
              title: "Bolle di sapone e poesia",
              subtitle: "Finali magici ed emozionanti per ogni festa.",
              details: [
                "Moment di dolcezza e stupore.",
                "Bolle giganti e scenografie luminose.",
                "Respiro poetico per chiudere con magia.",
              ],
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-stage transition hover:border-[#d4af37]/40">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">{item.subtitle}</p>
              <ul className="mt-6 space-y-3 text-white/70">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
