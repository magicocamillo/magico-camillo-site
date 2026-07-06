export default function Boutique() {
  const products = [
    {
      id: "prod-1",
      name: "Tazza del Mago",
      price: "€29",
      description: "Ceramica lucida con dettagli dorati.",
      image: "/images/gallery/gallery 01.jpeg",
    },
    {
      id: "prod-2",
      name: "Kit Piccolo Illusionista",
      price: "€49",
      description: "Set introduttivo di piccoli trucchi.",
      image: "/images/gallery/gallery 02.jpeg",
    },
    {
      id: "prod-3",
      name: "Poster Firmato",
      price: "€19",
      description: "Stampa in edizione limitata.",
      image: "/images/gallery/gallery 03.jpeg",
    },
    {
      id: "prod-4",
      name: "Scarf della Sera",
      price: "€39",
      description: "Sciarpa elegante ispirata allo show.",
      image: "/images/gallery/gallery 04.jpeg",
    },
    {
      id: "prod-5",
      name: "Portachiavi Magico",
      price: "€12",
      description: "Accessorio discreto, tocco dorato.",
      image: "/images/gallery/gallery 05.jpeg",
    },
    {
      id: "prod-6",
      name: "Gadget della Serata",
      price: "€25",
      description: "Oggetto di scena riprogettato per i fan.",
      image: "/images/gallery/gallery 06.jpeg",
    },
  ];

  return (
    <main className="px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Hero Boutique */}
        <section className="rounded-[20px] border border-white/6 bg-black/60 p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">BOUTIQUE</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Porta a casa un pizzico di magia.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Oggetti, gadget e piccole meraviglie ispirate al mondo del Magico Camillo.
          </p>
        </section>

        {/* Product grid */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-white/6 bg-black/50 p-4 transition hover:shadow-lg">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={p.image} alt={p.name} className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-white/70">{p.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#d4af37]">{p.price}</span>
                    <button className="rounded-full bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e6c95f]">
                      Richiedi acquisto
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Informative final section */}
        <section className="rounded-[14px] border border-white/6 bg-black/50 p-6">
          <h3 className="text-2xl font-semibold text-white">Come funziona</h3>
          <p className="mt-3 text-white/70">
            Per ora gli acquisti vengono gestiti su richiesta. Cliccando sul prodotto potrai inviare una richiesta e ricevere conferma via email.
          </p>
        </section>
      </div>
    </main>
  );
}
