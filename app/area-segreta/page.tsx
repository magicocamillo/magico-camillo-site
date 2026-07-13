export default function AreaSegreta() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">

      <div className="mx-auto max-w-5xl rounded-[42px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-14 text-center shadow-stage">

        <p className="text-sm uppercase tracking-[0.4em] text-[#d4af37]">
          Accesso riservato
        </p>

        <h1 className="mt-8 text-6xl font-bold text-white">
          🎩 Benvenuto nel
          <span className="mt-4 block text-[#d4af37]">
            Laboratorio Segreto
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-white/70">
          Complimenti.
          <br /><br />

          Hai scoperto una parte del sito che non compare
          in nessun menu.

          Solo chi è abbastanza curioso riesce ad arrivare fin qui.

        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="text-5xl">🎭</div>

            <h3 className="mt-5 text-2xl font-semibold text-[#d4af37]">
              Dietro le quinte
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="text-5xl">🤖</div>

            <h3 className="mt-5 text-2xl font-semibold text-[#d4af37]">
              Invenzioni
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="text-5xl">🪄</div>

            <h3 className="mt-5 text-2xl font-semibold text-[#d4af37]">
              Esperimenti
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <div className="text-5xl">📖</div>

            <h3 className="mt-5 text-2xl font-semibold text-[#d4af37]">
              Diario Segreto
            </h3>

          </div>

        </div>

      </div>

    </main>
  );
}