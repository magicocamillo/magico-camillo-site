"use client";

import { useState } from "react";
import Link from "next/link";
import { getCart, getCartTotal } from "../data/carts";

export default function CheckoutPage() {

  const [payment, setPayment] = useState("Bonifico bancario");

  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    via: "",
    numero: "",
    cap: "",
    citta: "",
    provincia: "",
    note: "",
  });


  const items = getCart();



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }



 async function handleSubmit() {

  const order = {
    cliente: form,
    prodotti: items,
    totale: getCartTotal(),
    pagamento: payment,
  };


  try {

    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });


    const result = await response.json();


    if (result.success) {

      alert("Ordine inviato correttamente!");

    } else {

      alert("Errore durante l'invio dell'ordine");

    }


  } catch (error) {

    console.error(error);

    alert("Errore di connessione");

  }

}



  return (

    <main className="min-h-screen bg-black px-6 py-32 text-white lg:px-20">

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">


        <section className="lg:col-span-2">

          <p className="uppercase tracking-[0.4em] text-[#d4af37]">
            Boutique
          </p>


          <h1 className="mt-5 text-5xl font-semibold">
            Completa il tuo ordine
          </h1>


          <p className="mt-5 text-white/60">
            Inserisci i tuoi dati per ricevere i prodotti Magico Camillo.
          </p>



          <div className="mt-10 rounded-[35px] border border-white/10 bg-white/5 p-8">


            <div className="grid gap-5 md:grid-cols-2">


              <input
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="cognome"
                placeholder="Cognome"
                value={form.cognome}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="telefono"
                placeholder="Telefono"
                value={form.telefono}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />

            </div>
                        <h2 className="mt-10 text-2xl font-semibold">
              Indirizzo spedizione
            </h2>


            <div className="mt-5 grid gap-5 md:grid-cols-2">


              <input
                name="via"
                placeholder="Via"
                value={form.via}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="numero"
                placeholder="Numero civico"
                value={form.numero}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="cap"
                placeholder="CAP"
                value={form.cap}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="citta"
                placeholder="Città"
                value={form.citta}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                name="provincia"
                placeholder="Provincia"
                value={form.provincia}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4"
              />


              <input
                value="Italia"
                readOnly
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white/60"
              />


            </div>



            <textarea
              name="note"
              placeholder="Note ordine (facoltativo)"
              value={form.note}
              onChange={handleChange}
              className="
                mt-5
                min-h-32
                w-full
                rounded-xl
                border
                border-white/10
                bg-black
                px-5
                py-4
              "
            />



            <h2 className="mt-10 text-2xl font-semibold">
              Metodo di pagamento
            </h2>



            <div className="mt-5 space-y-4">


              <label className="flex gap-3">

                <input
                  type="radio"
                  checked={payment === "Bonifico bancario"}
                  onChange={() => setPayment("Bonifico bancario")}
                />

                Bonifico bancario

              </label>



              <label className="flex gap-3">

                <input
                  type="radio"
                  checked={payment === "PayPal"}
                  onChange={() => setPayment("PayPal")}
                />

                PayPal

              </label>


            </div>



            <button
              onClick={handleSubmit}
              className="
                mt-10
                w-full
                rounded-full
                bg-[#d4af37]
                py-5
                font-bold
                text-black
                transition
                hover:scale-105
              "
            >
              Conferma ordine
            </button>


          </div>


        </section>
                {/* RIEPILOGO ORDINE */}


        <aside
          className="
            h-fit
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            p-8
          "
        >

          <h2 className="text-2xl font-semibold">
            Il tuo ordine
          </h2>


          <div className="mt-8 space-y-6">


            {items.map((item) => (

              <div
                key={item.id}
                className="
                  flex
                  gap-4
                  border-b
                  border-white/10
                  pb-5
                "
              >


                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-16
                    w-16
                    rounded-xl
                    object-cover
                    border
                    border-white/10
                  "
                />


                <div className="flex-1">


                  <p className="font-semibold">
                    {item.name}
                  </p>


                  <p className="text-sm text-white/50">
                    Quantità: {item.quantity}
                  </p>


                  <p className="mt-2 text-[#d4af37]">
                    € {item.price * item.quantity}
                  </p>


                </div>


              </div>


            ))}


          </div>




          <div className="mt-8 border-t border-white/10 pt-6">


            <p className="text-sm uppercase tracking-widest text-white/50">
              Totale ordine
            </p>


            <p className="mt-2 text-4xl font-bold text-[#d4af37]">
              € {getCartTotal()}
            </p>


          </div>




          <Link
            href="/cart"
            className="
              mt-8
              inline-block
              text-[#d4af37]
              transition
              hover:text-white
            "
          >
            ← Torna al carrello
          </Link>


        </aside>


      </div>


    </main>

  );

}