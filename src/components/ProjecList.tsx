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
            className=" w-full md:flex md:flex-row items-center justify-center h-min p-1 rounded-xl group"
          >
            <div className="text-center drop-shadow-2xl">
              <Image
                className="rounded-xl hover:translate-x-6 duration-1000"
                src={img}
                alt="projects"
                width={1000}
                height={600}
              />
              <div className="flex text-center items-center justify-center w-full ">
                <button className="bg-orange-800 p-3 my-4 rounded-md text-white font-thin shadow-md w-full brightness-200">
                  <Link href="/project-overview">Overview</Link>
                </button>
              </div>
              <h2 className="font-bold">{project.title}</h2>
              <p className="font-thin border-b rounded-xl p-3">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjecList;
