import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import img from "/public/assets/img/projects.jpeg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

type Props = {};

const Projectoverview = (props: Props) => {
  return (
    <div className="w-full font-thin">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={img}
          alt="/"
        />

        <div className="absolute top-[60%] min-w-auto text-4l sm:last:px-5 text-white z-10 md:last:p-10 px-5">
          <h2 className="py-2 text-2xl tracking-widest">Project Name</h2>
        </div>
      </div>
      <div className=" w-full p-2">
        <button className="bg-black text-white text-xl rounded-none  mx-3">
          <Link href="/#projects">
            <IoIosArrowRoundBack size={50} />
          </Link>
        </button>
      </div>

      {/* section-2 */}
      <div className="w-full mx-auto p-2 pt-8">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-xl m-3">Project Overview</h2>
            <p className="text-white/40 text-sm  p-5 tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              error fuga ut assumenda minus, quaerat dignissimos autem, veniam
              voluptatem fugiat sapiente reiciendis, tempora at nobis
              recusandae. Rerum molestiae perferendis libero, incidunt maxime
              neque nesciunt iure illo impedit nihil asperiores quasi ducimus
              vel et. Enim maxime illo, ut illum, ratione, veniam facilis dolor
              quia asperiores officiis voluptatem aspernatur sapiente nam
              doloribus.
            </p>
            <p className="text-white/40  text-sm p-5 tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              error fuga ut assumenda minus, quaerat dignissimos autem, veniam
              voluptatem fugiat sapiente reiciendis, tempora at nobis
              recusandae. Rerum molestiae perferendis libero, incidunt maxime
              neque nesciunt iure illo impedit nihil asperiores quasi ducimus
              vel et. Enim maxime illo, ut illum, ratione, veniam facilis dolor
              quia asperiores officiis voluptatem aspernatur sapiente nam
              doloribus.
            </p>
            <div className="justify-around flex tracking-widest">
              <button className="bg-orange-800 contrast-100 px-8 p-2 mt-4 ">
                Demo
              </button>
              <button className="bg-orange-800 contrast-100 p-2 px-8 mt-4 ">
                Code
              </button>
            </div>
          </div>
          <div className="shadow-xl  p-3 text-center">
            <h2 className="text-xl m-3">Technology Used</h2>
            <div className="grid text-center  justify-center gap-8 grayscale text-sm">
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
              <p className="px-2 flex justify-between items-center align-middle gap-5">
                <BsFillPatchCheckFill />
                Typescript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectoverview;
