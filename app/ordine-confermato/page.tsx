"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ORDER_CONFIRMATION_KEY = "magico-camillo-ultimo-ordine";

interface ConfirmationProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ConfirmationData {
  nome: string;
  cognome: string;
  email: string;
  pagamento: string;
  prodotti: ConfirmationProduct[];
  subtotale: number;
  spedizione: number;
  totale: number;
  data: string;
}

export default function OrdineConfermatoPage() {
  const [order, setOrder] = useState<ConfirmationData | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedOrder = window.sessionStorage.getItem(
      ORDER_CONFIRMATION_KEY
    );

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder) as ConfirmationData);
      } catch {
        setOrder(null);
      }
    }

    setChecked(true);
  }, []);

  function formatPrice(value: number) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  if (!checked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#d4af37]" />
      </main>
    );
  }

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="w-full max-w-xl rounded-[35px] border border-white/10 bg-[#111] p-10 text-center">
          <h1 className="text-4xl font-bold">
            Nessun ordine da mostrare
          </h1>

          <p className="mt-5 leading-7 text-white/60">
            Non è presente una conferma d’ordine in questa sessione.
          </p>

          <Link
            href="/boutique"
            className="mt-8 inline-flex rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black"
          >
            Torna alla Boutique
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_40%)]" />

      <div className="relative mx-auto max-w-4xl">
        <section className="rounded-[40px] border border-[#d4af37]/30 bg-[#111] p-8 shadow-[0_0_90px_rgba(212,175,55,0.14)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
            Ordine ricevuto
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Grazie, {order.nome}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Il tuo ordine è stato inviato correttamente. Riceverai le
            informazioni necessarie per il pagamento e la spedizione
            all’indirizzo {order.email}.
          </p>

          <div className="mt-10 rounded-[30px] border border-white/10 bg-black/40 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">
              Riepilogo dell’ordine
            </h2>

            <div className="mt-7 space-y-5">
              {order.prodotti.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-5 border-b border-white/10 pb-5"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <p className="text-lg font-semibold">
                      {product.name}
                    </p>

                    <p className="mt-1 text-white/50">
                      Quantità: {product.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-[#d4af37]">
                    {formatPrice(
                      product.price * product.quantity
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4">
              <div className="flex justify-between gap-6 text-white/65">
                <span>Subtotale prodotti</span>
                <span>{formatPrice(order.subtotale)}</span>
              </div>

              <div className="flex justify-between gap-6 text-white/65">
                <span>Spese di spedizione</span>
                <span>{formatPrice(order.spedizione)}</span>
              </div>

              <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    Totale ordine
                  </p>

                  <p className="mt-2 text-white/55">
                    Pagamento: {order.pagamento}
                  </p>
                </div>

                <p className="text-4xl font-bold text-[#d4af37]">
                  {formatPrice(order.totale)}
                </p>
              </div>
            </div>
          </div>

          {order.pagamento === "Bonifico bancario" && (
            <div className="mt-8 rounded-[28px] border border-[#d4af37]/25 bg-[#d4af37]/5 p-6">
              <h2 className="text-xl font-bold text-[#d4af37]">
                Pagamento con bonifico
              </h2>

              <p className="mt-3 leading-7 text-white/60">
                Ti verranno comunicate le coordinate bancarie e le
                indicazioni per completare il pagamento.
              </p>
            </div>
          )}

          {order.pagamento === "PayPal" && (
            <div className="mt-8 rounded-[28px] border border-[#d4af37]/25 bg-[#d4af37]/5 p-6">
              <h2 className="text-xl font-bold text-[#d4af37]">
                Pagamento con PayPal
              </h2>

              <p className="mt-3 leading-7 text-white/60">
                Ti verranno comunicate le indicazioni per effettuare il
                pagamento tramite PayPal.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex justify-center rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-[1.03] hover:bg-[#e5c24d]"
            >
              Torna alla Home
            </Link>

            <Link
              href="/boutique"
              className="inline-flex justify-center rounded-full border border-[#d4af37]/40 px-8 py-4 font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              Torna alla Boutique
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}