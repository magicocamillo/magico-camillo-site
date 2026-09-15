import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Spettacolo per Feste ed Eventi",
  description:
    "Intrattenimento su misura per compleanni, cerimonie, feste private e serate speciali: magia e comicità che trasformano ogni evento in un ricordo indimenticabile.",
  alternates: { canonical: "/spettacoli/feste-eventi" },
  openGraph: {
    title: "Spettacolo per Feste ed Eventi | Magico Camillo",
    description:
      "Intrattenimento su misura per compleanni, cerimonie, feste private e serate speciali: magia e comicità che trasformano ogni evento in un ricordo indimenticabile.",
    url: "/spettacoli/feste-eventi",
    images: [{ url: "/images/gallery/gallery 08.jpeg", alt: "Spettacolo per feste ed eventi di Magico Camillo" }],
  },
};

const features = [
  {
    title: "Eventi su misura",
    description:
      "Un intrattenimento adattato a compleanni, cerimonie e serate private.",
  },
  {
    title: "Atmosfera festiva",
    description:
      "Momenti di sorpresa e leggerezza che coinvolgono tutti gli invitati.",
  },
  {
    title: "Elementi visuali forti",
    description:
      "Magia ed effetti pensati per trasformare ogni evento in un ricordo speciale.",
  },
  {
    title: "Chiusura spettacolare",
    description:
      "Un finale emozionante con bolle di sapone e un tocco poetico.",
  },
];

const technicalRequirements = [
  "Area dedicata all’esecuzione con spazio sufficiente per movimenti e apparizioni.",
  "Illuminazione adeguata per valorizzare l’atmosfera dell’evento.",
  "Audio professionale per il pubblico anche in ambienti più ampi o aperti.",
  "Disponibilità di un’area di preparazione per gli accessori e gli effetti.",
];

export default function FesteEventiPage() {
  return (
    <ServiceDetailPage
      title="Feste ed Eventi"
      intro="Intrattenimento su misura per compleanni, cerimonie, feste private e serate speciali."
      heroImage="/images/gallery/gallery 08.jpeg"
      description="Ogni evento viene trasformato in una narrazione coinvolgente, con momenti di magia e umorismo pensati per lasciare il segno in ogni ospite."
      features={features}
    />
  );
}