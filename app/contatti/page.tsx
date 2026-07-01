export default function Contatti() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Contatti</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Prenota lo spettacolo o richiedi maggiori informazioni.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Compila il form oppure usa i riferimenti qui sotto per contattare direttamente il team di Magico Camillo.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-stage">
            <h2 className="text-2xl font-semibold text-white">Info di contatto</h2>
            <div className="mt-8 space-y-6 text-white/70">
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>info@magicocamillo.it</p>
              </div>
              <div>
                <p className="font-semibold text-white">Telefono</p>
                <p>+39 345 123 4567</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sede</p>
                <p>Milano, Italia</p>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-stage">
            <div className="space-y-6">
              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                Nome
                <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="text" placeholder="Il tuo nome" />
              </label>
              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                Email
                <input className="mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" type="email" placeholder="tuo@email.it" />
              </label>
              <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
                Messaggio
                <textarea className="mt-3 block h-40 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20" placeholder="Raccontami il tuo evento..." />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#f3dd8c]">
              Invia messaggio
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
