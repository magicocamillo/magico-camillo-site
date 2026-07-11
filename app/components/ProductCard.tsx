"use client";

import Link from "next/link";
import { Product } from "../data/products";
import { addToCart } from "../data/carts";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    alert(`${product.name} aggiunto al carrello`);
  }

  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
          {product.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          {product.name}
        </h3>

        <p className="mt-4 leading-7 text-white/70">
          {product.shortDescription}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-bold text-[#d4af37]">
            € {product.price}
          </span>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={handleAdd}
            className="flex-1 rounded-full bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            Aggiungi
          </button>

          <Link
            href={`/boutique/${product.id}`}
            className="rounded-full border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37]/10"
          >
            Scopri
          </Link>

        </div>

      </div>

    </article>
  );
}