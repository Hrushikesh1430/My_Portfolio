import Image, { StaticImageData } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

interface blurProps {
  src: string;
  alt: string;
  className?: string;
}

const getBlurredImageSrc = async (src: string) => {
  try {
    const file = await fs.readFile(`./public/${src}`);
    const { base64, color } = await getPlaiceholder(file);
    return base64;
  } catch (err) {
    console.log(err);
  }
};

export const BlurredImage = async ({ src, className, alt }: blurProps) => {
  const blurSrc = await getBlurredImageSrc(src);
  return <Image src={src} alt={alt} className={className} fill placeholder="blur" blurDataURL={blurSrc} />;
};
