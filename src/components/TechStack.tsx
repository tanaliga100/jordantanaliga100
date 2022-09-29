import Image from "next/image";
import React from "react";
import img1 from "../../assets/techstack/html.png";
import img2 from "../../assets/techstack/css.png";
import img3 from "../../assets/techstack/javascript.png";
import img4 from "../../assets/techstack/tailwind.png";
import img5 from "../../assets/techstack/node.png";
import img6 from "../../assets/techstack/nextjs.png";
import img7 from "../../assets/techstack/mongo.png";
import img8 from "../../assets/techstack/firebase.png";
import img9 from "../../assets/techstack/github1.png";
import img10 from "../../assets/techstack/shopify.png";

import Skills from "./Skills";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <>
      <div className="w-full md:h-full flex items-center">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-10">
          <h1 className="text-xl font-thin pt-3 md:py-5 mx-auto text-center font-serif tracking-widest uppercase border-b">
            Tech-Stack
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 pt-10 md:p-10 lg:grid-cols-5 gap-8 ">
            <Skills img={img1}>Html</Skills>
            <Skills img={img2}>Css</Skills>
            <Skills img={img3}>Javascript</Skills>
            <Skills img={img4}>Tailwind</Skills>
            <Skills img={img5}>Node</Skills>
            <Skills img={img6}>NextJs</Skills>
            <Skills img={img7}>mONGODB</Skills>
            <Skills img={img8}>fIREBASE</Skills>
            <Skills img={img9}>Github</Skills>
            <Skills img={img10}>Shopify</Skills>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
