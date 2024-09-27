/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <nav className="font-geistMono flex justify-between items-center py-4 px-10 border-b-[1px] border-slate-700">
        <div>LOGO</div>
        <ul className="gap-8 hidden lg:flex">
          <Link href="#about" className="flex items-center gap-3">
            <FaUserAlt />
            <li>About</li>
          </Link>
          <Link href="#projects" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4"
            >
              <path d="M2 3h20"></path>
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
              <path d="m7 21 5-5 5 5"></path>
            </svg>
            <li>Projects</li>
          </Link>
          <Link href="#contact" className="flex items-center gap-3">
            <IoMdMail />
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
