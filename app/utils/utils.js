import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

const getBlurredImageSrc = async (src) => {
  try {
    const file = await fs.readFile(`./public/${src}`);
    const { base64, color } = await getPlaiceholder(file);
    return base64;
  } catch (err) {
    console.log(err);
  }
};

export { getBlurredImageSrc };
