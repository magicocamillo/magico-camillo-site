import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "La chiave RESEND_API_KEY non è configurata.",
        },
        { status: 500 }
      );
    }

    const data = await request.json();

    const nome = String(data.nome ?? data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const telefono = String(
      data.telefono ?? data.phone ?? ""
    ).trim();
    const oggetto = String(
      data.oggetto ?? data.subject ?? "Richiesta dal sito"
    ).trim();
    const messaggio = String(
      data.messaggio ?? data.message ?? ""
    ).trim();

    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        {
          success: false,
          message: "Compila nome, email e messaggio.",
        },
        { status: 400 }
      );
    }

    const emailIsValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Inserisci un indirizzo email valido.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Magico Camillo <onboarding@resend.dev>",
      to: ["magicocamillo@me.com"],
      replyTo: email,
      subject: `Nuovo messaggio dal sito - ${oggetto}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;color:#111111;">
          <h1 style="color:#b08d1f;">
            Nuovo messaggio dal sito
          </h1>

          <p>
            <strong>Nome:</strong>
            ${escapeHtml(nome)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email)}
          </p>

          ${
            telefono
              ? `
                <p>
                  <strong>Telefono:</strong>
                  ${escapeHtml(telefono)}
                </p>
              `
              : ""
          }

          <p>
            <strong>Oggetto:</strong>
            ${escapeHtml(oggetto)}
          </p>

          <div style="margin-top:24px;padding:20px;background:#f5f5f5;border-radius:12px;">
            <strong>Messaggio:</strong>

            <p style="white-space:pre-wrap;line-height:1.6;">
              ${escapeHtml(messaggio)}
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("Errore Resend contatti:", result.error);

      return NextResponse.json(
        {
          success: false,
          message:
            result.error.message ||
            "Errore durante l’invio del messaggio.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Messaggio inviato correttamente.",
    });
  } catch (error) {
    console.error("Errore API contatti:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Errore durante l’invio del messaggio.",
      },
      { status: 500 }
    );
  }
}