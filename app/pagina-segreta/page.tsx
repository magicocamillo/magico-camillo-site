"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const PAROLA_SEGRETA = "meraviglia";
const ACCESS_STORAGE_KEY = "magico-camillo-secondo-livello";

export default function PaginaSegreta() {
  const router = useRouter();

  const [secretWord, setSecretWord] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function normalizeWord(value: string) {
    return value
      .trim()
      .toLocaleLowerCase("it-IT")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const insertedWord = normalizeWord(secretWord);
    const correctWord = normalizeWord(PAROLA_SEGRETA);

    if (insertedWord !== correctWord) {
      setError("Questa non è la parola segreta. Guarda nuovamente il video.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    window.localStorage.setItem(ACCESS_STORAGE_KEY, "true");

    window.setTimeout(() => {
      router.push("/pagina-segreta/secondo-livello");
    }, 1000);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_38%)]" />

      <div className="relative mx-auto max-w-5xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
            Contenuto segreto
          </p>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl">
            Hai scoperto il passaggio nascosto
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Questa pagina non compare nel menu del sito. È riservata agli
            spettatori più curiosi che sono riusciti a trovare l’indizio.
          </p>
        </header>

        <section className="mt-14 overflow-hidden rounded-[32px] border border-[#d4af37]/30 bg-[#111] p-4 shadow-[0_0_80px_rgba(212,175,55,0.12)] sm:p-6">
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[24px] bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source
                src="/video/segreti/segreto-1.mp4"
                type="video/mp4"
              />

              Il tuo browser non supporta la riproduzione del video.
            </video>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Primo indizio
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Guarda attentamente
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Nel video è nascosto un particolare che conduce a un altro
              contenuto.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Dietro le quinte
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Un contenuto esclusivo
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Ascolta con attenzione ciò che viene detto e osserva ogni
              particolare.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Solo per pochi
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Mantieni il segreto
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Non rivelare subito agli altri la parola che hai scoperto.
            </p>
          </article>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-[32px] border border-[#d4af37]/30 bg-[#111] p-7 shadow-[0_0_70px_rgba(212,175,55,0.1)] sm:p-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Secondo livello
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Hai trovato la parola segreta?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
              Scrivila qui sotto per aprire un nuovo passaggio ancora più
              nascosto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="secret-word"
                className="mb-3 block text-sm font-semibold text-white/70"
              >
                Parola segreta
              </label>

              <input
                id="secret-word"
                type="text"
                value={secretWord}
                onChange={(event) => {
                  setSecretWord(event.target.value);
                  setError("");
                  setSuccess(false);
                }}
                autoComplete="off"
                spellCheck={false}
                placeholder="Inserisci la parola scoperta nel video"
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
              />
            </div>

            {error && (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-red-300">
                {error}
              </p>
            )}

            {success && (
              <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-emerald-300">
                Parola corretta. Il nuovo passaggio si sta aprendo.
              </p>
            )}

            <button
              type="submit"
              disabled={!secretWord.trim() || success}
              className="w-full rounded-full bg-[#d4af37] px-7 py-4 text-lg font-bold text-black transition hover:scale-[1.01] hover:bg-[#e5c24d] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Verifica la parola
            </button>
          </form>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#d4af37]/40 px-8 py-4 font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
          >
            Torna al sito
          </Link>
        </div>
      </div>
    </main>
  );
}