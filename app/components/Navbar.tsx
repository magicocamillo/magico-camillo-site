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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

      if (clickResetTimer.current) {
        clearTimeout(clickResetTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (logoClicks < 5) return;

    setLogoClicks(0);
    router.push("/accesso-area-segreta");
  }, [logoClicks, router]);

  function handleLogoClick(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    event.preventDefault();

    if (!event.altKey) {
      router.push("/");
      return;
    }

    if (clickResetTimer.current) {
      clearTimeout(clickResetTimer.current);
    }

    const next = logoClicks + 1;
    setLogoClicks(next);

    if (next >= 5) return;

    clickResetTimer.current = window.setTimeout(() => {
      if (next === 1) {
        router.push("/");
      }

      setLogoClicks(0);
    }, 1500);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/85 backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/70 via-black/25 to-transparent"
      }`}
    >
<div className="mx-auto flex h-24 max-w-screen-2xl items-center px-6 lg:px-10">

    <Link
              href="/"
          onClick={handleLogoClick}
          className="mr-10 shrink-0 transition duration-500 hover:scale-105"
        >
          <Image

  src="/images/logos/logo-magico-camillo-bianco.png"

  alt="Magico Camillo"

  width={320}

  height={134}

  priority

  className="h-auto w-auto max-h-[82px] transition duration-700"

/>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 xl:gap-10 lg:flex">
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

        <div className="ml-8 flex items-center gap-5">
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
              duration-300
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
              lg:inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#d4af37]
              px-7
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
            "
          >
            Richiedi preventivo
            </Link>
        </div>
      </div>
    </header>
  );
}