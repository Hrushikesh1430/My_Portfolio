import Image, { StaticImageData } from "next/image";
import { getBlurredImageSrc } from "../utils/utils";

interface blurProps {
  src: string;
  alt: string;
  className?: string;
}

export const BlurredImage = async ({ src, className, alt }: blurProps) => {
  const blurSrc = await getBlurredImageSrc(src);
  return <Image src={src} alt={alt} className={className} fill placeholder="blur" blurDataURL={blurSrc} />;
};
