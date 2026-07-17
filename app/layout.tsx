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

export const metadata: Metadata = {
  title: "Magico Camillo | Magia comica per bambini e famiglie",
  description:
    "Magico Camillo offre spettacoli di magia comica, bolle di sapone, teatro e sorprese per hotel, comuni, teatri e feste private.",
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
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* <SecretMagicButton /> */}
      </body>
    </html>
  );
}