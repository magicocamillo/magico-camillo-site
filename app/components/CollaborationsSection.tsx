"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
type Collaboration = {
  name: string;
  location: string;
  image: string;
  imageHover?: string;
  description: string;
  website: string;
};

const collaborations: Collaboration[] = [
    {
    name: "Grand Hotel Piz Galin",
    location: "Andalo (TN)",
    image: "/images/collaborazioni/piz-galin.jpg",
      imageHover: "/images/collaborazioni/piz-galin-2.jpg",
    description:
      "Da diversi anni porto il mio spettacolo di magia comica e bolle di sapone alle famiglie ospiti del Grand Hotel Piz Galin, contribuendo a rendere ancora più speciale la loro vacanza.",
    website: "https://www.pizgalin.it",
  },
  {
    name: "Alpino Baby Family Hotel",
    location: "Andalo (TN)",
    image: "/images/collaborazioni/alpino-baby-family.jpg",
          imageHover: "/images/collaborazioni/alpino-baby-family-2.jpg",
    description:
      "Un vero paradiso per bambini... e anche per i più piccolini. All'Alpino Baby Family Hotel porto il mio spettacolo di magia e comicità, regalando momenti di meraviglia e divertimento a tutta la famiglia.",
    website: "https://www.hotelalpinoandalo.com",
  },
  {
    name: "Astoria Comfort Hotel",
    location: "Andalo (TN)",
    image: "/images/collaborazioni/astoria.jpg",
              imageHover: "/images/collaborazioni/astoria-2.jpg",
    description:
      "Collaboro con l'Astoria Comfort Hotel portando spettacoli di magia, comicità e bolle di sapone dedicati alle famiglie e ai bambini durante il soggiorno in montagna.",
    website: "https://www.astoria-andalo.com",
  },
  {
    name: "Hotel AlpHoliday Dolomiti",
    location: "Dimaro Folgarida (TN)",
    image: "/images/collaborazioni/alpholiday.jpg",
              imageHover: "/images/collaborazioni/alpholiday-2.jpg",
    description:
      "Dal 2026 collaboro con l'Hotel AlpHoliday Dolomiti, portando spettacoli di magia comica, comicità e bolle di sapone per regalare momenti di divertimento e meraviglia alle famiglie in vacanza.",
    website: "https://www.alpholiday.it",
  },
  {
    name: "Hotel Serena",
    location: "Andalo (TN)",
    image: "/images/collaborazioni/hotel-serena.jpg",
              imageHover: "/images/collaborazioni/hotel-serena-2.jpg",
    description:
      "All'Hotel Serena di Andalo ogni dettaglio è pensato per regalare alle famiglie una vacanza speciale. La qualità della cucina, la cordialità dell'accoglienza e la cura con cui ogni esperienza viene proposta agli ospiti rendono questa struttura un punto di riferimento per chi cerca una vacanza all'insegna del relax e del divertimento.",
    website: "https://www.hotelserena.it",
  },
  {
    name: "AKI Family Resort",
    location: "Meluno, Bressanone (BZ)",
    image: "/images/collaborazioni/aki.jpg",
              imageHover: "/images/collaborazioni/aki-2.jpg",
    description:
      "Una collaborazione speciale con il prestigioso AKI Family Resort PLOSE, elegante resort a cinque stelle immerso nella natura delle Dolomiti.",
    website: "https://www.aki-plose.com/it/",
  },
  {
  name: "Gardea SoulFamily Resort",
  location: "Torbole sul Garda (TN)",
  image: "/images/collaborazioni/gardea-1.jpg",
  imageHover: "/images/collaborazioni/gardea-2.jpg",
  description:
    "Dal 2026 collaboro con il Gardea SoulFamily Resort di Torbole sul Garda, una struttura pensata per regalare alle famiglie un'esperienza di vacanza indimenticabile. Tra piscine, attività dedicate ai bambini, spazi immersi nella natura e un'accoglienza di altissimo livello, porto i miei spettacoli di magia per rendere ancora più speciale il soggiorno di grandi e piccoli.",
  website: "https://www.gardeahotel.com",
},
];

export default function CollaborationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <p className="uppercase tracking-[0.4em] text-[#d4af37]">
            COLLABORAZIONI
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            Family Hotel che hanno scelto
            <br />
            Magico Camillo
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Da molti anni porto i miei spettacoli di magia, comicità e poesia
            nei migliori Family Hotel del Trentino Alto Adige.
          </p>

        </motion.div>

        <div className="mt-24 space-y-24">

          {collaborations.map((hotel, index) => (
            <motion.article
  key={hotel.name}
  initial={{
    opacity: 0,
    y: 70,
    scale: 0.97,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.9,
    delay: index * 0.08,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[42px]
    border
    border-white/10
    bg-white/[0.045]
    backdrop-blur-xl
    transition-all
    duration-700
    hover:border-[#d4af37]/50
    hover:shadow-[0_0_90px_rgba(212,175,55,.12)]
  "
>

  {/* Riflesso */}

  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    <div
      className="
        absolute
        -left-1/3
        top-0
        h-full
        w-1/3
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        blur-xl
        opacity-0
        transition-all
        duration-[1800ms]
        group-hover:translate-x-[450%]
        group-hover:opacity-100
      "
    />

  </div>

  <div
    className={`
      grid
      items-center
      lg:grid-cols-2
      ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}
    `}
  >

    {/* FOTO */}

    <div className="relative overflow-hidden">

    <motion.div
  animate={{
    scale: [1, 1.025, 1],
    x: [0, -5, 0],
    y: [0, 3, 0],
  }}
  whileHover={{
    scale: 1.05,
  }}
  transition={{
    scale: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    },
    x: {
      duration: 24,
      repeat: Infinity,
      ease: "easeInOut",
    },
    y: {
      duration: 21,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative"
>

    {/* Foto principale */}

  <Image
    src={hotel.image}
    alt={hotel.name}
    width={1200}
    height={850}
    className="
      h-full
      w-full
      object-cover
      transition-all
      duration-[1800ms]
      ease-out
      group-hover:scale-105
      group-hover:opacity-0
    "
  />

  {/* Seconda foto */}

  {hotel.imageHover && (
    <Image
      src={hotel.imageHover}
      alt={hotel.name}
      width={1200}
      height={850}
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        opacity-0
        transition-all
        duration-[3000ms]
        ease-out
        group-hover:opacity-100
        group-hover:scale-112
      "
    />
  )}

</motion.div>
  

     <div

  className="

    absolute

    inset-0

    pointer-events-none

    bg-gradient-to-t

    from-black/45

    via-black/10

    to-[#d4af37]/10

  "

/>

    </div>

    {/* TESTO */}

    <motion.div
      className="flex flex-col justify-center p-12 lg:p-16"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.18 }}
    >

      <p className="uppercase tracking-[0.35em] text-[#d4af37]">
        Collaborazione
      </p>

      <h3 className="mt-5 text-4xl font-semibold text-white">
        {hotel.name}
      </h3>

      <p className="mt-3 text-lg text-white/60">
        {hotel.location}
      </p>

      <p className="mt-8 text-lg leading-8 text-white/75">
        {hotel.description}
      </p>

      <motion.div
        className="mt-10"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.25 }}
      >

        <Link
          href={hotel.website}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#d4af37]
            px-8
            py-4
            uppercase
            tracking-[0.18em]
            text-[#d4af37]
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-black
            hover:shadow-[0_0_30px_rgba(212,175,55,.35)]
          "
        >

          Visita il sito

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>

        </Link>

      </motion.div>

    </motion.div>

  </div>

  <motion.div
    className="pointer-events-none absolute inset-0 rounded-[42px] border border-[#d4af37]/20"
    animate={{
      opacity: [0.15, 0.45, 0.15],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

</motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}