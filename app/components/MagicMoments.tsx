"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MagicMomentsProps {
  images: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const getItemClass = (index: number) => {
  const classes = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
  ];
  return classes[index] ?? "lg:col-span-2 lg:row-span-1";
};

export default function MagicMoments({ images }: MagicMomentsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      className="border-t border-white/10 bg-black px-6 py-20 sm:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl space-y-8 text-center text-white">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">Momenti di magia</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Un racconto visivo dal vivo.</h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
            Aggiungi nuove foto nella cartella <code className="rounded bg-white/10 px-2 py-1 text-sm text-[#d4af37]">/public/images/gallery</code> e verranno mostrate automaticamente.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px]">
            {images.map((src, index) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-stage backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)] ${getItemClass(index)} h-full min-h-[240px]`}
              >
                <img
                  src={src}
                  alt={`Momento di magia ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Momento di magia</p>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-white/15 bg-white/5 p-10 text-center text-white/70">
            Nessuna immagine presente nella cartella gallery al momento.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 text-3xl text-white transition hover:bg-black/90 sm:right-6 sm:top-6"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <motion.img
              src={selectedImage}
              alt="Foto magica aperta"
              className="max-h-[90vh] max-w-[90vw] rounded-[28px] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
