import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Mago per Family Hotel | Spettacoli di magia per bambini e famiglie",
  description:
    "Magico Camillo porta spettacoli professionali di magia comica nei Family Hotel, resort e villaggi turistici. Oltre 15 anni di esperienza con bambini e famiglie in Trentino-Alto Adige, sul Lago di Garda e in tutta Italia.",
  alternates: {
    canonical: "/spettacoli/family-hotel",
  },
  openGraph: {
    title: "Mago per Family Hotel | Magico Camillo",
    description:
      "Magico Camillo porta spettacoli professionali di magia comica nei Family Hotel, resort e villaggi turistici. Oltre 15 anni di esperienza con bambini e famiglie in Trentino-Alto Adige, sul Lago di Garda e in tutta Italia.",
    url: "/spettacoli/family-hotel",
    images: [
      {
        url: "/images/gallery/gallery 03.jpeg",
        alt: "Spettacolo di Magico Camillo in Family Hotel",
      },
    ],
  },
};

const features = [
  {
    title: "Esperienza nei Family Hotel",
    description:
      "Da oltre quindici anni Magico Camillo collabora con Family Hotel e resort, proponendo spettacoli pensati per il pubblico delle vacanze.",
  },
  {
    title: "Coinvolge tutta la famiglia",
    description:
      "Uno spettacolo che diverte bambini, ragazzi, genitori e nonni, trasformando ogni serata in un momento condiviso di emozione e divertimento.",
  },
  {
    title: "Service professionale completo",
    description:
      "Impianto audio Bose, luci LED professionali e allestimento completamente autonomo per garantire uno spettacolo di alta qualità.",
  },
  {
    title: "Finale poetico con bolle di sapone",
    description:
      "Un finale emozionante che conclude lo spettacolo con un'atmosfera di meraviglia, perfetta per essere ricordata da tutta la famiglia.",
  },
];

const technicalRequirements = [
  "Spazio minimo consigliato: 3 × 3 metri.",
  "Una presa di corrente 220V.",
  "Accesso con furgone per carico e scarico dell'attrezzatura.",
  "Sala libera durante le operazioni di montaggio.",
];

export default function FamilyHotelPage() {
  return (
    <ServiceDetailPage
      title="Mago per Family Hotel"
      intro="Da oltre quindici anni Magico Camillo porta spettacoli di magia comica nei Family Hotel italiani, regalando serate di grande coinvolgimento a bambini, famiglie e ospiti di ogni età."
      heroImage="/images/gallery/gallery 03.jpeg"
      description="Ogni spettacolo dura circa 55 minuti e unisce magia, comicità, teatro, musica, tecnologia e partecipazione del pubblico. Un format professionale, elegante e coinvolgente, ideale per Family Hotel, resort e villaggi turistici che desiderano offrire un'esperienza di qualità ai propri ospiti."
      features={features}
    />
  );
}