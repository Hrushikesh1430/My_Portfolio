import Image from "next/image";

export const TechStack = () => {
  const tech: Array<string> = ["html", "css", "js", "react", "next", "tailwind", "bootstrap", "git"];
  return (
    <section className="mx-auto px-8 mb-40 lg:p-0 lg:max-w-screen-lg lg:mb-60">
      <h3 className="text-4xl lg:text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-12">Tech Stack</h3>
      <span className="text-2xl lg:text-3xl text-center text-lightContent font-Poppins leading-7 block mb-24 ">
        Technologies I’ve been working with recently
      </span>

      <div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center [&_li]:mx-8 min-w-full animate-loop-scroll [&_img]:max-w-none w-96 mr-[300px]">
          {tech.map((item, key) => (
            <li key={key} className={`${item === "next" && "bg-white"}`}>
              <Image src={`logos/${item}.svg`} width={105} height={105} alt={`${item}_logo`} />
            </li>
          ))}
        </ul>
        <ul className="flex  items-center [&_li]:mx-8 min-w-full animate-loop-scroll [&_img]:max-w-none w-96" aria-hidden="true">
          {tech.map((item, key) => (
            <li key={key}>
              <Image src={`logos/${item}.svg`} width={105} height={105} alt={`${item}_logo`} key={`id_${key}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
