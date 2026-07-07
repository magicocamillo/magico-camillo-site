import Link from "next/link";

const experienceCards = [
  {
    title: "Comicità",
    image: "/images/gallery/gallery 03.jpeg",
    description: "Uno spettacolo che scioglie il ghiaccio con ironia, spontaneità e sorrisi immediati.",
  },
  {
    title: "Meraviglia",
    image: "/images/gallery/gallery 06.jpeg",
    description: "Ogni gesto è pensato per sorprendere e lasciare il pubblico con un senso di stupore autentico.",
  },
  {
    title: "Emozione",
    image: "/images/gallery/gallery 08.jpeg",
    description: "Momenti intensi, delicati e memorabili che restano nel cuore di grandi e piccini.",
  },
];

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

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experienceCards.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,0,0,0.35)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]/85">Esperienza</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(212,175,55,0.14),_rgba(0,0,0,0.92))] p-8 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:p-10 lg:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Trailer</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Scopri l’atmosfera dello spettacolo.
              </h3>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Un assaggio di magia, comicità ed emozione per invitarti a guardare oltre.
              </p>
            </div>
            <Link
              href="/video"
              className="group inline-flex items-center justify-center gap-3 self-start rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37] transition duration-300 hover:bg-[#d4af37]/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] lg:self-auto"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-black/30 text-lg transition duration-300 group-hover:scale-105">
                ▶
              </span>
              <span>Play</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
