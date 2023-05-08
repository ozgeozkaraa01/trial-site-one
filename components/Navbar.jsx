import Link from "next/link";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed bg-white top-0 w-[100%] z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
          <span className="italic">Art</span>
          <FaHome />
          <span className="italic text-pink-400">Design</span>
        </div>
        <div className="hidden md:flex gap-10 tracking-wider text-gray-800">
          <Link href="/">
            <p className="hover:text-pink-400">Home</p>
          </Link>
          <Link href="#product">
            <p className="hover:text-pink-400">Products</p>
          </Link>
          <Link href="#categorie">
            <p className="hover:text-pink-400">Categories</p>
          </Link>
          <Link href="/">
            <p className="hover:text-pink-400">Services</p>
          </Link>
        </div>
        <div>
          <button className="hidden md:block border border-pink-400 px-4 py-1 rounded-md text-pink-400 hover:bg-pink-400 hover:text-white">
            Contact
          </button>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        )}
      </div>
      {/* Responsive Menu */}
      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] ${
          toggle ? `left-0` : `left-[-100%]`
        }`}
      >
        <Link href="/">
          <p className="hover:text-pink-400 p-5">Home</p>
        </Link>
        <Link href="/">
          <p className="hover:text-pink-400 p-5">Products</p>
        </Link>
        <Link href="/">
          <p className="hover:text-pink-400 p-5">Categories</p>
        </Link>
        <Link href="/">
          <p className="hover:text-pink-400 p-5">Services</p>
        </Link>
        <div className="flex flex-col gap-5 items-center mt-48">
          <div className="bg-pink-400 w-[250px] h-[1px]"></div>
          <div className="flex gap-10">
            <Link href="/" target="_blank">
              <BsFacebook
                size={25}
                className="text-pink-400 hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsTwitter
                size={25}
                className="text-pink-400 hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsYoutube
                size={25}
                className="text-pink-400 hover:-translate-y-1.5 duration-300"
              />
            </Link>
            <Link href="/" target="_blank">
              <BsLinkedin
                size={25}
                className="text-pink-400 hover:-translate-y-1.5 duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
