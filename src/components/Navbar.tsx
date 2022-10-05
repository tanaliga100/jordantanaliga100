import React, { useEffect, useState } from "react";
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

import img from "/public/assets/img/piame-modified.png";

type Props = {};

const Navbar = (props: any) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  // toggler
  const handleToggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        className={
          shadow
            ? "fixed w-full h-20  dark: bg-black dark:text-amber-500 shadow-2xl z-[100]  tracking-widest"
            : "fixed w-full h-20 dark: bg-black dark:text-white-500 tracking-widest"
        }
      >
        <div className="flex justify-between items-center p-10 w-full h-full px-2">
          <Link href="/">
            <Image src={img} alt="logo" width="60" height="50" />
          </Link>
          <ul className="hidden md:flex gap-8 p-7">
            <Link href="/">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#techstack">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
                Tech Stack
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#certificates">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
                Certificates
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 font-bold text-sm contrast-0 uppercase hover:border-b">
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
                ? "fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[60%] h-screen bg-black p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[85%] md:w-[60%] h-screen bg-amber-900 p-10 ease-in duration-500"
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
            <div className="uppercase font-mono flex flex-col">
              <ul className="">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tech Stack{" "}
                  </li>
                </Link>
                <Link href="/#techstack">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tech Stack{" "}
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#certificates">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Certificates
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-10 font-mono items-center w-auto">
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