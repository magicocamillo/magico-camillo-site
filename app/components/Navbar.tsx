"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

    };

  }, []);

  useEffect(() => {

    if (logoClicks < 5) return;

    setMagicActive(true);

    const timer = setTimeout(() => {

      router.push("/area-segreta");

    }, 900);

    return () => clearTimeout(timer);

  }, [logoClicks, router]);

  function handleLogoClick() {

    setLogoClicks((value) => value + 1);

  }

  return (

    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#d4af37]/15 bg-black/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-24 max-w-screen-2xl items-center px-8 lg:px-10">

        <Link
          href="/"
          onClick={handleLogoClick}
          className={`mr-12 shrink-0 transition duration-500 hover:scale-105 ${
            magicActive ? "scale-110" : ""
          }`}
        >

          <Image
            src="/images/logos/logo-magico-camillo-bianco.png"
            alt="Magico Camillo"
            width={250}
            height={100}
            priority
            className={`h-auto w-[250px] transition duration-700 ${
              magicActive
                ? "drop-shadow-[0_0_25px_rgba(212,175,55,0.95)]"
                : ""
            }`}
          />

        </Link>
                <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex xl:gap-14">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="
                text-lg
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/80
                transition
                hover:text-[#d4af37]
              "
            >

              {item.label}

            </Link>

          ))}

        </nav>

        <div className="ml-8 flex items-center gap-8">

          <Link
            href="/cart"
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

            <span className="text-2xl">
              🛒
            </span>

            <span className="hidden text-sm font-bold uppercase tracking-wider xl:block">
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
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-[0.15em]
              text-black
              transition
              hover:scale-105
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
            bg-black/40
            backdrop-blur-[2px]
            animate-pulse
          "
        >

          <div className="rounded-full border border-[#d4af37] bg-black/80 px-8 py-4 shadow-[0_0_50px_rgba(212,175,55,0.5)]">

            <p className="text-lg font-semibold tracking-[0.25em] text-[#d4af37]">
              ✨ PASSAGGIO SEGRETO ✨
            </p>

          </div>

        </div>

      )}

    </header>

  );

}