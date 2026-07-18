import PhotoGallery from "../components/PhotoGallery";

export default function GalleriaFoto() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">

        <section className="mb-16 rounded-[36px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            GALLERIA
          </p>

          <h1 className="mt-6 text-5xl font-semibold text-white">
            Immagini che raccontano lo spettacolo.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/70">
            Una raccolta di fotografie reali che raccontano la magia,
            la comicità e le emozioni vissute durante gli spettacoli
            di Magico Camillo.
          </p>
        </section>

        <PhotoGallery />

      </div>
    </main>
  );
}