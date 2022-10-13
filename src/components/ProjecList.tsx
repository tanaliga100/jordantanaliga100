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
        return (
          <div
            key={project.id}
            className=" w-full  md:h-[60vh] 
            rounded-xl group hover:contrast-100 duration-100  "
          >
            <section className=" md:grid grid-cols-2 md:mx-20 items-center justify-center bg-secondary bg-auto bg-fixed ">
              <section className="h-auto">
                <Link href={`/project-overview/${project.id}/${project.title}`} passHref >
                  <a>
                    <Image
                      className=" rounded-lg md:rounded-l-lg hover:cursor-pointer w-auto h-auto"
                      src={project.image}
                      alt="projects"
                      width={500}
                      height={350}
                      // layout="fill"
                    />
                  </a>
                </Link>
              </section>
              <section className="md:grid h-full ">
                <div className="backdrop-blur-md">
                  <h2 className="font-bold text-center contrast-50 ">
                    {project.title}
                  </h2>
                  <div className="md:m-5 flex flex-col items-center">
                    <section className="font-thin rounded-xl tracking-widest text-xs md:text-xl  text-white/100 md:text-white/70 contrast-50">
                      {project.description}
                    </section>
                    <section className="flex flex-nowrap py-10 md:py-3 md:gap-4 md:grid md:grid-flow-col w-full justify-center text-center items-center  border-amber-200  md:p-1">
                      {project.tags.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="font-thin  w-full text-white/50 bg-slate-700 mx-1 md:px-5 cursor-default"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjecList;
