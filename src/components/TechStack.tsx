import Image, { StaticImageData } from "next/image";
import React from "react";
import img2 from "/public/assets/techstack/css.png";
import img12 from "/public/assets/techstack/express.png";
import img8 from "/public/assets/techstack/firebase.png";
import img9 from "/public/assets/techstack/github1.png";
import img1 from "/public/assets/techstack/html.png";
import img3 from "/public/assets/techstack/javascript.png";
import img7 from "/public/assets/techstack/mongo.png";
import img6 from "/public/assets/techstack/nextjs.png";
import img5 from "/public/assets/techstack/node.png";
import img10 from "/public/assets/techstack/react.png";
import img4 from "/public/assets/techstack/tailwind.png";
import img11 from "/public/assets/techstack/typescript.png";

const TechStack = (props: any) => {
  return (
    <div id="techstack" className="w-full md:h-full flex items-center  pt-20 ">
      <div className="mx-auto  ">
        <h1 className="text-xl md:text-5xl mx-auto text-center  font-bold  tracking-widest uppercase ">
          Tech-Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 px-10 pt-10 md:p-10 lg:grid-cols-4 gap-8">
          <TechStackCard img={img1}>Html</TechStackCard>
          <TechStackCard img={img2}>Css</TechStackCard>
          <TechStackCard img={img3}>Javascript</TechStackCard>
          <TechStackCard img={img11}>Typescript</TechStackCard>
          <TechStackCard img={img9}>Github</TechStackCard>
          <TechStackCard img={img4}>Tailwind</TechStackCard>
          <TechStackCard img={img5}>Node</TechStackCard>
          <TechStackCard img={img6}>NextJs</TechStackCard>
          <TechStackCard img={img7}>mONGODB</TechStackCard>
          <TechStackCard img={img8}>fIREBASE</TechStackCard>
          <TechStackCard img={img10}>React</TechStackCard>
          <TechStackCard img={img12}>Express</TechStackCard>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

type Props = {
  img: StaticImageData;
  children: React.ReactNode;
};

export const TechStackCard = (props: Props) => {
  return (
    <>
      {/* Items  */}
      <div
        className="p-6 rounded-xl hover:scale-105 ease-in duration-500 w-full
        bg-cover bg-center bg-no-repeat"
      >
        <div className="grid justify-center items-center ">
          <div className="m-auto">
            <Image
              src={props.img}
              alt="stack"
              width="64x"
              height="64px"
              priority
            />
          </div>
          <h3 className="uppercase font-bold text-base text-orange/30 text-center">
            {props.children}
          </h3>
        </div>
      </div>
    </>
  );
};
