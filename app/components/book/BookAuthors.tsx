"use client";

import { useEffect, useState } from "react";

export default function BookAuthors() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const authors = [
    {
      name: "Magico Camillo",
      role: "Ideatore del progetto",
      image: "/images/camillo/authors/magico-camillo.jpg",
      description:
        "Mago comico, autore e artista. Da oltre 15 anni porta spettacoli e sorrisi a migliaia di bambini e famiglie.",
    },
    {
      name: "Alessandra Sartori",
      role: "Autrice dei testi",
      image: "/images/camillo/authors/alessandra-sartori.jpg",
      description:
        "Ha trasformato le idee del progetto in una storia emozionante e ricca di fantasia.",
    },
    {
      name: "Marco Raffaelli",
      role: "Illustratore",
      image: "/images/camillo/authors/marco-raffaelli.jpg",
      description:
        "Ha dato vita ai personaggi del libro con illustrazioni originali ricche di dettagli.",
    },
  ];

  return (
    <>
      <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-0">
        <div className="text-center">
          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            GLI AUTORI
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
            Chi ha dato vita a questo progetto
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/70">
            Un libro nasce sempre dall&apos;incontro di idee, sensibilità e
            creatività.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {authors.map((author) => (
            <div
              key={author.name}
              className="rounded-[35px] border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(author.image)}
                className="mx-auto block"
                aria-label={`Ingrandisci la foto di ${author.name}`}
              >
                <img
                  src={author.image}
                  alt={author.name}
                  className="mx-auto h-44 w-44 rounded-full border-4 border-[#d4af37] object-cover transition duration-300 hover:scale-105"
                />
              </button>

              <h3 className="mt-8 text-center text-3xl font-bold text-white">
                {author.name}
              </h3>

              <p className="mt-2 text-center font-semibold text-[#d4af37]">
                {author.role}
              </p>

              <p className="mt-6 text-center leading-8 text-white/70">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-8 top-8 text-5xl text-white transition hover:text-[#d4af37]"
            aria-label="Chiudi immagine"
          >
            ×
          </button>

          <img
            onClick={(event) => event.stopPropagation()}
            src={selectedImage}
            alt="Autore ingrandito"
            className="max-h-[90vh] max-w-[90vw] rounded-[30px] object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}