"use client";
import Image from "next/image";
import navJSON from "../../JSON/Navbar.json";
import { handleScroll } from "@/app/utils/utils";
import Link from "next/link";

interface navItem {
  name: string;
  link: string;
}

const Footer = () => {
  return (
    <section className="mx-auto px-8 mb-20 lg:p-0 lg:mb-36 lg:max-w-screen-lg" id="Contact">
      <div className="flex flex-col gap-4 w-full items-center mb-11 md:flex-row md:justify-between md:gap-0">
        <Image src="/logos/logo.svg" alt="logo" width={97} height={59} />
        <div className="flex flex-col gap-3  lg:flex-row lg:items-end">
          <div className="flex flex-col gap-1 items-center lg:flex-row md:items-end">
            <span className="font-DMSans text-lg font-normal leading-7 text-lightContent lg:pr-8">+91 8104460774</span>
            <span className="font-DMSans text-lg font-normal leading-7 text-lightContent">hdtawde@gmail.com</span>
          </div>

          <div className="flex gap-3 justify-center md:ml-24">
            <Link href="https://github.com/Hrushikesh1430" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/github.svg" alt="github_logo" width={30} height={30} className="cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/TawdeHrushikesh" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/twitter.svg" alt="twitter_logo" width={30} height={30} className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/hrushitawde" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/linkedin.svg" alt="linkedin_logo" width={30} height={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 w-full h-[2px] mb-12"></div>
      <div className="flex flex-col gap-7 text-center md:flex-row justify-between">
        <ul className="flex flex-wrap font-DMSans justify-center">
          {navJSON.map((item: navItem, index) => (
            <li
              key={index}
              className="mr-4 md:mr-8 font-medium leading-7 cursor-pointer text-lightContent text-lg lg:text-xl hover:text-slate-300 select-none"
              onClick={() => handleScroll(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <span className="font-DMSans text-lg font-normal leading-7 text-lightContent">
          <span className="md:hidden">
            Built by Hrushikesh Tawde with <br />
          </span>
          <span className="hidden md:inline-block">Built by Hrushikesh Tawde with </span>

          <span className="bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent"> Love & Chai</span>
        </span>
      </div>
    </section>
  );
};

export default Footer;
