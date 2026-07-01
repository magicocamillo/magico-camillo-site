import fs from "fs";
import path from "path";
import MagicMoments from "./MagicMoments";

const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

function getGalleryImages() {
  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp|avif|gif)$/i.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => `/images/gallery/${entry.name}`);
}

export default function MagicMomentsSection() {
  const images = getGalleryImages();
  return <MagicMoments images={images} />;
}
