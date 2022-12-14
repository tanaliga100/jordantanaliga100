import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img1 from "/public/assets/certificates/javascript.jpg";
import img2 from "/public/assets/certificates/react.jpg";
import img4 from "/public/assets/certificates/typescript.jpg";
import img3 from "/public/assets/certificates/ui-ux.jpg";

const Certificates = (props: any) => {
  const data = [
    { img: img1, title: "JavaScript", description: "JavaScript Description" },
    { img: img2, title: "React", description: "React Description" },
    { img: img3, title: "UI-UX", description: "UI-UX Description" },
    { img: img4, title: "TypeScript", description: "TypeScript Description" },
  ];

  return (
    <div id="certificates" className="w-full md:pt-20">
      <div className="mx-auto px-2   ">
        <h1 className="text-xl md:text-5xl py-10  md:py-5 mx-auto text-center font-serif tracking-widest uppercase">
          Licenses and Certification
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:p-10 lg:px-60  ">
          {/* Items */}
          <CertificateCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;

type Props = {
  data: {}[];
};

export const CertificateCard: NextPage<Props> = (props: Props) => {
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
                <p className="font-thin text-orange/30 pt-5 ">{title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
