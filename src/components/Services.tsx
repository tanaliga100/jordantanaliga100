import Loading from "../pages/loading";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full md:h-full flex-col gap-5 flex items-center  pt-20"
    >
      <h1
        className="
        mx-auto text-center  tracking-wider 
        text-amber-800 font-bold  text-3xl md:text-6xl md:font-extrabold
        "
      >
        Services
      </h1>
      <p>under development...</p>
      <Loading />
    </div>
  );
}
