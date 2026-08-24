import { Resend } from "resend";

export type OrderProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type OrderCustomer = {
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

export type OrderEmailData = {
  cliente: OrderCustomer;
  prodotti: OrderProduct[];
  subtotale: number;
  spedizione: number;
  totale: number;
  pagamento: string;
};

export type SendOrderEmailResult =
  | { success: true }
  | { success: false; message: string };

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export async function sendOrderConfirmationEmail(
  data: OrderEmailData
): Promise<SendOrderEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "La chiave RESEND_API_KEY non è configurata.",
    };
  }

  const { cliente, prodotti, subtotale, spedizione, totale, pagamento } =
    data;

  const resend = new Resend(apiKey);

  const prodottiHtml = prodotti
    .map((item) => {
      const itemTotal = Number(item.price) * Number(item.quantity);

      return `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #dddddd;">
            ${escapeHtml(item.name)}
          </td>

          <td style="padding:12px;border-bottom:1px solid #dddddd;text-align:center;">
            ${escapeHtml(item.quantity)}
          </td>

          <td style="padding:12px;border-bottom:1px solid #dddddd;text-align:right;">
            ${formatPrice(itemTotal)}
          </td>
        </tr>
      `;
    })
    .join("");

  const emailResult = await resend.emails.send({
    from: "Magico Camillo <onboarding@resend.dev>",
    to: ["magicocamillo@me.com"],
    replyTo: cliente.email,
    subject: `Nuovo ordine Boutique - ${cliente.nome} ${cliente.cognome}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#111111;">
        <h1 style="color:#b08d1f;">
          Nuovo ordine Boutique
        </h1>

        <h2>Dati del cliente</h2>

        <p>
          <strong>Nome:</strong>
          ${escapeHtml(cliente.nome)} ${escapeHtml(cliente.cognome)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(cliente.email)}
        </p>

        <p>
          <strong>Telefono:</strong>
          ${escapeHtml(cliente.telefono)}
        </p>

        <h2>Indirizzo di spedizione</h2>

        <p>
          ${escapeHtml(cliente.via)} ${escapeHtml(cliente.numero)}<br>
          ${escapeHtml(cliente.cap)} ${escapeHtml(cliente.citta)}
          (${escapeHtml(cliente.provincia)})<br>
          ${escapeHtml(cliente.paese || "Italia")}
        </p>

        <h2>Prodotti ordinati</h2>

        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="padding:12px;border-bottom:2px solid #111111;text-align:left;">
                Prodotto
              </th>

              <th style="padding:12px;border-bottom:2px solid #111111;text-align:center;">
                Quantità
              </th>

              <th style="padding:12px;border-bottom:2px solid #111111;text-align:right;">
                Totale
              </th>
            </tr>
          </thead>

          <tbody>
            ${prodottiHtml}
          </tbody>
        </table>

        <div style="margin-top:24px;padding:20px;background:#f5f5f5;border-radius:12px;">
          <p>
            <strong>Subtotale prodotti:</strong>
            ${formatPrice(Number(subtotale))}
          </p>

          <p>
            <strong>Spese di spedizione:</strong>
            ${formatPrice(Number(spedizione))}
          </p>

          <p style="font-size:21px;">
            <strong>Totale ordine:</strong>
            ${formatPrice(Number(totale))}
          </p>

          <p>
            <strong>Metodo di pagamento:</strong>
            ${escapeHtml(pagamento)}
          </p>
        </div>

        ${
          cliente.note?.trim()
            ? `
              <h2>Note dell’ordine</h2>
              <p>${escapeHtml(cliente.note)}</p>
            `
            : ""
        }
      </div>
    `,
  });

  if (emailResult.error) {
    console.error("Errore Resend:", emailResult.error);

    return {
      success: false,
      message:
        emailResult.error.message ||
        "Resend non ha accettato l’invio dell’email.",
    };
  }

  return { success: true };
}
