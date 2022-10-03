import Link from "next/link";
import React from "react";
import { AiFillUpSquare } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      id="footer"
      className="font-thin text-white  p-10 w-full bg-black text-center  items-center"
    >
      <div className="my-3 border-b text-sm">
        <p className="font-thin text-xl md:text-3xl py-2 tracking-widest">
          Whatever I do, I do it enthusiastically... so people will love it more
        </p>
      </div>
      <p className="text-sm font-bold py-2">&copy; Copyright 2021 </p>
      <div className="text-xs">Powered with Next.js || TailwindCSS</div>
      <div className=" py-10 flex justify-center md:justify-end cursor-pointer animate-pulse">
        <Link href="/">
          <AiFillUpSquare className=" items-center w-10 h-10" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
