import Image, { StaticImageData } from "next/image";
import React from "react";
import img from "../../assets/techstack/javascript.png";

type Props = {
  img: StaticImageData;
  children: React.ReactNode;
};

const Skills = (props: Props) => {
  return (
    <>
      {/* Items  */}
      <div
        className="p-6 rounded-xl hover:scale-105 ease-in duration-500 
       bg-primary bg-cover bg-center bg-no-repeat"
      >
        <div className="grid md:grid-cols-2 gap-4 justify-center items-center  ">
          <div className="m-auto">
            <Image
              src={props.img}
              alt="stack"
              width="64x"
              height="64px"
              priority
            />
          </div>
          <div className="">
            <h3 className="uppercase font-thin text-base text-white/70">
              {props.children}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
