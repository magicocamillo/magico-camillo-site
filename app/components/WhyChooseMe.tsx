"use client";

import { AnimatedBox, AnimatedSection, fadeUpVariant, hoverLift } from "./AnimatedSection";

const features = [
  {
    icon: "🎩",
    title: "Oltre 3000 spettacoli",
    description:
      "Un'esperienza costruita in anni di palcoscenico tra Family Hotel, teatri, scuole, biblioteche ed eventi.",
  },
  {
    icon: "😂",
    title: "Risate per tutta la famiglia",
    description:
      "Uno spettacolo coinvolgente dove bambini e adulti si divertono insieme dall'inizio alla fine.",
  },
  {
    icon: "✨",
    title: "Magia, teatro e tecnologia",
    description:
      "Non solo giochi di magia: personaggi, comicità, musica, effetti scenici e tanta interazione.",
  },
  {
    icon: "🫧",
    title: "Finale con bolle di sapone",
    description:
      "Un momento poetico che conclude ogni spettacolo lasciando negli occhi un ricordo speciale.",
  },
];

export default function WhyChooseMe() {
  return (
    <AnimatedSection
      className="border-t border-white/10 bg-black px-6 py-24 sm:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Perché scegliere Magico Camillo
          </p>

          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Molto più di uno spettacolo di magia
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Ogni spettacolo nasce per coinvolgere tutta la famiglia,
            unendo comicità, magia, teatro e tecnologia in un'esperienza
            elegante, divertente e ricca di emozioni.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((feature) => (
            <AnimatedBox
              key={feature.title}
              whileHover={hoverLift}
              className="rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-stage transition duration-300 hover:border-[#d4af37]/40 hover:bg-white/10"
            >
              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {feature.description}
              </p>

            </AnimatedBox>
          ))}

        </div>
      </div>
    </AnimatedSection>
  );
}