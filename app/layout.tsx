import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white font-sans">
        <Navbar />
        <div className="flex min-h-[calc(100vh-180px)] flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
