"use client";

export default function SystemStatus() {
  return (
    <section className="rounded-[32px] border border-[#d4af37]/20 bg-[#111] p-8">

      <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
        Stato del sistema
      </p>

      <div className="mt-8 space-y-6">

        <div className="flex items-center justify-between">
          <span className="text-white/70">Sistema</span>
          <span className="font-semibold text-green-400">
            ● ONLINE
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Robot</span>
          <span className="text-[#d4af37]">
            Disponibili
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Area Segreta</span>
          <span className="text-[#d4af37]">
            Attiva
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white/70">Versione</span>
          <span className="text-white">
            MC OS 1.0
          </span>
        </div>

      </div>

    </section>
  );
}