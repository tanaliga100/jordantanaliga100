import { EducationTimeline } from "../constants/me";
import Loading from "../pages/loading";

export default function Education() {
  return (
    <div
      id="education"
      className="w-full md:h-full flex-col gap-5 flex items-center  pt-20"
    >
      <h1
        className="
        mx-auto text-center  tracking-wider 
        text-amber-800 font-bold  text-3xl md:text-6xl md:font-extrabold
        "
      >
        Education
      </h1>
      <p>under development...</p>
      <Loading />
    </div>
  );
}
export const EductionTimeline = () => {
  return (
    <>
      {EducationTimeline.map((item) => {
        return <main key={item.id}>{item.school}</main>;
      })}
    </>
  );
};
