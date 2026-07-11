import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl rounded-[40px] border border-red-500/20 bg-white/5 p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-16">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-5xl">
          ✕
        </div>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-red-400">
          Pagamento annullato
        </p>

        <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
          Nessun addebito effettuato
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
          Il pagamento è stato annullato. Se lo desideri puoi tornare alla Boutique
          e completare l'acquisto in qualsiasi momento.
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
            Home
          </Link>

        </div>

      </div>
    </main>
  );
}