import type { Metadata } from "next";
import CookiePreferencesLink from "../components/CookiePreferencesLink";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Quali cookie e tecnologie simili usa il sito di Magico Camillo e come gestire il consenso.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-3xl space-y-8 leading-7 text-white/80">
        <h1 className="text-4xl font-semibold text-white">Cookie policy</h1>

        <p>
          Questa pagina spiega quali cookie e tecnologie simili usa il sito
          magicocamillo.com e come puoi scegliere quali accettare.
        </p>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#d4af37]">
            Titolare del trattamento
          </h2>
          <p>
            Emanuele Cozzaglio – Magico Camillo, Via del Garda 44 bis, Rovereto
            (TN). Email:{" "}
            <a
              href="mailto:magicocamillo@me.com"
              className="text-[#d4af37] underline underline-offset-2"
            >
              magicocamillo@me.com
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#d4af37]">
            Cookie tecnici (sempre attivi)
          </h2>
          <p>
            Servono a far funzionare il sito e non richiedono il consenso. Il
            sito salva nel tuo browser il contenuto del carrello, i dati
            dell&apos;ultimo ordine per mostrarti la conferma e la tua scelta
            sui cookie. Il pagamento con carta avviene sulla pagina sicura di
            Stripe, che usa i propri cookie tecnici.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#d4af37]">
            Cookie di marketing (solo con il tuo consenso)
          </h2>
          <p>
            Se clicchi &quot;Accetta&quot; nel banner, il sito attiva il pixel
            di Meta (Meta Platforms Ireland Ltd.). Il pixel registra le pagine
            visitate, i prodotti guardati, le aggiunte al carrello e gli
            acquisti, per misurare i risultati delle nostre pubblicità su
            Facebook e Instagram e mostrarle a persone interessate. I dati sono
            trattati da Meta secondo la sua{" "}
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] underline underline-offset-2"
            >
              informativa privacy
            </a>
            . Se clicchi &quot;Rifiuta&quot;, il pixel non viene caricato.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#d4af37]">
            Cambiare la tua scelta
          </h2>
          <p>
            Puoi cambiare idea in qualsiasi momento: clicca qui sotto e il
            banner ricomparirà.
          </p>
          <p className="font-semibold text-[#d4af37] underline underline-offset-2">
            <CookiePreferencesLink />
          </p>
        </div>

        <p className="text-sm text-white/50">Ultimo aggiornamento: 18 ottobre 2026.</p>
      </div>
    </section>
  );
}
