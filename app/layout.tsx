import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="lg:flex lg:h-screen flex-col lg:flex-row lg:overflow-hidden px-3 lg:p-10">
        <div className="md:px-10 lg:px-0 lg:flex-none lg:w-80">
            <Sidebar />
          </div>
          <div className="lg:flex-grow lg:overflow-y-auto">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
