"use client";

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


  const product = products.find(
    (item) => item.id === id
  );


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



        {/* IMMAGINI */}


        <div>


          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5">

            <img
              src={product.image}
              alt={product.name}
              className="
                h-[600px]
                w-full
                object-cover
              "
            />

          </div>



          {product.images.length > 1 && (

            <div className="mt-6 grid grid-cols-3 gap-5">

              {product.images.map((image) => (

                <img
                  key={image}
                  src={image}
                  alt={product.name}
                  className="
                    h-32
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    object-cover
                  "
                />

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


            <ul className="mt-5 space-y-3 text-white/70">

              {product.features.map((feature) => (

                <li key={feature}>
                  ✓ {feature}
                </li>

              ))}

            </ul>


          </div>




          <div className="mt-10 flex flex-wrap gap-4">


            <button
              onClick={handleAdd}
              className="
                rounded-full
                bg-[#d4af37]
                px-10
                py-5
                font-bold
                text-black
                transition
                hover:scale-105
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
              "
            >
              Vai al carrello
            </Link>



          </div>


        </div>


      </div>


    </main>

  );

}