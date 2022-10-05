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
            className=" w-full md:flex md:px-20 items-center justify-center h-min rounded-xl group hover:contrast-200 md:hover:border-l duration-100 contrast-200"
          >
            <Link href="/project-overview">
              <a>
                <div className="md:flex md:text-xl md:tracking-widest ">
                  <div className="text-center drop-shadow-4xl">
                    <Image
                      className="rounded-xl"
                      src={img}
                      alt="projects"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="md:grid ">
                    <h2 className="font-bold text-center contrast-50">
                      {project.title}
                    </h2>
                    <p className="font-thin  rounded-xl tracking-widest text-sm text-white contrast-50">
                      {project.description}
                    </p>
                    <div className="flex justify-around items-center gap-4  border-amber-200 py-5">
                      {project.tags.map((tag) => {
                        return <span  key={tag} className="font-thin p-2">{tag}</span>;
                      })}
                    </div>
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
