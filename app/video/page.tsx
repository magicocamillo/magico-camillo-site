export default function Video() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">
            Video
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Trailer, clip e momenti dietro le quinte.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Guarda i migliori momenti degli spettacoli e scopri tutto il lavoro
            che avviene prima dell’arrivo del pubblico.
          </p>
        </section>

        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full"
            >
              <source
                src="/video/montaggio-spettacolo-timelapse.mp4"
                type="video/mp4"
              />

              Il browser non supporta la riproduzione del video.
            </video>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Dietro le quinte
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Come nasce uno spettacolo
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            In pochi secondi, tutto il lavoro che precede l’arrivo del pubblico:
            scenografia, luci, audio, attrezzature e un pizzico di caos
            organizzato.
          </p>
        </article>
      </div>
    </main>
  );
}