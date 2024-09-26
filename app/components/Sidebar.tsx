import Image from "next/image";
import Link from "next/link";
import Headshot from "@/public/blockchain.jpg";
import { FaGithub, FaScroll, FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <>
      <section className="flex flex-col gap-5 border border-slate-700 rounded-lg pb-5 font-geistMono">
        <Image src={Headshot} alt="Profile picture" />
        <div className="flex flex-col px-3">
          <h1 className="text-base mb-2">Seven Lannister</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tenetur porro, officia laborum expedita sit tempore itaque esse
            commodi atque!
          </p>
        </div>
        <div className="flex flex-col gap-y-3 px-3">
          <Link
            href=""
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaGithub />
            <p>Github</p>
          </Link>
          <Link
            href=""
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaXTwitter />
            <p>Twitter</p>
          </Link>
          <Link
            href=""
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaScroll />
            <p>Resume</p>
          </Link>
        </div>
      </section>
    </>
  );
}
