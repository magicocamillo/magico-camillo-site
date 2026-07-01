const images = [
  { label: "Momento di scena", src: "/images/photo-1.jpg" },
  { label: "Ritratto elegante", src: "/images/photo-2.jpg" },
  { label: "Il pubblico coinvolto", src: "/images/photo-3.jpg" },
  { label: "Illusione sul palco", src: "/images/photo-4.jpg" },
];

export default function GalleriaFoto() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Galleria Foto</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Uno sguardo visivo nel mondo magico di Magico Camillo.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Fotografie ricche di atmosfera, luci e momenti indimenticabili catturano l’essenza dello spettacolo.
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <figure key={image.src} className="group overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-stage transition hover:-translate-y-1 hover:border-[#d4af37]/40">
              <div className="h-72 bg-white/5 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image.src})` }} />
              <figcaption className="bg-black/70 px-4 py-4 text-sm text-white/75">{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
