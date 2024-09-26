import Image from "next/image";
import Snapshot from "@/public/blockchain.jpg";
import { FaArrowRight, FaReact } from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col gap-y-10">
      <div className="flex justify-between font-geistMono">
        <div className="w-1/2">
          <h1 className="text-xl font-semibold mb-2">
            Hoster | Social Media Posts Scheduler
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non maxime
            magnam enim fugit quae assumenda aut repellat consectetur, cumque
            architecto magni quas sed adipisci minus, culpa omnis, blanditiis
            hic! Perspiciatis minus sit ad dolore excepturi laudantium in eos.
            Assumenda quae amet inventore qui esse numquam possimus? Vero error
            natus excepturi.
          </p>
        </div>
        <div className="border border-slate-700 ">
          <Image src={Snapshot} alt="" />

          {/* tech stack used */}
          <span className="flex gap-3 p-3">
            <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
              <FaReact />
              <p className="text-xs">NextJS</p>
            </div>
            <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
              <FaReact />
              <p className="text-xs">NextJS</p>
            </div>
          </span>
          {/* link to the live website */}
          <Link href="#" className="flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex justify-between font-geistMono">
        <div className="w-1/2">
          <h1 className="text-xl font-semibold mb-2">Solgacy Crypto Website</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            illum ex fuga sint esse ratione. Provident eveniet, placeat
            voluptatibus debitis perferendis quo id sit ullam obcaecati
            cupiditate asperiores fuga illum.
          </p>
        </div>
        <div className="border border-slate-700 ">
          <Image src={Snapshot} alt="" />
          <Link href="#" className="flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex justify-between font-geistMono">
        <div className="w-1/2">
          <h1 className="text-xl font-semibold mb-2">Rooks Memecoin Website</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            illum ex fuga sint esse ratione. Provident eveniet, placeat
            voluptatibus debitis perferendis quo id sit ullam obcaecati
            cupiditate asperiores fuga illum.
          </p>
        </div>
        <div className="border border-slate-700 ">
          <Image src={Snapshot} alt="" />
          <Link href="#" className="flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
