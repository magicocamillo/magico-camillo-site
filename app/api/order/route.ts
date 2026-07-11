import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  try {

    const data = await request.json();


    const prodotti = data.prodotti
      .map(
        (item: any) =>
          `${item.name} x ${item.quantity} - €${item.price * item.quantity}`
      )
      .join("\n");



    const emailText = `
NUOVO ORDINE BOUTIQUE MAGICO CAMILLO


CLIENTE

Nome: ${data.cliente.nome}
Cognome: ${data.cliente.cognome}
Email: ${data.cliente.email}
Telefono: ${data.cliente.telefono}


INDIRIZZO

Via: ${data.cliente.via}
Numero: ${data.cliente.numero}
CAP: ${data.cliente.cap}
Città: ${data.cliente.citta}
Provincia: ${data.cliente.provincia}


PRODOTTI

${prodotti}


TOTALE

€${data.totale}


PAGAMENTO

${data.pagamento}


NOTE

${data.cliente.note}
`;



    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "magicocamillo@me.com",

      subject: "Nuovo ordine Boutique Magico Camillo",

      text: emailText,

    });



    return NextResponse.json({

      success: true,

    });



  } catch (error) {


    console.error(error);


    return NextResponse.json(

      {
        success: false,
      },

      {
        status: 500,
      }

    );


  }

}