import Link from "next/link";

const navItems = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Spettacoli", href: "/spettacoli" },
  { label: "Galleria", href: "/galleria-foto" },
  { label: "Video", href: "/video" },
  { label: "Calendario", href: "/calendario-eventi" },
  { label: "Boutique", href: "/boutique" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          Magico Camillo
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.25em] text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#d4af37]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
