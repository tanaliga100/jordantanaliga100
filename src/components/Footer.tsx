import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      id="footer"
      className="font-thin text-white  md:p-10 w-full  bg-slate-900 text-center  items-center"
    >
      <div className="my-3  text-xs">
        <p className="font-thin text-xs md:text-2xl text-white/60 tracking-widest px-2 animate-pulse ">
          Whatever I do, I do it enthusiastically... so people will love it more
        </p>
      </div>
      <p className="text-xs font-bold py-2 text-white/30">
        &copy; Copyright 2020{" "}
      </p>
      <div className="text-xs text-white/30 py-2">
        Powered with Next.js || TailwindCSS
      </div>
    </div>
  );
};

export default Footer;
