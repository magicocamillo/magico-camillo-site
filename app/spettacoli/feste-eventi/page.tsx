import ServiceDetailPage from "../components/ServiceDetailPage";

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
      galleryImages={[
        "/images/gallery/gallery 02.jpeg",
        "/images/gallery/gallery 03.jpeg",
        "/images/gallery/gallery 10.jpeg",
      ]}
      features={features}
      technicalRequirements={technicalRequirements}
    />
  );
}