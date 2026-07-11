import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl rounded-[40px] border border-[#d4af37]/25 bg-white/5 p-10 text-center shadow-[0_30px_100px_rgba(212,175,55,0.12)] sm:p-16">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-5xl">
          ✓
        </div>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
          Pagamento completato
        </p>

        <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
          Grazie per il tuo acquisto
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
          Il pagamento è stato ricevuto correttamente. Riceverai presto le
          informazioni relative all’ordine e alla spedizione.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/boutique"
            className="rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-[#f0cb54]"
          >
            Torna alla Boutique
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-[#d4af37]/50 hover:text-[#d4af37]"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}