import type { Metadata } from "next";
import HeroStory from "./components/HeroStory";
import RacheleArticle from "./components/RacheleArticle";
import JourneyTraining from "./components/JourneyTraining";
import CapannoFinal from "./components/CapannoFinal";

export const metadata: Metadata = {
  title: "Chi è Magico Camillo | Mago per bambini, Family Hotel ed eventi",

  description:
    "Scopri chi è Magico Camillo, nome d'arte di Emanuele Cozzaglio. Dopo oltre 23 anni nella Polizia di Stato ha trasformato la passione per magia, teatro e comicità in una professione. Oggi porta spettacoli per bambini, famiglie, Family Hotel, scuole, biblioteche, comuni ed eventi in Trentino-Alto Adige, sul Lago di Garda e in tutta Italia.",

  keywords: [
    "Magico Camillo",
    "Emanuele Cozzaglio",
    "mago per bambini",
    "mago Trentino",
    "mago Lago di Garda",
    "Family Hotel",
    "spettacoli di magia",
    "spettacoli per famiglie",
    "magia comica",
    "teatro ragazzi",
  ],

  alternates: {
    canonical: "/chi-sono",
  },

  openGraph: {
    title: "Chi è Magico Camillo | Mago per bambini e famiglie",

    description:
      "La storia di Magico Camillo: dalla Polizia di Stato ai palchi di Family Hotel, teatri, scuole, biblioteche ed eventi in tutta Italia.",

    url: "/chi-sono",

    images: [
      {
        url: "/images/about/hero.jpg",
        width: 4668,
        height: 2962,
        alt: "Magico Camillo durante uno spettacolo",
      },
    ],
  },
};

export default function ChiSono() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-24">
        <HeroStory />
        <RacheleArticle />
        <JourneyTraining />
        <CapannoFinal />
      </div>
    </main>
  );
}