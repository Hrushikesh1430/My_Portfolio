import Image from "next/image";
import { AnimationDiv } from "../Animation";
import React from "react";

const Hero = () => {
  return (
    <section
      className=" pt-36 px-8 mx-auto mb-48 flex flex-col-reverse lg:p-0 lg:items-center lg:flex-row lg:max-w-screen-lg lg:gap-16  border-8 "
      id="Home"
    >
      <div>
        <span className="font-Poppins text-customWhite text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="hidden lg:block">
            Hi 👋, <br />
            My name is <br />
            <span className="animate-text bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent">
              Hrushikesh Tawde
            </span>
            <br /> I build things for web
          </span>

          <span className="inline-block lg:hidden mb-7">
            Hey there, I&#39;m <br />
            <span className="animate-text bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent">
              Hrushikesh Tawde
            </span>
            <br /> I build things for web
          </span>
        </span>
        {/* <AnimationDiv /> */}
        <div className="lg:hidden flex gap-3">
          <Image src="/logos/github.svg" alt="github_logo" width={30} height={30} className="cursor-pointer" />
          <Image src="/logos/twitter.svg" alt="twitter_logo" width={30} height={30} className="cursor-pointer" />
          <Image src="/logos/linkedin.svg" alt="linkedin_logo" width={30} height={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="w-full mb-9 max-w-32 md:max-w-44 lg:max-w-none lg:w-auto lg:flex lg:justify-center">
        <Image src="/profile_1.jpeg" alt="profile_1" width={300} height={300} className="rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
