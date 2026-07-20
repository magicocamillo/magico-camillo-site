"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { addToCart } from "../../data/carts";
import { products } from "../../data/products";

export default function ProductPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  const product = products.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const hasDemoVideo = product?.id === "bacchetta-magica";

const demoVideo = "/video/products/bacchetta-anteprima.mp4";

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images?.[0] || product.image);
      setShowVideo(false);
    }
  }, [product]);

  if (id === "cart") {
    return null;
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-black px-8 py-40 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-semibold">
            Prodotto non trovato
          </h1>

          <Link
            href="/boutique"
            className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:bg-[#e5c24d]"
          >
            Torna alla Boutique
          </Link>
        </div>
      </main>
    );
  }

  function handleAdd() {
    if (!product) {
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    window.alert(`${product.name} aggiunto al carrello`);

    window.dispatchEvent(new Event("cartUpdated"));
  }

  function formatPrice(value: number) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  return (
        <main className="min-h-screen bg-black px-8 pb-32 pt-40 text-white lg:px-20">
      <div className="mx-auto grid max-w-screen-2xl gap-16 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5">

  {showVideo ? (
  <video
    key={demoVideo}
    controls
    autoPlay
    playsInline
    preload="auto"
    className="h-[650px] w-full rounded-[40px] object-cover"
  >
    <source src={demoVideo} type="video/mp4" />
    Il tuo browser non supporta il video.
  </video>
) : (
              <img
                src={selectedImage || product.image}
                alt={product.name}
className="h-[650px] w-full object-contain bg-black transition-all duration-500"
              />
            )}

          </div>

          {hasDemoVideo && (
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-[#d4af37]
                px-6
                py-4
                text-lg
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#e6bf3d]
              "
            >
              Guarda il video dimostrativo
            </button>
          )}

          {(product.images?.length ?? 0) > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => {
                    setSelectedImage(image);
                    setShowVideo(false);
                  }}
                  aria-label={`Mostra immagine di ${product.name}`}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border-2
                    transition-all
                    duration-300
                    ${
                      !showVideo && selectedImage === image
                        ? "border-[#d4af37]"
                        : "border-white/10 hover:border-white/30"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={product.name}
                    className="h-28 w-full object-cover transition hover:scale-110"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            {product.category}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
            {product.name}
          </h1>

          <p className="mt-8 text-5xl font-bold text-[#d4af37]">
            {formatPrice(product.price)}
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
                  className="flex items-start gap-4 text-lg text-white/70"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d4af37]"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
                    <div className="mt-10 flex flex-wrap gap-5">
            <button
              type="button"
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

      <section className="mx-auto mt-28 max-w-screen-2xl">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 sm:p-12">
          <h2 className="text-4xl font-semibold">
            Perché scegliere questo prodotto?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-white/70">
            Ogni prodotto presente nella Boutique di Magico Camillo nasce
            dall&apos;esperienza di centinaia di spettacoli dal vivo. Non si
            tratta di semplici articoli commerciali, ma di strumenti progettati
            e selezionati per offrire affidabilità, praticità e un impatto
            scenico professionale.
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
                l&apos;acquisto.
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