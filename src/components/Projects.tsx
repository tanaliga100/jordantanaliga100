import Image from "next/image";
import Link from "next/link";
import React from "react";
// import img1 from "../../assets/img/piame.jpg";
// import img2 from "../../assets/img/profile.jpg";
// import img3 from "../../assets/img/me.jpg";
// import img4 from "../../assets/img/piame.jpg";
// import img5 from "../../assets/img/profile.jpg";
// import img6 from "../../assets/img/me.jpg";
import { useRouter } from "next/router";
import { AiFillExclamationCircle } from "react-icons/ai";
import { projects } from "../constants/me";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="w-full h-full pt-20 ">
      <div className="mx-auto px-2">
        <h1 className="text-xl md:text-5xl  mx-auto text-center  font-bold tracking-widest uppercase ">
          Projects
        </h1>
        <div className="text-sm tracking-widest py-10">
          {/* Items */}
          <ProjectCard projects={projects} />
        </div>
      </div>
    </div>
  );
};
export default Projects;

type PProps = {
  id: number;
  image: string;
  source?: string;
  tags: string[];
  title: string;
  visit?: string;
  description: string;
  note?: string;
};
interface IProjects {
  projects: PProps[];
}
export const ProjectCard = (props: IProjects) => {
  const router = useRouter();

  return (
    <React.Fragment>
      {props.projects.map((project) => {
        return (
          <div
            key={project.id}
            className=" w-full  h-auto 
            rounded-xl group hover:saturate-200 md:p-5 items-center  pt-6 hover:border-b duration-100 "
          >
            <section className=" md:grid grid-cols-2 md:mx-20 items-center justify-center  bg-left bg-contain ">
              <section className="h-auto">
                {/* <Link
                  href={{
                    pathname: `project-overview/`,
                  }}
                > */}
                <Image
                  className=" rounded-lg md:rounded-none hover:cursor-pointer w-auto h-auto"
                  src={project.image}
                  alt="projects"
                  width={500}
                  height={300}

                  // layout="fill"
                />
              </section>
              <section className="md:grid h-full w-full">
                <div className="backdrop-blur-sm">
                  <h2 className=" text-[25px] md:text-[40px] text-center contrast-50 mt-5 mb-3">
                    {project.title}
                  </h2>
                  <div className="md:m-5 flex flex-col items-center">
                    <section className="font-thin rounded-xl tracking-widest text-xs md:text-xl  text-white/100 md:text-white/70 contrast-50">
                      {project.description}
                    </section>
                    <section className="font-thin p-3 items-center text-xs text-orange-600">
                      {project.note ? (
                        <div className="p-1">
                          <AiFillExclamationCircle size={20} />
                          <p className="grayscale pt-2 italic">
                            {project.note.toUpperCase()}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </section>
                    {!project.source && !project.visit ? (
                      ""
                    ) : (
                      <section className="flex justify-between items-center pt-5 text-amber/10 ">
                        <div className="font-mono text-white contrast-100 p-1 md:px-10 bg-amber-900 hover:bg-amber-700 hover:cursor-pointer mx-4 rounded-sm ">
                          <a rel="noopener noreferrer" href={project.visit}>
                            Visit
                          </a>
                        </div>
                        <div className="font-mono text-white contrast-100 p-1 md:px-10 bg-amber-900 hover:bg-amber-700 hover:cursor-pointer mx-4 rounded-sm ">
                          <a rel="noopener noreferrer" href={project.source}>
                            Code
                          </a>
                        </div>
                      </section>
                    )}
                    <section
                      className="flex flex-nowrap py-10 md:py-3 md:gap-4 md:grid md:grid-flow-col w-full 
                    justify-center text-center items-center  border-amber-200  md:p-1 md:mt-8"
                    >
                      {project.tags.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className=" text-xs md:text-sm w-full text-white/50 mx-1 md:px-5 cursor-default"
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
