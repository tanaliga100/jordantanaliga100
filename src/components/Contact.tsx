import React from "react";
import Image, { StaticImageData } from "next/image";
import img from "/public/assets/img/me-modified.png";
import { AiFillMail } from "react-icons/ai";
import Mail from "./Mail";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegWindowClose,
  FaSmileWink,
} from "react-icons/fa";
type Props = {
  img?: StaticImageData;
};

const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="w-full h-full text-center justify-center items-center"
    >
      <div className=" md:py-10  text-center ">
        <h2 className=" tracking-widest text-xl md:text-5xl font-thin py-5 mx-auto text-center">
          Get in touch
        </h2>
        <div className="grid md:gap-8 w-full">
          {/* left */}
          <div className=" lg:cols-span-2 w-full h-full shadow-gray-400 rounded-xl">
            <div className="lg:p-4 h-full">
              {/* <Image
                src={img}
                className="rounded-xl hover:grayscale duration-1000"
                alt=""
                width={300}
                height={300}
              /> */}
              <div className="w-full text-xs md:text-xl">
                <h2 className="">Jordan P. Tanaliga </h2>
                <p className="font-thin tracking-widest  text-white/40 ">
                  Front-End Developer
                </p>
                <p className="font-thin  text-white/40 ">
                  Lets create cool things together !
                </p>
              </div>
              <div className="md:py-10 py-10">
                <div className="flex items-center justify-center  hover:cursor-pointer  animate-pulse duration-100 ">
                  <div className="border-spacing-2 md:mx-10 transition duration-300 ease-in-out  px-1 ">
                     <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jordan-tanaliga-664b801a3/"
                      rel="noopener noreferrer"
                    > 
                    // <FaLinkedin size={30} />
                    </a>
                    //{" "}
                  </div>
                  <div className="border-spacing-2 md:mx-10 transition duration-300 ease-in-out px-1">
                     <a
                      target="_blank"
                      href="https://www.facebook.com/tanaligajordanpascual/"
                      rel="noopener noreferrer"
                    > 
                    // <FaFacebook size={30} />
                    </a>
                    //{" "}
                  </div>
                  <div className="border-spacing-2 md:mx-10 transition duration-300 ease-in-out px-1">
                    <a
                      target="_blank"
                      href="mailto:jordantanaliga@gmail.com"
                      rel="noopener noreferrer"
                    > 
                    // <AiFillMail size={30} />
                    </a>
                    //{" "}
                  </div>
                  <div className="border-spacing-2 md:mx-10 transition duration-300 ease-in-out px-1">
                     <a
                      target="_blank"
                      href="https://github.com/tanaliga100"
                      rel="noopener noreferrer"
                    > 
                    // <FaGithub size={30} />
                    </a>
                    //{" "}
                  </div>
                </div>
              </div>
              <p className="uppercase font-thin text-2xl tracking-widest text-white/40 py-2  ">
                Connect with me
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:cols-span-2 h-full w-full shadow-xl rounded-xl lg:p-4">
            <div className=" md:px-64">
              <form action="">
                {/* <div className="grid md:grid-cols-2 md:py-2 ">
                  <div className="flex flex-col ">
                    <label htmlFor="" className="uppercase text-sm ">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg  flex border-slate-900  bg-stone-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg  flex border-slate-900  bg-stone-700"
                    />
                  </div>
                </div> */}
                {/* <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm md:p-4">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg md:p-3 flex border-slate-900  bg-stone-700"
                  />
                </div>
                <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm md:p-4">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg md:p-3 flex border-slate-900  bg-stone-700"
                  />
                </div>
                <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm md:p-4">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg md:p-3 flex border-slate-900  bg-stone-700"
                    rows={5}
                  />
                </div> */}
                <div className="items-center text-center flex flex-col md:p-3 py-10 w-full">
                  <button className="bg-gradient-to-l from-amber-900 px-5 m-2 py-4 rounded text-white font-thin shadow-md tracking-widest w-1/2">
                    <Mail
                      href="mailto:jordantanaliga@gmail.com"
                      subject="Hello"
                      body="Hello, jordantanaliga100"
                      label="Send me a message"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
