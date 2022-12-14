import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { TimeLineData } from "../constants/me";
import img from "/public/assets/img/piame-modified.png";

type Props = {};
const About = (props: Props) => {
  const timeLine = TimeLineData.map((val: any) => {
    return (
      <div className="font-thin  backdrop-blur pt-2" key={val.id}>
        <p className="text-xs md:text-2xl font-bold">{val.year}</p>
        <p className="text-sm md:text-xl font-thin py-4 text-white/80 tracking-widest">
          {val.text}
        </p>
      </div>
    );
  });

  return (
    <div
      id="about"
      className="w-full h-full md:mt-32 pt-20 flex items-center bg-bgStars bg-cover bg-left-top bg-fixed bg-no-repeat"
    >
      <div className="m-auto gap-8 items-center justify-between">
        <div className=" text-center  ">
          <div className="  brightness-75 text-center contrast-175 mb-8">
            <Image src={img} width={200} height={200} alt="/" />
          </div>
          {timeLine}
          {/* {TimeLineData?.map((val: any) => {
            return (
              <div className="font-thin" key={val.text}>
                <p className="text-xs md:text-2xl font-bold">{val.year}</p>
                <p className="text-sm md:text-xl font-thin py-4 text-white/80">
                  {val.text}
                </p>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default About;
