import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectList from "./ProjecList";
// import img1 from "../../assets/img/piame.jpg";
// import img2 from "../../assets/img/profile.jpg";
// import img3 from "../../assets/img/me.jpg";
// import img4 from "../../assets/img/piame.jpg";
// import img5 from "../../assets/img/profile.jpg";
// import img6 from "../../assets/img/me.jpg";
import { projects } from "../constants/me";

type Props = {};

const Projects = (props: Props) => {
  console.log(projects);

  return (
    <div id="projects" className="w-full md:h-full md:pt-10 ">
      <div className="mx-auto px-2 py-5 ">
        <h1 className="text-xl md:text-5xl py-10 md:py-20 mx-auto text-center font-mono tracking-widest uppercase ">
          Projects
        </h1>
        <div className="grid text-sm tracking-widest ">
          {/* Items */}
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
