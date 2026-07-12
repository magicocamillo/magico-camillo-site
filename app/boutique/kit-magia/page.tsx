"use client";

import { useState } from "react";
import { products } from "../../data/products";
import { addToCart } from "../../data/carts";

export default function KitMagiaPage() {
  const product = products.find((item) => item.id === "kit-magia");

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

    alert("Kit Magia aggiunto al carrello");
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
                className="aspect-square w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="mt-7 grid grid-cols-4 gap-4">
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
                    alt="Anteprima Kit Magia"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.45em] text-[#d4af37]">
              Magia per bambini
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
              Kit Magia
            </h1>

            <p className="mt-7 text-2xl font-semibold text-white/80">
              Diventa anche tu un vero mago
            </p>

            <p className="mt-10 text-7xl font-black text-[#d4af37]">
              € {product.price}
            </p>

            <p className="mt-10 text-xl leading-9 text-white/70">
              Undici veri oggetti diversi per imparare giochi di magia,
              sorprendere parenti e amici e preparare il tuo primo piccolo
              spettacolo.
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
                Dentro la scatola
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
                Undici giochi.
                <br />
                Infinite sorprese.
              </h2>
            </div>

            <div className="space-y-7 text-xl leading-9 text-white/70">
              <p>
                Alcuni giochi sono facilissimi da imparare, ma mai banali.
                Permettono al bambino di ottenere subito un risultato
                sorprendente e di sentirsi davvero un piccolo mago.
              </p>

              <p>
                Altri richiedono un po&apos; di studio, allenamento e prove,
                come il celebre gioco dei tre bussolotti.
              </p>

              <p>
                Le video istruzioni spiegano ogni passaggio con chiarezza,
                permettendo al bambino di imparare secondo i propri tempi.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[40px] border border-[#d4af37]/20 bg-gradient-to-br from-[#111] to-black p-8 lg:p-16">
          <div className="text-center">
            <p className="uppercase tracking-[0.45em] text-[#d4af37]">
              Video istruzioni
            </p>

            <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
              Guarda un&apos;anteprima
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-white/70">
              Un piccolo estratto delle video istruzioni incluse nel kit.
              Spiegazioni semplici, chiare e pensate per accompagnare il
              bambino passo dopo passo.
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
                src="/video/kit-magia-anteprima.mp4"
                type="video/mp4"
              />

              Il browser non supporta la riproduzione del video.
            </video>
          </div>

          <p className="mt-8 text-center italic text-white/50">
            Le istruzioni complete sono riservate a chi acquista il Kit Magia.
          </p>
        </section>

        <section className="mt-24 rounded-[40px] border border-white/10 bg-white/5 p-8 text-center lg:p-16">
          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            Molto più di un gioco
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
            La magia aiuta a crescere
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-white/70">
            Nel kit è presente anche una lettera dedicata ai genitori, con
            pensieri poetici e riflessioni sul valore educativo
            dell&apos;esibirsi. Preparare un gioco di magia significa
            scoprire, organizzarsi, mettersi alla prova, mostrarsi davanti a
            un pubblico, superare l&apos;ansia e sviluppare fiducia nelle
            proprie capacità.
          </p>

          <p className="mt-10 text-3xl font-bold text-[#d4af37]">
            Consigliato dai 5 ai 200 anni.
          </p>
        </section>
      </section>
    </main>
  );
}