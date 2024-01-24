"use client";
import Image from "next/image";
import navJSON from "../../JSON/Navbar.json";

import { useContext, useState } from "react";
import { DataContext } from "../../context/Datacontext";
import Link from "next/link";
import { handleScroll } from "@/app/utils/utils";
interface navItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:flex items-center py-6 w-full">
      {/* <Image src="/logos/logo.svg" alt="logo" width={97} height={59} className="hidden lg:block mr-52 cursor-pointer" /> */}
      <span
        className="hidden pt-2 lg:block mr-52 cursor-pointer font-Poppins text-4xl md:text-4xl  font-bold animate-text bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent"
        onClick={() => window.location.reload()}
        dangerouslySetInnerHTML={{ __html: `{ HT }` }}
      ></span>
      <button
        className=" lg:hidden pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-gray-300 bg-gray-800/90 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 backdrop-blur transition"
        aria-label="Open Menu"
        onClick={toggleDropdown}
      >
        <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3.5 h-3.5 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6l6 -6"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="lg:hidden z-10 origin-top-right absolute right-0 mt-2 py-3 rounded-xl pointer-events-auto text-gray-300 bg-dark shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 ">
          <ul className="lg:flex lg:mr-auto font-DMSans">
            {navJSON.map((item: navItem, index) => (
              <li
                key={index}
                className="block px-4 pr-16 py-2 text-base text-customWhite  lg:mr-8 lg:font-medium lg:leading-7 lg:cursor-pointer lg:text-xl lg:text-lightContent lg:hover:text-slate-300 select-none"
                onClick={() => handleScroll(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden lg:flex lg:mr-auto font-DMSans gap-4">
        {navJSON.map((item: navItem, index) => (
          <li
            key={index}
            className="block px-4 py-2 text-sm text-gray-700 lg:font-medium lg:leading-7 lg:cursor-pointer lg:text-xl lg:text-lightContent lg:hover:text-slate-300 select-none"
            onClick={() => handleScroll(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3">
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
    </nav>
  );
};

const Header = () => {
  return (
    <header className=" z-10 fixed right-8 lg:static mt-8 lg:flex lg:mt-0 md:max-w-screen-lg md:mx-auto md:mb-24 ">
      <Navbar />
    </header>
  );
};

export default Header;
