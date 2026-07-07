import ServiceDetailPage from "../components/ServiceDetailPage";

const features = [
  {
    title: "Spettacoli su misura",
    description:
      "Format pensati per Family Hotel, villaggi turistici e strutture ricettive.",
  },
  {
    title: "Coinvolgimento di tutta la famiglia",
    description:
      "Bambini, genitori e nonni partecipano insieme in un'esperienza divertente.",
  },
  {
    title: "Audio professionale",
    description:
      "Impianto audio e luci professionale per garantire la migliore qualità.",
  },
  {
    title: "Finale con bolle di sapone",
    description:
      "Un finale poetico che lascia un ricordo speciale a tutti gli ospiti.",
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
      title="Family Hotel"
      intro="Lo spettacolo pensato per regalare una serata indimenticabile a bambini e famiglie."
      heroImage="/images/gallery/gallery 03.jpeg"
      description="Da oltre 15 anni porto magia, comicità e poesia nei Family Hotel di tutta Italia. Uno spettacolo professionale, coinvolgente e adatto a ogni età."
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
