const events = [
  { date: "10 Luglio 2026", location: "Family Hotel di Garda", title: "Detective Magico Camillo" },
  { date: "22 Luglio 2026", location: "Festa in Piazza, Torino", title: "Magia per famiglie" },
  { date: "05 Agosto 2026", location: "Teatro Comunale, Roma", title: "Bolle di sapone e poesia" },
];

export default function CalendarioEventi() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Calendario Eventi</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Prossimi appuntamenti in giro per l’Italia.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Segui le date in programma e scegli la tappa giusta per un pomeriggio di risate, misteri e magia per tutta la famiglia.
          </p>
        </section>

        <div className="space-y-6">
          {events.map((event) => (
            <article key={event.date} className="rounded-[28px] border border-white/10 bg-black/60 p-8 shadow-stage transition hover:border-[#d4af37]/40">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">{event.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{event.title}</h2>
              <p className="mt-2 text-white/70">{event.location}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
