import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import React from "react";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-400 min-h-[450px] md:min-h-[250px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center py-16 gap-y-5 md:py-8">
          {" "}
          <div className="flex gap-1 items-center text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="italic text-white">Art</span>
            <FaHome />
            <span className="italic text-white">Design</span>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:pt-16 tracking-wider text-gray-800 text-center">
            <Link href="/">
              <p className="hover:text-white">Home</p>
            </Link>
            <Link href="#product">
              <p className="hover:text-white">Products</p>
            </Link>
            <Link href="#categorie">
              <p className="hover:text-white">Categories</p>
            </Link>
            <Link href="/">
              <p className="hover:text-white">Services</p>
            </Link>
          </div>
          <div className="flex gap-x-5 items-center md:pt-16 pr-8">
            <Link href="/" target="_blank">
              <BsFacebook
                size={25}
                className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsTwitter
                size={25}
                className="text-gray-700 hover:text-white  hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsYoutube
                size={25}
                className="text-gray-700 hover:text-white  hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsLinkedin
                size={25}
                className="text-gray-700 hover:text-white  hover:-translate-y-1.5 duration-300"
              />
            </Link>
          </div>
        </div>

        <p className="text-white text-center text-sm pb-3 md:mt-12">
          Designed by Özgenur Özkara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
