import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
};

const ProjecList = (props: Props) => {
  return (
    <>
      <div
        className=" w-full flex flex-col items-center justify-center h-auto 
           p-1  rounded-xl group border-b "
      >
        <div className="text-center drop-shadow-2xl">
          <Image
            className="rounded-xl hover:translate-x-6 duration-1000"
            src={props.img}
            alt="projects"
            width={1000}
            height={600}
          />
          <h2 className="font-bold ">{props.title}</h2>
          <p className="font-thin">{props.description}</p>
          <div className="flex text-center items-center justify-center w-auto ">
            <button className="bg-orange-800 px-2 m-2 rounded-md text-white font-thin shadow-md">
              <Link href="">Source Code</Link>
            </button>
            <button className="bg-orange-800 px-2 m-2 rounded-md text-white font-thin shadow-md">
              <Link href="">Live Site</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjecList;
