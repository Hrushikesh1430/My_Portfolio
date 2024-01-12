"use client";
import Image from "next/image";
import Link from "next/link";
import navJSON from "../JSON/Navbar.json";

import { useContext, useState } from "react";
import { DataContext } from "../context/Datacontext";

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
    <nav className="lg:flex items-center py-6 w-full ">
      <div className="hidden lg:block mr-72 cursor-pointer">
        <Image src="/logos/logo.svg" alt="logo" width={97} height={59} />
      </div>

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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`w-3.5 h-3.5 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6l6 -6"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="lg:hidden z-10 origin-top-right absolute right-0 mt-2 py-3 rounded-xl pointer-events-auto text-gray-300 bg-gray-800 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 ">
          <ul className="lg:flex lg:mr-auto font-DMSans">
            {navJSON.map((item: navItem, index) => (
              <li
                key={index}
                className="block px-4 pr-16 py-2 text-base text-customWhite hover:bg-gray-100 lg:mr-8 lg:font-medium lg:leading-7 lg:cursor-pointer lg:text-xl lg:text-lightContent lg:hover:text-slate-300 "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden lg:flex lg:mr-auto font-DMSans">
        {navJSON.map((item: navItem, index) => (
          <li
            key={index}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:mr-8 lg:font-medium lg:leading-7 lg:cursor-pointer lg:text-xl lg:text-lightContent lg:hover:text-slate-300 "
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3">
        <Image src="/logos/github.svg" alt="github_logo" width={30} height={30} className="cursor-pointer" />
        <Image src="/logos/twitter.svg" alt="twitter_logo" width={30} height={30} className="cursor-pointer" />
        <Image src="/logos/linkedin.svg" alt="linkedin_logo" width={30} height={30} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export const Header = () => {
  return (
    <header className=" z-10 fixed right-8 lg:static mt-8 lg:flex lg:mt-0 md:max-w-screen-lg md:mx-auto md:mb-24 ">
      <Navbar />
    </header>
  );
};
