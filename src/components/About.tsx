import React from "react";
import Image from "next/image";
import img from "../../assets/img/profile-modified.png";
import { TimeLineData } from "../constants/me";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="w-full md:h-full flex items-center bg-black">
      <div className=" m-auto md:grid grid-cols-3 gap-8 items-center justify-between">
        <div className="col-span-2 text-center p-10 ">
          <h1 className="text-6xl font-thin py-10">Who Am I</h1>
          {TimeLineData?.map((val: any) => {
            return (
              <div key={val.text}>
                <p className="text-gray-400 font-thin">{val.year}</p>
                <p className="text-gray-100 font-thin py-10">{val.text}</p>
              </div>
            );
          })}
        </div>
        <div className=" grayscale brightness-50  p-10 text-center">
          <Image src={img} className=" min-w-min" />
        </div>
      </div>
    </div>
  );
};

export default About;
