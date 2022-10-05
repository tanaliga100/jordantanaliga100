import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import img from "../../assets/img/atclouds-modified.jpg";
// import { projects } from "../constants/me";
type PProps = {
  id: number;
  image: string;
  source: string;
  tags: string[];
  title: string;
  visit: string;
  description: string;
};
interface IProjects {
  projects: PProps[];
}
const ProjecList = (props: IProjects) => {
  return (
    <React.Fragment>
      {props.projects.map((project) => {
        return (
          <div
            key={project.id}
            className=" md:w-[100vw] md:flex items-center justify-center h-min p-1 rounded-xl group"
          >
            <Link href="/project-overview">
              <a>
                <div className="md:flex md:text-xl  md:tracking-widest hover:grayscale duration-500">
                  <div className="text-center drop-shadow-4xl">
                    <Image
                      className="rounded-xl"
                      src={img}
                      alt="projects"
                      width={900}
                      height={600}
                    />
                  </div>
                  <div className="md:grid md:p-10">
                    <h2 className="font-bold text-center">{project.title}</h2>
                    <p className="font-thin border-b rounded-xl p-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjecList;
