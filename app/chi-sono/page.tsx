export default function ChiSono() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Chi sono</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Magico Camillo: il mago comico per bambini e famiglie.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Dalla scena del Family Hotel alle piazze delle Pro Loco, dai teatri alle feste private, Magico Camillo porta sul palco magia, poesia e risate per tutte le età.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-stage">
            <h2 className="text-2xl font-semibold text-white">Esperienza</h2>
            <p className="mt-4 leading-8 text-white/70">
              Oltre 10 anni di spettacoli per hotel, villaggi turistici, Pro Loco, teatri, piazze e feste private. Ogni evento è curato nei dettagli per una serata indimenticabile.
            </p>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-stage">
            <h2 className="text-2xl font-semibold text-white">Stile</h2>
            <p className="mt-4 leading-8 text-white/70">
              Divertente, poetico e teatrale: numeri semplici ma sorprendenti, con bolle di sapone, momenti tecnologici e tanta complicità tra grandi e bambini.
            </p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Family Hotel",
              detail: "Spettacoli perfetti per l’animazione delle vacanze in famiglia.",
            },
            {
              title: "Pro Loco e piazze",
              detail: "Eventi pensati per comunità, festival e momenti di incontro.",
            },
            {
              title: "Feste private",
              detail: "Divertimento su misura per compleanni, cene e serate indimenticabili.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-stage transition hover:border-[#d4af37]/40">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{card.detail}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
