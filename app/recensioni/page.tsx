import Link from "next/link";

const stats = [
  { value: "3000+", label: "Spettacoli" },
  { value: "15+", label: "Anni di esperienza" },
  { value: "100+", label: "Family Hotel" },
  { value: "Migliaia", label: "di bambini coinvolti" },
];

const reviews = [
  {
    name: "Sara M.",
    category: "Family Hotel",
    text: "Un intrattenimento elegante, coinvolgente e perfetto per tutte le età. Gli ospiti hanno parlato di quella serata per giorni.",
  },
  {
    name: "Marco e Giulia",
    category: "Comune",
    text: "Magia, ironia e poesia in un mix davvero speciale. Il pubblico ha sorriso e applaudito con grande entusiasmo.",
  },
  {
    name: "Elena R.",
    category: "Teatro",
    text: "Un vero spettacolo di qualità, con grande professionalità e una presenza scenica sorprendente.",
  },
  {
    name: "Luca B.",
    category: "Pro Loco",
    text: "Perfetto per il nostro evento: semplice, coinvolgente e pieno di atmosfera. Consigliatissimo.",
  },
  {
    name: "Chiara P.",
    category: "Family Hotel",
    text: "Ha trasformato una serata semplice in un momento magico e indimenticabile per bambini e adulti.",
  },
  {
    name: "Andrea T.",
    category: "Comune",
    text: "Una performance raffinata, brillante e piena di emozione. Ha saputo conquistare tutto il pubblico.",
  },
  {
    name: "Marta L.",
    category: "Teatro",
    text: "Lo spettacolo è stato sorprendente: delicato, originale e davvero ben costruito. Un’esperienza unica.",
  },
  {
    name: "Simone V.",
    category: "Pro Loco",
    text: "Un artista capace di unire magia, comicità e poesia in modo naturale e impeccabile."
  },
];

const hotelLogos = ["Hotel", "Resort", "Villa", "Stay", "Grand", "Maison"];

export default function RecensioniPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Recensioni</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Le emozioni più belle ce le raccontano gli spettatori.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Oltre 3000 spettacoli, migliaia di sorrisi e tantissimi ricordi condivisi.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)]">
            <img
              src="/images/camillo/panorama.jpg"
              alt="Magico Camillo in scena"
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center shadow-stage backdrop-blur-xl">
                <p className="text-4xl font-semibold text-[#d4af37] sm:text-5xl">{item.value}</p>
                <p className="mt-4 text-lg uppercase tracking-[0.2em] text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Le recensioni</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Il pubblico racconta la magia di ogni serata.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.category}`} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-stage backdrop-blur-xl">
                <p className="text-lg text-[#d4af37]">★★★★★</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{review.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">{review.category}</p>
                <p className="mt-5 text-base leading-8 text-white/70">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Hotel</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Hanno scelto Magico Camillo
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotelLogos.map((logo) => (
              <div key={logo} className="rounded-[28px] border border-white/10 bg-black/70 p-8 text-center text-xl font-semibold uppercase tracking-[0.25em] text-white/70 shadow-stage">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(0,0,0,0.9))] p-10 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Preventivo</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Vuoi regalare un ricordo indimenticabile ai tuoi ospiti?
          </h2>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f]"
          >
            Richiedi un preventivo
          </Link>
        </div>
      </section>
    </main>
  );
}
