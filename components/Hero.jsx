import React from "react";
import Button from "./Button";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='bg-[url("/assets/bg.avif")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white flex flex-col gap-[20px] md:gap-[40px]">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
              Design your Dream
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
              <span className="text-pink-400">Home</span> Very Easily
            </h1>
          </div>
          <div className="mx-auto bg-pink-400 h-[2px] w-[50px]"></div>
          <div>
            <p className="text-sm md:text-xl text-gray-300 tracking-widest">
              Simple Furniture and High-end Quality.
            </p>
          </div>
          <div>
            {" "}
            <Button link="#" text="Explore Products" />
          </div>
        </div>
      </div>
      <div className="hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center">
        <div className="bg-pink-400 w-[1.5px] h-[250px]"></div>
        <Link href="/" target="_blank">
          <BsFacebook
            size={25}
            className="text-pink-400 hover:-translate-x-1.5 duration-300"
          />
        </Link>
        <Link href="/" target="_blank">
          <BsTwitter
            size={25}
            className="text-pink-400 hover:-translate-x-1.5 duration-300"
          />
        </Link>
        <Link href="/" target="_blank">
          <BsYoutube
            size={25}
            className="text-pink-400 hover:-translate-x-1.5 duration-300"
          />
        </Link>
        <Link href="/" target="_blank">
          <BsLinkedin
            size={25}
            className="text-pink-400 hover:-translate-x-1.5 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
