import Link from "next/link";

interface ServiceDetailPageProps {
  title: string;
  intro: string;
  heroImage: string;
  description: string;
  features: Array<{ title: string; description: string }>;
}

const technicalCards = [
  {
    icon: "⏰",
    title: "Arrivo",
    text: "Arrivo sul posto almeno 60 minuti prima dell'inizio dello spettacolo. Il montaggio richiede circa 1 ora e lo smontaggio circa 30 minuti.",
  },
  {
    icon: "🚐",
    title: "Accesso",
    text: "È importante poter raggiungere il luogo dello spettacolo con il furgone. Scale, lunghi percorsi o difficoltà di accesso devono essere comunicati in anticipo.",
  },
  {
    icon: "🔌",
    title: "Alimentazione",
    text: "È sufficiente una normale presa di corrente 220 V. L'assorbimento massimo previsto è di circa 3,5 kW.",
  },
  {
    icon: "🎭",
    title: "Spazio scenico",
    text: "Il palco non è indispensabile. Se presente, valorizza ulteriormente lo spettacolo e migliora la visibilità del pubblico.",
  },
  {
    icon: "🔊",
    title: "Audio e luci",
    text: "Magico Camillo è completamente autonomo con impianto audio professionale Bose e impianto luci completo a LED.",
  },
  {
    icon: "🌫️",
    title: "Effetti speciali",
    text: "Durante lo spettacolo possono essere utilizzati macchina del fumo e altri effetti scenici. È importante verificare l'eventuale presenza di sensori antincendio.",
  },
  {
    icon: "🚧",
    title: "Durante il montaggio",
    text: "Per consentire un allestimento rapido e sicuro, la sala deve rimanere libera da pubblico, bambini e ospiti durante le operazioni di montaggio.",
  },
  {
    icon: "🤝",
    title: "Esigenze particolari",
    text: "Ogni struttura è diversa. In presenza di esigenze tecniche o logistiche particolari troveremo insieme la soluzione migliore.",
  },
];

export default function ServiceDetailPage({
  title,
  intro,
  heroImage,
  description,
  features,
}: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
              Spettacoli
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
              {intro}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)]">
            <img
              src={heroImage}
              alt={title}
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
              Caratteristiche dello spettacolo
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Un intrattenimento elegante, coinvolgente e memorabile.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-stage backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
              Informazioni tecniche
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Informazioni utili per gli organizzatori
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Prima dello spettacolo è utile conoscere alcuni semplici aspetti
              organizzativi e tecnici che permettono di preparare tutto nel
              migliore dei modi.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {technicalCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#d4af37]/20 bg-white/5 p-7 shadow-stage backdrop-blur-xl transition duration-300 hover:border-[#d4af37]/50 hover:bg-white/10"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(0,0,0,0.9))] p-10 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">
            Preventivo
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Richiedi un preventivo personalizzato.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Ti contatteremo per definire il format ideale, la durata e le
            esigenze tecniche del tuo evento.
          </p>

          <Link
            href="/richiedi-preventivo"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f]"
          >
            Richiedi un preventivo
          </Link>
        </div>
      </section>
    </main>
  );
}