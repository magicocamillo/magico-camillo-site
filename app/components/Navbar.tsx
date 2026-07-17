"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getCartCount } from "../data/carts";

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
  const router = useRouter();
  const clickResetTimer = useRef<number | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [logoClicks, setLogoClicks] = useState(0);
  const [magicActive, setMagicActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const updateCart = () => {
      setCartCount(getCartCount());
    };

    handleScroll();
    updateCart();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cartUpdated", updateCart);

      if (clickResetTimer.current !== null) {
        window.clearTimeout(clickResetTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (logoClicks < 5) {
      return;
    }

    setMagicActive(true);

    const accessTimer = window.setTimeout(() => {
      router.push("/accesso-area-segreta");
      setLogoClicks(0);
      setMagicActive(false);
    }, 900);

    return () => {
      window.clearTimeout(accessTimer);
    };
  }, [logoClicks, router]);

  function handleLogoClick(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    event.preventDefault();

    if (clickResetTimer.current !== null) {
      window.clearTimeout(clickResetTimer.current);
    }

    const nextClickCount = logoClicks + 1;
    setLogoClicks(nextClickCount);

    if (nextClickCount >= 5) {
      return;
    }

    clickResetTimer.current = window.setTimeout(() => {
      if (nextClickCount === 1) {
        router.push("/");
      }

      setLogoClicks(0);
    }, 700);
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#d4af37]/15 bg-black/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-screen-2xl items-center px-8 lg:px-10">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Torna alla pagina iniziale"
          className={`mr-8 shrink-0 transition duration-500 hover:scale-105 ${
            magicActive ? "scale-110" : ""
          }`}
        >
          <Image
            src="/images/logos/logo-magico-camillo-bianco.png"
            alt="Magico Camillo"
            width={220}
            height={88}
            priority
            className={`h-auto w-[px] transition duration-700 ${
              magicActive
                ? "drop-shadow-[0_0_25px_rgba(212,175,55,0.95)]"
                : ""
            }`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-white/80
                transition-all
                duration-300
                hover:text-[#d4af37]
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-6 flex items-center gap-4">
          <Link
            href="/cart"
            aria-label="Apri il carrello"
            className="
              relative
              flex
              items-center
              gap-2
              text-white
              transition
              hover:text-[#d4af37]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="10"
                cy="20"
                r="1"
                fill="currentColor"
              />

              <circle
                cx="18"
                cy="20"
                r="1"
                fill="currentColor"
              />
            </svg>

            <span className="hidden text-xs font-bold uppercase tracking-wider xl:block">
              Carrello
            </span>

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#d4af37]
                  text-xs
                  font-bold
                  text-black
                "
              >
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/contatti"
            className="
              hidden
              rounded-full
              bg-[#d4af37]
              px-6
              py-3
              text-[12px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#e5c24d]
              lg:inline-flex
            "
          >
            Richiedi preventivo
          </Link>
        </div>
      </div>

      {magicActive && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/50
            backdrop-blur-[2px]
          "
        >
          <div className="rounded-full border border-[#d4af37] bg-black/90 px-8 py-4 shadow-[0_0_50px_rgba(212,175,55,0.5)]">
            <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Passaggio segreto
            </p>
          </div>
        </div>
      )}
    </header>
  );
}