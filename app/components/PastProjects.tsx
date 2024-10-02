import Image from "next/image";
import Snapshot from "@/public/blockchain.jpg";
import Hoster from "@/public/hoster.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col gap-y-12">
      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2">
            Hoster | Social Media Posts Scheduler
          </h1>
          <p className="text-sm md:text-base">
            This is a social media posts scheduler for the Twitter and Facebook
            platforms. NextJS + TypeScript + TailwindCSS was used for the
            frontend part, Upstash + Redis was used for the database and BullMQ
            + Trigger.dev was used for queuing the scheduled posts.
          </p>
          <Link
            href="https://hoster-social.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="w-80 h-auto">
            <Image src={Hoster} alt="" />
          </div>
          <Link
            href="https://hoster-social.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2">
            Solgacy | Web3 Casino Gaming Website
          </h1>
          <p className="text-sm md:text-base">
            This is a Web3 casino gaming website. I worked as the Frontend
            developer on this project. NextJS + TypeScript + TailwindCSS was
            used for the frontend, Prisma + PostgreSQL was used for the backend
            and the platform was integrated with the Solana blockchain network.
          </p>
          <Link
            href="https://www.solgacy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <Image src={Snapshot} alt="" />
          <Link
            href="https://www.solgacy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2">
            Rooks | Memecoin Website
          </h1>
          <p className="text-sm md:text-base">
            This is a memecoin website. NextJS + TypeScript + TailwindCSS was
            used to build the website.
          </p>
          <Link
            href="https://brooks-ten.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <Image src={Snapshot} alt="" />
          <Link
            href="https://brooks-ten.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
