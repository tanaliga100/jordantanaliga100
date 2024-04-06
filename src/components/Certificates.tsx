import { NextPage } from "next";
import Image from "next/image";
import img1 from "/public/assets/certificates/javascript.jpg";
import img3 from "/public/assets/certificates/node.jpg";
import img2 from "/public/assets/certificates/react.jpg";
import img4 from "/public/assets/certificates/typescript.jpg";

const Certificates = (props: any) => {
  const data = [
    { img: img1, title: "JavaScript", description: "JavaScript Description" },
    { img: img2, title: "React", description: "React Description" },
    { img: img3, title: "Node", description: "Node Description" },
    { img: img4, title: "TypeScript", description: "TypeScript Description" },
  ];

  return (
    <div id="certificates" className="w-full h-full pt-20 ">
      <div className="mx-auto px-2   ">
        <h1 className="
        mx-auto text-center  tracking-wider 
        text-amber-800 font-bold  text-3xl md:text-6xl md:font-extrabold
        ">
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
              className="relative grid items-center justify-center h-auto w-full bg-black
                         p-5  rounded-xl group  bg-cover bg-center bg-no-repeat hover:border-b duration-700"
            >
              <Image
                className="rounded-xl hover:translate-y-2 duration-1000 backdrop-blur-lg "
                src={img}
                alt="projects"
                width={1000}
                height={600}
                priority
              />
              <div className="text-center">
                <p className=" text-orange/30 pt-5 font-bold">{title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
