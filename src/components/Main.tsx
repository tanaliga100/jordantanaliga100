import React from "react";
import { AiFillMail, AiOutlineMenu } from "react-icons/ai";
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
    <div className="w-full h-screen text-center items-center bg-hero-pattern bg-cover bg-left-bottom">
      <div className=" h-screen m-auto w-full p-2 flex justify-center items-center">
        <div className="text-center items-center w-full  brightness-200 ">
          <div className=" hover:border-b-gray-800 ">
            <p className="uppercase text-md py-auto text-center text-gray-400 text-xl font-serif">
              H!, Welcome
            </p>
          </div>
          <span className="sm:text-3xl md:text-7xl font-thin  w-4/5 md:w-full">
            <span className="">
              {" "}
              <span className="text-md md:text-5xl"> by the way </span>,{" "}
            </span>
            Im{" "}
            <span className="text-amber-800 font-serif text-4xl md:text-7xl md:font-bold ">
              {" "}
              Jordan{" "}
            </span>
            <h1 className=" text-md font-thin">A Front-End Web Developer</h1>
            <p className="py-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              numquam magni placeat, quidem porro, velit provident sequi
              perspiciatis rem assumenda harum distinctio maxime praesentium
              nostrum sapiente? Ex, asperiores molestiae perspiciatis velit
              possimus animi rem doloremque delectus quas saepe earum autem
              ullam consectetur aspernatur fugit nulla quis corporis cum minima
              aliquam!
            </p>
          </span>
          <div className="hidden md:grid md:justify-center hover:cursor-pointer w-full  animate-pulse duration-75">
            <p className="uppercase items-center w-full tracking-widest py-2 shadow-lg">
              {" "}
              Connect with Me
            </p>
            <div className="flex text-center w-auto">
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
