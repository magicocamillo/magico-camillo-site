"use client";

import { useState } from "react";

interface Props {
  images: string[];
}

export default function ProductGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="space-y-6">

      <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

        <img
          src={selected}
          alt=""
          className="
            h-[650px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {images.length > 1 && (

        <div className="grid grid-cols-4 gap-4">

          {images.map((image) => (

            <button
              key={image}
              onClick={() => setSelected(image)}
              className={`
                overflow-hidden
                rounded-2xl
                border-2
                transition-all
                duration-300
                ${
                  selected === image
                    ? "border-[#d4af37] scale-105 shadow-lg shadow-[#d4af37]/30"
                    : "border-white/10 hover:border-white/40"
                }
              `}
            >

              <img
                src={image}
                alt=""
                className="
                  h-24
                  w-full
                  object-cover
                  transition
                  duration-300
                  hover:scale-110
                "
              />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}