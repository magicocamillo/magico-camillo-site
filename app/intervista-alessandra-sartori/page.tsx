import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intervista di Alessandra Sartori",
  description:
    "Un ritratto dedicato al percorso artistico del Magico Camillo, pubblicato da Alessandra Sartori.",
  alternates: { canonical: "/intervista-alessandra-sartori" },
  openGraph: {
    title: "Intervista di Alessandra Sartori | Magico Camillo",
    description:
      "Un ritratto dedicato al percorso artistico del Magico Camillo, pubblicato da Alessandra Sartori.",
    url: "/intervista-alessandra-sartori",
  },
};

export default function IntervistaAlessandraSartori() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-4xl font-bold">
          Intervista di Alessandra Sartori
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/70">
          Un bellissimo ritratto dedicato al percorso artistico del Magico
          Camillo, pubblicato da Alessandra Sartori.
        </p>

        <div className="mt-14 space-y-12">

          <img
            src="/documents/alessandra-sartori-1.jpg"
            alt="Intervista di Alessandra Sartori - Pagina 1"
            className="w-full rounded-3xl shadow-2xl"
          />

          <img
            src="/documents/alessandra-sartori-2.jpg"
            alt="Intervista di Alessandra Sartori - Pagina 2"
            className="w-full rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </main>
  );
}