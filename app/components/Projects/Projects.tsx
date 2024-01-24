import Link from "next/link";
import CardData from "../../JSON/Projects.json";
import Card from "./Card/Card";

interface CardData {
  title: string;
  description: string;
  live_url: string;
  github_url: string;
  techStack: string;
  image: string;
}

const Projects = () => {
  return (
    <section className="mx-auto px-8 mb-40 flex flex-col lg:p-0 lg:mb-60 lg:max-w-screen-lg" id="Projects">
      <h3 className="text-4xl lg:text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-12">Projects</h3>
      <span className="text-2xl lg:text-3xl text-center text-lightContent font-Poppins leading-7 block mb-24">Things I&#39;ve built so far</span>
      <div className="flex flex-col place-items-center lg:place-items-stretch gap-8 md:grid md:grid-cols-2 lg:grid-cols-2 lg:max-w-6xl lg:gap-8 lg:gap-y-16">
        {CardData.map((item: CardData, index) => (
          <Card CardData={item} key={index} />
        ))}
      </div>

      <div className="mt-12 self-center">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl lg:text-2xl text-headingWhite text-center font-Poppins leading-7 cursor-pointer hover:underline"
          href="https://github.com/Hrushikesh1430"
        >
          View all projects
        </Link>
        <span></span>
      </div>
    </section>
  );
};

export default Projects;
