import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex max-w-screen-lg mx-auto mb-24 ">
      <nav className="flex items-center py-6 w-full">
        <div className="mr-72 cursor-pointer">
          <Image src="/logos/logo.svg" alt="logo" width={97} height={59} />
        </div>
        <ul className="flex mr-auto font-DMSans">
          <li className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">Home</li>
          <li className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">About</li>
          <li className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">Tech Stack</li>
          <li className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">Projects</li>
          <li className="mr-8 font-medium leading-7 cursor-pointer text-lightContent text-xl hover:text-slate-300">Contact</li>
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
