import { products } from "../../data/products";

import BookHero from "../../components/book/BookHero";
import BookStory from "../../components/book/BookStory";
import BookAudio from "../../components/book/BookAudio";
import BookGallery from "../../components/book/BookGallery";
import BookAuthors from "../../components/book/BookAuthors";
import BookFinalCTA from "../../components/book/BookFinalCTA";

export default function Page() {
  const product = products.find(
    (p) => p.id === "il-suono-delle-cose"
  );

  if (!product) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black pt-40 text-white">

      <BookHero product={product} />

      <BookStory />

      <BookAudio />

      <BookGallery />

      <BookAuthors />

      <BookFinalCTA />

    </main>
  );
}