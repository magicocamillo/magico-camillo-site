import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Spettacoli per Comuni, Teatri e Festival | Magico Camillo",
  description:
    "Magico Camillo realizza spettacoli professionali di magia comica per Comuni, teatri, piazze, rassegne culturali, biblioteche e festival. Oltre 15 anni di esperienza con eventi pubblici in tutta Italia.",
  alternates: {
    canonical: "/spettacoli/teatri-comuni",
  },
  openGraph: {
    title: "Spettacoli per Comuni e Teatri | Magico Camillo",
    description:
      "Spettacoli professionali di magia comica per Comuni, teatri, piazze, festival e manifestazioni pubbliche.",
    url: "/spettacoli/teatri-comuni",
    images: [
      {
        url: "/images/gallery/gallery 06.jpeg",
        alt: "Magico Camillo durante uno spettacolo in teatro",
      },
    ],
  },
};

const features = [
  {
    title: "Ideale per eventi pubblici",
    description:
      "Spettacoli pensati per Comuni, rassegne culturali, piazze, festival, biblioteche e teatri con un linguaggio adatto a un pubblico eterogeneo.",
  },
  {
    title: "Coinvolge bambini e adulti",
    description:
      "Uno spettacolo capace di far divertire tutta la famiglia, alternando comicità, magia e momenti di grande partecipazione.",
  },
  {
    title: "Produzione completamente autonoma",
    description:
      "Magico Camillo arriva con impianto audio Bose professionale, luci LED e tutta l'attrezzatura necessaria, riducendo al minimo le esigenze organizzative.",
  },
  {
    title: "Esperienza e affidabilità",
    description:
      "Oltre quindici anni di esperienza in eventi pubblici, collaborazioni con Comuni, teatri, biblioteche e manifestazioni in tutta Italia.",
  },
];

const technicalRequirements = [
  "Spazio scenico minimo consigliato: 4 × 4 metri.",
  "Una presa di corrente 220V.",
  "Accesso con furgone per il carico e scarico dell'attrezzatura.",
  "Montaggio circa 60 minuti e smontaggio circa 30 minuti.",
];

export default function TeatriComuniPage() {
  return (
    <ServiceDetailPage
      title="Spettacoli per Comuni e Teatri"
      intro="Magico Camillo porta nei teatri, nelle piazze e nelle manifestazioni pubbliche uno spettacolo professionale di magia comica capace di coinvolgere bambini, famiglie e pubblico di ogni età."
      heroImage="/images/gallery/gallery 06.jpeg"
      description="Ogni spettacolo dura circa 55 minuti e unisce magia, comicità, teatro, musica, tecnologia e partecipazione del pubblico. È il format ideale per Comuni, Pro Loco, rassegne culturali, festival, biblioteche e teatri che desiderano proporre un evento di qualità, coinvolgente e adatto a tutta la famiglia."
      galleryImages={[
        "/images/gallery/gallery 07.jpeg",
        "/images/gallery/gallery 08.jpeg",
        "/images/gallery/gallery 09.jpeg",
      ]}
      features={features}
      technicalRequirements={technicalRequirements}
    />
  );
}