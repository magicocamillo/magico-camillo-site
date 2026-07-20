"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getCartCount } from "../data/carts";

const navItems = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Spettacoli", href: "/spettacoli" },
  { label: "Recensioni", href: "/recensioni" },
  { label: "Galleria", href: "/galleria-foto" },
  { label: "Video", href: "/video" },
  { label: "Calendario", href: "/calendario-eventi" },
  { label: "Bottega", href: "/boutique" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const timer = useRef<number | null>(null);

  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    function updateCart() {
      setCartCount(getCartCount());
    }

    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    updateCart();
    onScroll();

    window.addEventListener("cartUpdated", updateCart);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("scroll", onScroll);

      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (logoClicks < 5) return;

    setLogoClicks(0);
    setMobileOpen(false);
    router.push("/accesso-area-segreta");
  }, [logoClicks, router]);

  function logoPressed(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    if (!event.altKey) {
      setMobileOpen(false);
      return;
    }

    event.preventDefault();

    if (timer.current) {
      clearTimeout(timer.current);
    }

    const next = logoClicks + 1;
    setLogoClicks(next);

    timer.current = window.setTimeout(() => {
      setLogoClicks(0);

      if (next === 1) {
        router.push("/");
      }
    }, 1500);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/90 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/70 via-black/25 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-5 lg:px-10">

          <Link
            href="/"
            onClick={logoPressed}
            className="shrink-0 transition hover:scale-105"
          >
            <Image
              src="/images/logos/logo-magico-camillo-bianco.png"
              alt="Magico Camillo"
              width={320}
              height={134}
              priority
              className="h-auto max-h-[82px] w-auto"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-[0.17em] transition-colors ${
                  pathname === item.href
                    ? "text-[#d4af37]"
                    : "text-white/80 hover:text-[#d4af37]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
                        <Link
              href="/cart"
              aria-label="Carrello"
              className="relative flex items-center justify-center text-white transition hover:text-[#d4af37]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
              >
                <path
                  d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[11px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/contatti"
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:scale-105 hover:bg-[#e5c24d]"
            >
              Richiedi preventivo
            </Link>

<button
  type="button"
  onClick={() => setMobileOpen(true)}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-7 w-7"
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</button>

          </div>

        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-black lg:hidden">

          <div className="flex h-24 items-center justify-between border-b border-white/10 px-6">

            <div className="text-lg font-semibold tracking-[0.2em] text-[#d4af37]">
              MENU
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          <nav className="flex flex-col items-center gap-8 px-8 py-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-semibold uppercase tracking-[0.15em] ${
                  pathname === item.href
                    ? "text-[#d4af37]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
                        <Link
              href="/contatti"
              onClick={() => setMobileOpen(false)}
              className="mt-8 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black"
            >
              Richiedi preventivo
            </Link>

          </nav>

        </div>
      )}

    </>
  );
}