export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Magico Camillo</p>
        <p className="mt-4 text-sm leading-6 text-white/70">
          Spettacoli teatrali, comicità magica e intrattenimento su misura per eventi in tutta Italia.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Magico Camillo. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
