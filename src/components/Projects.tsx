import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjecList from "./ProjecList";
import img1 from "../../assets/img/piame.jpg";
import img2 from "../../assets/img/profile.jpg";
import img3 from "../../assets/img/me.jpg";
import img4 from "../../assets/img/piame.jpg";
import img5 from "../../assets/img/profile.jpg";
import img6 from "../../assets/img/me.jpg";

type Props = {};

const Projects = (props: Props) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae voluptates magni suscipit consequatur voluptatibus officia provident dolorem dolores illo.";
  return (
    <div className="w-full pt-20 md:pt-10 ">
      <div className="mx-auto px-2 py-5 ">
        <h1 className="text-xl font-thin pt-3 md:py-5 mx-auto text-center font-serif tracking-widest uppercase">
          Projects
        </h1>
        <div className="grid md:grid-cols-3 md:p-10 gap-8 lg:px-60 contrast-100 ">
          {/* Items */}
          <ProjecList
            img={img1}
            title="A sample Projects"
            description={description}
          />
          <ProjecList
            img={img2}
            title="A sample Projects"
            description={description}
          />
          <ProjecList
            img={img3}
            title="A sample Projects"
            description={description}
          />
          <ProjecList
            img={img4}
            title="A sample Projects"
            description={description}
          />
          <ProjecList
            img={img5}
            title="A sample Projects"
            description={description}
          />
          <ProjecList
            img={img6}
            title="A sample Projects"
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
