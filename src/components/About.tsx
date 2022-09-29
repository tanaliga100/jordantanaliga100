import React from "react";
import Image from "next/image";
import img from "../../assets/img/profile-modified.png";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-full md:h-full flex items-center bg-black">
      <div className=" m-auto md:grid grid-cols-3 gap-8 items-center justify-between">
        <div className="col-span-2 text-center m-1">
          <h1 className="text-6xl font-thin py-10">Who Am I</h1>
          <p className="text-gray-400 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            itaque illo placeat numquam sequi, accusantium, saepe nesciunt
            impedit, deleniti debitis voluptate fugiat voluptates. Itaque,
            provident necessitatibus nemo expedita in totam, optio laborum
            temporibus enim dicta, tenetur qui ad ipsa assumenda nesciunt.
            Perspiciatis sunt ea consectetur quo sed temporibus aperiam id.
          </p>
          <p className="text-gray-100 font-thin py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            itaque illo placeat numquam sequi, accusantium, saepe nesciunt
            impedit, deleniti debitis voluptate fugiat voluptates. Itaque,
            provident necessitatibus nemo expedita in totam, optio laborum
            temporibus enim dicta, tenetur qui ad ipsa assumenda nesciunt.
            Perspiciatis sunt ea consectetur quo sed temporibus aperiam id.
          </p>
        </div>
        <div className=" grayscale brightness-50 px-10 py-1 text-center ">
          <Image src={img} width="1200px" height="1200px" />
        </div>
      </div>
    </div>
  );
};

export default About;
