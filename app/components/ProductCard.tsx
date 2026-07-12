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

  const productLink =
    product.id === "il-suono-delle-cose"
      ? "/boutique/il-suono-delle-cose"
      : `/boutique/${product.id}`;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-gradient-to-b
        from-white/10
        to-white/5
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#d4af37]
        hover:shadow-[0_25px_70px_rgba(212,175,55,0.22)]
      "
    >
      {product.featured && (
        <div className="absolute left-5 top-5 z-20 rounded-full bg-[#d4af37] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
          ⭐ Best Seller
        </div>
      )}

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            {product.category}
          </span>

          <span className="text-sm text-green-400">
            ● Disponibile
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-[#d4af37]">
          {product.name}
        </h3>

        <p className="mt-4 min-h-[56px] leading-7 text-white/70">
          {product.shortDescription}
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              Prezzo
            </p>

            <p className="text-4xl font-bold text-[#d4af37]">
              € {product.price}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={handleAdd}
            className="
              flex-1
              rounded-full
              bg-[#d4af37]
              px-6
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            🛒 Aggiungi
          </button>

          <Link
            href={productLink}
            className="
              rounded-full
              border
              border-[#d4af37]
              px-6
              py-4
              font-semibold
              text-[#d4af37]
              transition-all
              duration-300
              hover:bg-[#d4af37]
              hover:text-black
            "
          >
            Scopri
          </Link>
        </div>
      </div>
    </article>
  );
}