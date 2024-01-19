import Image from "next/image";
import { BlurredImage } from "../BlurredImage";

const TechStack = () => {
  const tech: Array<string> = ["html", "css", "js", "react", "next", "tailwind", "bootstrap", "git"];
  return (
    <section className="mx-auto px-8 mb-40 lg:p-0 lg:max-w-screen-lg lg:mb-60" id="Techstack">
      <h3 className="text-4xl lg:text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-12">Tech Stack</h3>
      <span className="text-2xl lg:text-3xl text-center text-lightContent font-Poppins leading-7 block mb-24 ">
        Technologies I’ve been working with recently
      </span>

      <div className="flex overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center [&_li]:mx-5 lg:[&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll">
          {tech.map((item, key) => (
            <li key={key} className={`relative w-24 h-24 lg:w-28 lg:h-24 ${item === "next" ? "bg-white" : ""}`}>
              <BlurredImage src={`logos/${item}.svg`} alt={`${item}_logo`} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center [&_li]:mx-5 lg:[&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll" aria-hidden="true">
          {tech.map((item, key) => (
            <li key={key} className={`relative w-24 h-24 lg:w-28 lg:h-24 ${item === "next" ? "bg-white" : ""}`}>
              <BlurredImage src={`logos/${item}.svg`} alt={`${item}_logo`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
