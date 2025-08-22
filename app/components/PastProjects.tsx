import Image from "next/image";
import Rooks from "@/public/rooks.png";
// import Solgacy from "@/public/solgacy.png";
import Elyon from "@/public/elyon.png"
import Kekius from "@/public/kekius.png";
import Tremic from "@/public/tremic.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col gap-y-12">
      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2 text-gray-200">
            Elyon Life Ministry | Church Website
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            This is a website built for a budding church. Built using NextJS + TypeScript + TailwindCSS
          </p>
          <Link
            href="https://elyonlifeministry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="lg:w-80 h-auto">
            <Image src={Elyon} alt="" />
          </div>
          <Link
            href="https://elyonlifeministry.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2 text-gray-200">
            Tre-Mic Technologies LTD | Water Systems Installation Website
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            This is a website built for an advanced water systems installation company. Built using NextJS + TypeScript + TailwindCSS
          </p>
          <Link
            href="https://tremictech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="lg:w-80 h-auto">
            <Image src={Tremic} alt="" />
          </div>
          <Link
            href="https://tremictech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2 text-gray-200">
            Kekius XRP | Memecoin Website
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            This is a memecoin website built for the XRP blockchain. NextJS + TypeScript + TailwindCSS was
            used to build the website.
          </p>
          <Link
            href="https://kekius-xrp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="lg:w-80 h-auto">
            <Image src={Kekius} alt="" />
          </div>
          <Link
            href="https://kekius-xrp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>
      </div>

      {/* <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2 text-gray-200">
            Solgacy | Web3 Casino Gaming Website
          </h1>
          <p className="text-sm md:text-base text-gray-300">
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
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="lg:w-80 h-auto">
            <Image src={Solgacy} alt="" />
          </div>
          <Link
            href="https://www.solgacy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>
      </div> */}

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2 text-gray-200">
            Rooks | Memecoin Website
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            This is a memecoin website built for the Solana blockchain. NextJS + TypeScript + TailwindCSS was
            used to build the website.
          </p>
          <Link
            href="https://brooks-ten.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <div className="lg:w-80 h-auto">
            <Image src={Rooks} alt="" />
          </div>
          <Link
            href="https://brooks-ten.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end"
          >
            <p className="p-2 text-sm flex items-center gap-x-2 text-white">
              Visit Site <FaExternalLinkAlt color="white" />{" "}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
