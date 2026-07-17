import ServiceDetailPage from "../components/ServiceDetailPage";

const features = [
  {
    title: "Formato teatrale",
    description:
      "Performance costruite per il ritmo di sale, palchi e spazi pubblici più ampi.",
  },
  {
    title: "Pubblico misto",
    description:
      "Magia, comicità e poesia che parlano a bambini e adulti insieme.",
  },
  {
    title: "Messaggio chiaro",
    description:
      "Un linguaggio diretto, elegante e immediato che si adatta a ogni contesto.",
  },
  {
    title: "Esperienza emozionale",
    description:
      "Un finale coinvolgente che lascia il pubblico con un ricordo duraturo.",
  },
];

const technicalRequirements = [
  "Palcoscenico o area teatrale con visibilità libera da tutto il pubblico.",
  "Punto luce e un minimo di profondità per i movimenti e gli effetti scenici.",
  "Audio professionale per garantire chiarezza anche nei grandi spazi.",
  "Disponibilità di un backstage o area di appoggio per l’allestimento.",
];

export default function TeatriComuniPage() {
  return (
    <ServiceDetailPage
      title="Teatri e Comuni"
      intro="Performance dal ritmo brillante e coinvolgente per teatri, piazze e manifestazioni comunali."
      heroImage="/images/gallery/gallery 06.jpeg"
      description="Il format è studiato per entrare in sintonia con il pubblico in ambienti più ampi, offrendo magia, umorismo e poesia con grande impatto visivo."
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