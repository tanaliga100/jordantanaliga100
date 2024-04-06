import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaRegWindowClose,
  FaSkype,
  FaSmileWink,
  FaViber,
} from "react-icons/fa";

import img from "/public/assets/img/piame-modified.png";

type Props = {};

const Navbar = (props: any) => {
  const [nav, setNav] = useState(false);
 const [navBg, setNavBg] = useState("bg-transparent");

  
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
         setNavBg("bg-black");
      } else {
          setNavBg("bg-inherit");
      }
    };
    
    return () => {
      window.addEventListener("scroll", handleShadow);
    console.log('SCROLL_Y', window.scrollY);

    }
  
    }, [navBg]);

  // toggler
  const handleToggleNav = () => {
    setNav(!nav);
  };
  return (
    <main className="">
      <div
        className={
             `fixed w-full h-20  z-50  tracking-widest ${navBg} duration-500` }
      >
        <div className={`flex justify-between items-center  w-full h-full px-5 `}>
          <Link href="/" className="flex-grow">
            {/* <Image src={img} alt="logo" width="60" height="50" /> */}
            <h1 className="hover:cursor-pointer  text-amber/10 text-xs">
              jordantanaliga<span className="text-white">100</span>
            </h1>
          </Link>
          <ul
            className="hidden md:flex gap-8 p-7 flex-grow-2"
          >
            <Link href="/">
              <li className="ml-10 font-thin text-sm contrast-0 uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-2 font-thin text-sm contrast-0 uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-2 font-thin text-sm contrast-0 uppercase hover:border-b">
                Projects 
              </li>
            </Link>
            <Link href="/#techstack">
              <li className="ml-2 font-thin text-sm contrast-0 uppercase hover:border-b">
                Stack
              </li>
            </Link>
            <Link href="/#certificates">
              <li className="ml-2 font-thin text-sm contrast-0 uppercase hover:border-b">
                Certs
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-2 font-thin text-sm contrast-0 uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleToggleNav}>
            <AiOutlineMenu size={20} />
          </div>
        </div>
        {/* ON MOBILE */}
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
            <div className="uppercase flex flex-col">
              <ul className="">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About{" "}
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#techstack">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tech Stack{" "}
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
              <div className="pt-10  items-center w-auto">
                <p className="uppercase items-center w-full tracking-widest py-2 shadow-lg">
                  {" "}
                  Connect with Me
                </p>
                <div className="pt-5 cursor-pointer flex justify-around">
                  {/* <div className="border-spacing-2">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jordan-tanaliga-664b801a3/"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  </div> */}
                  <div className="border-spacing-2">
                    <a
                      target="_blank"
                      href="skype:live:.cid.3928b274d9ebe539?chat"
                      rel="noreferrer"
                    >
                      <FaSkype size={30} />
                    </a>
                  </div>
                  <div className="border-spacing-2">
                    <a
                      target="_blank"
                      href="viber://chat?number=09690243354"
                      rel="noreferrer"
                    >
                      <FaViber size={30} />
                    </a>
                  </div>
                  <div className="border-spacing-2">
                    <a
                      target="_blank"
                      href="mailto:jordantanaliga@gmail.com"
                      rel="noopener noreferrer"
                    >
                      <AiFillMail size={30} />
                    </a>
                  </div>
                  <div className="border-spacing-2">
                    <a
                      target="_blank"
                      href="https://github.com/tanaliga100"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
