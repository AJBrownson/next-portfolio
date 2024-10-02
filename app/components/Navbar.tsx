/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
  return (
    <main className="bg-[#0a0a0a]">
      <nav className="font-geistMono flex justify-between items-center mx-3 md:mx-5 m-5 py-2 px-3 border border-slate-600 rounded-lg">
        <h1 className="text-2xl font-bold font-geistSans">AJ</h1>
        <ul className="flex space-x-6 lg:space-x-10">
          <Link
            href="#about"
            className="flex space-x-2 items-center border border-slate-600 hover:border-blue-800 hover:bg-slate-700 py-1 px-2 rounded-md  text-sm"
          >
            <FaUserAlt />
            <li className="hidden lg:block">About</li>
          </Link>
          <Link
            href="#projects"
            className="flex space-x-2 items-center border border-slate-600 hover:border-blue-800 hover:bg-slate-700 py-1 px-2 rounded-md  text-sm"
          >
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
            <li className="hidden lg:block">Projects</li>
          </Link>
          <Link
            href="#contact"
            className="flex space-x-2 items-center border border-slate-600 hover:border-blue-800 hover:bg-slate-700 py-1 px-2 rounded-md  text-sm"
          >
            <IoMdMail />
            <li className="hidden lg:block">Contact</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
}
