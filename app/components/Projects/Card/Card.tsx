import Image from "next/image";

interface CardProps {
  CardData: CardData;
}
interface CardData {
  title: string;
  description: string;
  techStack: string;
  live_url: string;
  github_url: string;
}
const Card = ({ CardData }: CardProps) => {
  return (
    <div
      className="font-Poppins bg-cardBackground rounded-2xl pb-7 shadow-md overflow-hidden ring-1 ring-gray-700/30 ring-inset lg:transition-all lg:duration-100 lg:hover:scale-110 cursor-pointer "
      style={{
        boxShadow: "2px 2px 100px 0px rgba(0, 0, 0, 0.20)",
      }}
    >
      <Image
        src="/projectTile.jpeg"
        alt="projectTile"
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover rounded-tl-2xl rounded-tr-2xl w-full h-auto mb-7"
      />

      <div className="text-headingWhite  px-7">
        <span className="text-center block leading-7 text-2xl mb-4 ">{CardData.title}</span>
        <span className="block text-base mb-3 font-Poppins font-light">{CardData.description}</span>
        <span className="block text-base mb-3 font-Poppins font-light">
          <span className=" font-semibold">Tech Stack: </span>
          {CardData.techStack}
        </span>
        <div className="flex">
          <div className="flex items-center mr-auto">
            <Image src="/link.svg" alt="link_icon" width={20} height={20} className="mr-2 inline-block" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base leading-7 text-headingWhite  font-Poppins font-extralight mr-auto hover:underline"
            >
              Live preview
            </a>
          </div>
          <div className="flex items-center ">
            <Image src="/logos/github.svg" alt="link_icon" width={20} height={20} className="mr-2 inline-block" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base leading-7 text-headingWhite  font-Poppins font-extralight mr-auto hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
