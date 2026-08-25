import type { Metadata } from "next";
import { products } from "../../data/products";
import ProductJsonLd from "../../components/ProductJsonLd";
import ProductPageClient from "./ProductPageClient";

type Params = { id: string };

const dedicatedRoutes = new Set(["il-suono-delle-cose", "kit-magia"]);

export function generateStaticParams(): Params[] {
  return products
    .filter((product) => !dedicatedRoutes.has(product.id))
    .map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return { title: "Prodotto non trovato" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/boutique/${product.id}` },
    openGraph: {
      title: `${product.name} | Magico Camillo`,
      description: product.shortDescription,
      url: `/boutique/${product.id}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  return (
    <>
      {product && (
        <ProductJsonLd product={product} path={`/boutique/${product.id}`} />
      )}

      <ProductPageClient />
    </>
  );
}
