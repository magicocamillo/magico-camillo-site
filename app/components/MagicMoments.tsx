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
    "lg:col-span-2",
    "lg:col-span-1",
    "lg:col-span-1",
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-1",
  ];

  return classes[index] ?? "lg:col-span-1";
};

export default function MagicMoments({ images }: MagicMomentsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      className="border-t border-white/10 bg-black px-6 py-32 sm:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.8 }}
    >

      <div className="mx-auto max-w-7xl space-y-12 text-center text-white">

        <div className="space-y-5">

          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Momenti di magia
          </p>

          <h2 className="text-4xl font-semibold sm:text-5xl">
            Un racconto visivo dal vivo.
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
            Immagini che raccontano emozioni, spettacoli e momenti
            indimenticabili vissuti insieme al pubblico.
          </p>

        </div>


        {images.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[360px]">

            {images.map((src, index) => (

              <motion.button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className={`
                  group relative overflow-hidden rounded-[32px]
                  border border-white/10
                  bg-white/5
                  shadow-stage
                  ${getItemClass(index)}
                `}
              >

                <img
                  src={src}
                  alt={`Momento di magia ${index + 1}`}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />


                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-80
                    transition
                    group-hover:opacity-100
                  "
                />

              </motion.button>

            ))}

          </div>

        ) : (

          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            text-white/60
          ">
            Nessuna immagine presente.
          </div>

        )}

      </div>



      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/95
              p-6
            "
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-6
                top-6
                h-12
                w-12
                rounded-full
                border
                border-white/20
                text-3xl
                text-white
              "
            >
              ×
            </button>


            <motion.img
              src={selectedImage}
              alt="Foto magia"
              className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-3xl
                object-contain
              "
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
            />

          </motion.div>

        )}

      </AnimatePresence>


    </motion.section>
  );
}