import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold tracking-wide">
            MAGICO CAMILLO
          </h3>

          <p className="mt-4 leading-7 text-white/70">
            Magia comica, poesia, tecnologia e divertimento per Family Hotel,
            teatri, Comuni, festival ed eventi in tutta Italia.
          </p>

          <Link
            href="/contatti"
            className="mt-6 inline-block rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-[#e5c24d]"
          >
            Richiedi un preventivo
          </Link>
        </div>

        <div>
          <h4 className="mb-4 font-semibold uppercase tracking-widest text-[#d4af37]">
            Navigazione
          </h4>

          <ul className="space-y-2 text-white/70">
            <li>
              <Link className="transition hover:text-[#d4af37]" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/chi-sono"
              >
                Chi sono
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/spettacoli"
              >
                Spettacoli
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/galleria-foto"
              >
                Galleria
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/video"
              >
                Video
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/calendario-eventi"
              >
                Calendario
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/boutique"
              >
                Boutique
              </Link>
            </li>

            <li>
              <Link
                className="transition hover:text-[#d4af37]"
                href="/contatti"
              >
                Contatti
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold uppercase tracking-widest text-[#d4af37]">
            Contatti
          </h4>

          <div className="space-y-3 text-white/70">
            <p>
              <span className="font-semibold text-white">Telefono:</span>{" "}
              <a
                href="tel:+393313712666"
                className="transition hover:text-[#d4af37]"
              >
                +39 331 37 12 666
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:magicocamillo@me.com"
                className="transition hover:text-[#d4af37]"
              >
                magicocamillo@me.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Sede:</span>{" "}
              Rovereto (TN)
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <a className="transition hover:text-[#d4af37]" href="#">
              Facebook
            </a>

            <a className="transition hover:text-[#d4af37]" href="#">
              Instagram
            </a>

            <a className="transition hover:text-[#d4af37]" href="#">
              YouTube
            </a>

            <a className="transition hover:text-[#d4af37]" href="#">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-sm text-white/40">
          © {new Date().getFullYear()} Magico Camillo · Tutti i diritti
          riservati.
        </p>
      </div>

      <a
        href="/pagina-segreta"
        aria-label="Apri la pagina segreta"
        title="Passaggio nascosto"
        className="
          fixed
          bottom-5
          right-5
          z-[9999]
          flex
          h-12
          w-12
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-[#d4af37]
          text-black
          shadow-[0_0_25px_rgba(212,175,55,0.5)]
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#e5c24d]
          hover:shadow-[0_0_35px_rgba(212,175,55,0.9)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none h-5 w-5"
        >
          <path
            d="M12 2.8L14.6 9.4L21.5 12L14.6 14.6L12 21.2L9.4 14.6L2.5 12L9.4 9.4L12 2.8Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </footer>
  );
}