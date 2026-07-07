import Link from "next/link";

const experienceCards = [
  {
    title: "Family Hotel",
    description:
      "Spettacoli eleganti, coinvolgenti e adatti ai momenti di convivialità in hotel, villaggi e strutture ricettive.",
    image: "/images/gallery/gallery 03.jpeg",
    href: "/spettacoli/family-hotel",
    badges: ["⏱ 55 minuti", "👨‍👩‍👧 Per tutta la famiglia", "🔊 Audio professionale incluso", "🫧 Finale con bolle di sapone"],
  },
  {
    title: "Teatri e Comuni",
    description:
      "Performance dal ritmo brillante, con magia, comicità e poesia pensate per sale teatrali, piazze e manifestazioni cittadine.",
    image: "/images/gallery/gallery 06.jpeg",
    href: "/spettacoli/teatri-comuni",
    badges: ["⏱ 55 minuti", "👨‍👩‍👧 Per tutta la famiglia", "🔊 Audio professionale incluso", "🫧 Finale con bolle di sapone"],
  },
  {
    title: "Feste ed Eventi",
    description:
      "Un intrattenimento su misura per compleanni, cerimonie, feste private e serate speciali che restano nella memoria.",
    image: "/images/gallery/gallery 08.jpeg",
    href: "/spettacoli/feste-eventi",
    badges: ["⏱ 55 minuti", "👨‍👩‍👧 Per tutta la famiglia", "🔊 Audio professionale incluso", "🫧 Finale con bolle di sapone"],
  },
];

const reasons = [
  { icon: "✦", title: "Oltre 15 anni di esperienza", text: "Una presenza costante sul palco con un approccio raffinato e autentico." },
  { icon: "★", title: "Oltre 3000 spettacoli", text: "Un repertorio costruito nel tempo per emozionare ogni tipo di pubblico." },
  { icon: "◌", title: "Impianto audio e luci professionale", text: "Tecnologia e cura degli ambienti per un risultato davvero spettacolare." },
  { icon: "☁", title: "Finale con bolle di sapone", text: "Un tocco magico che chiude ogni serata con poesia e meraviglia." },
];

export default function Spettacoli() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Spettacoli</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ogni spettacolo è un'esperienza da ricordare.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Magia, comicità, tecnologia e poesia per bambini, famiglie, teatri e Family Hotel.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)]">
            <img
              src="/images/camillo/hero.jpg"
              alt="Magico Camillo in scena"
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          {experienceCards.map((item) => (
            <article
              key={item.title}
              className="grid overflow-hidden rounded-[36px] border border-white/10 bg-black/60 shadow-[0_0_70px_rgba(0,0,0,0.3)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover object-center lg:h-full" />
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Spettacolo</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{item.title}</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-2 text-sm text-[#d4af37]">
                      {badge}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37] transition duration-300 hover:bg-[#d4af37]/20"
                >
                  Scopri
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Perché scegliere Magico Camillo</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Un’esperienza pensata per sorprendere davvero.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-stage backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-xl text-[#d4af37]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-0 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/camillo/panorama.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center text-white sm:px-10">
          <div className="rounded-[40px] border border-white/10 bg-black/35 p-10 backdrop-blur-xl shadow-[0_0_70px_rgba(0,0,0,0.3)] sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Emozioni in scena</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Portiamo emozioni, non soltanto spettacoli.
            </h2>
            <Link
              href="/contatti"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition duration-300 hover:bg-[#e6c95f]"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
