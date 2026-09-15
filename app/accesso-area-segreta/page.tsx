"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const PASSWORD = "camillo2026";

export default function AccessoAreaSegreta() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === PASSWORD) {
      window.localStorage.setItem("magico-camillo-accesso-segreto", "true");
      router.push("/area-segreta");
      return;
    }

    setError("Password non corretta.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20">
      <div className="w-full max-w-md rounded-[32px] border border-[#d4af37]/30 bg-[#111] p-8 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          Accesso riservato
        </p>

        <h1 className="mt-5 text-4xl font-bold text-white">
          Area segreta
        </h1>

        <p className="mt-4 leading-7 text-white/60">
          Inserisci la password per accedere ai contenuti riservati.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-white/70"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              autoComplete="current-password"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
              placeholder="Inserisci la password"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-[#d4af37] px-6 py-4 font-bold text-black transition hover:scale-[1.02] hover:bg-[#e5c24d]"
          >
            Entra nell’area riservata
          </button>
        </form>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-6 w-full text-sm text-white/40 transition hover:text-white"
        >
          Torna al sito
        </button>
      </div>
    </main>
  );
}