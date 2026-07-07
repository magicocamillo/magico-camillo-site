export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between">

        {/* Sinistra */}
        <div className="max-w-md">
          <h3 className="text-2xl font-bold tracking-wide">
            MAGICO CAMILLO
          </h3>

          <p className="mt-4 text-white/70 leading-7">
            Magia comica, poesia, tecnologia e divertimento per Family Hotel,
            teatri, comuni, festival ed eventi in tutta Italia.
          </p>

          <a
            href="/contatti"
            className="mt-6 inline-block rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Richiedi un preventivo
          </a>
        </div>

        {/* Centro */}
        <div>
          <h4 className="mb-4 font-semibold uppercase tracking-widest text-[#d4af37]">
            Navigazione
          </h4>

          <ul className="space-y-2 text-white/70">
            <li><a href="/">Home</a></li>
            <li><a href="/spettacoli">Spettacoli</a></li>
            <li><a href="/galleria-foto">Galleria</a></li>
            <li><a href="/video">Video</a></li>
            <li><a href="/boutique">Boutique</a></li>
            <li><a href="/contatti">Contatti</a></li>
          </ul>
        </div>

        {/* Destra */}
        <div>
          <h4 className="mb-4 font-semibold uppercase tracking-widest text-[#d4af37]">
            Contatti
          </h4>

          <div className="space-y-3 text-white/70">
            <p>📞 +39 ...............</p>
            <p>📧 info@magicocamillo.com</p>
            <p>📍 Trentino • Italia</p>
          </div>

          <div className="mt-6 flex gap-4 text-sm">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">TikTok</a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Magico Camillo · Tutti i diritti riservati.
      </div>
    </footer>
  );
}