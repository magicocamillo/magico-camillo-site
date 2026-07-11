"use client";

import { AnimatedBox, AnimatedSection, fadeUpVariant, hoverLift } from "./AnimatedSection";

const testimonials = [
  {
    category: "Family Hotel",
    text: "Uno spettacolo coinvolgente che riesce a divertire bambini e adulti nello stesso momento. Un appuntamento che i nostri ospiti aspettano ogni estate.",
  },
  {
    category: "Biblioteca",
    text: "Professionalità, sensibilità e tantissima capacità di coinvolgere il pubblico. I bambini sono rimasti incantati fino all'ultimo minuto.",
  },
  {
    category: "Pro Loco",
    text: "Ha trasformato una semplice serata di paese in un evento speciale. Pubblico numeroso, applausi continui e tantissimi complimenti.",
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 sm:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Recensioni
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Le emozioni raccontate da chi ci ha scelto
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Ogni applauso è il risultato di un'esperienza costruita con cura,
            professionalità e tanta voglia di regalare sorrisi.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <AnimatedBox
              key={item.category}
              whileHover={hoverLift}
              className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-stage transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10"
            >

              <div className="mb-8 flex items-center justify-between">

                <div className="text-2xl tracking-[0.2em] text-[#d4af37]">
                  ★★★★★
                </div>

                <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#d4af37]">
                  {item.category}
                </span>

              </div>

              <p className="text-lg leading-9 text-white/80">
                “{item.text}”
              </p>

            </AnimatedBox>
          ))}

        </div>

        <div className="mt-16 text-center">

          <p className="text-xl italic text-white/70">
            "Ogni evento è diverso. Ogni emozione è autentica."
          </p>

        </div>

      </div>
    </AnimatedSection>
  );
}