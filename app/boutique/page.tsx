import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.45em] text-[#d4af37]">
            Boutique
          </p>

          <h1 className="mt-6 text-5xl font-bold lg:text-7xl">
            La Boutique del Magico Camillo
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/70">
            Prodotti originali, libri, effetti magici e creazioni pensate
            per portare un po&apos; di magia anche a casa.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}