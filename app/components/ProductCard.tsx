"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";
import { addToCart } from "../data/carts";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const productLink = `/boutique/${product.id}`;

  const formattedPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    window.alert(`${product.name} è stato aggiunto al carrello.`);
  }

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-gradient-to-b
        from-white/10
        to-white/[0.04]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#d4af37]
        hover:shadow-[0_25px_70px_rgba(212,175,55,0.22)]
      "
    >
      {product.featured && (
        <div className="absolute left-5 top-5 z-20 rounded-full bg-[#d4af37] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-lg">
          In evidenza
        </div>
      )}

      <Link
        href={productLink}
        aria-label={`Apri la pagina di ${product.name}`}
        className="relative block h-72 overflow-hidden bg-white/[0.03]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            {product.category}
          </span>

          <span className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponibile
          </span>
        </div>

        <Link href={productLink}>
          <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-[#d4af37]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-4 flex-1 leading-7 text-white/70">
          {product.shortDescription}
        </p>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/40">
            Prezzo
          </p>

          <p className="mt-1 text-4xl font-bold text-[#d4af37]">
            {formattedPrice}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleAdd}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#d4af37]
              px-6
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-[#e5c24d]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="10" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>

            Aggiungi
          </button>

          <Link
            href={productLink}
            className="
              flex
              items-center
              justify-center
              rounded-full
              border
              border-[#d4af37]
              px-7
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