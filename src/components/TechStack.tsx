import Image from "next/image";
import React from "react";
import img1 from "/public/assets/techstack/html.png";
import img2 from "/public/assets/techstack/css.png";
import img3 from "/public/assets/techstack/javascript.png";
import img4 from "/public/assets/techstack/tailwind.png";
import img5 from "/public/assets/techstack/node.png";
import img6 from "/public/assets/techstack/nextjs.png";
import img7 from "/public/assets/techstack/mongo.png";
import img8 from "/public/assets/techstack/firebase.png";
import img9 from "/public/assets/techstack/github1.png";
import img10 from "/public/assets/techstack/react.png";
import img11 from "/public/assets/techstack/typescript.png";
import img12 from "/public/assets/techstack/express.png";

import Skills from "./Skills";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div id="techstack" className="w-full md:h-full flex items-center">
      <div className="mx-auto  py-10 ">
        <h1 className="text-xl md:text-5xl pt-3  md:py-5 mx-auto text-center font-mono tracking-widest uppercase ">
          Tech-Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 px-10 pt-10 md:p-10 lg:grid-cols-4 gap-8">
          <Skills img={img1}>Html</Skills>
          <Skills img={img2}>Css</Skills>
          <Skills img={img3}>Javascript</Skills>
          <Skills img={img11}>Typescript</Skills>
          <Skills img={img9}>Github</Skills>
          <Skills img={img4}>Tailwind</Skills>
          <Skills img={img5}>Node</Skills>
          <Skills img={img6}>NextJs</Skills>
          <Skills img={img7}>mONGODB</Skills>
          <Skills img={img8}>fIREBASE</Skills>
          <Skills img={img10}>React</Skills>
          <Skills img={img12}>Express</Skills>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
