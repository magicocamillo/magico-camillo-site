"use client";

import Image from "next/image";
import Link from "next/link";
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

  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    const updateCart = () => {
      setCartCount(getCartCount());
    };


    handleScroll();
    updateCart();


    window.addEventListener(
      "scroll",
      handleScroll
    );


    window.addEventListener(
      "cartUpdated",
      updateCart
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "cartUpdated",
        updateCart
      );

    };

  }, []);



  return (

    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#d4af37]/15 bg-black/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-24 max-w-screen-2xl items-center px-8 lg:px-10">


        <Link
          href="/"
          className="mr-12 shrink-0 transition hover:scale-105"
        >

          <Image
            src="/images/logos/logo-magico-camillo-bianco.png"
            alt="Magico Camillo"
            width={250}
            height={100}
            priority
            className="h-auto w-[250px]"
          />

        </Link>



        <nav className="hidden flex-1 items-center justify-center gap-10 xl:gap-14 lg:flex">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:text-[#d4af37]"
            >

              {item.label}

            </Link>

          ))}

        </nav>



        <div className="ml-8 flex items-center gap-8">


          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-white hover:text-[#d4af37]"
          >

            <span className="text-2xl">
              🛒
            </span>


            <span className="hidden xl:block text-sm font-bold uppercase tracking-wider">
              Carrello
            </span>



            {cartCount > 0 && (

              <span
                className="
                absolute
                -top-3
                -right-3
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
            "
          >

            Richiedi preventivo

          </Link>


        </div>


      </div>


    </header>

  );

}