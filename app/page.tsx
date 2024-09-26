import Image from "next/image";
import Headshot from "@/public/blockchain.jpg";
import Stack from "./components/TechStack";
import Projects from "./components/PastProjects";

export default function Home() {
  return (
    <>
      <section className="flex justify-between items-center md:px-10 py-10 font-geistMono">
        <Image src={Headshot} alt="Profile picture" />
        <div className="flex flex-col justify-center items-center">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, neque.
          </p>
        </div>
      </section>

      <section className="md:px-10 py-10 font-geistSans" id="#work">
        <h1 className="text-xl md:text-3xl font-bold">My Tech Stack</h1>
        <div className="flex justify-between font-geistMono mt-5">
          <p>Stack and Languages I work with</p>
          <Stack />
        </div>
      </section>

      <section className="md:px-10 py-10 font-geistSans">
      <h1 className="text-xl md:text-3xl font-bold mb-5">My Recent Projects</h1>
      <Projects />
      </section>
    </>
  );
}
