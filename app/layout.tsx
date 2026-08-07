import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import SecretMagicButton from "./components/SecretMagicButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://magicocamillo.com";
const siteName = "Magico Camillo";

const defaultTitle =
  "Magico Camillo | Spettacoli di magia per bambini, Family Hotel ed eventi";

const defaultDescription =
  "Magico Camillo porta spettacoli di magia comica, comicità, teatro e bolle di sapone in Family Hotel, resort, teatri, scuole, biblioteche, comuni ed eventi in Trentino-Alto Adige, sul Lago di Garda e in tutta Italia. Scopri anche la Boutique con articoli di magia esclusivi.";

const defaultOgImage = {
  url: "/images/about/stage.jpg",
  width: 2048,
  height: 1312,
  alt: "Magico Camillo sul palco durante uno spettacolo",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
     "Magico Camillo",
  "mago per bambini",
  "spettacoli di magia",
  "Family Hotel",
  "mago per hotel",
  "mago Trentino",
  "mago Lago di Garda",
  "spettacoli per famiglie",
  "spettacoli per scuole",
  "spettacoli per biblioteche",
  "teatro ragazzi",
  "bolle di sapone",
  "articoli di magia",
  "giochi di magia",
  "bacchetta magica",
  ],
  authors: [{ name: "Magico Camillo" }],
  creator: "Magico Camillo",
  publisher: "Magico Camillo",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage.url],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Magico Camillo",
  alternateName: "Emanuele",
  description:
    "Magico Camillo è un artista italiano specializzato in magia comica, teatro e intrattenimento per famiglie. Da oltre 15 anni porta sui palchi in Trentino-Alto Adige, sul Lago di Garda e in tutta Italia, spettacoli per Family Hotel, teatri, comuni, feste ed eventi privati.",
  url: siteUrl,
  image: `${siteUrl}/images/about/hero.jpg`,
  jobTitle: "Illusionista e artista di magia comica",
  knowsAbout: [
    "Magia comica",
    "Spettacoli per famiglie",
    "Intrattenimento teatrale",
    "Animazione per bambini",
  ],
  email: "mailto:magicocamillo@me.com",
  telephone: "+39-331-3712666",
  sameAs: ["https://www.instagram.com/magicocamillo/"],
  nationality: "Italiana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-black text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* <SecretMagicButton /> */}
      </body>
    </html>
  );
}