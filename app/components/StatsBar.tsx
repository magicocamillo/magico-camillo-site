"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Anni di esperienza",
  },
  {
    value: "3000+",
    label: "Spettacoli realizzati",
  },
  {
    value: "100%",
    label: "Spettacoli dal vivo",
  },
  {
    value: "★★★★★",
    label: "Passione",
  },
];

export default function StatsBar() {
  return (
    <section className="mt-16">
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              transition: { duration: 0.2 },
            }}
            className="group relative w-[220px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d4af37]/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="text-5xl font-semibold leading-none text-[#d4af37] whitespace-nowrap">
                {item.value}
              </div>

              <div className="mt-6 h-px w-16 bg-[#d4af37]/40" />

              <div className="mt-6 text-sm uppercase tracking-[0.18em] leading-7 text-white/70">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}