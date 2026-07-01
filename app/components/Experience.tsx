export default function Experience() {
  const panels = [
    {
      title: "COMICITÀ",
      text: "Ridere insieme è la magia più potente.",
      image: "/images/gallery/gallery 01.jpeg",
    },
    {
      title: "MERAVIGLIA",
      text: "Lo stupore negli occhi vale più di mille parole.",
      image: "/images/gallery/gallery 02.jpeg",
    },
    {
      title: "EMOZIONE",
      text: "Quando lo spettacolo finisce, il ricordo resta.",
      image: "/images/gallery/gallery 03.jpeg",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-black px-4 py-16 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">L'ESPERIENZA</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ogni spettacolo racconta una storia.
          </h2>
          <p className="text-base leading-7 text-white/70 sm:text-lg lg:text-xl">
            Non è soltanto magia. È un viaggio fatto di risate, stupore ed emozioni che coinvolge bambini e adulti.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {panels.map((panel) => (
            <article
              key={panel.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-black"
            >
              <img
                src={panel.image}
                alt={panel.title}
                className="h-[380px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-white sm:text-2xl">
                  {panel.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-7 text-white/80 sm:text-base">
                  {panel.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center px-2 py-12 text-center sm:px-6 lg:px-10 lg:py-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ogni sorriso è diverso.
            </p>
            <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ogni spettacolo è unico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
