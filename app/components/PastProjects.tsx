import Image from "next/image";
import Snapshot from "@/public/blockchain.jpg";
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, necessitatibus dolor itaque doloribus quasi voluptates
            porro tempora ipsam voluptate voluptas culpa repudiandae deleniti,
            iusto ut assumenda in unde non. Reiciendis consequatur impedit minus
            ab nam rerum delectus et, incidunt asperiores distinctio recusandae
            unde dolorem voluptatem. Facere, neque? Reprehenderit, qui at.
          </p>
          <Link href="#" className="lg:hidden flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <Image src={Snapshot} alt="" />
          {/* link to the live website */}
          <Link href="#" className="hidden lg:flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:items-center lg:flex-row justify-between font-geistMono">
        <div className="lg:w-1/2 mt-5 lg:mt-0">
          <h1 className="text-xl font-semibold mb-2">
           Solgacy | Web3 Gaming Website
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, necessitatibus dolor itaque doloribus quasi voluptates
            porro tempora ipsam voluptate voluptas culpa repudiandae deleniti,
            iusto ut assumenda in unde non. Reiciendis consequatur impedit minus
            ab nam rerum delectus et, incidunt asperiores distinctio recusandae
            unde dolorem voluptatem. Facere, neque? Reprehenderit, qui at.
          </p>
          <Link href="#" className="lg:hidden flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <Image src={Snapshot} alt="" />
          {/* link to the live website */}
          <Link href="#" className="hidden lg:flex justify-end">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, necessitatibus dolor itaque doloribus quasi voluptates
            porro tempora ipsam voluptate voluptas culpa repudiandae deleniti,
            iusto ut assumenda in unde non. Reiciendis consequatur impedit minus
            ab nam rerum delectus et, incidunt asperiores distinctio recusandae
            unde dolorem voluptatem. Facere, neque? Reprehenderit, qui at.
          </p>
          <Link href="#" className="lg:hidden flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>

        <div className="border border-slate-700">
          <Image src={Snapshot} alt="" />
          {/* link to the live website */}
          <Link href="#" className="hidden lg:flex justify-end">
            <p className="p-2 text-sm flex items-center gap-x-2">
              Visit Site <FaArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
