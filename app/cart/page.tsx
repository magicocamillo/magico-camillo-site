"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  clearCart,
  getCartTotal,
  CartItem,
} from "../data/carts";


export default function CartPage() {

  const [items, setItems] = useState<CartItem[]>([]);



  useEffect(() => {

    setItems(getCart());

  }, []);




  function handleRemove(id: string) {

    removeFromCart(id);

    setItems(getCart());

  }




  function handleClear() {

    clearCart();

    setItems([]);

  }




  return (

    <main className="min-h-screen bg-black px-8 py-32 text-white lg:px-20">

      <div className="mx-auto max-w-5xl">


        <p className="uppercase tracking-[0.4em] text-[#d4af37]">
          Boutique
        </p>


        <h1 className="mt-5 text-5xl font-semibold">
          Il tuo carrello
        </h1>



        {items.length === 0 ? (

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10">

            <p className="text-xl text-white/70">
              Il carrello è vuoto.
            </p>


            <Link
              href="/boutique"
              className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black"
            >
              Vai alla Boutique
            </Link>


          </div>



        ) : (


          <div className="mt-12 space-y-6">


            {items.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
              >


                <div className="flex items-center gap-6">


                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />


                  <div>

                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>


                    <p className="text-white/60">
                      Quantità: {item.quantity}
                    </p>

                  </div>


                </div>



                <div className="text-right">


                  <p className="text-2xl font-bold text-[#d4af37]">
                    € {item.price * item.quantity}
                  </p>


                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-3 text-sm text-red-400"
                  >
                    Rimuovi
                  </button>


                </div>


              </div>


            ))}




            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">


              <button
                onClick={handleClear}
                className="text-white/60 transition hover:text-white"
              >
                Svuota carrello
              </button>



              <div className="text-right">


                <p className="text-sm uppercase tracking-widest text-white/50">
                  Totale
                </p>


                <p className="text-4xl font-bold text-[#d4af37]">
                  € {getCartTotal()}
                </p>


              </div>


            </div>




            <div className="mt-10 flex flex-wrap gap-4">


              <Link
                href="/checkout"
                className="
                  rounded-full
                  bg-[#d4af37]
                  px-10
                  py-5
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Procedi all'ordine
              </Link>



              <Link
                href="/boutique"
                className="
                  rounded-full
                  border
                  border-[#d4af37]
                  px-10
                  py-5
                  text-[#d4af37]
                "
              >
                Continua acquisti
              </Link>


            </div>



          </div>


        )}



      </div>


    </main>

  );

}