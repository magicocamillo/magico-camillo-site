export default function Boutique() {
  const products = [
    {
      id: "prod-1",
      name: "Tazza del Mago",
      price: "€29",
      description: "Ceramica lucida con dettagli dorati, perfetta per colazioni magiche.",
      image: "/images/gallery/gallery 01.jpeg",
    },
    {
      id: "prod-2",
      name: "Kit Piccolo Illusionista",
      price: "€49",
      description: "Un set curato di piccoli trucchi per iniziare a stupire il pubblico.",
      image: "/images/gallery/gallery 03.jpeg",
    },
    {
      id: "prod-3",
      name: "Poster Firmato",
      price: "€19",
      description: "Stampa in edizione limitata, firma dell'artista inclusa.",
      image: "/images/gallery/gallery 05.jpeg",
    },
    {
      id: "prod-4",
      name: "Scarf della Sera",
      price: "€39",
      description: "Sciarpa elegante in tessuto pregiato, ispirata allo spettacolo.",
      image: "/images/gallery/gallery 07.jpeg",
    },
  ];

  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 rounded-[28px] border border-white/8 bg-black/60 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Boutique</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Oggetti di scena e gadget</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Scegli un pezzo unico ispirato allo spettacolo — design elegante, materiali curati, atmosfera teatrale.
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-black/60 border border-white/6 p-4 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="mt-4 flex flex-col justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">{p.name}</h2>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#d4af37]">{p.price}</span>
                  <button className="rounded-full bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e6c95f]">
                    Acquista
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
