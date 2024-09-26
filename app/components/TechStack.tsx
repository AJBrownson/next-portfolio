import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";

export default function Stack() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaHtml5 />
          <p>HTML</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaCss3Alt />
          <p>CSS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaJs />
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaReact />
          <p>ReactJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaNodeJs />
          <p>NodeJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaNodeJs />
          <p>ExpressJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaReact />
          <p>NextJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaDatabase />
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 320 512"
            class="mr-2 h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
          </svg>
          <p>MongoDB</p>
        </div>
      </div>
    </>
  );
}
