import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="md:p-10 flex flex-col lg:flex-row justify-between">
      <p>Built by Seven Lannister</p>
      <p className="flex items-center">
        With <FaHeart className="ml-3" />, NextJS, TypeScript, TailwindCSS .
      </p>
      <p>Deployed on Vercel</p>
    </footer>
  );
}
