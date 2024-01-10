import { Card } from "./Card";
import CardData from "../JSON/Projects.json";

interface CardData {
  title: string;
  description: string;
  live_url: string;
  github_url: string;
  techStack: string;
}

export const Projects = () => {
  return (
    <section className="mx-auto px-8 mb-40 lg:p-0 lg:mb-60 lg:max-w-screen-lg">
      <h3 className="text-4xl lg:text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-12">Projects</h3>
      <span className="text-2xl lg:text-3xl text-center text-lightContent font-Poppins leading-7 block mb-24">Things I&#39;ve built so far</span>
      <div className="flex flex-col place-items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:gap-y-16">
        {CardData.map((item: CardData, index) => (
          <Card CardData={item} key={index} />
        ))}
      </div>
    </section>
  );
};
