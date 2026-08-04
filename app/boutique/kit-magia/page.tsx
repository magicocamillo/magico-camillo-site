import type { Metadata } from "next";
import KitMagiaClient from "./KitMagiaClient";

export const metadata: Metadata = {
  title: "Kit Magia",
  description:
    "Il Kit Magia contiene 11 veri giochi di magia con video istruzioni incluse: adatto dai 5 ai 200 anni, per diventare un vero mago.",
  alternates: { canonical: "/boutique/kit-magia" },
  openGraph: {
    title: "Kit Magia | Magico Camillo",
    description:
      "Il Kit Magia contiene 11 veri giochi di magia con video istruzioni incluse: adatto dai 5 ai 200 anni, per diventare un vero mago.",
    url: "/boutique/kit-magia",
    images: [{ url: "/images/products/kit-magia-1.jpg", alt: "Kit Magia di Magico Camillo" }],
  },
};

export default function KitMagiaPage() {
  return <KitMagiaClient />;
}
