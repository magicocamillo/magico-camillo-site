import Link from "next/link";

const navItems = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Spettacoli", href: "/spettacoli" },
  { label: "Recensioni", href: "/recensioni" },
  { label: "Galleria", href: "/galleria-foto" },
  { label: "Video", href: "/video" },
  { label: "Calendario", href: "/calendario-eventi" },
  { label: "Boutique", href: "/boutique" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="mr-14 flex items-center text-lg font-bold uppercase tracking-[0.28em] text-white"
        >
          Magico Camillo
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:text-[#d4af37]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contatti"
          className="ml-16 hidden rounded-full bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-[#e6c95f] lg:inline-flex"
        >
          Richiedi preventivo
        </Link>
      </div>
    </header>
  );
}