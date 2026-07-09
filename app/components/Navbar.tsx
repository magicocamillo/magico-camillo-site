import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-32 max-w-screen-2xl items-center px-12">

        {/* LOGO */}
        <Link href="/" className="mr-24 shrink-0">
          <Image
            src="/images/logos/logo-magico-camillo-bianco.png"
            alt="Magico Camillo"
            width={380}
            height={150}
            priority
            className="h-24 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        {/* MENU */}
        <nav className="hidden flex-1 items-center justify-center gap-16 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 lg:flex">
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

        {/* PULSANTE */}
        <Link
          href="/contatti"
          className="ml-32 hidden rounded-full bg-[#d4af37] px-10 py-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#f0cb54] lg:inline-flex"
        >
          Richiedi preventivo
        </Link>

      </div>
    </header>
  );
}
