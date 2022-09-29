import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="font-thin text-white text-center p-10 w-full bg-black  items-center">
      <div className="my-3 border-b text-sm">
        <p className="font-thin text-3xl py-2 tracking-widest">
          Whatever I do, I do it enthusiastically... so people will love it more
        </p>
      </div>
      <p className="text-sm font-bold py-2">&copy; Copyright 2021 </p>
      <div className="text-xs">Powered with Next.js || TailwindCSS</div>
    </div>
  );
};

export default Footer;
