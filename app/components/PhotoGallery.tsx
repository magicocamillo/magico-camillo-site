"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Image = {
  src: string;
  alt: string;
};

export default function PhotoGallery() {
  const [images, setImages] = useState<Image[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadImages();
  }, []);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-black transition hover:-translate-y-2 hover:border-[#d4af37]/40"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
      />
    </>
  );
}