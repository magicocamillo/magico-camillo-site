import Link from "next/link";
import type { Metadata } from "next";
import TechnicalInfo from "../components/TechnicalInfo";

export const metadata: Metadata = {
  title: "Spettacoli",
  description:
    "Magia, comicità, teatro e poesia per bambini, famiglie, teatri, comuni, festival e Family Hotel.",
  alternates: { canonical: "/spettacoli" },
  openGraph: {
    title: "Spettacoli | Magico Camillo",
    description:
      "Scopri gli spettacoli di Magico Camillo dedicati a Family Hotel, festival, teatri, comuni ed eventi.",
    url: "/spettacoli",
    images: [
      {
        url: "/images/camillo/spettacoli-hero.jpg",
        width: 2048,
        height: 1312,
        alt: "Magico Camillo durante uno spettacolo",
      },
    ],
  },
};

const experienceCards = [
  {
    title: "Family Hotel",
    description:
      "Uno spettacolo elegante, dinamico e coinvolgente pensato per gli ospiti di hotel e resort. Magia, comicità e poesia per tutta la famiglia.",
    image: "/images/gallery/gallery 03.jpeg",
    href: "/spettacoli/family-hotel",
    badges: [
      "⏱ 55 minuti",
      "👨‍👩‍👧 Tutta la famiglia",
      "🔊 Audio professionale",
      "🫧 Finale con bolle",
    ],
  },
  {
    title: "Teatri e Comuni",
    description:
      "Uno spettacolo completo per piazze, teatri e manifestazioni pubbliche con ritmo, comicità e grande coinvolgimento.",
    image: "/images/gallery/gallery 06.jpeg",
    href: "/spettacoli/teatri-comuni",
    badges: [
      "⏱ 55 minuti",
      "🎭 Teatro",
      "✨ Magia",
      "😂 Comicità",
    ],
  },
  {
    title: "Feste ed Eventi",
    description:
      "Compleanni, feste aziendali, eventi speciali e occasioni da ricordare con uno spettacolo costruito su misura.",
    image: "/images/gallery/gallery 08.jpeg",
    href: "/spettacoli/feste-eventi",
    badges: [
      "🎉 Eventi",
      "🎈 Compleanni",
      "👨‍👩‍👧 Famiglie",
      "✨ Personalizzabile",
    ],
  },
];

const reasons = [
  {
    icon: "✦",
    title: "15+ anni di esperienza",
    text: "Migliaia di spettacoli realizzati in tutta Italia.",
  },
  {
    icon: "★",
    title: "Oltre 3000 spettacoli",
    text: "Esperienza concreta davanti a qualsiasi pubblico.",
  },
  {
    icon: "◌",
    title: "Audio e luci professionali",
    text: "Arrivo completamente autonomo con attrezzatura professionale.",
  },
  {
    icon: "☁",
    title: "Finale poetico",
    text: "Le bolle di sapone trasformano il finale in un momento indimenticabile.",
  },
];

export default function Spettacoli() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="relative isolate h-[72vh] min-h-[620px] overflow-hidden">

        <img
          src="/images/camillo/spettacoli-hero.jpg"
          alt="Magico Camillo"
className="absolute inset-0 h-full w-full object-cover object-[center_15%]"        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_42%)]" />

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-14">

          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-5 py-2 backdrop-blur-xl">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">

                ✨ Festival • Family Hotel • Teatri • Comuni

              </span>

            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.02] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">

              La magia che emoziona

              <span className="block text-[#d4af37]">

                tutta la famiglia.

              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/80">

              Magia, comicità, tecnologia e poesia si fondono in spettacoli
              professionali che coinvolgono bambini e adulti dal primo
              all'ultimo minuto.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/richiedi-preventivo"
                className="rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition duration-300 hover:scale-105 hover:bg-[#e5c04a]"
              >
                Richiedi un preventivo
              </Link>

              <Link
                href="/galleria-foto"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Guarda la galleria
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-14">

        <div className="mx-auto max-w-7xl space-y-10">
                    {experienceCards.map((item) => (
            <article
              key={item.title}
              className="group grid overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.05] hover:shadow-[0_0_70px_rgba(212,175,55,0.12)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 lg:h-full"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
                  Spettacolo
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {item.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/70">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-[#d4af37] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:scale-105 hover:bg-[#e6c95f]"
                >
                  Scopri di più
                </Link>

              </div>

            </article>
          ))}
        </div>

      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-20 sm:px-10 lg:px-14">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
              Perché scegliere Magico Camillo
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white">
              Uno spettacolo costruito
              <span className="text-[#d4af37]"> per emozionare.</span>
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {reasons.map((item) => (

              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-[#d4af37]/30 hover:bg-white/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/10 text-2xl text-[#d4af37]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <TechnicalInfo />

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />

        <div className="relative mx-auto flex max-w-6xl justify-center px-6">

          <div className="w-full rounded-[40px] border border-[#d4af37]/20 bg-white/[0.03] p-12 text-center backdrop-blur-xl">

            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
              Prenotazioni
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-white">
              Porta la magia
              <span className="text-[#d4af37]"> nel tuo evento.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Se stai organizzando un festival, una stagione teatrale,
              un evento comunale, un Family Hotel o una festa privata,
              sarò felice di costruire insieme lo spettacolo più adatto.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/richiedi-preventivo"
                className="rounded-full bg-[#d4af37] px-9 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105 hover:bg-[#e6c95f]"
              >
                Richiedi un preventivo
              </Link>

              <Link
                href="/contatti"
                className="rounded-full border border-white/20 px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Contattami
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
        