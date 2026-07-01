import fs from "fs";
import path from "path";
import MagicMoments from "./MagicMoments";

const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

function getGalleryImages() {
  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(jpe?g|png|webp|avif|gif)$/i.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}

export default function MagicMomentsSection() {
  const images = getGalleryImages();
  return <MagicMoments images={images} />;
}
