import type { Metadata } from "next";
import RichiediPreventivoClient from "./RichiediPreventivoClient";

export const metadata: Metadata = {
  title: "Richiedi un preventivo",
  description:
    "Richiedi disponibilità e preventivo per uno spettacolo di Magico Camillo: compila il modulo con data, luogo e tipologia di evento per Family Hotel, teatri, comuni, feste ed eventi.",
  alternates: { canonical: "/richiedi-preventivo" },
  openGraph: {
    title: "Richiedi un preventivo | Magico Camillo",
    description:
      "Richiedi disponibilità e preventivo per uno spettacolo di Magico Camillo: compila il modulo con data, luogo e tipologia di evento per Family Hotel, teatri, comuni, feste ed eventi.",
    url: "/richiedi-preventivo",
  },
};

export default function RichiediPreventivoPage() {
  return <RichiediPreventivoClient />;
}
