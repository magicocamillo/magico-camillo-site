export default function Boutique() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Boutique</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Una selezione di prodotti esclusivi a tema magia.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Scopri gadget, accessori e proposte speciali firmate Magico Camillo per portare a casa un pezzo dello spettacolo.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Tazza Magica", price: "€29", description: "Un oggetto di scena ricco di stile." },
            { name: "Il Kit del Mago", price: "€49", description: "Semplici trucchi per stupire amici e famiglia." },
            { name: "Poster Limitato", price: "€19", description: "Edizione esclusiva dello show." },
          ].map((product) => (
            <article key={product.name} className="rounded-[28px] border border-white/10 bg-black/60 p-8 shadow-stage transition hover:border-[#d4af37]/40">
              <div className="mb-6 h-48 rounded-3xl bg-white/5" />
              <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
              <p className="mt-3 text-white/70">{product.description}</p>
              <p className="mt-6 text-lg font-semibold text-[#d4af37]">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
