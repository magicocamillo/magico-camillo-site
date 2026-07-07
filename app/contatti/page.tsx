import Link from "next/link";
import SectionTitle from "./components/SectionTitle";

const faqs = [
  {
    question: "Quanto dura lo spettacolo?",
    answer: "La durata media è di circa 55 minuti, pensata per mantenere alta l’attenzione del pubblico senza appesantire la serata.",
  },
  {
    question: "Serve un impianto audio?",
    answer: "Sì, ma in forma professionale e semplice. In molti casi è sufficiente una configurazione base ben allestita, che possiamo indicare in fase di preventivo.",
  },
  {
    question: "Lavori in tutta Italia?",
    answer: "Sì, collaboro con strutture ricettive, comuni, teatri, piazze e eventi privati in diverse località italiane.",
  },
  {
    question: "Per quale età è adatto?",
    answer: "Gli spettacoli sono pensati per bambini, famiglie e pubblici misti, con un linguaggio accessibile e molto coinvolgente.",
  },
  {
    question: "È possibile personalizzare lo spettacolo?",
    answer: "Assolutamente. Posso adattare il format al tipo di evento, alla location e alle esigenze del pubblico.",
  },
];

export default function Contatti() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Contatti</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Parliamo del tuo prossimo evento.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Che si tratti di un Family Hotel, di una piazza, di un teatro o di una festa, sarò felice di aiutarti a creare uno spettacolo indimenticabile.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)]">
            <img
              src="/images/camillo/hero.jpg"
              alt="Magico Camillo in scena"
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-[0_0_70px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10">
            <SectionTitle
              eyebrow="Richiesta"
              title="Invia la tua richiesta"
              description="Compila il modulo e ti risponderò il prima possibile con disponibilità, format e informazioni utili."
            />

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Nome
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="text" placeholder="Il tuo nome" />
                </label>
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Email
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="email" placeholder="tuo@email.it" />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Telefono
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="tel" placeholder="+39 333 1234567" />
                </label>
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Data evento
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="date" />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Località
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="text" placeholder="Località" />
                </label>
                <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                  Tipo di evento
                  <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="text" placeholder="Family Hotel, Teatro..." />
                </label>
              </div>

              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                Numero indicativo di partecipanti
                <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="number" placeholder="50" />
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                Messaggio
                <textarea className="mt-3 block h-40 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" placeholder="Raccontami il tuo evento e cosa desideri..." />
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f]">
                Richiedi disponibilità
              </button>
            </form>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(0,0,0,0.9))] p-8 shadow-[0_0_70px_rgba(212,175,55,0.12)] backdrop-blur-xl sm:p-10">
            <SectionTitle
              eyebrow="Contatti rapidi"
              title="Parliamo subito"
              description="Puoi scrivermi direttamente o contattarmi telefonicamente per organizzare il tuo evento."
            />

            <div className="mt-8 space-y-6 text-white/80">
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6">
                <p className="text-2xl">📞</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">Telefono</p>
                <p className="mt-2 text-lg text-white">+39 345 123 4567</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6">
                <p className="text-2xl">📧</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">Email</p>
                <p className="mt-2 text-lg text-white">info@magicocamillo.it</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6">
                <p className="text-2xl">📍</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">Trentino - Italia</p>
                <p className="mt-2 text-lg text-white">Disponibile in tutta Italia</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6">
                <p className="text-2xl">🕒</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#d4af37]/80">Risposta</p>
                <p className="mt-2 text-lg text-white">Entro 24 ore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Domande frequenti"
            description="Tutte le informazioni utili per organizzare al meglio il tuo evento."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-stage backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_0_70px_rgba(0,0,0,0.3)]">
          <img src="/images/camillo/panorama.jpg" alt="Contatti" className="h-[420px] w-full object-cover object-center sm:h-[520px]" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-3xl rounded-[32px] border border-white/10 bg-black/35 p-10 backdrop-blur-xl sm:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Contattami</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ogni grande spettacolo inizia con un semplice messaggio.
              </h2>
              <Link
                href="/contatti"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f]"
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
