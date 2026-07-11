import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const prodottiHtml = data.prodotti
      .map(
        (item: any) => `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #333;">
              ${item.name}
            </td>
            <td style="padding:12px;border-bottom:1px solid #333;text-align:center;">
              ${item.quantity}
            </td>
            <td style="padding:12px;border-bottom:1px solid #333;text-align:right;">
              €${item.price * item.quantity}
            </td>
          </tr>
        `
      )
      .join("");



    const html = `
    <div style="
      background:#050505;
      color:white;
      font-family:Arial,Helvetica,sans-serif;
      padding:40px;
    ">

      <div style="
        max-width:650px;
        margin:auto;
        background:#111;
        border:1px solid #333;
        border-radius:20px;
        padding:35px;
      ">

        <h1 style="
          color:#d4af37;
          text-align:center;
          letter-spacing:2px;
        ">
          🎩 MAGICO CAMILLO
        </h1>


        <h2 style="text-align:center;">
          Nuovo ordine Boutique
        </h2>



        <hr style="border-color:#333;">



        <h3 style="color:#d4af37;">
          Cliente
        </h3>

        <p>
          <b>Nome:</b> ${data.cliente.nome}<br>
          <b>Cognome:</b> ${data.cliente.cognome}<br>
          <b>Email:</b> ${data.cliente.email}<br>
          <b>Telefono:</b> ${data.cliente.telefono}
        </p>



        <h3 style="color:#d4af37;">
          Indirizzo spedizione
        </h3>

        <p>
          ${data.cliente.via} ${data.cliente.numero}<br>
          ${data.cliente.cap} ${data.cliente.citta}<br>
          ${data.cliente.provincia}
        </p>



        <h3 style="color:#d4af37;">
          Prodotti acquistati
        </h3>


        <table style="
          width:100%;
          border-collapse:collapse;
          color:white;
        ">

          <thead>
            <tr>
              <th align="left">Prodotto</th>
              <th>Qtà</th>
              <th align="right">Prezzo</th>
            </tr>
          </thead>


          <tbody>
            ${prodottiHtml}
          </tbody>

        </table>



        <h2 style="
          color:#d4af37;
          text-align:right;
          margin-top:30px;
        ">
          Totale: €${data.totale}
        </h2>



        <p>
          <b>Pagamento:</b> ${data.pagamento}
        </p>



        <p>
          <b>Note:</b><br>
          ${data.cliente.note || "Nessuna nota"}
        </p>



        <hr style="border-color:#333;">


        <p style="
          text-align:center;
          color:#888;
        ">
          Ordine ricevuto dal sito magicocamillo.com
        </p>


      </div>

    </div>
    `;



    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "magicocamillo@me.com",
      subject: "🎩 Nuovo ordine Boutique Magico Camillo",
      html,
    });



    return NextResponse.json({
      success: true,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success:false,
      },
      {
        status:500,
      }
    );

  }
}