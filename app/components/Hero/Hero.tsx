import Image from "next/image";
import { AnimationDiv } from "../Animation";
import React from "react";
import { BlurredImage } from "../BlurredImage";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className=" pt-36 px-8 mx-auto mb-48 flex flex-col-reverse md:px-8 lg:p-0 md:items-center md:justify-between md:flex-row md:max-w-screen-lg md:gap-16  border-8 "
      id="Home"
    >
      <div>
        <h1 className="font-Poppins text-customWhite text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="hidden lg:block">
            Hi 👋, <br />
            My name is <br />
            <p className="animate-text bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent">
              Hrushikesh Tawde
            </p>
            I build things for web
          </span>

          <span className="inline-block lg:hidden mb-7">
            Hey there, I&#39;m <br />
            <p className="animate-text bg-gradient-to-r from-customBlue via-purple-500 to-customPink bg-clip-text text-transparent">
              Hrushikesh Tawde
            </p>
            I build things for web
          </span>
        </h1>
        {/* <AnimationDiv /> */}

        <div className="lg:hidden flex gap-3">
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
      <div className="w-full mb-9 max-w-32 md:max-w-[220px] lg:max-w-none lg:w-auto lg:flex lg:justify-center">
        <div className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px]">
          <BlurredImage src="/profile_1.jpeg" className="rounded-full object-cover" alt="profile_1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
