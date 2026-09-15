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
    id: "bauletto-magico",
    name: "Bauletto Magico",
    category: "Kit di magia",
    price: 25,
    image: "/images/products/bauletto-magico-1.jpg",
    images: [
      "/images/products/bauletto-magico-1.jpg",
      "/images/products/bauletto-magico-2.jpg",
      "/images/products/bauletto-magico-3.jpg",
    ],
    shortDescription:
      "Un bauletto con i Best Seller del Magico Camillo, giochi sorprendenti e video istruzioni.",
    description:
      "Il Bauletto Magico raccoglie alcuni dei giochi più amati del Magico Camillo. Contiene i Ferri di Madrid, un incredibile rompicapo con ferri di cavallo che nessuno saprà risolvere, tranne il mago; le bolle di sapone che non scoppiano; la bacchetta magica per l'apparizione del fiore e altri due giochi di magia a sorpresa. Un kit completo, subito pronto da usare, accompagnato da video istruzioni chiare e semplici.",
    features: [
      "Ferri di Madrid",
      "Bolle di sapone che non scoppiano",
      "Bacchetta magica con apparizione del fiore",
      "Due giochi di magia a sorpresa",
      "Video istruzioni comprese",
    ],
    featured: true,
  },

  {
    id: "bacchetta-magica",
    name: "Bacchetta Magica",
    category: "Magia per tutti",
    price: 10,
    image: "/images/products/bacchetta-magica-1.jpg",
    images: [
      "/images/products/bacchetta-magica-1.jpg",
      "/images/products/bacchetta-magica-2.jpg",
    ],
    shortDescription:
      "Lo strumento più importante di ogni mago, subito pronto per creare stupore e sorrisi.",
    description:
      "La bacchetta magica è lo strumento più importante di ogni mago, ma attenzione: bisogna presentarla come si deve! È un regalo subito pronto e immediatamente utilizzabile, capace di creare un potente effetto sugli spettatori. Ti accompagnerà in tantissimi giochi e spettacoli, regalando migliaia di sorrisi e momenti di vero stupore. È adatta anche ai più piccoli e diventerà uno degli oggetti che userai più spesso.",
    features: [
      "Subito pronta da usare",
      "Adatta anche ai più piccoli",
      "Grande effetto sugli spettatori",
      "Perfetta per giochi e spettacoli",
    ],
    featured: true,
  },

  {
    id: "il-suono-delle-cose",
    name: "Il suono delle cose",
    category: "Libri",
    price: 15,
    image: "/images/products/suono-delle-cose-1.jpg",
    images: [
      "/images/products/suono-delle-cose-1.jpg",
      "/images/products/suono-delle-cose-2.png",
      "/images/products/suono-delle-cose-3.png",
      "/images/products/suono-delle-cose-4.png",
      "/images/products/suono-delle-cose-5.png",
    ],
    shortDescription:
      "Libro illustrato con audiostoria e contenuti interattivi.",
    description:
      "Il suono delle cose è un libro illustrato creato da Magico Camillo con audiostoria, canzoni e attività dedicate ai bambini.",
    features: [
      "Libro illustrato",
      "Audiostoria",
      "QR Code",
      "Due canzoni originali",
    ],
  },

  {
    id: "kit-magia",
    name: "Kit Magia",
    category: "Magia per bambini",
    price: 30,
    image: "/images/products/kit-magia-1.jpg",
    images: [
      "/images/products/kit-magia-1.jpg",
      "/images/products/kit-magia-2.jpg",
      "/images/products/kit-magia-3.jpg",
      "/images/products/kit-magia-4.jpg",
    ],
    shortDescription:
      "Undici veri giochi di magia per stupire parenti e amici e diventare un vero mago.",
    description:
      "Il Kit Magia contiene 11 veri oggetti diversi con cui realizzare giochi di magia e incantare parenti e amici. Alcuni effetti sono facilissimi da imparare, ma mai banali; altri richiedono un po' di studio, allenamento e prove, come il classico gioco dei tre bussolotti. Il kit comprende anche video istruzioni e una lettera dedicata ai genitori, con pensieri poetici e riflessioni sul valore educativo dell'esibirsi: scoprire, mettersi alla prova, organizzarsi, mostrarsi davanti a un pubblico, superare l'ansia e sviluppare fiducia nelle proprie capacità. Adatto ai bambini dai 5 anni fino ai 200.",
    features: [
      "11 veri giochi di magia",
      "Video istruzioni incluse",
      "Lettera educativa per i genitori",
      "Adatto dai 5 ai 200 anni",
    ],
    featured: true,
  },
];