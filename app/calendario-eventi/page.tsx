import Link from "next/link";

export default function Calendario() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl">

        <section className="rounded-[40px] border border-white/10 bg-white/5 p-12 text-center shadow-stage backdrop-blur-xl">

          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Calendario spettacoli
          </p>

          <h1 className="mt-6 text-5xl font-semibold text-white sm:text-6xl">
            Seguimi su Instagram
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/70">
            Vuoi sapere dove sarà il prossimo spettacolo del Magico Camillo?
            Sul mio profilo Instagram pubblico regolarmente le date degli
            spettacoli, gli eventi, i dietro le quinte e tante curiosità.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Seguimi per rimanere sempre aggiornato sui prossimi appuntamenti.
          </p>

          <Link
            href="https://www.instagram.com/magicocamillo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-14 inline-flex flex-col items-center"
          >
            <img
              src="/images/social/instagram.png"
              alt="Instagram Magico Camillo"
              className="h-44 w-44 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />

            <span className="mt-6 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
              @magicocamillo
            </span>
          </Link>

        </section>

      </div>
    </main>
  );
}