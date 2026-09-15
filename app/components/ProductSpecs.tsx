interface Props {
  features: string[];
}

export default function ProductSpecs({ features }: Props) {
  return (
    <section className="mt-20">

      <div className="mb-12 text-center">

        <p className="text-sm uppercase tracking-[0.45em] text-[#d4af37]">
          Qualità Professionale
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Perché scegliere questo prodotto
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
          Ogni prodotto è progettato e testato personalmente da
          <span className="font-semibold text-white">
            {" "}Magico Camillo
          </span>
          , con particolare attenzione ad affidabilità, semplicità d'uso
          e qualità costruttiva.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {features.map((feature) => (

          <div
            key={feature}
            className="
              group
              flex
              items-center
              gap-5
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#d4af37]
              hover:bg-white/10
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#d4af37]
                text-2xl
                text-black
                shadow-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              ✓
            </div>

            <div>

              <h3 className="font-semibold text-white">
                {feature}
              </h3>

              <p className="mt-1 text-sm text-white/60">
                Realizzato per un utilizzo professionale.
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-16 rounded-[36px] border border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10 p-8">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="text-center">
            <div className="text-4xl">🎩</div>
            <h3 className="mt-3 font-semibold text-white">
              Progettato da Magico Camillo
            </h3>
          </div>

          <div className="text-center">
            <div className="text-4xl">⭐</div>
            <h3 className="mt-3 font-semibold text-white">
              Qualità professionale
            </h3>
          </div>

          <div className="text-center">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-3 font-semibold text-white">
              Spedizione rapida
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}