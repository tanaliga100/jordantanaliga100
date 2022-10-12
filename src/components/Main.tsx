import React from "react";
import { AiFillMail, AiFillUpSquare, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegWindowClose,
  FaSmileWink,
} from "react-icons/fa";

type Props = {};

const Main = (props: Props) => {
  return (
    <div
      id="home"
      className="w-full h-[100vh] md:h-[100vh] text-center items-center font-sans"
    >
      <div className=" h-full m-auto w-screen flex justify-center items-center pt-20 md:pt-40 ">
        <div className="text-center items-center w-full  contrast-100 ">
          <div className=" hover:border-b-gray-800 ">
            <p className="uppercase text-4xl text-center grayscale  md:text-4xl tracking-widest font-thin">
              Hello there !
            </p>
          </div>
          <span className="sm:text-3xl md:text-4xl w-4/5 md:w-full">
            <span className="text-amber-800 font-bold py-28 text-3xl md:text-7xl md:font-extrabold ">
              I'm Jordan
            </span>
            <h1 className=" text-md font-thin pt-4  tracking-widest">
              A Front-End Web Developer
            </h1>
            <p className="md:hidden p-5 md:px-40 text-md md:text-2xl font-thin tracking-widest contrast-0 text-white/90 ">
              ...based in the Philippines. I started to learn coding by myself.
              Applied for an Online Courses. Ventured to javaScript world and
              specialized React.js framework as my main stack
            </p>
          </span>
          <div className="hidden md:grid md:justify-center hover:cursor-pointer w-full  animate-pulse duration-50">
            <p className="uppercase items-center w-full tracking-widest shadow-lg  pt-10">
              Connect with Me
            </p>
            <div className="flex text-center w-auto py-5">
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out   ">
                <FaLinkedin size={30} />
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out ">
                <FaFacebook size={30} />
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out ">
                <AiFillMail size={30} />
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out ">
                <FaGithub size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
