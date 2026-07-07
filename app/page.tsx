import MagicMomentsSection from "./components/MagicMomentsSection";
import { AnimatedBox, AnimatedButton, AnimatedSection, fadeUpVariant, hoverLift } from "./components/AnimatedSection";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

const statsCards = [
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
      <Hero />

      <Experience />

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
            {statsCards.map((item) => (
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
