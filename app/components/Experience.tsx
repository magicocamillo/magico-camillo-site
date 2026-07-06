export default function Experience() {
  return (
    <section className="bg-black text-white">
      <div className="w-full overflow-hidden border-t border-white/10 bg-black">
        <div className="relative w-full">
          <img
            src="/images/gallery/gallery 02.jpeg"
            alt="L'esperienza"
            className="h-[380px] w-full object-cover object-center sm:h-[520px] lg:h-[640px]"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-8 pt-20 sm:px-8 sm:pb-10 lg:px-14 lg:pb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37] text-opacity-95">
              L'ESPERIENZA
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Non porto soltanto magia.
            </h2>
            <p className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              Porto ricordi che rimangono.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
              Ogni spettacolo è costruito per far ridere, stupire ed emozionare bambini e adulti insieme.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-14 lg:py-16">
        <div className="flex flex-col gap-6 text-center uppercase tracking-[0.35em] sm:flex-row sm:justify-between sm:text-left">
          <span className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">COMICITÀ</span>
          <span className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">MERAVIGLIA</span>
          <span className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">EMOZIONE</span>
        </div>
      </div>
    </section>
  );
}
