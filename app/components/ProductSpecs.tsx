interface Props {
  features: string[];
}

export default function ProductSpecs({ features }: Props) {
  return (
    <section className="mt-16">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Caratteristiche tecniche
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-xl text-black">
              ✓
            </div>

            <span className="text-white">
              {feature}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}