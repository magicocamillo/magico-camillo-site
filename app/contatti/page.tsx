import type { Metadata } from "next";
import ContattiClient from "./ContattiClient";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Richiedi disponibilità e preventivo per uno spettacolo di Magico Camillo: contattami per telefono, email o tramite il modulo per Family Hotel, teatri, comuni, feste ed eventi.",
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: "Contatti | Magico Camillo",
    description:
      "Richiedi disponibilità e preventivo per uno spettacolo di Magico Camillo: contattami per telefono, email o tramite il modulo per Family Hotel, teatri, comuni, feste ed eventi.",
    url: "/contatti",
  },
};

export default function ContattiPage() {
  return <ContattiClient />;
}
