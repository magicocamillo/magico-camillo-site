import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: cliente.email,
      success_url: `${origin}/ordine-confermato?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: {
        cliente: JSON.stringify(cliente),
        prodotti: JSON.stringify(
          prodotti.map((p) => ({ name: p.name, quantity: p.quantity, price: p.price }))
        ),
      },
    });

    return NextResponse.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Errore creazione sessione Stripe:", error);
    return NextResponse.json(
      { success: false, message: "Errore durante la creazione del pagamento." },
      { status: 500 }
    );
  }
}