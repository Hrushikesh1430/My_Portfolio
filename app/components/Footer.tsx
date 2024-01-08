import Image from "next/image";
import navJSON from "../JSON/navBar.json";

interface navItem {
  name: string;
  link: string;
}

export const Footer = () => {
  return (
    <section className="mx-auto max-w-screen-lg">
      <div className="flex justify-between w-full items-center mb-11">
        <Image src="/logos/logo.svg" alt="logo" width={97} height={59} />
        <div>
          <div className="flex">
            <span className="font-DMSans text-lg font-normal leading-7 text-lightContent pr-8">+91 8104460774</span>
            <span className="font-DMSans text-lg font-normal leading-7 text-lightContent">hdtawde@gmail.com</span>

            <div className="flex gap-3 ml-24">
              <Image src="/logos/github.svg" alt="github_logo" width={30} height={30} className="cursor-pointer" />
              <Image src="/logos/twitter.svg" alt="twitter_logo" width={30} height={30} className="cursor-pointer" />
              <Image src="/logos/linkedin.svg" alt="linkedin_logo" width={30} height={30} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 w-full h-[2px] mb-12"></div>
      <div className="flex justify-between mb-12">
        <ul className="flex font-DMSans">
          {navJSON.map((item: navItem, index) => (
            <li key={index} className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">
              {item.name}
            </li>
          ))}
        </ul>
        <span className="font-DMSans text-lg font-normal leading-7 text-lightContent">
          Built by Hrushikesh Tawde with{" "}
          <span className="bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent">Love & Chai</span>
        </span>
      </div>
    </section>
  );
};
