export default function TechnicalInfo() {
  const cards = [
    {
      icon: "⏰",
      title: "Arrivo",
      text: "È richiesto l'arrivo almeno 60 minuti prima dell'inizio dello spettacolo. Montaggio circa 1 ora, smontaggio circa 30 minuti.",
    },
    {
      icon: "🚐",
      title: "Accesso",
      text: "È importante poter raggiungere il luogo con il furgone. Se sono presenti scale, lunghi percorsi o difficoltà di accesso è necessario comunicarlo in anticipo.",
    },
    {
      icon: "🔌",
      title: "Alimentazione",
      text: "È sufficiente una normale presa di corrente 220 V con assorbimento massimo di circa 3,5 kW.",
    },
    {
      icon: "🎭",
      title: "Spazio scenico",
      text: "Il palco non è indispensabile, ma se presente valorizza ulteriormente lo spettacolo e migliora la visibilità del pubblico.",
    },
    {
      icon: "🔊",
      title: "Audio e luci",
      text: "Magico Camillo è completamente autonomo con impianto audio professionale Bose e impianto luci LED.",
    },
    {
      icon: "🌫️",
      title: "Effetti speciali",
      text: "Durante lo spettacolo possono essere utilizzati macchina del fumo ed effetti scenici. Verificare eventuali sensori antincendio.",
    },
    {
      icon: "🚧",
      title: "Durante il montaggio",
      text: "Per consentire un allestimento rapido e sicuro la sala dovrebbe rimanere libera da pubblico, bambini e ospiti.",
    },
    {
      icon: "🤝",
      title: "Esigenze particolari",
      text: "Ogni struttura è diversa. Per qualsiasi esigenza tecnica o logistica troveremo insieme la soluzione migliore.",
    },
  ];

  return (
    <section className="mt-32">
      <div className="text-center">
        <p className="uppercase tracking-[0.35em] text-[#d4af37] text-sm">
          Informazioni tecniche
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Tutto ciò che serve per organizzare lo spettacolo
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/70">
          Alcune semplici informazioni organizzative che permettono di
          preparare lo spettacolo nel migliore dei modi.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-[#d4af37]/20 bg-white/5 p-8 backdrop-blur transition duration-300 hover:border-[#d4af37]/50 hover:bg-white/10"
          >
            <div className="text-5xl">{card.icon}</div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              {card.title}
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}