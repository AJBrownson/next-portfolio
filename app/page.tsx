import Stack from "./components/TechStack";
import Projects from "./components/PastProjects";
import { FaMapMarkerAlt, } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";


export default function Home() {
  return (
    <>
    <section className="md:px-10 font-geistSans pb-10">
      <h1 className="text-xl md:text-3xl text-center lg:text-left font-bold">I transform ideas and imagination into tech reality.</h1>
      <p className="text-sm md:text-base text-center lg:text-left mt-3">Software Developer</p>
      <div className="flex justify-between lg:justify-normal gap-x-20 mt-5 py-5 border-slate-600 border-t-[1px]">
        <span className="flex flex-col gap-y-1">
        <p className="text-sm font-semibold">Uyo, Nigeria</p>
        <p className="flex items-center gap-1 text-xs font-thin"><FaMapMarkerAlt /> Location</p>
        </span>

        <span className="flex flex-col gap-y-1">
        <p className="text-sm font-semibold">3+ years</p>
        <p className="flex items-center gap-1 text-xs font-thin"><FaBriefcase /> Experience</p>
        </span>
      </div>
    </section>

      <section className="md:px-10 py-10 font-geistSans" id="#work">
        <h1 className="text-xl md:text-3xl font-bold">My Tech Stack</h1>
        <div className="flex justify-between font-geistMono mt-5">
          <p>Stack and Languages I work with</p>
          {/* <Stack /> */}
        </div>
      </section>

      <section className="md:px-10 py-10 font-geistSans">
      <h1 className="text-xl md:text-3xl font-bold mb-5">My Recent Projects</h1>
      {/* <Projects /> */}
      </section>
    </>
  );
}