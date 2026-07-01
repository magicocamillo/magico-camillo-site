export default function Video() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Video</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Trailer e clip selezionate degli spettacoli.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Guarda i migliori momenti, numeri sorprendenti e l’energia della performance dal vivo.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { title: "Il gran finale", description: "Un numero carico di energia e suspense." },
            { title: "Il cabaret magico", description: "Momenti di comicità con magia interattiva." },
          ].map((item) => (
            <article key={item.title} className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-stage">
              <div className="aspect-video overflow-hidden rounded-3xl bg-white/5">
                <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.25em] text-white/40">
                  Video placeholder
                </div>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
