import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      id="footer"
      className="font-thin text-white p-6 md:p-10 w-full h-full bg-gradient-to-t from-black/100 to-transparent text-center  items-center"
    >
      <div className="py-3 text-xs">
        <p className="font-thin text-xs md:text-2xl text-white tracking-widest px-2 animate-pulse ">
          Whatever I do, I do it enthusiastically... so people will love it more
        </p>
      </div>
      <p className="text-xs font-bold py-2 text-white/30">
        &copy; Copyright 2020 || jordantanaliga100
      </p>
      <div className="text-xs text-white/30 py-2">
        Powered with Next.js || TailwindCSS
      </div>
    </div>
  );
};

export default Footer;
