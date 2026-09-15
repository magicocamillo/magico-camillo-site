const inputClassName = "mt-3 block w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20";

export default function ContactForm() {
  return (
    <form className="mt-8 space-y-6" action="#" method="post">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Nome
          <input className={inputClassName} type="text" name="firstName" placeholder="Il tuo nome" />
        </label>
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Cognome
          <input className={inputClassName} type="text" name="lastName" placeholder="Il tuo cognome" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Email
          <input className={inputClassName} type="email" name="email" placeholder="tuo@email.it" />
        </label>
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Telefono
          <input className={inputClassName} type="tel" name="phone" placeholder="+39 333 1234567" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Data evento
          <input className={inputClassName} type="date" name="eventDate" />
        </label>
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Località
          <input className={inputClassName} type="text" name="location" placeholder="Località" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Tipologia evento
          <input className={inputClassName} type="text" name="eventType" placeholder="Family Hotel, Teatro..." />
        </label>
        <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
          Numero partecipanti
          <input className={inputClassName} type="number" name="participants" placeholder="50" />
        </label>
      </div>

      <label className="block text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]/85">
        Messaggio
        <textarea className={`${inputClassName} h-40 resize-none`} name="message" placeholder="Raccontami il tuo evento e cosa desideri..." />
      </label>

      <label className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-black/40 px-4 py-4 text-sm leading-7 text-white/70">
        <input type="checkbox" name="privacy" className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-[#d4af37] focus:ring-[#d4af37]" />
        <span>Ho letto la Privacy Policy</span>
      </label>

      <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f] hover:shadow-[0_0_30px_rgba(212,175,55,0.16)]">
        Richiedi disponibilità
      </button>
    </form>
  );
}
