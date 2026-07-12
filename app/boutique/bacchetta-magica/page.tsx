"use client";

import { useState } from "react";
import { products } from "../../data/products";
import { addToCart } from "../../data/carts";

export default function BacchettaMagicaPage() {
  const product = products.find(
    (item) => item.id === "bacchetta-magica"
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0] ?? ""
  );

  if (!product) {
    return null;
  }

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    alert("Bacchetta Magica aggiunta al carrello");
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-32 pt-40 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="aspect-square w-full bg-black object-contain p-6 transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border transition duration-300 ${
                    selectedImage === image
                      ? "scale-105 border-[#d4af37]"
                      : "border-white/10 hover:border-[#d4af37]/50"
                  }`}
                >
                  <img
                    src={image}
                    alt="Anteprima Bacchetta Magica"
                    className="aspect-square w-full bg-black object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.45em] text-[#d4af37]">
              Magia per tutti
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
              Bacchetta Magica
            </h1>

            <p className="mt-7 text-2xl font-semibold text-white/80">
              Lo strumento più importante di ogni mago
            </p>

            <p className="mt-10 text-7xl font-black text-[#d4af37]">
              € {product.price}
            </p>

            <p className="mt-10 text-xl leading-9 text-white/70">
              Un regalo subito pronto e immediatamente utilizzabile,
              capace di creare sorrisi, sorpresa e meraviglia davanti
              agli spettatori.
            </p>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-12 w-full rounded-full bg-[#d4af37] px-10 py-6 text-2xl font-bold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
            >
              🛒 Acquista ora
            </button>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-semibold text-white/80"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-32 rounded-[40px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="uppercase tracking-[0.45em] text-[#d4af37]">
                Attenzione
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
                Bisogna presentarla
                <br />
                come si deve.
              </h2>
            </div>

            <div className="space-y-7 text-xl leading-9 text-white/70">
              <p>
                Una bacchetta magica non è soltanto un oggetto: è il
                simbolo del mago, il momento in cui tutto può accadere.
              </p>

              <p>
                Anche un gesto semplice può diventare esilarante,
                sorprendente e memorabile quando viene presentato con
                il giusto ritmo.
              </p>

              <p>
                È adatta anche ai più piccoli e diventerà uno degli
                oggetti che useranno più spesso durante giochi e
                piccoli spettacoli.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[40px] border border-[#d4af37]/20 bg-gradient-to-br from-[#111] to-black p-8 lg:p-16">
          <div className="text-center">
            <p className="uppercase tracking-[0.45em] text-[#d4af37]">
              Guarda cosa succede
            </p>

            <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
              Migliaia di sorrisi
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-white/70">
              Una piccola dimostrazione di quanto una semplice bacchetta
              possa diventare potente quando viene presentata davanti
              al pubblico.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-2xl">
            <video
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full"
            >
              <source
                src="/video/bacchetta-anteprima.mp4"
                type="video/mp4"
              />

              Il browser non supporta la riproduzione del video.
            </video>
          </div>
        </section>

        <section className="mt-24 rounded-[40px] border border-white/10 bg-white/5 p-8 text-center lg:p-16">
          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            Un piccolo grande regalo
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
            La userai tantissimo
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-white/70">
            È facile da usare, immediata e adatta a tutte le età.
            Basta impugnarla, trovare il proprio stile e iniziare a
            creare momenti di stupore davanti a parenti e amici.
          </p>

          <p className="mt-10 text-3xl font-bold text-[#d4af37]">
            Piccola nel prezzo. Grandissima nell&apos;effetto.
          </p>
        </section>
      </section>
    </main>
  );
}