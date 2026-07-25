import Link from "next/link";

const capannoImages = [
  "/images/capanno-magico/capanno-1.jpg",
  "/images/capanno-magico/capanno-2.jpg",
  "/images/capanno-magico/capanno-3.jpg",
  "/images/capanno-magico/capanno-4.jpg",
];

export default function CapannoFinal() {
  return (
    <>
      {/* COMPAGNIA MAGICO CAMILLO APS */}

      <section className="mt-24 overflow-hidden rounded-[42px] border border-[#d4af37]/20 bg-gradient-to-br from-[#161616] to-black shadow-stage">
        <div className="grid items-center gap-14 p-8 sm:p-10 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
              Compagnia Magico Camillo APS
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Un luogo dove la magia continua anche fuori dal palco.
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              Sono Presidente della Compagnia Magico Camillo APS, associazione
              culturale nata per promuovere arte, spettacolo, formazione e
              cultura attraverso esperienze dedicate a bambini, famiglie e
              artisti.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/70">
              Il cuore dell’associazione è il{" "}
              <strong className="text-white">Capanno Magico</strong>, uno
              spazio dove le idee prendono vita prima di salire sul
              palcoscenico.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/70">
              Qui organizziamo prove, laboratori, workshop, incontri e serate
              dedicate al teatro, alla magia, alla musica e alla crescita
              artistica.
            </p>

            <Link
              href="/capanno-magico"
              className="mt-10 inline-flex rounded-full bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Scopri il Capanno Magico
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {capannoImages.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[28px] border border-white/10 ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Capanno Magico ${index + 1}`}
                  className={`w-full object-cover transition duration-500 hover:scale-105 ${
                    index === 0 ? "h-72" : "h-48"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINALE */}

      <section className="mx-auto mb-16 mt-24 max-w-4xl text-center">
        <blockquote className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          “Quel giorno mia figlia non disegnò soltanto un clown.
          <span className="mt-3 block text-[#d4af37]">
            Disegnò il futuro che io non riuscivo ancora a vedere.”
          </span>
        </blockquote>

        <p className="mt-10 text-lg leading-9 text-white/60 sm:text-xl">
          Se, tornando a casa, un bambino continua a parlare dello spettacolo,
          allora la magia ha fatto davvero il suo lavoro.
        </p>
      </section>
    </>
  );
}