import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public/images/gallery");

    const files = fs
      .readdirSync(galleryPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      );

    const images = files.map((file) => ({
      src: `/images/gallery/${file}`,
      alt: path.parse(file).name.replace(/[-_]/g, " "),
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error(error);

    return NextResponse.json([], {
      status: 500,
    });
  }
}