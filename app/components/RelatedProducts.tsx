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

  if (related.length === 0) return null;

  return (
    <section className="mt-32 border-t border-white/10 pt-20">
      <div className="mb-12 text-center">

        <p className="uppercase tracking-[0.45em] text-[#d4af37] text-sm">
          Boutique Magico Camillo
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Ti potrebbe interessare anche
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
          Scopri altri prodotti progettati per illusionisti,
          animatori, artisti e professionisti dello spettacolo.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {related.map((product) => (

          <Link
            key={product.id}
            href={`/boutique/${product.id}`}
            className="
              group
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:-translate-y-3
              hover:border-[#d4af37]
              hover:shadow-2xl
              hover:shadow-[#d4af37]/20
            "
          >

            <div className="overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="
                  h-64
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

            </div>

            <div className="p-7">

              <span className="
                inline-block
                rounded-full
                bg-[#d4af37]/15
                px-4
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#d4af37]
              ">
                {product.category}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-[#d4af37]">
                {product.name}
              </h3>

              <p className="mt-3 line-clamp-2 text-white/60">
                {product.shortDescription}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-bold text-[#d4af37]">
                  € {product.price}
                </span>

                <span className="text-sm font-semibold uppercase tracking-wider text-white/70 transition group-hover:text-[#d4af37]">
                  Scopri →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}