import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Mago per Family Hotel | Spettacoli di magia per bambini e famiglie",
  description:
    "Magico Camillo porta spettacoli di magia comica per Family Hotel, resort e villaggi turistici. Oltre 15 anni di esperienza con bambini e famiglie in Trentino-Alto Adige, Lago di Garda e tutta Italia.",
  alternates: {
    canonical: "/spettacoli/family-hotel",
  },
  openGraph: {
    title: "Mago per Family Hotel | Magico Camillo",
    description:
      "Magico Camillo porta spettacoli di magia comica per Family Hotel, resort e villaggi turistici. Oltre 15 anni di esperienza con bambini e famiglie in Trentino-Alto Adige, Lago di Garda e tutta Italia.",
    url: "/spettacoli/family-hotel",
    images: [
      {
        url: "/images/gallery/gallery 03.jpeg",
        alt: "Spettacolo Family Hotel di Magico Camillo",
      },
    ],
  },
};

const features = [
  {
    title: "Spettacoli su misura per Family Hotel",
    description:
      "Format pensati per Family Hotel, villaggi turistici e strutture ricettive.",
  },
  {
    title: "Coinvolgimento di tutta la famiglia",
    description:
      "Bambini, genitori e nonni partecipano insieme in un'esperienza divertente.",
  },
  {
    title: "Audio e luci professionali",
    description:
      "Impianto audio e luci professionali per garantire uno spettacolo di alto livello in qualsiasi struttura.",
  },
  {
    title: "Finale con bolle di sapone",
    description:
      "Un finale poetico che lascia un ricordo speciale a grandi e piccoli.",
  },
];

const technicalRequirements = [
  "Spazio minimo consigliato: 3 x 3 metri.",
  "Una presa di corrente 220V.",
  "Area libera davanti al pubblico.",
  "Tempo di allestimento: circa 30 minuti.",
];

export default function FamilyHotelPage() {
  return (
    <ServiceDetailPage
      title="Mago per Family Hotel"
      intro="Da oltre 15 anni porto spettacoli di magia comica nei Family Hotel italiani, coinvolgendo bambini, ragazzi e genitori con uno show ricco di comicità, emozioni e meraviglia."
      heroImage="/images/gallery/gallery 03.jpeg"
      description="Uno spettacolo professionale di circa 55 minuti che unisce magia comica, teatro, musica e coinvolgimento del pubblico. Ideale per Family Hotel, resort e villaggi turistici che desiderano offrire un'esperienza memorabile a bambini, ragazzi e adulti."
      galleryImages={[
        "/images/gallery/gallery 04.jpeg",
        "/images/gallery/gallery 05.jpeg",
        "/images/gallery/gallery 06.jpeg",
      ]}
      features={features}
      technicalRequirements={technicalRequirements}
    />
  );
}