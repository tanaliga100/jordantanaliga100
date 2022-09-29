import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegWindowClose,
  FaSmileWink,
} from "react-icons/fa";
import { AiFillMail, AiOutlineMenu } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";

const img = require("../../assets/img/piame-modified.png");

type Props = {};

const Navbar = (props: any) => {
  const [nav, setNav] = useState(false);

  // toggler
  const handleToggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="fixed w-full h-20 shadow-xl z-[100] bg-black  tracking-widest">
        <div className="flex justify-between items-center w-full h-full px-2">
          <Image src={img} alt="logo" width="60" height="50" />
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 font-thin text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-thin text-sm uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-thin text-sm uppercase hover:border-b">
                Tech Stack
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-thin text-sm uppercase hover:border-b">
                Certificates
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-thin text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleToggleNav}>
            <AiOutlineMenu size={20} />
          </div>
        </div>
        {/* Menu */}
        <div
          className={
            nav
              ? " md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Actual Menu  */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[60%] h-screen bg-slate-900 p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[85%] md:w-[60%] h-screen bg-slate-800 p-10 ease-in duration-500"
            }
          >
            <div>
              <div
                className="flex w-full justify-between items-center"
                onClick={handleToggleNav}
              >
                <Image src={img} alt="source" width={50} height={50} />
                <div className="cursor-pointer">
                  <FaRegWindowClose size={25} />
                </div>
              </div>
              <div className="my-3 border-b text-sm">
                <p className="font-thin text-sm py-2">
                  Whatever I do,
                  <FaSmileWink />I do it enthusiastically... so people will love
                  it more
                </p>
              </div>
            </div>
            {/* List-Items */}
            <div className="uppercase font-sans flex flex-col">
              <ul className="">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Tech Stack </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Certificates</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-20 font-mono items-center w-full">
                <p className="uppercase items-center w-full tracking-widest py-2 shadow-lg">
                  {" "}
                  Connect with Me
                </p>
                <div className="pt-5 cursor-pointer flex justify-around">
                  <div className="border-spacing-2">
                    <FaLinkedin size={30} />
                  </div>
                  <div className="border-spacing-2">
                    <FaFacebook size={30} />
                  </div>
                  <div className="border-spacing-2">
                    <AiFillMail size={30} />
                  </div>
                  <div className="border-spacing-2">
                    <FaGithub size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
