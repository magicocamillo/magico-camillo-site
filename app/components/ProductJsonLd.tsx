import type { Product } from "../data/products";

const siteUrl = "https://magicocamillo.com";

type ProductJsonLdProps = {
  product: Product;
  path: string;
};

export default function ProductJsonLd({ product, path }: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${siteUrl}${product.image}`],
    description: product.shortDescription,
    sku: product.id,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Magico Camillo",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}${path}`,
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script
      type="application/ld+json"
      // I dati strutturati Product aiutano Google a mostrare prezzo e
      // disponibilita' direttamente nei risultati di ricerca, e sono il
      // requisito di base per comparire anche su Google Shopping
      // (tramite Merchant Center) in futuro.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
