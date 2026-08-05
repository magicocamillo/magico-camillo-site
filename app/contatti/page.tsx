import type { Metadata } from "next";
import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";

const headingFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-parchment-heading",
});

const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-parchment-body",
});

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "I recapiti diretti di Magico Camillo: sede a Rovereto (TN), telefono, email e profili social per restare in contatto.",
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: "Contatti | Magico Camillo",
    description:
      "I recapiti diretti di Magico Camillo: sede a Rovereto (TN), telefono, email e profili social per restare in contatto.",
    url: "/contatti",
  },
};

const INK = "#241a0c";
const INK_SOFT = "#3d2d16";
const BRONZE = "#8a6a1f";
const GOLD = "#d4af37";

const noiseSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/></filter>" +
  "<rect width='100%' height='100%' filter='url(#n)' opacity='0.55'/></svg>";

const noiseBackground = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;

const parchmentBackground = `
  radial-gradient(circle at 85% 12%, rgba(110,80,35,0.16), transparent 28%),
  radial-gradient(circle at 8% 88%, rgba(110,80,35,0.14), transparent 32%),
  radial-gradient(circle at 60% 95%, rgba(110,80,35,0.12), transparent 30%),
  radial-gradient(ellipse at 30% 15%, #f4ead0 0%, #ecdfb8 35%, #ddc998 65%, #c8ac72 100%)
`;

type ContactDetailProps = {
  label: string;
  value: string;
  href?: string;
};

function ContactDetail({ label, value, href }: ContactDetailProps) {
  const content = (
    <>
      <p
        className="text-xs font-semibold uppercase tracking-[0.32em]"
        style={{ color: BRONZE }}
      >
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-7"
        style={{
          color: INK,
          fontFamily: "var(--font-parchment-body)",
        }}
      >
        {value}
      </p>
    </>
  );

  if (!href) {
    return <div>{content}</div>;
  }

  return (
    <a href={href} className="group block transition">
      <p
        className="text-xs font-semibold uppercase tracking-[0.32em]"
        style={{ color: BRONZE }}
      >
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-7 transition group-hover:opacity-70"
        style={{
          color: INK,
          fontFamily: "var(--font-parchment-body)",
          textDecoration: "underline",
          textDecorationColor: "rgba(212,175,55,0.5)",
          textUnderlineOffset: "6px",
        }}
      >
        {value}
      </p>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.3l6 2.7-6 2.7V9.3z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M15 3h-2.3C10.6 3 9 4.6 9 6.9V9H6.7v3H9v9h3v-9h2.4l.4-3H12V7.2c0-.8.5-1.2 1.3-1.2H15V3z"
        fill="currentColor"
      />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M14 3v10.6a2.6 2.6 0 1 1-2.1-2.55V8.95a4.6 4.6 0 1 0 4.1 4.57V8.15a5.9 5.9 0 0 0 3.4 1.1V7.2a3.9 3.9 0 0 1-2.9-1.7A4 4 0 0 1 16 3h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/magicocamillo",
    Icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@magicocamillo",
    Icon: YoutubeIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/magicocamillo",
    Icon: FacebookIcon,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@magicocamillo",
    Icon: TiktokIcon,
  },
];

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 sm:px-10 lg:px-14">
      <div className={`mx-auto max-w-4xl ${headingFont.variable} ${bodyFont.variable}`}>
        {/* CORNICE DORATA */}
        <div
          className="relative rounded-[10px] p-[3px] shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
          style={{ background: GOLD }}
        >
          <div
            className="relative overflow-hidden rounded-[7px] border"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          >
            {/* SFONDO PERGAMENA */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: parchmentBackground }}
            />

            {/* TRAMA / FIBRE DELLA CARTA */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                backgroundImage: noiseBackground,
                backgroundSize: "220px 220px",
                opacity: 0.5,
              }}
            />

            {/* BORDI INVECCHIATI (vignette) */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow:
                  "inset 0 0 60px 18px rgba(70,48,16,0.28), inset 0 0 160px 50px rgba(50,32,10,0.35)",
              }}
            />

            {/* ANGOLI ORNAMENTALI */}
            {[
              "top-4 left-4",
              "top-4 right-4",
              "bottom-4 left-4",
              "bottom-4 right-4",
            ].map((position) => (
              <span
                key={position}
                className={`pointer-events-none absolute ${position} h-3 w-3 rotate-45 border`}
                style={{ borderColor: GOLD }}
              />
            ))}

            {/* CONTENUTO */}
            <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="mx-auto mb-7 flex items-center justify-center gap-4">
                <span className="h-px w-14" style={{ background: GOLD }} />
                <span style={{ color: GOLD }} className="text-2xl leading-none">
                  ✦
                </span>
                <span className="h-px w-14" style={{ background: GOLD }} />
              </div>

              <p
                className="text-sm font-semibold uppercase tracking-[0.45em]"
                style={{ color: BRONZE }}
              >
                Magico Camillo
              </p>

              <h1
                className="mt-5 text-4xl sm:text-5xl"
                style={{
                  color: INK,
                  fontFamily: "var(--font-parchment-heading)",
                }}
              >
                Contatti
              </h1>

              <p
                className="mx-auto mt-7 max-w-xl text-xl italic leading-8"
                style={{
                  color: INK_SOFT,
                  fontFamily: "var(--font-parchment-body)",
                }}
              >
                Per informazioni, disponibilità o anche solo per scambiare
                due parole, questi sono i miei recapiti diretti.
              </p>

              <div
                className="mx-auto mt-10 h-px w-24"
                style={{
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                }}
              />

              <div className="mt-10 grid gap-10 text-left sm:grid-cols-3 sm:gap-8">
                <ContactDetail
                  label="Sede"
                  value="Via del Garda 44 bis, Rovereto (TN)"
                />

                <ContactDetail
                  label="Telefono"
                  value="+39 331 3712666"
                  href="tel:+393313712666"
                />

                <ContactDetail
                  label="Email"
                  value="magicocamillo@me.com"
                  href="mailto:magicocamillo@me.com"
                />
              </div>

              <div
                className="mx-auto mt-12 h-px w-24"
                style={{
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                }}
              />

              <p
                className="mt-10 text-sm font-semibold uppercase tracking-[0.4em]"
                style={{ color: BRONZE }}
              >
                Seguimi
              </p>

              <div className="mt-6 flex justify-center gap-5">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#d4af37] shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition duration-300 hover:scale-110 hover:shadow-[0_6px_22px_rgba(212,175,55,0.45)]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
