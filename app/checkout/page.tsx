"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  clearCart,
  getCart,
  CartItem,
} from "../data/carts";

const SHIPPING_COST = 7;
const ORDER_CONFIRMATION_KEY = "magico-camillo-ultimo-ordine";

export default function CheckoutPage() {
  const router = useRouter();

  const [payment, setPayment] = useState("Bonifico bancario");
  const [items, setItems] = useState<CartItem[]>([]);
  const [sending, setSending] = useState(false);

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

  useEffect(() => {
    setItems(getCart());
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const finalTotal = subtotal + shipping;

  function formatPrice(value: number) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function formIsValid() {
    return Boolean(
      form.nome.trim() &&
        form.cognome.trim() &&
        form.email.trim() &&
        form.telefono.trim() &&
        form.via.trim() &&
        form.numero.trim() &&
        form.cap.trim() &&
        form.citta.trim() &&
        form.provincia.trim()
    );
  }

  async function handleSubmit() {
    if (sending) {
      return;
    }

    if (items.length === 0) {
      window.alert("Il carrello è vuoto.");
      return;
    }

    if (!formIsValid()) {
      window.alert("Compila tutti i campi obbligatori.");
      return;
    }

    const order = {
      cliente: {
        ...form,
        paese: "Italia",
      },
      prodotti: items,
      subtotale: subtotal,
      spedizione: shipping,
      totale: finalTotal,
      pagamento: payment,
    };

    try {
      setSending(true);

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const responseText = await response.text();

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = {
            success: false,
            message: "Il server ha restituito una risposta non valida.",
          };
        }
      }

      if (!response.ok || !result.success) {
        window.alert(
          result.message || "Errore durante l’invio dell’ordine."
        );
        return;
      }

      const confirmationData = {
        nome: form.nome,
        cognome: form.cognome,
        email: form.email,
        pagamento: payment,
        prodotti: items,
        subtotale: subtotal,
        spedizione: shipping,
        totale: finalTotal,
        data: new Date().toISOString(),
      };

      window.sessionStorage.setItem(
        ORDER_CONFIRMATION_KEY,
        JSON.stringify(confirmationData)
      );

      clearCart();
      setItems([]);

      window.dispatchEvent(new Event("cartUpdated"));

      router.push("/ordine-confermato");
    } catch (error) {
      console.error("Errore invio ordine:", error);
      window.alert("Errore di connessione.");
    } finally {
      setSending(false);
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
                type="text"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                autoComplete="given-name"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="cognome"
                type="text"
                placeholder="Cognome"
                value={form.cognome}
                onChange={handleChange}
                autoComplete="family-name"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="telefono"
                type="tel"
                placeholder="Telefono"
                value={form.telefono}
                onChange={handleChange}
                autoComplete="tel"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />
            </div>

            <h2 className="mt-10 text-2xl font-semibold">
              Indirizzo di spedizione
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input
                name="via"
                type="text"
                placeholder="Via"
                value={form.via}
                onChange={handleChange}
                autoComplete="address-line1"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="numero"
                type="text"
                placeholder="Numero civico"
                value={form.numero}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="cap"
                type="text"
                inputMode="numeric"
                placeholder="CAP"
                value={form.cap}
                onChange={handleChange}
                autoComplete="postal-code"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="citta"
                type="text"
                placeholder="Città"
                value={form.citta}
                onChange={handleChange}
                autoComplete="address-level2"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                name="provincia"
                type="text"
                placeholder="Provincia"
                value={form.provincia}
                onChange={handleChange}
                autoComplete="address-level1"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
              />

              <input
                value="Italia"
                readOnly
                aria-label="Paese"
                className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white/60"
              />
            </div>

            <textarea
              name="note"
              placeholder="Note ordine (facoltativo)"
              value={form.note}
              onChange={handleChange}
              className="mt-5 min-h-32 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#d4af37]"
            />

            <h2 className="mt-10 text-2xl font-semibold">
              Metodo di pagamento
            </h2>

            <div className="mt-5 space-y-4">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "Bonifico bancario"}
                  onChange={() => setPayment("Bonifico bancario")}
                />

                <span>Bonifico bancario</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "PayPal"}
                  onChange={() => setPayment("PayPal")}
                />

                <span>PayPal</span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={sending || items.length === 0}
              className="
                mt-10
                w-full
                rounded-full
                bg-[#d4af37]
                py-5
                font-bold
                text-black
                transition
                hover:scale-[1.02]
                hover:bg-[#e5c24d]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              {sending ? "Invio dell’ordine..." : "Conferma ordine"}
            </button>
          </div>
        </section>

        <aside className="h-fit rounded-[35px] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">
            Il tuo ordine
          </h2>

          {items.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-white/60">
                Il carrello è vuoto.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-white/10 pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-xl border border-white/10 object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-white/50">
                      Quantità: {item.quantity}
                    </p>

                    <p className="mt-2 text-[#d4af37]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/60">
                Subtotale prodotti
              </span>

              <span className="font-semibold">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <span className="text-white/60">
                Spese di spedizione
              </span>

              <span className="font-semibold">
                {formatPrice(shipping)}
              </span>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-sm uppercase tracking-widest text-white/50">
                Totale ordine
              </p>

              <p className="mt-2 text-4xl font-bold text-[#d4af37]">
                {formatPrice(finalTotal)}
              </p>

              <p className="mt-2 text-sm text-white/40">
                Spedizione inclusa
              </p>
            </div>
          </div>

          <Link
            href="/cart"
            className="mt-8 inline-block text-[#d4af37] transition hover:text-white"
          >
            Torna al carrello
          </Link>
        </aside>
      </div>
    </main>
  );
}