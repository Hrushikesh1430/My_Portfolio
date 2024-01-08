import Image from "next/image";
import Link from "next/link";
import navJSON from "../JSON/navBar.json";

interface navItem {
  name: string;
  link: string;
}

export const Header = () => {
  return (
    <header className="flex max-w-screen-lg mx-auto mb-24 ">
      <nav className="flex items-center py-6 w-full">
        <div className="mr-72 cursor-pointer">
          <Image src="/logos/logo.svg" alt="logo" width={97} height={59} />
        </div>

        <ul className="flex mr-auto font-DMSans">
          {navJSON.map((item: navItem, index) => (
            <li key={index} className="mr-8 font-medium leading-7 cursor-pointer text-xl text-lightContent hover:text-slate-300 ">
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <Image src="/logos/github.svg" alt="github_logo" width={30} height={30} className="cursor-pointer" />
          <Image src="/logos/twitter.svg" alt="twitter_logo" width={30} height={30} className="cursor-pointer" />
          <Image src="/logos/linkedin.svg" alt="linkedin_logo" width={30} height={30} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};
