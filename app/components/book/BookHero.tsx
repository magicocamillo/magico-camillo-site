"use client";

import { useState } from "react";
import { Product } from "../../data/products";
import { addToCart } from "../../data/carts";

interface Props {
  product: Product;
}

export default function BookHero({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    alert("Libro aggiunto al carrello");
  }

  return (
    <section className="mx-auto max-w-7xl py-20">

      <div className="grid items-start gap-24 lg:grid-cols-[1.2fr_0.8fr]">

        {/* COLONNA SINISTRA */}

        <div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl">

            <img
              src={selectedImage}
              alt={product.name}
              className="w-full rounded-[40px] transition-all duration-700 hover:scale-[1.03]"
            />

          </div>

          <div className="mt-8 flex gap-5">

            {product.images.map((image) => (

              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  selectedImage === image
                    ? "border-[#d4af37] scale-105"
                    : "border-white/10 hover:border-[#d4af37]/50"
                }`}
              >

                <img
                  src={image}
                  alt={product.name}
                  className="h-28 w-24 rounded-xl object-cover transition duration-300"
                />

              </button>

            ))}

          </div>

        </div>

        {/* COLONNA DESTRA */}

        <div>

          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            Libro Illustrato + Esperienza Audio
          </p>

          <h1 className="mt-6 text-6xl font-bold text-white">
            Il suono delle cose
          </h1>

          <p className="mt-6 text-2xl text-white/70">
            Un progetto di
          </p>

          <p className="mt-3 text-xl leading-9 text-white">
            <strong>Magico Camillo</strong>
            <br />
            Testi di Alessandra Sartori
            <br />
            Illustrazioni di Marco Raffaelli
          </p>

          <p className="mt-12 text-7xl font-black tracking-tight text-[#d4af37]">
            € {product.price}
          </p>

          <p className="mt-10 text-xl leading-9 text-white/75">
            Un libro illustrato pensato per essere letto,
            ascoltato e vissuto insieme.
            Contiene una audiostoria,
            due canzoni originali,
            QR Code interattivi
            e attività sviluppate insieme
            ad una logopedista.
          </p>

          <button
            onClick={handleAdd}
            className="mt-12 w-full rounded-full bg-[#d4af37] px-12 py-6 text-2xl font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
          >
            🛒 Acquista ora
          </button>

        </div>

      </div>

    </section>
  );
}