"use client";

import { useEffect, useState } from "react";

const pages = [
  "/images/products/suono-delle-cose-1.jpg",
  "/images/products/suono-delle-cose-2.png",
  "/images/products/suono-delle-cose-3.png",
  "/images/products/suono-delle-cose-4.png",
  "/images/products/suono-delle-cose-5.png",
];

export default function BookGallery() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function prev() {
    setIndex((current) => (current - 1 + pages.length) % pages.length);
  }

  function next() {
    setIndex((current) => (current + 1) % pages.length);
  }

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (!isOpen) {
        return;
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowLeft") {
        prev();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <>
      <section className="mx-auto mt-28 max-w-7xl px-6 lg:px-0">
        <div className="rounded-[40px] border border-[#d4af37]/20 bg-gradient-to-br from-[#111] to-black p-8 lg:p-16">
          <p className="text-center uppercase tracking-[0.45em] text-[#d4af37]">
            Sfoglia il libro
          </p>

          <h2 className="mt-5 text-center text-4xl font-bold text-white lg:text-5xl">
            Scopri alcune pagine illustrate
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-white/70">
            Clicca sull&apos;immagine per visualizzarla a schermo intero.
          </p>

          <div className="mt-14 flex items-center gap-4 lg:gap-10">
            <button
              type="button"
              onClick={prev}
              aria-label="Pagina precedente"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-3xl text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black lg:h-16 lg:w-16"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex-1 overflow-hidden rounded-[30px] border border-white/10"
            >
              <img
                src={pages[index]}
                alt={`Anteprima pagina ${index + 1}`}
                className="w-full transition duration-500 hover:scale-[1.02]"
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Pagina successiva"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-3xl text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black lg:h-16 lg:w-16"
            >
              ›
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {pages.map((page, pageIndex) => (
              <button
                key={page}
                type="button"
                onClick={() => setIndex(pageIndex)}
                aria-label={`Visualizza pagina ${pageIndex + 1}`}
                className={`h-4 w-4 rounded-full transition ${
                  pageIndex === index
                    ? "bg-[#d4af37]"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Chiudi immagine"
            className="absolute right-6 top-6 z-10 text-5xl text-white transition hover:text-[#d4af37]"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="Pagina precedente"
            className="absolute left-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-4xl text-white transition hover:bg-[#d4af37] hover:text-black lg:left-10"
          >
            ‹
          </button>

          <img
            src={pages[index]}
            alt={`Pagina ingrandita ${index + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Pagina successiva"
            className="absolute right-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-4xl text-white transition hover:bg-[#d4af37] hover:text-black lg:right-10"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}