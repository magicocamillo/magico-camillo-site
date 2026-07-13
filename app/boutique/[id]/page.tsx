"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../data/products";
import { addToCart } from "../../data/carts";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  if (id === "cart") {
    return null;
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-black px-8 py-40 text-white">
        <h1 className="text-4xl">
          Prodotto non trovato
        </h1>

        <Link
          href="/boutique"
          className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 text-black"
        >
          Torna alla Boutique
        </Link>
      </main>
    );
  }

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    alert(`${product.name} aggiunto al carrello`);
  }

  return (
    <main className="min-h-screen bg-black px-8 pt-40 pb-32 text-white lg:px-20">

      <div className="mx-auto grid max-w-screen-2xl gap-16 lg:grid-cols-2">

        {/* GALLERIA */}
        <div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
            <img
              src={selectedImage}
              alt={product.name}
              className="
                h-[650px]
                w-full
                object-cover
                transition-all
                duration-500
                hover:scale-110
              "
            />
          </div>

          {(product.images?.length ?? 0) > 0 && (

            <div className="mt-6 grid grid-cols-5 gap-4">

              {product.images.map((image) => (

                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border-2
                    transition-all
                    duration-300

                    ${
                      selectedImage === image
                        ? "border-[#d4af37]"
                        : "border-white/10 hover:border-white/30"
                    }
                  `}
                >

                  <img
                    src={image}
                    alt={product.name}
                    className="
                      h-28
                      w-full
                      object-cover
                      transition
                      hover:scale-110
                    "
                  />

                </button>

              ))}

            </div>

          )}

        </div>
                {/* DETTAGLI */}

        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            {product.category}
          </p>

          <h1 className="mt-6 text-6xl font-semibold leading-tight">
            {product.name}
          </h1>

          <p className="mt-8 text-5xl font-bold text-[#d4af37]">
            € {product.price}
          </p>

          <p className="mt-8 text-xl leading-9 text-white/70">
            {product.description}
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-semibold">
              Caratteristiche
            </h2>

            <ul className="mt-6 space-y-4">

              {product.features.map((feature) => (

                <li
                  key={feature}
                  className="flex items-center gap-3 text-lg text-white/70"
                >

                  <span className="text-[#d4af37] text-xl">
                    ✓
                  </span>

                  {feature}

                </li>

              ))}

            </ul>

          </div>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
              onClick={handleAdd}
              className="
                rounded-full
                bg-[#d4af37]
                px-10
                py-5
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
              "
            >
              Aggiungi al carrello
            </button>

            <Link
              href="/cart"
              className="
                rounded-full
                border
                border-[#d4af37]
                px-10
                py-5
                text-[#d4af37]
                transition-all
                duration-300
                hover:bg-[#d4af37]
                hover:text-black
              "
            >
              Vai al carrello
            </Link>

          </div>

        </div>

      </div>
            {/* SEZIONE INFORMATIVA */}

      <section className="mx-auto mt-28 max-w-screen-2xl">

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-12">

          <h2 className="text-4xl font-semibold">
            Perché scegliere questo prodotto?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-white/70">
            Ogni prodotto presente nella Boutique di Magico Camillo nasce
            dall'esperienza di centinaia di spettacoli dal vivo.
            Non si tratta di semplici articoli commerciali, ma di strumenti
            progettati e selezionati per offrire affidabilità,
            praticità e un impatto scenico professionale.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Qualità
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Materiali accuratamente selezionati e testati durante gli
                spettacoli.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Assistenza
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Supporto diretto per qualsiasi dubbio prima e dopo
                l'acquisto.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Esperienza
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Prodotti sviluppati da chi utilizza realmente queste
                attrezzature davanti al pubblico.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}