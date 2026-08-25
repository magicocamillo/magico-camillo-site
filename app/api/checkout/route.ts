import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Stripe accetta al massimo 500 caratteri per ogni valore di "metadata".
// Se superiamo il limite (es. carrello con molti prodotti o una nota lunga),
// la creazione della sessione di pagamento fallisce con un errore generico.
// Le funzioni qui sotto garantiscono di restare sempre entro il limite,
// mantenendo comunque un JSON valido (il webhook lo rilegge con JSON.parse).
const STRIPE_METADATA_MAX_LENGTH = 500;
const NOTE_MAX_LENGTH = 200;
const PRODUCT_NAME_MAX_LENGTH = 40;

function toSafeMetadataJSON(value: unknown, fallback: unknown): string {
  const json = JSON.stringify(value);

  if (json.length <= STRIPE_METADATA_MAX_LENGTH) {
    return json;
  }

  const fallbackJson = JSON.stringify(fallback);

  if (fallbackJson.length <= STRIPE_METADATA_MAX_LENGTH) {
    return fallbackJson;
  }

  // Rete di sicurezza estrema: non dovrebbe mai succedere con i fallback usati
  // qui sotto, ma evitiamo comunque di far fallire il pagamento per questo.
  return fallbackJson.slice(0, STRIPE_METADATA_MAX_LENGTH);
}

function truncateText(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}

type CheckoutItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CheckoutRequest = {
  cliente: Record<string, string>;
  prodotti: CheckoutItem[];
  spedizione: number;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as CheckoutRequest;
    const { cliente, prodotti, spedizione } = data;

    if (!Array.isArray(prodotti) || prodotti.length === 0) {
      return NextResponse.json(
        { success: false, message: "Carrello vuoto." },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "https://magicocamillo.com";

    const lineItems = prodotti.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: item.image ? [`${origin}${item.image}`] : undefined,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    if (spedizione > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: { name: "Spese di spedizione", images: undefined },
          unit_amount: Math.round(spedizione * 100),
        },
        quantity: 1,
      });
    }

    // Nota libera dell'ordine: la tronchiamo subito, è il campo più a rischio
    // di far sforare il limite di 500 caratteri dei metadata di Stripe.
    const clienteCompatto = {
      ...cliente,
      note: cliente.note ? truncateText(cliente.note, NOTE_MAX_LENGTH) : cliente.note,
    };

    const clienteMeta = toSafeMetadataJSON(clienteCompatto, {
      nome: cliente.nome,
      cognome: cliente.cognome,
      email: cliente.email,
      telefono: cliente.telefono,
      via: cliente.via,
      numero: cliente.numero,
      cap: cliente.cap,
      citta: cliente.citta,
      provincia: cliente.provincia,
      paese: cliente.paese,
    });

    const prodottiCompatti = prodotti.map((item) => ({
      name: truncateText(item.name, PRODUCT_NAME_MAX_LENGTH),
      quantity: item.quantity,
      price: item.price,
    }));

    const quantitaTotale = prodotti.reduce((tot, item) => tot + item.quantity, 0);
    const totaleProdotti = prodotti.reduce(
      (tot, item) => tot + item.price * item.quantity,
      0
    );

    const prodottiMeta = toSafeMetadataJSON(prodottiCompatti, [
      {
        name: `Ordine (${prodotti.length} prodotti, quantità ${quantitaTotale})`,
        quantity: 1,
        price: totaleProdotti,
      },
    ]);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: cliente.email,
      success_url: `${origin}/ordine-confermato?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: {
        cliente: clienteMeta,
        prodotti: prodottiMeta,
      },
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error) {
    const stripeError = error as {
      type?: string;
      code?: string;
      param?: string;
      message?: string;
    };

    // Logghiamo i dettagli dell'errore Stripe (tipo, codice, parametro) così
    // in caso di problemi si vede subito la causa reale nei log di Vercel,
    // invece del solo messaggio generico mostrato all'utente.
    console.error("Errore creazione sessione Stripe:", {
      type: stripeError?.type,
      code: stripeError?.code,
      param: stripeError?.param,
      message: stripeError?.message,
    });

    return NextResponse.json(
      { success: false, message: "Errore durante la creazione del pagamento." },
      { status: 500 }
    );
  }
}
