import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  data: {}[];
};

const CertificateLists: NextPage<Props> = (props: Props) => {
  return (
    <>
      {" "}
      {props?.data.map((list: any) => {
        const { img, title, description } = list;
        return (
          <div key={title}>
            <div
              className="relative grid items-center justify-center h-auto w-full
                         p-1  rounded-xl group"
            >
              <Image
                className="rounded-xl hover:translate-y-6 duration-1000 "
                src={img}
                alt="projects"
                width={1000}
                height={600}
              />
              <div className="text-center">
                <h2 className="font-bold ">{title}</h2>
                <p className="font-thin">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CertificateLists;
