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
    image: product.images.map((img) => `${siteUrl}${img}`),
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

  const price = product.price.toFixed(2);

  return (
    <>
      {/* Tag Open Graph "product": Instagram e Facebook li leggono per
          riconoscere la pagina come scheda prodotto (prezzo, valuta,
          disponibilita'). React 19 li sposta automaticamente nell'<head>. */}
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="Magico Camillo" />
      <meta property="og:locale" content="it_IT" />
      <meta property="product:price:amount" content={price} />
      <meta property="product:price:currency" content="EUR" />
      <meta property="og:price:amount" content={price} />
      <meta property="og:price:currency" content="EUR" />
      <meta property="product:availability" content="in stock" />
      <meta property="og:availability" content="instock" />
      <meta property="product:condition" content="new" />
      <meta property="product:brand" content="Magico Camillo" />
      <meta property="product:retailer_item_id" content={product.id} />
      <meta property="product:category" content={product.category} />
    <script
      type="application/ld+json"
      // I dati strutturati Product aiutano Google a mostrare prezzo e
      // disponibilita' direttamente nei risultati di ricerca, e sono il
      // requisito di base per comparire anche su Google Shopping
      // (tramite Merchant Center) in futuro.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    </>
  );
}
