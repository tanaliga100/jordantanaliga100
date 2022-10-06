import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { projects } from "../constants/me";
import img from "/public/assets/img/kid.jpeg";
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
        console.log(project);

        return (
          <div
            key={project.id}
            className=" w-full min-h-full md:py-5 md:flex m:dpx-10 items-center justify-center  rounded-xl group hover:contrast-100 duration-100 "
          >
            <Link href="/project-overview" passHref>
              <a>
                <Image
                  className=" rounded-lg md:rounded-l-lg hover:cursor-pointer w-auto h-auto"
                  src={project.image}
                  alt="projects"
                  width={900}
                  height={900}
                  // layout="fill"
                  // objectFit="fit"
                />
              </a>
            </Link>
            <div className="md:flex md:text-xl w-full md:tracking-widest "></div>
            <div className="md:grid bg-secondary bg-auto bg-fixed ">
              <div className="backdrop-blur-md">
                <h2 className="font-bold text-center contrast-50 py-5">
                  {project.title}
                </h2>
                <div className="md:m-10 flex flex-col items-center">
                  <section className="font-thin rounded-xl tracking-widest text-xs md:text-xl  text-white/100 md:text-white/40 contrast-50">
                    {project.description}
                  </section>
                  <section className="flex flex-nowrap py-3 md:gap-4 md:grid md:grid-flow-col w-full justify-center text-center items-center  border-amber-200  md:p-1">
                    {project.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="font-thin  w-full text-white/50 bg-slate-700 mx-1  md:px-5 cursor-default"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </section>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjecList;
