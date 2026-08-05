"use client";

import { motion, type Variants } from "framer-motion";

type CardConfig = {
  fromX: number;
  fromY: number;
  fromRotate: number;
  toX: number;
  toY: number;
  toRotate: number;
  zIndex: number;
};

const cards: CardConfig[] = [
  { fromX: -420, fromY: 40, fromRotate: -50, toX: -96, toY: 10, toRotate: -20, zIndex: 10 },
  { fromX: -420, fromY: 60, fromRotate: -30, toX: -34, toY: -6, toRotate: -7, zIndex: 20 },
  { fromX: 420, fromY: 60, fromRotate: 30, toX: 34, toY: -6, toRotate: 7, zIndex: 20 },
  { fromX: 420, fromY: 40, fromRotate: 50, toX: 96, toY: 10, toRotate: 20, zIndex: 10 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: (card: CardConfig) => ({
    opacity: 0,
    x: card.fromX,
    y: card.fromY,
    rotate: card.fromRotate,
    scale: 0.75,
  }),
  visible: (card: CardConfig) => ({
    opacity: 1,
    x: card.toX,
    y: card.toY,
    rotate: card.toRotate,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 15 },
  }),
};

function CardBack({ id }: { id: string }) {
  const patternId = `card-lattice-${id}`;

  return (
    <svg
      viewBox="0 0 100 140"
      className="h-40 w-28 drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] sm:h-48 sm:w-32"
    >
      <defs>
        <pattern
          id={patternId}
          width="10"
          height="10"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#d4af37"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect
        x="2"
        y="2"
        width="96"
        height="136"
        rx="10"
        fill="#0a0a0a"
        stroke="#d4af37"
        strokeWidth="2"
      />

      <rect
        x="9"
        y="9"
        width="82"
        height="122"
        rx="7"
        fill={`url(#${patternId})`}
        stroke="#d4af37"
        strokeOpacity="0.5"
        strokeWidth="1"
      />

      <circle
        cx="50"
        cy="70"
        r="19"
        fill="#0a0a0a"
        stroke="#d4af37"
        strokeWidth="1.5"
      />

      <text x="50" y="78" textAnchor="middle" fontSize="20" fill="#d4af37" fontFamily="serif">
        ★
      </text>

      <text x="14" y="22" fontSize="11" fill="#d4af37">★</text>
      <text x="86" y="126" fontSize="11" fill="#d4af37" textAnchor="end">★</text>
    </svg>
  );
}

export default function FlyingCardsSection() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-[#d4af37]">
            UN TOCCO DI MAGIA
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            Come per magia, spuntano le carte
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Un piccolo assaggio di quello che succede durante lo spettacolo:
            sorprese che arrivano da ogni direzione.
          </p>
        </div>

        <motion.div
          className="relative mx-auto h-[240px] max-w-md sm:h-[280px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -ml-14 -mt-20 sm:-ml-16 sm:-mt-24"
              style={{ zIndex: card.zIndex }}
            >
              <motion.div
                custom={card}
                variants={cardVariants}
                style={{ transformOrigin: "bottom center" }}
              >
                <CardBack id={String(index)} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
