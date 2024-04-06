import Image from "next/image";
import { TimeLineData } from "../constants/me";
import img from "/public/assets/img/profile-modified.png";

type Props = {};
const About = (props: Props) => {
  const timeLine = TimeLineData.map((val: any) => {
    return (
      <div className="shadow-lg py-5" key={val.id}>
        <p className="text-xs md:text-2xl font-bold">{val.year}</p>
        <p className="text-sm md:text-xl  py-4 text-white/50 tracking-widest">
          {val.text}
        </p>
      </div>
    );
  });

  return (
    <div
      id="about"
      className="w-full h-full pt-20 px-5 md:px-40  flex items-center  bg-cover bg-left-top  bg-fixed bg-no-repeat
      
      "
    >
      <div className="m-auto gap-1 items-center justify-between">
        <div className=" text-center">
          <div className="brightness-75 text-center contrast-175 mb-8">
            <Image
              src={img}
              width={125}
              height={125}
              alt="MY_IMAGE"
              className="contrast-150 m-auto "
            />
          </div>
          {timeLine}
          {/* {TimeLineData?.map((val: any) => {
            return (
              <div className="font-thin" key={val.text}>
                <p className="text-xs md:text-2xl font-bold">{val.year}</p>
                <p className="text-sm md:text-xl font-thin py-4 text-white/80">
                  {val.text}
                </p>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default About;
