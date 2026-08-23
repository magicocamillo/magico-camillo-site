import type { Metadata } from "next";
import HeroStory from "./components/HeroStory";
import RacheleArticle from "./components/RacheleArticle";
import JourneyTraining from "./components/JourneyTraining";
import CapannoFinal from "./components/CapannoFinal";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Il mio nome è Emanuele. Dopo oltre 23 anni nella Polizia di Stato, nel 2012 ho scelto di trasformare la mia passione per la magia, il teatro e la comicità nel mio lavoro: oggi sono il Magico Camillo.",
  alternates: { canonical: "/chi-sono" },
  openGraph: {
    title: "Chi Sono | Magico Camillo",
    description:
      "Il mio nome è Emanuele. Dopo oltre 23 anni nella Polizia di Stato, nel 2012 ho scelto di trasformare la mia passione per la magia, il teatro e la comicità nel mio lavoro: oggi sono il Magico Camillo.",
    url: "/chi-sono",
    images: [{ url: "/images/about/hero.jpg", width: 4668, height: 2962, alt: "Magico Camillo" }],
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