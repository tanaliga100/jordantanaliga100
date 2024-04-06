import { StaticImageData } from "next/image";
import { AiFillMail } from "react-icons/ai";
import Mail from "./Mail";
type Props = {
  img?: StaticImageData;
};

const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="w-full h-full text-center justify-center items-center md:pt-30 pt-20"
    >
      <div className=" md:py-10  text-center ">
        <h2 className="text-white tracking-widest text-3xl md:text-8xl font-extrabold py-3 mx-auto text-center font-serif">
          Get in touch
         
        </h2>
        <span className="text-2xl md:text-5xl font-bold">&</span>
         <p className="text-white tracking-widest text-xl md:text-5xl font-extrabold py-3 mx-auto text-center font-serif">
          Lets create cool things together !
          </p>
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
              <div className="w-full text-xs md:text-xl mt-10 md:mt-20">
                <h2 className="">Jordan P. Tanaliga </h2>
                <p className="font-thin tracking-widest  text-white/40 ">
                  Full Stack Web Developer
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-center    animate-pulse duration-100 ">
                  <div className="border-spacing-2 md:mx-10 transition duration-300 ease-in-out hover:cursor-pointer px-1">
                    <a
                      target="_blank"
                      href="mailto:jordantanaliga@gmail.com"
                      rel="noopener noreferrer"
                    >
                      <AiFillMail size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <p className="uppercase font-thin text-2xl tracking-widest text-white/40  ">
                Connect with me
              </p>
            </div>
          </div>
          {/* right */}
          <div className="md:cols-span-2 h-full w-full lg:p-4">
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
                <div className="items-center text-center flex flex-col md:p-3  w-full
                
                 duration-300 ease-in-out hover:cursor-pointer
                ">
                  <button className="bg-black  px-5 m-2 py-4 text-white text-lg font-bold tracking-widest w-1/2 cursor-pointer
                 
                  
                  ">
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
