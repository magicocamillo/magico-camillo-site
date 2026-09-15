import type { Metadata } from "next";
import { products } from "../../data/products";
import ProductJsonLd from "../../components/ProductJsonLd";

import BookHero from "../../components/book/BookHero";
import BookStory from "../../components/book/BookStory";
import BookAudio from "../../components/book/BookAudio";
import BookGallery from "../../components/book/BookGallery";
import BookAuthors from "../../components/book/BookAuthors";
import BookFinalCTA from "../../components/book/BookFinalCTA";

export const metadata: Metadata = {
  title: "Il suono delle cose — Libro illustrato",
  description:
    "Il suono delle cose è il libro illustrato di Magico Camillo con audiostoria, due canzoni originali e contenuti interattivi dedicati ai bambini.",
  alternates: { canonical: "/boutique/il-suono-delle-cose" },
  openGraph: {
    title: "Il suono delle cose — Libro illustrato | Magico Camillo",
    description:
      "Il suono delle cose è il libro illustrato di Magico Camillo con audiostoria, due canzoni originali e contenuti interattivi dedicati ai bambini.",
    url: "/boutique/il-suono-delle-cose",
    images: [{ url: "/images/products/suono-delle-cose-1.jpg", alt: "Il suono delle cose - libro illustrato" }],
  },
};

export default function Page() {
  const product = products.find(
    (p) => p.id === "il-suono-delle-cose"
  );

  if (!product) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black pt-40 text-white">

      <ProductJsonLd product={product} path="/boutique/il-suono-delle-cose" />

      <BookHero product={product} />

      <BookStory />

      <BookAudio />

      <BookGallery />

      <BookAuthors />

      <BookFinalCTA />

    </main>
  );
}