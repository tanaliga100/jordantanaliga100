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
                         p-5  rounded-xl group bg-primary bg-cover bg-center bg-no-repeat hover:border-b duration-700"
            >
              <Image
                className="rounded-xl hover:translate-y-6 duration-1000 backdrop-blur-lg "
                src={img}
                alt="projects"
                width={1000}
                height={600}
                priority
              />
              <div className="text-center">
                <h2 className="font-bold text-white/30">{title}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CertificateLists;
