import React from "react";
import Image, { StaticImageData } from "next/image";
import img from "../../assets/img/me-modified.png";
import { AiFillMail } from "react-icons/ai";
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
    <div id="contact" className="h-full text-center items-center w-auto ">
      <div className=" py-10  text-center ">
        <h2 className=" tracking-widest text-5xl font-thin py-5 mx-auto text-center">
          Get in touch
        </h2>
        <div className="grid md:gap-8 w-full">
          {/* left */}
          <div className=" lg:cols-span-2 h-full shadow-gray-400 rounded-xl md:p-4">
            <div className="lg:p-4 h-full">
              <Image
                src={img}
                className="rounded-xl hover:grayscale duration-1000"
                alt=""
                width={300}
                height={300}
              />
              <div>
                <h2 className="py-2 text-2xl">Jordan P. Tanaliga </h2>
                <p>Front-End Developer</p>
                <p className="font-thin">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quam, commodi!
                </p>
              </div>
              <div className="py-10">
                <div className="flex items-center justify-center  hover:cursor-pointer  animate-pulse duration-100 ">
                  <div className="border-spacing-2 m-5 md:mx-10 transition duration-300 ease-in-out   ">
                    <FaLinkedin size={30} />
                  </div>
                  <div className="border-spacing-2 m-5 md:mx-10 transition duration-300 ease-in-out ">
                    <FaFacebook size={30} />
                  </div>
                  <div className="border-spacing-2 m-5 md:mx-10 transition duration-300 ease-in-out ">
                    <AiFillMail size={30} />
                  </div>
                  <div className="border-spacing-2 m-5 md:mx-10 transition duration-300 ease-in-out ">
                    <FaGithub size={30} />
                  </div>
                </div>
              </div>
              <p className="uppercase font-thin text-2xl tracking-widest ">
                Connect with me
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:cols-span-2 h-auto w-auto shadow-xl rounded-xl lg:p-4">
            <div className=" md:px-64 w-auto">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4  py-2 ">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-slate-900  bg-stone-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-slate-900  bg-stone-700"
                    />
                  </div>
                </div>
                <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-slate-900  bg-stone-700"
                  />
                </div>
                <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-slate-900  bg-stone-700"
                  />
                </div>
                <div className="w-auto flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-slate-900  bg-stone-700"
                    rows={5}
                  />
                </div>
                <div className="w-auto flex flex-col py-2">
                  <button className="bg-orange-800 px-5 m-2 py-4 rounded-md text-white font-thin shadow-md">
                    Send Message
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
