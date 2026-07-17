"use client";

export default function Terminal() {
  return (
    <section className="rounded-[32px] border border-[#d4af37]/20 bg-[#111] p-8">

      <p className="mb-6 font-mono text-sm uppercase tracking-[0.35em] text-[#d4af37]">
        Terminale
      </p>

      <div className="space-y-3 font-mono text-sm">

        <p className="text-green-400">
          &gt; Sistema avviato...
        </p>

        <p className="text-green-400">
          &gt; Connessione al Quartier Generale...
        </p>

        <p className="text-green-400">
          &gt; Robot disponibili.
        </p>

        <p className="text-green-400">
          &gt; Diario pronto.
        </p>

        <p className="text-[#d4af37]">
          _
        </p>

      </div>

    </section>
  );
}