import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaSkype, FaViber } from "react-icons/fa";
type Props = {};

const Main = (props: Props) => {
  return (
    <div
      id="home"
      className="w-full h-[80vh] md:h-full text-center items-center md:mb-12
        bg-no-repeat  contrast-100 bg-fixed"
    >
      <div className=" w-full h-screen m-auto  flex justify-center items-center md:pt-32">
        <div className="text-center items-center w-full  contrast-100 ">
          <div className=" hover:border-b-gray-800">
            <p className="uppercase text-2xl  text-center grayscale tracking-widest  pt-6 md:pb-10">
              Hello there !
            </p>
          </div>
          <span className="text-xl md:text-2xl w-4/5 md:w-full">
            <span className="text-amber-800 font-bold py-28 text-3xl md:text-4xl md:font-extrabold ">
              I'm Jordan
            </span>
            <h1 className=" text-sm  pt-4  tracking-widest">
              A Full Stack Web Developer
            </h1>
            <p className=" p-5 md:px-40 text-md md:text-2xl  tracking-widest contrast-0 text-white/90 ">
              ...based in the Philippines. I started to learn coding by myself.
              Applied for an Online Courses. Ventured to JavaScript world and
              specialized React.js framework as my main stack along with
              Node/Express as backend.
            </p>
          </span>
          <div className="hidden md:grid md:justify-center hover:cursor-pointer w-full h-auto  animate-pulse duration-50">
            <p className="uppercase items-center tracking-widest shadow-lg  pt-10">
              Connect with Me
            </p>
            <div className="flex text-center w-auto py-5">
              {/* <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out   ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jordan-tanaliga-664b801a3/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </div> */}
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out   ">
                <a
                  target="_blank"
                  href="skype:live:.cid.3928b274d9ebe539?chat"
                  rel=" noopener noreferrer"
                >
                  <FaSkype size={30} />
                </a>
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out   ">
                <a
                  target="_blank"
                  href="viber://chat?number=09690243354"
                  rel="noopener noreferrer"
                >
                  <FaViber size={30} />
                </a>
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out ">
                <a
                  target="_blank"
                  href="mailto:jordantanaliga@gmail.com"
                  rel="noopener noreferrer"
                >
                  <AiFillMail size={30} />
                </a>
              </div>
              <div className="border-spacing-2 mx-10 transition duration-300 ease-in-out ">
                <a
                  target="_blank"
                  href="https://github.com/tanaliga100"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
