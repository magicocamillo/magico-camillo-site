import { NextResponse } from "next/server";
import {
  sendOrderConfirmationEmail,
  sendBankTransferInstructionsEmail,
  sendPaypalInstructionsEmail,
} from "./send-order-email";

export const runtime = "nodejs";

type OrderProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type OrderCustomer = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  via: string;
  numero: string;
  cap: string;
  citta: string;
  provincia: string;
  paese?: string;
  note?: string;
};

type OrderRequest = {
  cliente: OrderCustomer;
  prodotti: OrderProduct[];
  subtotale: number;
  spedizione: number;
  totale: number;
  pagamento: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as OrderRequest;

    const {
      cliente,
      prodotti,
      subtotale,
      spedizione,
      totale,
      pagamento,
    } = data;

    if (
      !cliente ||
      !Array.isArray(prodotti) ||
      prodotti.length === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "I dati dell’ordine non sono validi.",
        },
        { status: 400 }
      );
    }

    const emailResult = await sendOrderConfirmationEmail({
      cliente,
      prodotti,
      subtotale,
      spedizione,
      totale,
      pagamento,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResult.message,
        },
        { status: 500 }
      );
    }

    // Per bonifico e PayPal mandiamo anche al cliente le istruzioni per
    // pagare. Se questa seconda email dovesse fallire non blocchiamo
    // l'ordine (il negoziante ha comunque ricevuto la notifica sopra e puo'
    // rispondere manualmente), logghiamo solo l'errore per diagnosi.
    if (pagamento === "Bonifico bancario") {
      const bonificoResult = await sendBankTransferInstructionsEmail({
        cliente,
        prodotti,
        subtotale,
        spedizione,
        totale,
        pagamento,
      });

      if (!bonificoResult.success) {
        console.error(
          "Errore invio istruzioni bonifico al cliente:",
          bonificoResult.message
        );
      }
    }

    if (pagamento === "PayPal") {
      const paypalResult = await sendPaypalInstructionsEmail({
        cliente,
        prodotti,
        subtotale,
        spedizione,
        totale,
        pagamento,
      });

      if (!paypalResult.success) {
        console.error(
          "Errore invio istruzioni PayPal al cliente:",
          paypalResult.message
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Ordine inviato correttamente.",
    });
  } catch (error) {
    console.error("Errore API ordine:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Errore durante l’invio dell’ordine.",
      },
      { status: 500 }
    );
  }
}
