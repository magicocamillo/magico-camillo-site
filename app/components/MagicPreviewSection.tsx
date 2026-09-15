import VintageTvPlayer from "./VintageTvPlayer";

export default function MagicPreviewSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-[#d4af37]">
            UN ASSAGGIO DELLO SPETTACOLO
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            La magia prende vita
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Nessun effetto speciale.
            Nessuna ripresa in studio.
            Solo uno dei tanti momenti che il pubblico vive durante uno
            spettacolo di Magico Camillo.
          </p>
        </div>

        <VintageTvPlayer
          src="/video/magia-camillo.mp4"
          poster="/images/about/stage.jpg"
        />
      </div>
    </section>
  );
}
