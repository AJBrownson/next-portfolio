/* eslint-disable @typescript-eslint/no-unused-vars */
import Stack from "./components/TechStack";
import Projects from "./components/PastProjects";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="md:px-10 font-geistSans pt-10 lg:pt-24 pb-10" id="about">
        <h1 className="text-xl md:text-3xl text-center lg:text-left font-bold">
          👋 Hi there, I’m Anietie Brownson
        </h1>
        <p className="text-sm md:text-base text-center lg:text-left mt-3 text-gray-300">
          I am a passionate software developer who loves transforming ideas and
          imagination into tech reality. I love tackling challenges, building user-centric
          applications and I’m dedicated to continuous learning and embracing new
          technologies to deliver exceptional results. Let’s create something
          amazing together!
        </p>
        <div className="flex justify-between lg:justify-normal gap-x-20 mt-5 py-5 border-slate-600 border-t-[1px]">
          <span className="flex flex-col gap-y-1">
            <p className="text-sm font-semibold">Uyo, Nigeria</p>
            <p className="flex items-center gap-1 text-xs text-gray-400">
              <FaMapMarkerAlt /> Location
            </p>
          </span>

          <span className="flex flex-col gap-y-1">
            <p className="text-sm font-semibold">3+ years</p>
            <p className="flex items-center gap-1 text-xs text-gray-400">
              <FaBriefcase /> Experience
            </p>
          </span>
        </div>
      </section>

      <section className="md:px-10 pb-12 font-geistSans">
        <h1 className="text-xl md:text-3xl font-bold">My Tech Stack</h1>
        <div className="flex flex-col lg:flex-row justify-between font-geistMono mt-5">
          {/* <p>Tools and Languages I work with</p> */}
          <Stack />
        </div>
      </section>

      <section className="md:px-10 pb-10 font-geistSans" id="projects">
        <h1 className="text-xl md:text-3xl font-bold mb-5">
          My Recent Projects
        </h1>
        <Projects />
      </section>

      <section className="md:px-10 pb-10 font-geistSans" id="contact">
        <h1 className="text-xl md:text-3xl font-bold mb-5">Contact</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
