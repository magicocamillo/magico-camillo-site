import Link from "next/link";
import MagicMomentsSection from "./components/MagicMomentsSection";
import { AnimatedBox, AnimatedButton, AnimatedSection, fadeUpVariant, hoverLift } from "./components/AnimatedSection";

const stats = [
  { value: "15+", label: "anni di esperienza" },
  { value: "1000+", label: "spettacoli" },
  { value: "migliaia", label: "di sorrisi" },
];

const shows = [
  {
    title: "Family Hotel",
    description: "Show estivo raffinato per famiglie in vacanza.",
    icon: "🏨",
  },
  {
    title: "Teatri",
    description: "Performance eleganti e coinvolgenti per platee raccolte.",
    icon: "🎭",
  },
  {
    title: "Pro Loco",
    description: "Spettacoli allegri per piazze, feste di paese e comunità.",
    icon: "🏘️",
  },
  {
    title: "Feste private",
    description: "Evento su misura che trasforma ogni festa in una festa magica.",
    icon: "🎉",
  },
  {
    title: "Scuole",
    description: "Spettacoli educativi, divertenti e pieni di meraviglia.",
    icon: "📚",
  },
  {
    title: "Biblioteche",
    description: "Appuntamenti poetici e incantati per lettori piccoli e grandi.",
    icon: "📖",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-black text-white">
      <AnimatedSection
        className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 lg:px-14"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_20%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.3),_transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#d4af37]/30 blur-sm animate-float"
              style={{
                top: `${6 + (index * 8)}%`,
                left: `${(index * 11) % 94}%`,
                animationDelay: `${index * 0.35}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 lg:grid-cols-[55%_45%]">
          <div className="space-y-12 animate-fade-up">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">MAGICO CAMILLO</p>
            <div className="space-y-8">
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl xl:text-7xl">
                La magia che fa ridere, stupisce e resta nel cuore.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-white/70 sm:text-2xl">
                Spettacoli di magia comica, teatro, tecnologia e poesia per famiglie, hotel, piazze e teatri.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/video"
                className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37]/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4af37] transition duration-300 hover:bg-[#d4af37]/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)]"
              >
                Guarda il trailer
              </Link>
              <Link
                href="/spettacoli"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e6c95f] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                Scopri gli spettacoli
              </Link>
            </div>
          </div>

          <div className="relative h-[72vh] min-h-[520px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.16),_transparent_36%)] blur-3xl" />
            <div className="absolute inset-0 hero-mask">
              <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center animate-kenburns" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/95" />
          </div>
        </div>
      </AnimatedSection>

      <section className="border-t border-white/10 bg-black px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Perché scegliere Magico Camillo</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Un’esperienza elegante, coinvolgente e memorabile.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "15+ anni di esperienza",
                text: "Spettacoli per famiglie, hotel, teatri, piazze ed eventi in tutta Italia.",
              },
              {
                title: "Uno spettacolo completo",
                text: "Magia comica, teatro, musica, tecnologia, interazione e poesia.",
              },
              {
                title: "Finale emozionante",
                text: "Le bolle di sapone trasformano gli ultimi minuti in un momento da ricordare.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-[#111111] via-black to-[#0b0b0b] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:shadow-[0_20px_70px_rgba(212,175,55,0.14)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 text-xl text-[#d4af37]">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/70">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection
        className="bg-black px-6 py-14 sm:px-10 lg:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center text-white">
          <AnimatedBox
            className="rounded-[32px] border border-white/10 bg-black/95 px-8 py-10 shadow-stage backdrop-blur-xl"
            whileHover={{ y: -3 }}
          >
            <p className="text-[1.35rem] tracking-[0.4em] text-[#d4af37]">★★★★★</p>
            <p className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              "Ogni spettacolo è un momento da ricordare."
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/70 sm:text-base">
              Magia • Teatro • Comicità • Tecnologia • Emozione
            </p>
          </AnimatedBox>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-white/10 bg-black px-6 py-16 sm:px-10 lg:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <AnimatedBox className="space-y-6 text-white" variants={fadeUpVariant}>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Guarda il trailer</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Guarda il trailer dello spettacolo.</h2>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Due minuti per scoprire l’universo del Magico Camillo.
            </p>
            <div className="rounded-[32px] border border-[#d4af37]/15 bg-[#111111]/80 p-6 shadow-stage">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/70">Anteprima esclusiva</p>
              <p className="mt-4 text-white/80">
                Un assaggio di magia, umorismo e atmosfera che invita il pubblico ad alzare lo sguardo.
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/90 shadow-stage"
            whileHover={hoverLift}
          >
            <div className="aspect-[16/9] bg-[url('/images/video-placeholder.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedButton
                className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="ml-1 text-3xl">▶</span>
              </AnimatedButton>
            </div>
          </AnimatedBox>
        </div>
      </AnimatedSection>

      <section className="border-t border-white/10 bg-black px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Per ogni occasione</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Per ogni occasione</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: "🏨", title: "Family Hotel" },
              { icon: "🎭", title: "Teatri" },
              { icon: "🌟", title: "Piazze e Festival" },
              { icon: "🏢", title: "Eventi aziendali" },
            ].map((item) => (
              <AnimatedBox
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-stage backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10"
                whileHover={hoverLift}
              >
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/10 text-3xl text-[#d4af37] transition duration-300 group-hover:scale-105">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent blur-xl" />
                  <span className="relative">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </AnimatedBox>
            ))}
          </div>
        </div>
      </section>

      <MagicMomentsSection />

      <section className="relative overflow-hidden bg-black px-0 py-20">
        <div className="absolute inset-0 bg-[url('/images/camillo/panorama.jpg')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center text-white sm:px-10">
          <div className="rounded-[40px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl shadow-stage">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">La meraviglia non ha età.</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl">
              La meraviglia non ha età.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Ogni sorriso è il vero finale dello spettacolo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[36px] border border-white/10 bg-white/5 p-10 text-center shadow-stage backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-white/10">
                <p className="text-5xl font-semibold text-[#d4af37] sm:text-6xl">{item.value}</p>
                <p className="mt-6 text-lg uppercase tracking-[0.2em] text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
