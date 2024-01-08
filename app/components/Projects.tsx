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
    <section className="mx-auto mb-60 max-w-screen-lg">
      <h3 className=" text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-12">Projects</h3>
      <span className=" text-3xl text-center text-lightContent font-Poppins leading-7 block mb-24">Things I&#39;ve built so far</span>
      <div className="grid grid-cols-3 gap-12 gap-y-16">
        {CardData.map((item: CardData, index) => (
          <Card CardData={item} key={index} />
        ))}
      </div>
    </section>
  );
};
