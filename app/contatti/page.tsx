"use client";

import { FormEvent, useState } from "react";

type FormData = {
  nome: string;
  email: string;
  telefono: string;
  tipologiaEvento: string;
  luogo: string;
  dataEvento: string;
  messaggio: string;
};

const initialFormData: FormData = {
  nome: "",
  email: "",
  telefono: "",
  tipologiaEvento: "",
  luogo: "",
  dataEvento: "",
  messaggio: "",
};

export default function ContattiPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.nome.trim()) {
      setErrorMessage("Inserisci il tuo nome.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Inserisci il tuo indirizzo email.");
      return;
    }

    if (!formData.messaggio.trim()) {
      setErrorMessage("Scrivi un messaggio.");
      return;
    }

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData?.error ||
            "Non è stato possibile inviare il messaggio."
        );
      }

      setSuccessMessage(
        "Messaggio inviato correttamente. Ti risponderò appena possibile."
      );

      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Si è verificato un errore durante l’invio."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-6 py-14 shadow-2xl backdrop-blur-xl sm:px-10 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.15),_transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_35%)]" />

          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Contatti
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Portiamo la magia
              <span className="block text-[#d4af37]">
                nel tuo prossimo evento
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Raccontami dove, quando e per quale occasione desideri lo
              spettacolo. Ti risponderò con tutte le informazioni necessarie
              per organizzare un evento coinvolgente, divertente e adatto a
              tutta la famiglia.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                Contatto diretto
              </p>

              <h2 className="mt-5 text-3xl font-semibold text-white">
                Parliamo del tuo evento
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Puoi contattarmi direttamente tramite telefono o email.
                Indica la data, la località e il tipo di evento per ricevere
                una risposta più precisa.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="tel:+393313712666"
                  className="group block rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Telefono
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white transition group-hover:text-[#d4af37]">
                    +39 331 3712666
                  </p>
                </a>

                <a
                  href="mailto:magicocamillo@me.com"
                  className="group block rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Email
                  </p>

                  <p className="mt-2 break-all text-xl font-semibold text-white transition group-hover:text-[#d4af37]">
                    magicocamillo@me.com
                  </p>
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                Ideale per
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Family Hotel",
                  "Teatri e Comuni",
                  "Biblioteche e scuole",
                  "Pro Loco e festival",
                  "Feste private",
                  "Eventi per famiglie",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#d4af37]/25 bg-[#d4af37]/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                Dotazione tecnica
              </p>

              <p className="mt-5 leading-7 text-white/75">
                Lo spettacolo dispone di impianto audio, luci ed effetti
                scenici. Nella maggior parte dei casi è sufficiente una presa
                elettrica nelle vicinanze dello spazio dello spettacolo.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Richiedi informazioni
            </p>

            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              Scrivimi i dettagli
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              I campi con l’asterisco sono obbligatori.
            </p>

            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Nome e cognome *
                  </label>

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    autoComplete="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@email.it"
                    autoComplete="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Telefono
                  </label>

                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+39"
                    autoComplete="tel"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipologiaEvento"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Tipo di evento
                  </label>

                  <select
                    id="tipologiaEvento"
                    name="tipologiaEvento"
                    value={formData.tipologiaEvento}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  >
                    <option value="">Seleziona una voce</option>
                    <option value="Family Hotel">Family Hotel</option>
                    <option value="Teatro o Comune">
                      Teatro o Comune
                    </option>
                    <option value="Scuola">Scuola</option>
                    <option value="Biblioteca">Biblioteca</option>
                    <option value="Pro Loco o festival">
                      Pro Loco o festival
                    </option>
                    <option value="Festa privata">Festa privata</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="luogo"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Luogo dell’evento
                  </label>

                  <input
                    id="luogo"
                    name="luogo"
                    type="text"
                    value={formData.luogo}
                    onChange={handleChange}
                    placeholder="Comune o località"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dataEvento"
                    className="mb-3 block text-sm font-medium text-white/80"
                  >
                    Data indicativa
                  </label>

                  <input
                    id="dataEvento"
                    name="dataEvento"
                    type="date"
                    value={formData.dataEvento}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="messaggio"
                  className="mb-3 block text-sm font-medium text-white/80"
                >
                  Messaggio *
                </label>

                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Descrivi brevemente l’evento, il pubblico previsto, gli orari e ogni altra informazione utile."
                  rows={8}
                  required
                  className="w-full resize-y rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/15"
                />
              </div>

              {successMessage && (
                <div
                  role="status"
                  className="rounded-2xl border border-green-400/25 bg-green-400/10 px-5 py-4 text-green-200"
                >
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-400/25 bg-red-400/10 px-5 py-4 text-red-200"
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-2xl bg-[#d4af37] px-7 py-4 text-base font-bold text-black transition hover:bg-[#e4c45a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? "Invio in corso..." : "Invia la richiesta"}
              </button>

              <p className="text-sm leading-6 text-white/40">
                Inviando il modulo autorizzi l’utilizzo dei dati inseriti
                esclusivamente per rispondere alla tua richiesta.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}