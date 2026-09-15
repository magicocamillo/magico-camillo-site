import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  sendOrderConfirmationEmail,
  type OrderCustomer,
  type OrderProduct,
} from "../../order/send-order-email";

export const runtime = "nodejs";

let stripeClient: Stripe | null = null;

// Stessa logica del checkout: client creato al primo utilizzo, non al
// caricamento del modulo, per non far fallire la build su Vercel.
function getStripeClient(): Stripe {
  if (!stripeClient) {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      throw new Error("STRIPE_SECRET_KEY non configurata.");
    }
    stripeClient = new Stripe(apiKey);
  }
  return stripeClient;
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { success: false, message: "Webhook non configurato correttamente." },
      { status: 400 }
    );
  }

  const rawBody = await request.text();

  let event: Stripe.Event;

  try {
    event = getStripeClient().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Errore verifica webhook Stripe:", error);

    return NextResponse.json(
      { success: false, message: "Firma webhook non valida." },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const cliente = JSON.parse(
        session.metadata?.cliente || "{}"
      ) as OrderCustomer;

      const prodottiMetadata = JSON.parse(
        session.metadata?.prodotti || "[]"
      ) as { name: string; quantity: number; price: number }[];

      const prodotti: OrderProduct[] = prodottiMetadata.map(
        (item, index) => ({
          id: String(index),
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })
      );

      const totale = (session.amount_total ?? 0) / 100;
      const subtotale = (session.amount_subtotal ?? 0) / 100;
      const spedizione = totale - subtotale;

      const emailResult = await sendOrderConfirmationEmail({
        cliente,
        prodotti,
        subtotale,
        spedizione,
        totale,
        pagamento: "Carta di credito",
      });

      if (!emailResult.success) {
        console.error(
          "Errore invio email ordine da webhook Stripe:",
          emailResult.message
        );
      }
    } catch (error) {
      console.error("Errore elaborazione webhook Stripe:", error);
    }
  }

  return NextResponse.json({ received: true });
}
