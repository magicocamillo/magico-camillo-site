export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  shortDescription: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "servo-magic-pro",
    name: "Servo Magic PRO",
    category: "Elettronica",
    price: 89,
    image: "/images/products/servo-magic-pro.jpg",
    images: [
      "/images/products/servo-magic-pro.jpg",
    ],
    shortDescription:
      "Sistema radiocomandato professionale per animare oggetti durante gli spettacoli.",
    description:
      "Servo Magic PRO è un dispositivo professionale progettato da Magico Camillo per animare oggetti di scena durante spettacoli di magia, teatro e illusionismo.",
    features: [
      "Radiocomando professionale",
      "Portata fino a 50 metri",
      "Batteria ricaricabile",
      "Ideale per spettacoli di magia",
    ],
    featured: true,
  },

  {
    id: "fire-control",
    name: "Fire Control",
    category: "Effetti Speciali",
    price: 59,
    image: "/images/products/fire-control-1.jpg",
    images: [
      "/images/products/fire-control-1.jpg",
      "/images/products/fire-control-2.jpg",
      "/images/products/fire-control-3.jpg",
    ],
    shortDescription:
      "Centralina per effetti con carta lampo e accessori scenici.",
    description:
      "Fire Control permette di controllare in sicurezza effetti scenici durante spettacoli professionali.",
    features: [
      "Controllo remoto",
      "Compatibile con carta lampo",
      "Alimentazione 12V",
      "Facile da installare",
    ],
  },

  {
    id: "magic-box",
    name: "Magic Box",
    category: "Effetti di Magia",
    price: 79,
    image: "/images/products/magic-box-1.jpg",
    images: [
      "/images/products/magic-box-1.jpg",
      "/images/products/magic-box-2.jpg",
      "/images/products/magic-box-3.jpg",
    ],
    shortDescription:
      "Effetto esclusivo progettato da Magico Camillo.",
    description:
      "Magic Box è un effetto originale costruito artigianalmente e pensato per maghi professionisti.",
    features: [
      "Costruzione artigianale",
      "Effetto esclusivo",
      "Pronto all'uso",
      "Manuale incluso",
    ],
  },
];