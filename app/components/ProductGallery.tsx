"use client";

import { useState } from "react";

interface Props {
  images: string[];
}

export default function ProductGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5">
        <img
          src={selected}
          alt=""
          className="h-[600px] w-full object-cover"
        />
      </div>

      <div className="mt-5 flex gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelected(image)}
            className={`overflow-hidden rounded-2xl border transition ${
              selected === image
                ? "border-[#d4af37]"
                : "border-white/10"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-24 w-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}