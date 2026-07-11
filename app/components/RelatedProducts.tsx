import Link from "next/link";
import { Product } from "../data/products";

interface Props {
  products: Product[];
  currentId: string;
}

export default function RelatedProducts({
  products,
  currentId,
}: Props) {
  const related = products
    .filter((p) => p.id !== currentId)
    .slice(0, 3);

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-4xl font-bold text-white">
        Ti potrebbe interessare anche
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/boutique/${product.id}`}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/40"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                {product.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                {product.name}
              </h3>

              <p className="mt-4 text-[#d4af37] text-2xl font-bold">
                € {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}