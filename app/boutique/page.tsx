"use client";

import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";
import { categories } from "../data/categories";

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryOk =
        selectedCategory === "Tutti" ||
        product.category === selectedCategory;

      const searchOk =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryOk && searchOk;
    });
  }, [selectedCategory, search]);

  return (
    <main className="px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">

        <section className="mb-14 rounded-[36px] border border-white/10 bg-white/5 p-10">

          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Boutique
          </p>

          <h1 className="mt-5 text-5xl font-bold text-white">
            Boutique del Magico Camillo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effetti professionali, elettronica per illusionisti,
            accessori scenici e idee originali progettate durante
            gli spettacoli.
          </p>

        </section>

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="mb-10">
          <input
            type="text"
            placeholder="🔍 Cerca un prodotto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </main>
  );
}