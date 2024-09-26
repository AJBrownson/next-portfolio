/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState } from "react";
import Link from "next/link";



export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(true);
    }

    return (
        <>
        <nav className="font-geistMono flex justify-between items-center py-4 px-10 border-b-[1px] border-slate-700">
          <div>LOGO</div>
          <ul className="gap-8 hidden lg:flex">
            <Link href="">
            <li>About</li>
            </Link>
            <Link href="#work">
            <li>Work</li>
            </Link>
            <Link href="">
            <li>Contact</li>
            </Link>
          </ul>
        </nav>
        </>
    )
}